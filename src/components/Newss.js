// //import React, { Component } from 'react'
// import React, {useEffect,useState} from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// //the line 8 to 19 are defaultly used
// //export class News extends Component {
//  const News = (props) => {
     
//   //  static defaultProps = {
//   //   country : 'us',
//   //   pageSize: 8,
//   //   category:  'general',
//   //  }
//   //  static propTypes = {
//   //    country : PropTypes.string,
//   //    pageSize: PropTypes.number,
//   //    category: PropTypes.string,

//   //  }
//       const [articles, setArticles] = useState([])
//       const [loading, setLoading] = useState(true)
//       const [page, setPage] = useState(1)
//       const [totalResults, setTotalResults] = useState(0)

//  const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
//  }
//   // the lines from 32 to 43 are not needed anymore we mentioned it as using hook useState
// // constructor(props) {
// //         super(props);
// //         console.log("hey hai");
// //         this.state = {
// //         articles : [],
// //         loading: true,
// //         page:1,
// //         totalResults:0,

// // }
//     //document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`; 
//      // this will set the name whenever you click something in navbar it displays the name  at top 
// //}

// const  updateNews = async () => {
//   props.setProgress(10);
//   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=923e8af1233443339851b023ad1bed7e&page=${page}&pageSize=${props.pageSize}`;
//   this.setState({loading: true});
//   setLoading(true)
//   let data = await fetch(url);
//   props.setProgress(30);
//   let parseData = await data.json();
//   //console.log(parseData);
//   props.setProgress(70);
//   setArticles(parseData.articles)
//   setTotalResults(parseData.totalResults)
//   setLoading(false)

//   // this.setState({
//   //   articles: parseData.articles, 
//   //   totalResults: parseData.totalResults,
//   //    loading:false,
//   //  })  THIS LINES WILL BE DECLARED IN ANOTHER WAY GIVING THE VALUES TO LINES FROM 23 
//    props.setProgress(100);

// }
  
// //async componentDidMount() {
//   // console.log("cdm")
//   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=923e8af1233443339851b023ad1bed7e&page=1&pageSize=${props.pageSize}`;
//   // this.setState({loading: true});
//   // let data = await fetch(url);
//   // let parseData = await data.json();
//   // console.log(parseData);
//   // this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading:false})
//      //this.updateNews();
// //}
//  useEffect(() => {
//    updateNews(); //this will work manually as componentDidMount()
//  }, [])
//  const handlePreviousClick = async () => {
//  // console.log("previpus");
// //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=923e8af1233443339851b023ad1bed7e&page=${this.state.page-1}&pageSize=${props.pageSize}`;
// //   this.setState({loading: true});
// //   let data = await fetch(url);
// //   let parseData = await data.json();
// //   console.log(parseData);
 
// //  this.setState({
// //      page: this.state.page-1,
// //      articles: parseData.articles, 
// //      loading: false,
// //  })

//  // this.setState({page: this.state.page - 1});
//  setPage(page-1)
//   updateNews();
// }


//  const handleNextClick = async () => {
//  console.log("next");
// //  if(!(this.state.page+1 > Math.ceil(this.state.totalResults/20))){
// //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=923e8af1233443339851b023ad1bed7e&page=${this.state.page+1}&pageSize=${props.pageSize}`;
// //  this.setState({loading: true});
// //   let data = await fetch(url);
// //   let parseData = await data.json();
// //   //console.log(parseData);
// //   //this.setState({loading: false});
// //  this.setState({
// //      page: this.state.page+1,
// //      articles: parseData.articles,
// //      loading: false
// //  })
// // }
// //this.setState({page: this.state.page + 1});
//    setPage(page+1)
//    updateNews();
//  }

//  const fetchMoreData = async () => {
//     //this.setState({page: this.state.page + 1})
//     setPage(page+1)
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=923e8af1233443339851b023ad1bed7e&page=${page}&pageSize=${props.pageSize}`;
//     //this.setState({loading: true});
//     let data = await fetch(url);
//     let parseData = await data.json();
//     //console.log(parseData);
//     setArticles(articles.concat(parseData.articles) )
//     setTotalResults(parseData.totalResults)
// //     this.setState({
// //       articles: this.state.articles.concat(parseData.articles), 
// //       totalResults: parseData.totalResults,
// //        loading:false,
  
      
// //       })
// };
 
  
  
//     return (
//       <>
        
//         <h1 className = "text-center" style={{margin: '40px 0px;'}}>NewsMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines </h1>
//            {loading &&<Spinner/>} 
//           <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">

//        <div className="row">

//        {/* {!this.state.loading &&  */}
//        {articles.map((element) => {
//             return  <div  className = "col-md-4" key={element.url} >
//               <NewsItem   title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//             </div>
//       })}
//       </div>
//       </div>
//       </InfiniteScroll>
//       {/* <div className="container  d-flex justify-content-between">
//       <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//       <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//       </div> */}
//       </>
//     )
//   }

// //instead if static we use  file name called  news.js
// News.defaultProps = {
//   country : 'us',
//   pageSize: 8,
//   category:  'general',
//  }
//  News.propTypes = {
//    country : PropTypes.string,
//    pageSize: PropTypes.number,
//    category: PropTypes.string,

//  }
// export default News
