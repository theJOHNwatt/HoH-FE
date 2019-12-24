import React from 'react'
import {Route} from 'react-router-dom'

import LoungeHome from './components/lounge/LoungeHome'
import StoreHome from './components/store/StoreHome'
import {Link} from 'react-router-dom'

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>ITS ALIVE</h1>
    
    <div className='front-page-links'>
      <Link to='/lounge'><h2>Lounge</h2></Link> 
      <Link to='/store'><h2>Store</h2></Link>
    </div>
      

    <Route  exact path='/lounge' component={LoungeHome} />
    <Route exact path='/store' component={StoreHome} />

    </div>
  );
}

export default App;
