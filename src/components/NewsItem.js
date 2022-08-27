import React from "react";

const NewsItem = (props) => {

    let { title, desc, imgurl, url, author, date,source } = props;
    return (
      <div>
        <div className="card" style={{ width: "auto" }}>
          <div style={{ display:'flex', justifyContent:"flex-end",position:"absolute",right:"0" }}>
          <span className="badge bg-danger">
            {source}
            
          </span>
          </div>
          <img
            src={
              !imgurl
                ? "https://images.moneycontrol.com/static-mcnews/2022/08/marketup_sensexup-Niftyup-770x433.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a href={url} className="btn btn-dark " style={{ width: "100%" }}>
              Read
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem