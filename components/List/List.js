import React, { Component } from "react";
import Item from "../Item/Item";

class List extends Component {

    render() {
        return (
            <div>
                {
                    this.props.mylist.map((ele, i) => 
                    <Item key={i} item = {ele} ix = {i}
                    doneItem = {this.props.doneItem}
                    removeItem = {this.props.removeItem}
                     /> )
                }
            </div>
        )
    }
}

export default List