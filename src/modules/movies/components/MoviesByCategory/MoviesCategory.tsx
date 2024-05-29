import { Loading } from '@/modules/core/components/loader/Loading'
import { MoviesCard } from './MoviesCard'
import { useMovies } from '../../hooks/useMovies'
import { Movie } from '../../models/Movie'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useEffect, useState } from 'react'

export const MoviesCaterogy = () => {
	const { movies, loading } = useMovies()
	const [deviceType, setDeviceType] = useState('desktop')
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setDeviceType('mobile')
			} else if (window.innerWidth < 1024) {
				setDeviceType('tablet')
			} else {
				setDeviceType('desktop')
			}
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	if (loading) return <Loading />

	const categories = [
		{ title: 'Top Movies', movies: movies?.topRatedMovies },
		{ title: 'New Movies', movies: movies?.newMovies },
		{ title: 'Animated Movies', movies: movies?.animatedMovies },
		{ title: 'Top Drama', movies: movies?.topDramaMovies },
		{ title: 'Terror Movies', movies: movies?.terrorMovies },
	]

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 5, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
	}

	return (
		<div className='flex flex-col gap-12 '>
			{categories.map(
				(category) =>
					category.movies &&
					category.movies?.length > 0 && (
						<div key={category.title}>
							<h2 className="text-2xl ml-4 my-3 font-bold text-white">
								{category.title}
							</h2>
							<Carousel
								swipeable={true}
								draggable={true}
								showDots={false}
								responsive={responsive}
								ssr={true} // means to render carousel on server-side.
								infinite={true}
								autoPlay={false}
								keyBoardControl={false}
								customTransition="transform 300ms ease-in-out"
								transitionDuration={500}
								containerClass="carousel-container"
								deviceType={deviceType}
								dotListClass="custom-dot-list-style"
								itemClass="carousel-item-padding-30-px"
								partialVisible={true}
							>
								{category.movies?.map((movie: Movie) => (
									<MoviesCard key={movie.id} movie={movie} />
								))}
							</Carousel>
						</div>
					)
			)}
		</div>
	)
}
