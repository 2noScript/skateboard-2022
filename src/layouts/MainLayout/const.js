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
		link: '/#',
	},
	{
		name: 'playlist',
		icon: <TbFileDownload />,
		link: '',
	},
	{
		name: 'bookmark',
		icon: <RiBookMarkLine />,
		link: '',
	},
];

const CATEGORY = [
	{
		name: 'live stream',
		icon: <RiGamepadLine />,
		link: '',
	},
	{
		name: 'tutorial',
		icon: <MdBarChart />,
		link: '',
	},
	{
		name: 'competation',
		icon: <SiMinetest />,
		link: '',
	},
	{
		name: 'community',
		icon: <MdGroups />,
		link: '',
	},
];
export {MENU, CATEGORY};
