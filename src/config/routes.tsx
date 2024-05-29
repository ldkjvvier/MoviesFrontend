import { Home, Search, Movies, Series } from '@/modules/movies/index.ts'
import { Error404 } from '@/components/Error404'
import { createBrowserRouter } from 'react-router-dom'

const routerConfig = [
	{ path: '/', element: <Home /> },
	{ path: '/movies', element: <Home /> },
	{ path: '/browse/search', element: <Search /> },
	{ path: '/browse/movies', element: <Movies /> },
	{ path: '/browse/series', element: <Series /> },
	{ path: '*', element: <Error404 /> },
]

export const router = createBrowserRouter(routerConfig)
