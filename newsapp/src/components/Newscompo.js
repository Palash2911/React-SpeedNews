import React, {useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newscompo = (props)=> {

  // Removing Constructor and adding states
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalresult, settotalresult] = useState(0)
  // document.title = `${this.capitalizefirst(props.category)} - SpeedNews`

  // Prop-Types
  const capitalizefirst = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async ()=> {
    props.setProgress(10);
    const apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(apiurl);
    let parseddata = await data.json();
    props.setProgress(50);
    setArticles(parseddata.articles)
    setLoading(false)
    settotalresult(parseddata.totalResults)
    props.setProgress(100);
  }

  // use Useeffect instead of componenetDidmount() 
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  // will run after render/  Async function will wait for promises to resolve - componenetDidmount() 

  // FUNCTIONS FOR PREV AND NEXT BUTTONS
  // const Prevclick = async () => {
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews()
  // };

  // const Nextclick = async () => {
  //   this.setState({page: this.state.page +  1});
  //   this.updateNews()
  // };

  // FetchMore Function
  const fetchMoreData = async () => {
    // this.setState({page: this.state.page + 1})
    const apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
      setPage(page+1)
      let data = await fetch(apiurl);
      let parseddata = await data.json();
      setArticles(articles.concat(parseddata.articles))
      settotalresult(parseddata.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "36px" }}>Top {capitalizefirst(props.category)} Headlines</h1>

        {/* Spinner Component */}
        {loading && <Spinner/>}

        {/* Calling News Item in Here */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresult}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
              return <div className="col md-3" key={element.url}>
                  <Newsitem newsurl={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"} author={element.author} date={element.publishedAt} source={element.source.name} srccolor={props.srcolor}/>
                </div>
            })}
        </div>          
      </div>
        </InfiniteScroll>

        {/* Prev and Next Buttons */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1}  type="button"  className="btn btn-success btn-lg"  onClick={this.Prevclick}>&larr; Previous</button>
          <button disabled={this.state.page >   Math.ceil(this.state.totres) / props.pagesize } type="button" className="btn btn-success btn-lg" onClick={this.Nextclick}>Next &rarr;</button>
        </div> */}
      </>
    );
}

Newscompo.defaultProps = {
  pagesize: 6,
  category: "general",
  srcolor: "danger",
}

Newscompo.propTypes = {
  pagesize: PropTypes.number,
  category: PropTypes.string,
  srcolor: PropTypes.string,
}

export default Newscompo;
