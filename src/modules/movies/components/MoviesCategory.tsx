import { Loading } from "@/modules/core/components/loader/Loading";
import { MoviesCarousel } from "./carousel/MoviesCarousel";
import { MoviesCard } from "./MoviesCard";
import { useMovies } from "../hooks/useMovies";
import { Movie } from "../models/Movie";
export const MoviesCaterogy = () => {
	const { movies, loading } = useMovies()

	if (loading) return <Loading />

	const categories = [
		{ title: "Top Movies", movies: movies?.topRatedMovies },
		{ title: "New Movies", movies: movies?.newMovies },
		{ title: "Animated Movies", movies: movies?.animatedMovies },
		{ title: "Top Drama", movies: movies?.topDramaMovies },
	]

	return (
		<>
			{categories.map(
				(category) =>
					category.movies && category.movies?.length > 0 && (
						<MoviesCarousel
							key={category.title}
							title={category.title}
							deviceType="desktop"
						>
							{category.movies?.map((movie: Movie) => (
								<MoviesCard key={movie.id} movie={movie} />
							))}
						</MoviesCarousel>
					)
			)}
		</>
	)
}

/* 
			<MoviesCarousel title="Top Movies" deviceType="desktop">
				{movies?.topRatedMovies.map((movie: Movie) => (	
					<MoviesCard key={movie.id} movie={movie} />
				))}
			</MoviesCarousel>
*/