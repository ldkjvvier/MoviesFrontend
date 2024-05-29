import React from 'react'
import { Header } from '@/modules/core/components/header/Header'
import { FilteredMovie } from '../components/FilteredMovies/FilteredMovie'
export const Series: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<h1>Series</h1>
				<FilteredMovie filter="series" />
			</main>
		</>
	)
}
