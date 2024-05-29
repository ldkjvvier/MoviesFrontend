import { Header } from '../../core/components/header/Header'
import { MoviesCaterogy } from '../components/moviesByCategory/MoviesCategory'
import { Featured } from '../components/featured/Featured'
import React from 'react'
export const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main className="pt-16 px-6 md:px-16 overflow-hidden">
				<div >
					<Featured />
				</div>
				<MoviesCaterogy />
			</main>
		</>
	)
}

