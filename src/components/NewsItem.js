// import React, { Component } from 'react'
import React  from 'react'
//export class NewsItem extends Component 
    const NewsItem = (props) => {
  // in this enitre lines no need o mention this.props u can use only props
  //render() {
    // let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    
    return (
      <div className= "my-3">
          {/* style={{width: "18rem"}}   if you remove this then the screen size of card layout will be changed*/}
          <div className="card" >
            <div style = {{
              display:'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}>
          <span className="badge rounded-pill bg-danger">
    {source}
    
    {/* <span class="visually-hidden">unread messages</span> */}
  </span>
  </div>
           <img src={!imageUrl?"https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title} </h5>
    {/* <span class="visually-hidden">unread messages</span> */}
 
          <p className="card-text">{description}</p>
          <p class="card-text"><small className ="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>  
          {/* the above line is from bootstrap from the card section and the topic name is img cap  and author unknown will be printed where ever it is not there and gmt string convertsthe date to month */}
          <a  rel = "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
           </div>
      </div>
       
      </div>
    )
  }


export default NewsItem
