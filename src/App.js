//import logo from './logo.svg';
// import './App.css';
// import './styles/styles.css';
// //import Counter from './components/Counter'
// //import CounterArrow from './components/CounterArrow'
// //import CounterHook from './components/CounterHook'
import MainLayout from './containers/MainLayout'

// import Counter from './components/Counter'
// import CounterArrow from './components/CounterArrow'
// import CounterHook from './components/CounterHook'
//import MainLayout from './containers/MainLayout'
import { BrowserRouter} from 'react-router-dom'
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <MainLayout/>
      </BrowserRouter>
    );
  }

}

export default App;
