import { Component } from "react";
import './Item.css'

class Item extends Component {

    constructor() {
        super()
        this.doneItem = this.doneItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    doneItem(ix){ 
        this.props.doneItem(ix)
    }

    removeItem(ix){
        this.props.removeItem(ix)
    }

    render() {
        return (
                <li className="item" > 
                    {this.props.item} 
                    <button className="btn_done"  
                        onClick = {() => this.doneItem(this.props.ix) }
                    > Done </button> 
                    <button className="btn_rmv"
                        onClick = {() => this.removeItem(this.props.ix) }
                    > Remove </button> 
                </li> 
        )
    }

}

export default Item







