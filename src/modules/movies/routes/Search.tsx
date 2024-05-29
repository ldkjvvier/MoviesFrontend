import React from 'react'
import { Input } from '@headlessui/react'
import { Header } from '@/modules/core/components/header/Header'
import { FilteredMovie } from '../components/FilteredMovies/FilteredMovie'
import { useState } from 'react'



export const Search: React.FC = () => {
	const [search, setSearch] = useState('')
	return (
		<>
			<Header />
			<main className="pt-24 px-6 md:px-16 ">
				<Input
					name="full_name"
					placeholder="Search by title or genre"
					className={
						'text-2xl md:text-4xl w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
					}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<FilteredMovie filter={search} />
			</main>
		</>
	)
}
