import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Newscompo extends Component {
  render() {
    return (
      <div>
        This is News Component

        
        {/* Calling News Item in Here */}
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>

      </div>
    )
  }
}

export default Newscompo
