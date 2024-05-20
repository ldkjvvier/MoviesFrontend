import { MovieType } from '../models/Movie'

export const getAllMovies = async (): Promise<MovieType[]> => {
	const response = await fetch('http://localhost:3000/movies/', {
		method: 'GET',
	})
	return await response.json()
	
}

export const fetchMovieById = async ( id: number ): Promise<MovieType> => {
  const response = await fetch(
    `http://localhost:3000/movies/${id}`,
    {
      method: 'GET',
    }
  )
  return await response.json()
}
