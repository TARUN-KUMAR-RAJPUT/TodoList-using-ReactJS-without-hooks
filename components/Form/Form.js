import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    
    constructor(){
      super()
      this.sendItem = this.sendItem.bind(this)
    }

    sendItem() {               
       var x = document.getElementById("mySubmit").value;        
       this.props.addItem(x)
    }

  render() {

    return (
      <div>
            <input className='inpt' id ='mySubmit' placeholder='Add Task' />
            <button className='btn'  
                            onClick={() => this.sendItem()}
            >Add</button>
            < p />
      </div>
    )

  }
}

export default Form

