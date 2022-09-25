// empty layout
import {Fragment} from 'react';
import MainLayout from '../../layouts/MainLayout';
// pages
import Discover from '../../pages/Discover';
import Trending from '../../pages/Trending';
import Notify from '../../pages/Notify';
const publicRoutes = [
	{
		path: '/discover',
		page: Discover,
		layout: MainLayout,
	},
	{
		path: '/trending',
		page: Trending,
		layout: MainLayout,
	},
	{
		path: '/streaming',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/playlist',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/bookmark',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/live-tream',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/tutorial',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/competation',
		page: Notify,
		layout: Fragment,
	},
	{
		path: '/community',
		page: Notify,
		layout: Fragment,
	},
];
const clientRoutes = [];
const adminRoutes = [];

export {clientRoutes, adminRoutes, publicRoutes};
