import React from 'react'
import { MoviesCard } from '../moviesByCategory/MoviesCard'
import { useAllMovies } from '../../hooks/useAllMovies'
export const FilteredMovie: React.FC<{ filter: string }> = ({
	filter,
}) => {
	const { allMovies, loading, error } = useAllMovies()
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error</p>

	console.log(filter);

	// filter by title or genre or type of movie
	const filteredMovies = allMovies.filter((movie) => {
		console.log(movie);
		return (
			movie.title.toLowerCase().includes(filter.toLowerCase()) ||
			movie.genre.some((genre: string) => genre.toLowerCase().includes(filter.toLowerCase())) ||
			movie.type.toLowerCase().includes(filter.toLowerCase())
		)
	})


	return (
		<div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row pt-12">
			{
				filteredMovies.length > 0 ? (
					filteredMovies.map((movie) => (
						<MoviesCard key={movie.id} movie={movie} />
					))
				) : (
					<p>No movies found</p>
				)
			}
		</div>
	)
}
