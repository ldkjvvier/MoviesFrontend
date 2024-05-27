import { Header } from '../../core/components/header/Header'
import { MoviesCaterogy } from '../components/MoviesByCategory/MoviesCategory'
import React from 'react'
const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main className='pt-16 '>
				<MoviesCaterogy />
			</main>
		</>
	)
}

export default Home
