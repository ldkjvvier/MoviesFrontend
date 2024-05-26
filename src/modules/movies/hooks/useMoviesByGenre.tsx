import { useQuery } from '@apollo/client'
import { Movie } from '../models/Movie'
import { GET_MOVIES_BY_GENRE } from '../graphql/queries/getMoviesByGenre'

export const useMovies = () => {
	const { data, loading, error } = useQuery<Movie>(
		GET_MOVIES_BY_GENRE
	)
	return { movies: data, loading, error }
}