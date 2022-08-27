import React, { useState,useEffect } from "react";
import  Loding  from "./Loding";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updatenews  = async ()=>{
    props.setprogress(10);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let passdata = await data.json();
      props.setprogress(50);
      setArticles(passdata.articles)
      setTotalResults(passdata.totalResults)
      setLoading(false)

      props.setprogress(100);
  }
  useEffect(() => {
    updatenews(); 
    /* eslint-disable */       //it disable some warning ig
    }, [])

  // const prihandle = async () => {
  //   setPage(page - 1)
  //   updatenews();
  // };

  // const nexthandle = async () => {
  // setPage(page+1)
  // updatenews();
  // };
  
  
  const fetchMoreData = async () => {
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let passdata = await data.json();
    setArticles(articles.concat(passdata.articles))
    setTotalResults(passdata.totalResults)
  };
    return (
      
      <>
        
        <h1 className="text-center py-5" style={{marginTop:"40px"}}>NewsMonkey - Top {props.Category} Headlines</h1>
        {loading && <Loding/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loding/>}
        >
          <div className="container">
        <div className="row py-2"> 
          {articles.map((element,index) => {
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
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={prihandle}
          >
            Previous
          </button>
          <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={nexthandle}>
            Next
          </button>
        </div> */}
      </>
    );
  
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string,
  category: PropTypes.string,
}


export default News