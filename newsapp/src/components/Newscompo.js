import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Newscompo extends Component {
  
  constructor(){
    super();
    console.log("Hello React !!")
    //created an object
    this.state = {
          articles: [],
          loading: false,
          page: 1
    }
}
  // will run after render/  Async function will wait for promises to resolve
  async componentDidMount(){
      let apiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=1&pagesize=15"
      let data = await fetch(apiurl)
      let parseddata = await data.json()
      this.setState({articles: parseddata.articles, totres: parseddata.totalResults})
  }


  Prevclick = async()=>{
    let apiurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=${this.state.page-1}&pagesize=15`
    let data = await fetch(apiurl)
    let parseddata = await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parseddata.articles
    })
  }
  Nextclick = async()=>{
  
      let apiurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d7a9b08c99a476f822b822b45b2bab5&page=${this.state.page+1}&pagesize=15`
        let data = await fetch(apiurl)
        let parseddata = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parseddata.articles
        })
  }

  render() {
    return (
      <div className="container my-3">
        <center><h1 className='my-2'>Top Flash Headlines</h1></center>
        <div className="container my-2 d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success btn-lg" onClick={this.Prevclick}> &larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totres)/15} type="button" className="btn btn-success btn-lg" onClick={this.Nextclick}>Next &rarr;</button>
        </div>
        {/* Calling News Item in Here */}
        <div className="row">
          {this.state.articles.map((element)=>{
            if(element.urlToImage!=null)
            {
              return  <div className="col md-3" key={element.url}>
                <Newsitem newsurl= {element.url} title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage}/>
              </div>
            }
          })} 
        </div>
        <div className="container my-2 d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-success btn-lg" onClick={this.Prevclick}> &larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totres)/15} type="button" className="btn btn-success btn-lg" onClick={this.Nextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default Newscompo
