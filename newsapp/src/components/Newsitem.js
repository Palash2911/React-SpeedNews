import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // when props called title and description will be assigned those value
    let {title, description, imgurl, newsurl} = this.props

    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsurl} className="btn btn-m btn-outline-success" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
