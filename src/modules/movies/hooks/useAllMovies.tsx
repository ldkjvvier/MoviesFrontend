import { useQuery } from "@apollo/client"
import { GET_MOVIES } from "../graphql/queries/getMovies"
import { useMemo } from "react"
import { Movie } from "../models/Movie"
// Hook para obtener todas las películas sin categorías
export const useAllMovies = () => {
	const { data, loading, error } = useQuery(GET_MOVIES, {
		fetchPolicy: 'cache-first', // Usa el caché primero antes de hacer una solicitud de red
	})

	// Combina todas las películas en una sola lista
	const allMovies = useMemo(() => {
		if (!data) return []

		const categories = [
			'featuredMovies',
			'topRatedMovies',
			'newMovies',
			'animatedMovies',
			'topDramaMovies',
			'terrorMovies',
		]

		// Filtra y combina todas las películas únicas
		const movieMap = new Map()
		categories.forEach((category) => {
			if (data[category]) {
				data[category].forEach((movie: Movie) => {
					if (!movieMap.has(movie.id)) {
						movieMap.set(movie.id, movie)
					}
				})
			}
		})

		return Array.from(movieMap.values())
	}, [data])

	return { allMovies, loading, error }
}
