import Home from '@/modules/movies/routes/Home'
import { createBrowserRouter } from 'react-router-dom'

const routerConfig = [
	{ path: '/', element: <Home /> },
	{ path: '/movies', element: <Home /> },
	{ path: '/search', element: <Home /> },
	{ path: '/movies', element: <Home /> },
	{ path: '/series', element: <Home /> },
	{ path: '*', element: <Home /> },
]

export const router = createBrowserRouter(routerConfig)
