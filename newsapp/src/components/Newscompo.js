import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner  from './Spinner';
import PropTypes from 'prop-types'


export class Newscompo extends Component {
  
  // Prop-Types 
  static defaultProps = {
      pagesize: 6,
      category: 'general',
      srcolor: "danger"
  }

  static props = {
      pagesize: PropTypes.string,
      category: PropTypes.string,
      srcolor: PropTypes.string
  }

  constructor(){
    super();
    //created an object
    this.state = {
          articles: [],
          loading: false,
          page: 1
    }
}
  // will run after render/  Async function will wait for promises to resolve
  async componentDidMount(){
      let apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=1&pagesize=${this.props.pagesize}`;
      this.setState({loading: true})
      let data = await fetch(apiurl)
      let parseddata = await data.json()
      this.setState({articles: parseddata.articles, totres: parseddata.totalResults, loading: false})
  }


  Prevclick = async()=>{
    let apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(apiurl)
    let parseddata = await data.json()
    this.setState({
        loading: false,
        page: this.state.page - 1,
        articles: parseddata.articles
    })
  }
  Nextclick = async()=>{
  
      let apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading: true})
        let data = await fetch(apiurl)
        let parseddata = await data.json()
        this.setState({
            loading: false,
            page: this.state.page + 1,
            articles: parseddata.articles
        })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{margin: '36px'}}>Top Flash Headlines</h1>

        {/* Spinner Component */}
        {this.state.loading && <Spinner/>}

        {/* Calling News Item in Here */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
              return  <div className="col md-3" key={element.url}>
                <Newsitem newsurl= {element.url} title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"} author={element.author} date={element.publishedAt} source={element.source.name} srccolor={this.props.srcolor}/>
              </div>
          })} 
        </div>
        
        {/* Prev and Next Buttons */}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success btn-lg" onClick={this.Prevclick}> &larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totres)/this.props.pagesize} type="button" className="btn btn-success btn-lg" onClick={this.Nextclick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default Newscompo
