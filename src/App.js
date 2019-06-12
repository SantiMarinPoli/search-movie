import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'

import {Home} from './pages/home'
import {Detail} from './pages/detail'
import {NotFound} from './pages/notFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  // /detail/123 id: de la pelicula asignada

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
          
      </div>
    )


  }

}

export default App;