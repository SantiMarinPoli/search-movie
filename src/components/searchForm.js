import React, {Component} from 'react'

const API_KEY = '7acc5142'

export class SearchForm extends Component {

  state = {
    inputMovie: '' // asigna el valor para guardar el dato a un input
  }

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value}) //Cuando el ususario quiere cambiar o buscar otro dato el setState ayuda la actualizacion de los estados
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const {inputMovie} = this.state //inputMovie su funcion que cambia gracias con el metodo state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`).then(res => res.json()) //el primer then asigna los datos convertido a JSON
      .then(results => { //el segundo when es mostrar el resultado en la pantalla que quiere buscar el dato
      const {
        Search = [],
        totalResults = "0"
      } = results
      console.log({Search, totalResults})
      this
        .props
        .onResults(Search)
    })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._handleChange}
              className="input"
              type="text"
              placeholder="Movie to search..."/>
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>

        </div>
      </form>
    )
  }
}