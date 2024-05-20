import { movieDuration } from '../utils/MovieDuration'
import { useFetchMovies } from '../hooks/useFetchMovies'
export const MoviesCard = () => {

	const { movies, loading, error } = useFetchMovies()

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	return (
		<div className="px-12">
			<h1 className="font-bold my-12 mx-3">Movie List</h1>
			<ul>
				<li className="grid grid-cols-6 grid-flow-row gap-8">
					{movies.map((movie) => {
						return (
							<div
								key={movie.id}
								className="text-lg font-semibold text-center hover:scale-110 transition-all duration-200 ease-in-out"
							>
								<div className="group/movie relative">
									<picture>
										<img
											src={movie.poster}
											alt={movie.title}
											className="group-hover/movie:opacity-10 h-80 w-full object-cover rounded-lg"
										/>
									</picture>
									<div className="absolute invisible group-hover/movie:visible top-0 w-full h-full flex flex-col p-3 text-start">
										<h3 className="mb-3 text-base	">{movie.title}</h3>
										<p className="text-sm">
											<span>★</span> {movie.rate}
										</p>
										<div className="flex gap-3 text-sm font-bold">
											<span className="border flex px-[12px] py-[0px]">
												{movie.age}+
											</span>
											<p>{movieDuration(movie.duration)}</p>
										</div>
										<h4 className="text-sm">{movie.description}</h4>
										<p>{movie.year}</p>
										<div className="flex h-full items-end ">
											<ul className="flex gap-3 text-xs top-12 list-disc list-inside">
												{movie.genre.map((genre, index) => {
													return <li key={index}>{genre}</li>
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</li>
			</ul>
		</div>
	)
}


