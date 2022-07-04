import { Component } from 'react';
import './App.css';
import Form from "./components/Form/Form"
import Header from './components/Header/Header';
import List from './components/List/List';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mylist : []
    }

    this.addItem = this.addItem.bind(this)
    this.doneItem = this.doneItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(item){
    this.setState({
      mylist : [...this.state.mylist, item]
    })
  }
  

  doneItem(ix) {
    let arr = this.state.mylist
    arr[ix] = <s> {arr[ix]} </s>
    this.setState({
      mylist : arr
    })
  }

  removeItem(ix) {
    var arr = []
    this.state.mylist.map((ele, i) => {
      if( i !== ix) arr.push(ele)
    })
    this.setState({
      mylist : arr
    })
  }

  render(){
    return (
      <div >  
        <Header />
        <Form  addItem = {this.addItem } /> 
        <List mylist = {this.state.mylist } doneItem = {this.doneItem} removeItem = {this.removeItem} />
      </div>
    );
  }
}

export default App;
