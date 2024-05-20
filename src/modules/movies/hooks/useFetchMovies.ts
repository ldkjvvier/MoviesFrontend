import { useEffect, useState } from 'react'
import { getAllMovies } from '../services/MovieService.ts'
import { MovieType } from '../models/Movie.ts'

export const useFetchMovies = () => {
	const [movies, setMovies] = useState<MovieType[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const movies = await getAllMovies()
				setMovies(movies)
			} catch (error) {
				setError('Failed to fetch movies')
			} finally {
				setLoading(false)
			}
		}

		loadMovies()
	}, [])

	return { movies, loading, error }
}
