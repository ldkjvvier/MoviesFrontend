import React from "react"
import { Header } from "@/modules/core/components/header/Header"
import { FilteredMovie } from "../components/FilteredMovies/FilteredMovie"
export const Movies: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Movies</h1>
      <FilteredMovie filter="movie" />
    </>
  )
}