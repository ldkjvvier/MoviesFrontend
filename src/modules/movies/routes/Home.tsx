import { Header } from '../../core/components/header/Header'
import { MoviesCaterogy } from '../components/moviesByCategory/MoviesCategory'
import { Featured } from '../components/featured/Featured'
import React from 'react'
import '../components/carousel.css'
const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main className="pt-16 px-6 md:px-16 overflow-hidden z-0">
				<div >
					<Featured />
				</div>
				<MoviesCaterogy />
			</main>
		</>
	)
}

export default Home
