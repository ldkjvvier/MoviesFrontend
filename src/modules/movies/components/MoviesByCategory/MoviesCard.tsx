import { movieDuration } from '../../utils/MovieFixDuration.utilities'
import { Movie } from '../../models/Movie'
export const MoviesCard = ({ movie }: { movie: Movie }) => {
	return (
		<section className="mx-3 my-3">
			<ul className="grid grid-flow-col grid-rows-0 gap-8">
				<li
					key={movie.id}
					className="text-lg font-semibold text-center "
				>
					<figure className="group/movie relative aspect-square hover:scale-105 transition-all ease-in-out duration-200">
						<img
							src={movie.poster}
							alt={movie.title}
							className="group-hover/movie:opacity-10 w-full h-full object-cover rounded-lg snap-center pointer-events-none"
						/>
						<figcaption className="absolute invisible group-hover/movie:visible top-0 w-full h-full flex flex-col p-3 text-start">
							<h3 className="mb-3 text-base">{movie.title}</h3>
							<p className="text-sm">
								<span>★</span> {movie.rate}
							</p>
							<div className="flex gap-3 text-sm font-bold">
								<span className="border flex px-[12px] py-[0px]">
									{movie.age}+
								</span>
								<p>{movieDuration(movie.duration)}</p>
							</div>
							<h4 className="text-sm">{movie.description}</h4>
							<p>{movie.year}</p>
							<ul className="flex h-full items-end gap-3 text-xs list-disc list-inside">
								{movie.genre.map((genre, index) => (
									<li key={index}>{genre}</li>
								))}
							</ul>
						</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	)
}
