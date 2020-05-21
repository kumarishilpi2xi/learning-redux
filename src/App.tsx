import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from './action/action';
import './App.css';
import { RouteComponentProps } from 'react-router-dom';

interface MyProps{
  loading?:boolean;
  error?: string;
  url?: string;
  fetchDog?: any;

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
        <button onClick={() => this.props.fetchDog}>Show Dog</button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                : <p><img src={this.props.url} alt='dog'/></p>}
      </div>
    )
  }
}


// const mapStateToProps : (state: object) => ({
//  
// })

const mapDispatchToProps = (dispatch: any) => ({
  fetchDog: dispatch(action.fetchDog())
})





const ConnectedApp = connect((state) => {
  console.log(state);
  return state;
},mapDispatchToProps)(App);

export default App;
