import { gql } from '@apollo/client'
import { MOVIE_DATA } from '../fragments/movieFragment'

export const GET_MOVIES_BY_GENRE = gql`
query Query($genre: String!) {
  movieByGenre(genre: $genre) {
    ${MOVIE_DATA}
  }
}
`