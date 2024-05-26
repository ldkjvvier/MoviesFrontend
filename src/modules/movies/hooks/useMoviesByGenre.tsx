import { useQuery } from '@apollo/client'
import { Movie } from '../models/Movie'
import { GET_MOVIES_BY_GENRE } from '../graphql/queries/getMoviesByGenre'

export const useMovies = () => {
	const { data, loading, error } = useQuery<Movie>(
		GET_MOVIES_BY_GENRE
	)
	if (error) window.location.href = '/404'

	return { movies: data, loading }
}
