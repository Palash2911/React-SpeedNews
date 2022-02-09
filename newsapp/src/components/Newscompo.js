import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscompo extends Component {
  // Prop-Types
  static defaultProps = {
    pagesize: 6,
    category: "general",
    srcolor: "danger",
  };

  static props = {
    pagesize: PropTypes.string,
    category: PropTypes.string,
    srcolor: PropTypes.string,
  };

  capitalizefirst = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    //created an object
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizefirst(this.props.category)} - SpeedNews`
  }

  async updateNews() {
    const apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=083567d8fba04fbb9b8336b1038e941e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(apiurl);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totres: parseddata.totalResults,
      loading: false,
      totalResults: parseddata.totalResults
    });
  }
  // will run after render/  Async function will wait for promises to resolve
  async componentDidMount() {
    this.updateNews()
  }

  // FUNCTIONS FOR PREV AND NEXT BUTTONS
  // Prevclick = async () => {
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews()
  // };

  // Nextclick = async () => {
  //   this.setState({page: this.state.page +  1});
  //   this.updateNews()
  // };

  // FetchMore Function
  fetchMoreData = async () => {
      this.setState({page: this.state.page + 1})
      const apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=083567d8fba04fbb9b8336b1038e941e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      let data = await fetch(apiurl);
      let parseddata = await data.json();
      this.setState({
        articles: this.state.articles.concat(parseddata.articles),
        totres: parseddata.totalResults,
        totalResults: parseddata.totalResults
      });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "36px" }}>Top {this.capitalizefirst(this.props.category)} Headlines</h1>

        {/* Spinner Component */}
        {this.state.loading && <Spinner/>}

        {/* Calling News Item in Here */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles?.map((element) => {
              return (
                <div className="col md-3" key={element.url}>
                  <Newsitem newsurl={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"} author={element.author} date={element.publishedAt} source={element.source.name} srccolor={this.props.srcolor}/>
                </div>
              );
            })}
        </div>          
      </div>
        </InfiniteScroll>

        {/* Prev and Next Buttons */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1}  type="button"  className="btn btn-success btn-lg"  onClick={this.Prevclick}>&larr; Previous</button>
          <button disabled={this.state.page >   Math.ceil(this.state.totres) / this.props.pagesize } type="button" className="btn btn-success btn-lg" onClick={this.Nextclick}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default Newscompo;
