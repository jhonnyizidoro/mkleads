import Login from '../views/auth/Login'
import Dashboard from '../views/admin/Dashboard'
import Orders from '../views/admin/Orders'
import Information from '../views/admin/Information'
import Configuration from '../views/admin/Configuration'

export const routes = [
	{
		path: '/',
		component: Login,
	},
	{
		path: '/dashboard',
		component: Dashboard,
	},
	{
		path: '/orders',
		component: Orders,
	},
	{
		path: '/information',
		component: Information,
	},
	{
		path: '/configuration',
		component: Configuration,
	},
]