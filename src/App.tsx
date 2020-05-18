import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from './action/action';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';

interface MyProps{
  loading:boolean;
  error: string;
  url: string;

}

interface MyState{
  loading:true,
  error:'',
  url:''
}
class App extends Component<MyProps, MyState>{
  

  render () {
    return (
      <div>
        <button onClick={() => this.props.dispatch(action.fetchDog())}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url} alt='dog'/></p>}
      </div>
    )
  }
}




const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
})(App);

export default App;
