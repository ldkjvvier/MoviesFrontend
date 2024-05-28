import { gql } from '@apollo/client'
import { MOVIE_DATA } from '../fragments/movieFragment'

export const GET_FEATURED = gql`
	query Movies {
    featuredMovies {
      ${MOVIE_DATA}
    }
	}
`
