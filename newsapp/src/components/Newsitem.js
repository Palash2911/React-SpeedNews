import React from "react";

const Newsitem = (props) => {
    // when props called title and description will be assigned those value
    let {title, description, imgurl, newsurl, author, date, source, srccolor} = props

    return (
      <div className="my-3">
        <div className="card" style={{width: "21rem"}}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5><span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${srccolor}`} style={{left: '90%', zIndex: '1'}}>{source}</span></h5>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Anonymous"} On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} className="btn btn-m btn-outline-success" target="_blank">Read More</a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
