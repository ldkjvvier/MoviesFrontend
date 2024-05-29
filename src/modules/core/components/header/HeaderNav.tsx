import { Link } from 'react-router-dom'
import { HomeIcon } from '../../../../components/icons/Home'
import { MovieIcon } from '../../../../components/icons/Movie'
import { SearchIcon } from '../../../../components/icons/Search'
import { SerieIcon } from '../../../../components/icons/Serie'

export const HeaderNav = () => {
	const routes = [
		{ path: '/', name: 'Home', icon: <HomeIcon size={5} /> },
		{
			path: '/browse/search',
			name: 'search',
			icon: <SearchIcon size={5} />,
		},
		{
			path: '/browse/movies',
			name: 'Movies',
			icon: <MovieIcon size={5} />,
		},
		{
			path: '/browse/series',
			name: 'Series',
			icon: <SerieIcon size={5} />,
		},
	]
	return (
		<div className="flex items-center">
			<ul className="grid grid-flow-col gap-3 md:gap-12">
				{routes.map((route) => (
					<li key={route.path}>
						<Link
							to={route.path}
							className="flex items-center gap-2 text-white hover:text-gray-300 text-lg"
						>
							<span>{route.icon}</span>
							<span className="hidden md:inline">{route.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
