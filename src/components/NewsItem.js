import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, url, author, date,source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "auto" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
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
            <a href={url} className="btn btn-dark">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}
