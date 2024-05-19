import { useEffect, useState } from 'react'

export const App = () => {
	const [moviesData, setMoviesData] = useState<MovieType[]>([])
	useEffect(() => {
		try {
			fetch('http://localhost:3000/movies/', {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => setMoviesData(data))
			console.log(moviesData)
		} catch (error) {
			console.error(error)
		}
	}, [])

	const deleteMovie = async (id: number) => {
		try {
			fetch(`http://localhost:3000/movies/${id}`, {
				method: 'DELETE',
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
        if (moviesData) {
          const newMoviesData = moviesData.filter((movie) => movie.id !== id)
          setMoviesData(newMoviesData)
        }
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<>
			<h1>Movie List</h1>
			<ul>
				<li className="grid grid-cols-5 grid-flow-row gap-8">
					{moviesData.map((movie) => {
						return (
							<div
								key={movie.id}
								className="text-lg font-semibold text-center"
							>
								<div className="group/movie relative">
									<img
										src={movie.poster}
										alt={movie.title}
										className="group-hover/movie:opacity-30 transition duration-150 ease-in-out h-96 w-full object-cover"
									/>
									<div className="absolute invisible group-hover/movie:visible top-0 w-full h-full ">
										<h2>{movie.title}</h2>
										<p>
											{movie.year} <span>IMDB: {movie.rate}</span>
										</p>
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
		</>
	)
}

interface MovieType {
	id: number
	title: string
	year: number
	genre: string
	rate: number
	poster: string
}
