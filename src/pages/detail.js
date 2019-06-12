import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../components/buttonBackToHome'

const API_KEY = '7acc5142'

export class Detail extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = {movie:{}}

  _fetchMovie({id}) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json()) //el primer then asigna los datos convertido a JSON
      .then(movie => {
      console.log({movie})
      this.setState({movie})

    })
  }

  //El metodo goBack se devuelve la pagina
  _goBack(){
      window.history.back()
  }

  //Metodo del ciclo de vida
  componentDidMount() {
    console.log(this.props)
    const {movieId} = this.props.match.params
    this._fetchMovie({id: movieId})
  }

  render() {

    //Asignar lOS ATRIBUTOS del API 
    const {Title,Poster,Actors,Metascore,Plot}=this.state.movie

    return (
    <div>
        <ButtonBackToHome/>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>

    </div>
    )
  }
}