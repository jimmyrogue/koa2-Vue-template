// const VueRouter = require('vue-router');
import VueRouter from 'vue-router';
const Example = () => import("../views/example/example.vue");
const Example1 = () => import("../views/example/example1.vue");


const routes = [{
	path: '/',
	component: Example
},{
	path: '/example1',
	component: Example1
}];


const router = new VueRouter({
	mode: 'hash',
	routes
})

export default router;