import { useEffect, useState } from 'react'

export const App = () => {
	const [moviesData, setMoviesData] = useState<MovieType[]>([])

	const getAllMovies = () => {
		try {
			fetch('http://localhost:3000/movies/', {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => setMoviesData(data))
		} catch (error) {
			console.error(error)
		}
	}

	const deleteMovie = async (id: number) => {
		try {
			fetch(`http://localhost:3000/movies/${id}`, {
				method: 'DELETE',
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
			if (moviesData) {
				const newMoviesData = moviesData.filter(
					(movie) => movie.id !== id
				)
				setMoviesData(newMoviesData)
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getAllMovies()
		console.log(moviesData);
	}, [])
	return (
		<div className="px-12">
			<h1 className="font-bold my-12 mx-3">Movie List</h1>
			<ul>
				<li className="grid grid-cols-4 grid-flow-row gap-8">
					{moviesData.map((movie) => {
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
											className="group-hover/movie:opacity-10  h-96 w-full object-cover group-hover/movie:rounded-lg"
										/>
									</picture>
									<div className="absolute invisible group-hover/movie:visible top-0 w-full h-full flex flex-col p-3 text-start">
										<h3 className="mb-3 text-base	">{movie.title}</h3>
										<p className="text-sm">
											<span>★</span> {movie.rate}
										</p>
										<h4 className="text-sm text-slate-300">
											{movie.description}
										</h4>
										<div>
											<ul>
												{
													movie.genre.map((genre, index) => {
														return <li key={index}>{genre}</li>
													})
												}
											</ul>
										</div>
										<p>{movie.year}</p>
									</div>
								</div>
								<h2>{movie.title}</h2>
								<button onClick={() => deleteMovie(movie.id)}>
									Delete Movie
								</button>
							</div>
						)
					})}
				</li>
			</ul>
		</div>
	)
}
interface MovieType {
	id: number
	title: string
	year: number
	genre: string[]
	rate: number
	poster: string
	description: string
	duration: number
}