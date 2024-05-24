import { Header } from "../../core/components/header/Header"
import { MoviesCaterogy } from "../components/MoviesCategory"
import React from "react"
const Home: React.FC = () => {
  return (
		<div>
			<Header />
      <MoviesCaterogy />
		</div>
	)
}

export default Home