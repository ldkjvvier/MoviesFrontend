import { useQuery } from '@apollo/client'
import { MoviesData } from '../models/Movie'
import { GET_MOVIES } from '../graphql/queries/getMovies'

export const useMovies = () => {
	const { data, loading, error } = useQuery<MoviesData>(GET_MOVIES, {
		fetchPolicy: 'cache-first',	
	})
	// if error redirect to 404 page
	if (error) window.location.href = '/404'

	return { movies: data, loading }
}
