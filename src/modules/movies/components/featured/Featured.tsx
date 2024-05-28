import { FeaturedCard } from './featuredCard'
import { useFeatured } from '../../hooks/useFeatured'
import { Loading } from '@/modules/core/components/loader/Loading'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useEffect, useState } from 'react'

export const Featured = () => {
	const { movies, loading } = useFeatured()
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

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
	},
}

	return (
		<div className='pt-4 mb-4 overflow-visible z-40'>
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={10000}
				keyBoardControl={false}
				customTransition="transform 300ms ease-in-out"
				transitionDuration={300}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				deviceType={deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				partialVisible={true}
				renderButtonGroupOutside={true}
			>
				{movies?.featuredMovies?.map((movie, index) => (
					<div
						key={movie.id}
						className={index === 0 ? 'superpose-item' : ''}
					>
						<FeaturedCard movie={movie} />
					</div>
				))}
			</Carousel>
		</div>
	)
}
