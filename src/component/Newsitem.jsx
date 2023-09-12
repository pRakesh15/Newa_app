import React from "react";

export default function Newsitem(props) {
  return (
    <>
      <div>
        <div className="card" style={props.style}>
          <img
            src={
              !props.imgurl
                ? "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
                : props.imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.titel}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-unmuted">
                by {props.auther == null ? "Unknow" : props.auther} on{" "}
                {new Date(props.date).toUTCString()}
              </small>
            </p>
            <a href={props.newsurl} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
