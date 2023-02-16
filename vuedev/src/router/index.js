import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import JSon from '@/page/JSon'
import JSonImport from '@/page/JSonImport'

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HelloWorld
		},
		{
			path: '/jSon',
			component: JSon
		},
        {
			path: '/jSonImport',
			component: JSonImport
		}
	]
})