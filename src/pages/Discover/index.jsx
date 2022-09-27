import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import {BLOG, VIDEO} from './const';
// import {TiTick} from 'react-icons/ti';
import {memo, useRef, useState} from 'react';
const cx = classNames.bind(styles);

const VideoItem = memo(({data, className, delay}) => {
	const {authorName, src, authorImg, title, view, weeksAgo} = data;
	const video = useRef();
	const [videoTime, setVideoTime] = useState();
	return (
		<div
			className={cx('relative overflow-hidden rounded-2xl group  bg-[#252936]', 'anim', {
				[className]: className,
			})}
			onMouseMove={e => {
				video.current.play();
			}}
			onMouseLeave={e => {
				video.current.pause();
			}}
			style={{'--delay': `0.${delay}s`}}>
			<div
				className={cx(
					'group-hover:hidden',
					'absolute bg-[#150d0d70] text-[#ffffffd9]',
					'py-1 px-2 text-xs rounded-md top-[10px] right-2 z-20'
				)}>
				{videoTime} min
			</div>
			<div className={cx('relative cursor-pointer z-10')}>
				<video
					muted={true}
					loop={true}
					src={src}
					type="video/mp4"
					ref={video}
					className={cx(
						'object-contain duration-[0.4s] w-full',
						'group-hover:scale-[1.6] group-hover:origin-center'
					)}
					onLoadedData={e => {
						setVideoTime(e.target.duration.toFixed());
						// setVideoTime(video.current?.duration.toFixed());
					}}></video>

				<div
					className={cx(
						'absolute right-[10px] bottom-[-25px] shrink-0',
						'group-hover:bottom-[-65px] group-hover:scale-[0.6]',
						'group-hover:right-[-3px] duration-[0.4s]'
					)}>
					<img
						src={authorImg}
						alt={authorName}
						style={{borderWidth: '1px'}}
						className={cx(
							'w-[52px] h-[52px] object-cover rounded-full p-1',
							'border-solid border-[#ffffffbf]'
						)}
					/>
				</div>
			</div>
			<div
				className={cx(
					'duration-[0.3s] px-[20px] pt-[14px] flex items-center',
					'capitalize font-semibold'
				)}>
				{authorName}
			</div>
			<div
				className={cx('text-white leading-[1.4em] text-base overflow-hidden', 'title')}>
				{title}
			</div>
			<div className={cx('text-xs p-5 font-normal flex items-center')}>
				{view}k views <span className={cx('flex items-center justify-center')}>.</span>
				{weeksAgo} week ago
			</div>
		</div>
	);
});

function Discover() {
	return (
		<div className={cx('', 'anim', 'wrapper')} style={{'--delay': '0.1s'}}>
			<div
				className={cx(
					'capitalize h-14 sticky top-0 left-0 w-full text-3xl font-bold z-10 bg-no-bg-primary',
					'header'
				)}>
				discover
			</div>
			<div className={cx('flex items-center', 'blog')}>
				{BLOG.map((item, index) => {
					const {name, title, view, blog_ago, time, bg, avatar} = item;
					return (
						<div
							key={index}
							className={cx(
								'flex flex-col relative overflow-hidden rounded-2xl',
								'p-8 h-[300px] bg-no-repeat',
								'blog-item'
							)}
							style={{backgroundImage: `url(${bg})`}}>
							<div className={cx('text-2xl font-semibold', 'blog-title')}>{title}</div>
							<div className={cx('flex items-center', 'blog-author')}>
								<div className={cx('', 'blog-author__wrapper')}>
									<img src={avatar} alt={name} className={cx('blog-author__img')} />
								</div>
								<div
									className={cx(
										'ml-3 flex flex-col justify-center',
										'blog-author__detail'
									)}>
									<div className={cx('text-base mb-1')}>{name}</div>
									<div className={cx('text-xs')}>
										{view}k views <span>.</span>
										{blog_ago} weeks ago
									</div>
								</div>
							</div>
							<div className={cx('flex   absolute bottom-4 right-4')}>
								<div
									className={cx(
										'bg-[#150d0d70] text-[#ffffffd9] px-2 py-1 rounded-lg font-normal text-xs'
									)}>
									{time} min
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className={cx('mt-8')}>
				<div className={cx('capitalize h-14 w-full text-2xl font-medium z-10')}>
					most watched
				</div>
				<div className={cx('grid w-full grid-cols-4 gap-x-5 gap-y-5', 'videos')}>
					{VIDEO.map((item, index) => {
						return (
							<VideoItem
								data={item}
								key={index}
								className={cx('video-item')}
								delay={index}
							/>
						);
					})}
				</div>
			</div>
			{/* <div className={cx('px-4')}></div> */}
		</div>
	);
}

export default memo(Discover);
