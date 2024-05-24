import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from '@/config/routes'
import { ApolloProvider } from '@apollo/client'
import { apolloConfig } from './config/apollo'


const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<React.StrictMode>
		<ApolloProvider client={apolloConfig}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
)
