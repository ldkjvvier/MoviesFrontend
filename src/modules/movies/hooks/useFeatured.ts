import { useQuery } from '@apollo/client'
import { MoviesData } from '../models/Movie'
import { GET_FEATURED } from '../graphql/queries/getFeatured'
export const useFeatured = () => {
	const { data, loading, error } = useQuery<MoviesData>(GET_FEATURED,{
		fetchPolicy: 'cache-first',
		
	})
	// if error redirect to 404 page
	if (error) window.location.href = '/404'
	return { movies: data, loading }
}
