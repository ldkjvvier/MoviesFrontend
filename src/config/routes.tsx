import Home from '@/modules/movies/routes/Home'
import { Error404 } from '@/components/Error404'
import { createBrowserRouter } from 'react-router-dom'

const routerConfig = [
	{ path: '/', element: <Home /> },
	{ path: '/movies', element: <Home /> },
	{ path: '/search', element: <Home /> },
	{ path: '/movies', element: <Home /> },
	{ path: '/series', element: <Home /> },
	{ path: '*', element: <Error404 /> },
]

export const router = createBrowserRouter(routerConfig)
