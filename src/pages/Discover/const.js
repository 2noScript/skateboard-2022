import blog1 from '../../asset/images/discover/blog/blog-1.png';
import blogAvatar1 from '../../asset/images/discover/blog/blog-avatar-1.jpg';

import blog2 from '../../asset/images/discover/blog/blog-2.jpg';
import blogAvatar2 from '../../asset/images/discover/blog/blog-avatar-2.jpg';

const BLOG = [
	{
		name: 'Thomas Hope',
		title: 'How to do Basic Jumping and how to landing safely',
		view: '53',
		bg: blog1,
		avatar: blogAvatar1,
		blog_ago: 2, //unit week
		time: 7, // unit (minute)
	},
	{
		name: 'Tony Andrew',
		title: 'Skateboard Tips You need to know',
		view: '100',
		bg: blog2,
		avatar: blogAvatar2,
		time: 8,
		blog_ago: 2,
	},
];

const VIDEO = [
	{
		authorName: 'andy william',
		authorImg: blogAvatar1,
		view: '50',
		weeksAgo: 3,
		title: 'Basic how to ride your skateboard comfortly',
		src: 'https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761',
	},
	{
		authorName: 'gerard bind',
		authorImg: blogAvatar1,
		view: '50',
		weeksAgo: 3,
		title: 'Basic equipment to play skateboard safely',
		src: 'https://player.vimeo.com/external/449972745.sd.mp4?s=9943177fe8a6147b7bc4598259401f06ec57878a&profile_id=139&oauth2_token_id=57447761',
	},
	{
		authorName: 'john wise',
		authorImg: blogAvatar1,
		view: '50',
		weeksAgo: 3,
		title: 'Prepare for your first skateboard jump',
		src: 'https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761',
	},
	{
		authorName: 'budi hakim',
		authorImg: blogAvatar1,
		view: '50',
		weeksAgo: 3,
		title: 'Tips to playing skateboard on the ramp',
		src: 'https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761',
	},
];
export {BLOG, VIDEO};
