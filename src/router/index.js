import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import { isLogged } from '../helper/manageUser'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		beforeEnter: (to, from, next) => {
			if (!isLogged()) {
				next({ name: "Login", params: { error: "Please sign in first" } })
			}
			else {
				next()
			}
		}
	}

]

const router = new VueRouter({
	routes
})

export default router
