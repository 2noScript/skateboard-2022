import {AiFillHome} from 'react-icons/ai';
import {MdTrendingUp, MdBarChart, MdGroups} from 'react-icons/md';
// import {IoDownload} from 'react-icons/io';
import {FiActivity} from 'react-icons/fi';
import {TbFileDownload} from 'react-icons/tb';
import {RiBookMarkLine, RiGamepadLine} from 'react-icons/ri';
import {SiMinetest} from 'react-icons/si';
// import {TiHome} from 'react-icons/ti';
const MENU = [
	{
		name: 'discover',
		icon: <AiFillHome />,
		link: '/discover',
	},
	{
		name: 'trending',
		icon: <MdTrendingUp />,
		link: '/trending',
	},
	{
		name: 'streaming',
		icon: <FiActivity />,
		link: '/streaming',
	},
	{
		name: 'playlist',
		icon: <TbFileDownload />,
		link: '/playlist',
	},
	{
		name: 'bookmark',
		icon: <RiBookMarkLine />,
		link: '/bookmark',
	},
];

const CATEGORY = [
	{
		name: 'live stream',
		icon: <RiGamepadLine />,
		link: '/live-tream',
	},
	{
		name: 'tutorial',
		icon: <MdBarChart />,
		link: '/tutorial',
	},
	{
		name: 'competation',
		icon: <SiMinetest />,
		link: '/competation',
	},
	{
		name: 'community',
		icon: <MdGroups />,
		link: '/community',
	},
];
export {MENU, CATEGORY};
