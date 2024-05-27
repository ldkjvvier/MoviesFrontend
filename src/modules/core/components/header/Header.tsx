import { HeaderNav } from './HeaderNav'
import { Account } from './Account'

export const Header = () => {
	return (
		<header className='flex justify-around w-full fixed z-50 top-0 left-0'>
			<nav className="flex w-full bg-primary px-3 md:px-12 py-4 justify-between">
				<h1 className="text-white text-2xl text-center">
					Movies
				</h1>
				<HeaderNav />
				<Account />
			</nav>
		</header>
	)
}
