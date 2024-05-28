import { Movie } from '../../models/Movie'

export const FeaturedCard = ({ movie }: { movie: Movie }) => {
	return (
		<section className="mx-3 my-3 overflow-visible z-10">
			<ul>
				<li key={movie.id} className="text-lg font-semibold ">
					<figure className="group/movie relative">
						<source
							media="(min-width:768px)"
							srcSet="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2b958847-afbd-4e1f-9868-917061eb9aee/compose?format=webp&amp;label=hero_carousel_300&amp;width=2880"
						/>

						<img
							src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2b958847-afbd-4e1f-9868-917061eb9aee/compose?format=webp&amp;label=hero_carousel_300&amp;width=2880	"
							alt={movie.title}
							className="w-full md:h-full obj md:object-cover rounded-md h-[400px] "
						/>
						<figcaption className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/movie:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white rounded-md">
							<h3 className="mb-3 text-2xl font-bold">
								{movie.title}
							</h3>
							<div className="mb-3 flex items-center space-x-3 text-sm">
								<span>★ {movie.rate}</span>
								<span className="border border-white px-2 py-1">
									{movie.age}+
								</span>
								<span>{movie.duration}</span>
							</div>
							<p className="mb-3 text-sm">{movie.description}</p>
							<p className="mb-3">{movie.year}</p>
							<ul className="flex flex-wrap gap-2 text-xs">
								{movie.genre.map((genre, index) => (
									<li
										key={index}
										className="bg-white bg-opacity-20 rounded-full px-3 py-1"
									>
										{genre}
									</li>
								))}
							</ul>
						</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	)
}
