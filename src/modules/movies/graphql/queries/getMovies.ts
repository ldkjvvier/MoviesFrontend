import { gql } from '@apollo/client'
import { MOVIE_DATA } from '../fragments/movieFragment'

export const GET_MOVIES = gql`
	query Movies {
		topRatedMovies {
			${MOVIE_DATA}
		}
		newMovies {
			${MOVIE_DATA}
		}
		animatedMovies {
			${MOVIE_DATA}
		}
		topDramaMovies {
			${MOVIE_DATA}
		}
	}
`
