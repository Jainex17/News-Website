import React, { Component } from "react";
import { Loding } from "./Loding";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
  }
  async updatenews(){
    this.props.setprogress(10);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({ loading:true });
      let data = await fetch(url);
      let passdata = await data.json();
      this.props.setprogress(50);
    this.setState({ articles: passdata.articles,
       totalResults: passdata.totalResults,
      loading:false });
      this.props.setprogress(100);
  }
  async componentDidMount() {
    this.updatenews();
  }
  prihandle = async () => {
    this.setState({
      page:this.state.page - 1
    })
    this.updatenews();
  };
  nexthandle = async () => {
  this.setState({
    page:this.state.page + 1
  })
  this.updatenews();
  };
  
  
  fetchMoreData = async () => {
    this.setState({
      page:this.state.page + 1
    })
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passdata = await data.json();
    this.setState({ 
        articles: this.state.articles.concat(passdata.articles),
       totalResults: passdata.totalResults
       });
  };


  render() {
    return (
      
      <>
        
        <h1 className="text-center py-5" style={{marginTop:"40px"}}>NewsMonkey - Top {this.props.Category} Headlines</h1>
        {this.state.loading && <Loding/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          
          loader={<Loding/>}
        >
          <div className="container">
        <div className="row py-2"> 
          {this.state.articles.map((element,index) => {
            return (
              <div className="col-md-4 my-2" key={index}>
               
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  imgurl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>

        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between py-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.prihandle}
          >
            Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.nexthandle}>
            Next
          </button>
        </div> */}
      </>
    );
  }
}
