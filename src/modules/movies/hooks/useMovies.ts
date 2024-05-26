import { useQuery } from '@apollo/client'
import { Movie } from '../models/Movie'
import { GET_MOVIES } from '../graphql/queries/getMovies'

export const useMovies = () => {
	const { data, loading, error } = useQuery<Movie>(GET_MOVIES)
	return { movies: data, loading, error }
}
