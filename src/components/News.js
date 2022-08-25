import React, { Component } from "react";
import { Loding } from "./Loding";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
  async updatenews(){
    this.setState({loading:true});
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=82f42241da1b471f9ab63c66164382b3&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passdata = await data.json();
    this.setState({ articles: passdata.articles,
       totalResults: passdata.totalResults,
      loading:false });
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
  render() {
    return (
      
      <div className="container my-5">
        
        <h1 className="text-center py-1">NewsMonkey - Top Headlines</h1>
        {this.loading && <Loding/>}
       
        <div className="row py-5">
          {!this.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
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
        <div className="d-flex justify-content-between py-3">
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
        </div>
      </div>
    );
  }
}
