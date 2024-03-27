import React from 'react';
import  '../App.css';

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3px-2 py-2 p-2 g-col-6 grid gap-5" style={{maxWidth:"345px"}}>
{src ? (
        <img src={src} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="News" />
    ) : (
        <img src="/default-image.jpeg" style={{ height: "225px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="Default" />
    )}      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"News information not found , Something went wrong"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default NewsItem;
