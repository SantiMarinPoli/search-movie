import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() { //Se mostrara el dato asignado, el map su metodo de js que se comvierte en una lista
        const { movies } = this.props

        return ( <
            div className = "MoviesList" > {
                movies.map(movie => {
                    return ( <
                        div key = { movie.imdbID }
                        className = "MoviesList-item" >
                        <
                        Movie id = { movie.imdbID }
                        title = { movie.Title }
                        year = { movie.Year }
                        poster = { movie.Poster }
                        />

                        <
                        /div>
                    )
                })
            } <
            /div>
        )


    }
}