export interface Movie {
	id: string
	title: string
	year: number
	genre: string[]
	rate: number
	poster: string
	description: string
	duration: number
	age: string
	type: string
	trailer: string
	created_at: string
}

export interface MoviesData {
	featuredMovies?: Movie[]
	topRatedMovies: Movie[]
	newMovies: Movie[]
	animatedMovies: Movie[]
	topDramaMovies: Movie[]
	terrorMovies: Movie[]
}