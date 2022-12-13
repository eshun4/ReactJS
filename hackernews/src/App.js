import './App.css';
import React, {Component} from "react";
import Search from './components/Search';
import Card from "./components/Card";

const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    
  ];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list,
      searchTerm: '',
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss = (id) => {
    const updatedResult = this.state.list.filter((item)=> item.objectID !== id);
    this.setState({list: updatedResult});
  }

  onSearchChange = (event) =>{
    this.setState({searchTerm:event.target.value});
  }

  render() {
    const {list, searchTerm} = this.state;
    return (<div className="cards">
    {<Search onSearchChange={this.onSearchChange} value={searchTerm}/>}
    {<Card list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>}
    </div>
    );
  }
}


export default App;
// className="App"