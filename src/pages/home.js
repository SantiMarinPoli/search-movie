import React, {Component} from 'react'
import {MoviesList} from '../components/moviesList'
import {Title} from '../components/title'
import {SearchForm} from '../components/searchForm'

export class Home extends Component {

  state = {
    userSearch: false,
    results: []
  }

  _handleResults = (results) => {
    this.setState({results, userSearch: true}) //cuando el resultado esta encontrado el dato del api que estamos asignamos entra el setState
  }

  _renderResults() { //estamos validando si esta llegando el dato de la pelicula
    return this.state.results.length === 0
      ? <p>
          Sorry Results Not Found
        </p>
      : < MoviesList movies = {
        this.state.results
      } />

  }
  render() {
    return (

      <div className="Home">

        < Title >
          Search Movies
        </Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>

        {this.state.userSearch
          ? this._renderResults()
          : <small>
            Use the form to search a movie
          </small>}

      </div>
    )
  }
}