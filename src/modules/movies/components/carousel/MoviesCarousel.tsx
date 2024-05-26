import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export const MoviesCarousel = ({
	title,
	children,
	deviceType,
}: {
	children: React.ReactNode
	deviceType: string
	title: string
}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
		},
	}
	return (
		<div className='py-4'>
			<h2 className="text-2xl ml-4 my-3 font-bold text-white">{title}</h2>
			<Carousel
				swipeable={deviceType !== 'mobile' ? true : false}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={false}
				autoPlay={false}
				autoPlaySpeed={1000}
				keyBoardControl={false}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['']}
				deviceType={deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-30-px"
				centerMode={
					deviceType === 'desktop' || deviceType === 'tablet'
						? true
						: false
				}
			>
				{children}
			</Carousel>
		</div>
	)
}
