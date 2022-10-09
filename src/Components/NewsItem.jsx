import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <>
            <div className="card" style={{width:"18rem"}}>
                <img src={!imageUrl?"https://img.etimg.com/thumb/msid-94732872,width-1070,height-580,imgsize-21030,overlay-economictimes/photo.jpg":imageUrl} className="card-img-top" style={{height:"10rem",width:"18rem"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
    </>
    )
  }
}
