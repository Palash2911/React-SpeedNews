import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Newscompo extends Component {
  
  constructor(){
    super();
    console.log("Hello React !!")
    //created an object
    this.state = {
          articles: [],
          loading: false
    }
}
  // will run after render/  Async function will wait for promises to resolve
  async componentDidMount(){
      let apiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9d7a9b08c99a476f822b822b45b2bab5"
      let data = await fetch(apiurl)
      let parseddata = await data.json()
      this.setState({articles: parseddata.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <center><h2>Top Flash Headlines</h2></center>
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
      </div>
    )
  }
}

export default Newscompo
