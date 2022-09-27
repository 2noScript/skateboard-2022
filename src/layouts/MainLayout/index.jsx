import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import {memo} from 'react';
import bg1 from '../../asset/images/background/bg-1.jpg';
import bg2 from '../../asset/images/background/bg-2.jpg';
import logo from '../../asset/images/logo/picwish.png';
import {BiSearch} from 'react-icons/bi';
import {IoMdArrowDropdown} from 'react-icons/io';
import {BsFillBellFill, BsDot} from 'react-icons/bs';
import {MENU, CATEGORY} from './const';
import {GiSkateboard} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
const cx = classNames.bind(styles);

function MainLayout({children}) {
	return (
		<div
			className={cx(
				'flex justify-center items-center w-full h-screen',
				'bg-center bg-cover bg-no-repeat overflow-hidden p-8',
				'before:absolute before:left-0 before:right-0 before:w-full before:h-full ',
				'before:opacity-90 before:content-[""] bg-[#121527db] bg-blend-color-dodge',
				'wrapper'
			)}
			style={{backgroundImage: `url(${bg1}),url(${bg2})`}}>
			<div
				className={cx(
					'relative overflow-hidden flex font-medium',
					'text-no-primary w-full rounded-2xl max-w-[1240px]',
					'max-h-[900px] h-[96vh] bg-no-bg-primary',
					'container'
				)}>
				<div
					className={cx(
						'relative flex flex-col shrink-0 p-8 pt-0 w-56',
						'h-full overflow-y-scroll overflow-x-hidden',
						'sidebar'
					)}>
					{/* logo */}
					<div
						className={cx(
							'flex flex-col items-center justify-center cursor-pointer ',
							'sticky left-0 top-0  z-10 w-full pt-2 mb-3 bg-no-bg-primary',
							'logo'
						)}>
						<img
							src={logo}
							alt="logo"
							className={cx('object-cover max-w-[80px]', 'logo-img')}
						/>
						<div
							className={cx(
								'absolute flex items-center justify-center w-full z-10',
								'bottom-[-20px] bg-no-bg-primary pb-1',
								'logo-text'
							)}>
							<span
								className={cx(
									'flex items-center justify-center text-sm font-semibold capitalize',
									'rotate-[-10deg]',
									'logo-text-1'
								)}>
								skate
							</span>
							<span
								className={cx(
									'flex items-center justify-center text-sm font-semibold',
									'rotate-[10deg] ml-[6px]',
									'logo-text-2'
								)}>
								board
							</span>
						</div>
					</div>
					{/* mini-logo */}
					<div
						className={cx(
							'flex justify-center items-center h-8 w-8 rounded-full ',
							'bg-blue-600 min-h-[32px] mb-8 hidden',
							'mini-logo'
						)}>
						<GiSkateboard />
					</div>

					<div className={cx('py-3', 'sidebar-trick')}></div>

					<ul className={cx('flex flex-col', 'tabs')}>
						<h1
							className={cx(
								'uppercase py-[2px] mb-6 font-semibold text-[14px]',
								'tabs-title'
							)}>
							menu
						</h1>
						{MENU.map((item, index) => {
							const {name, link, icon} = item;
							return (
								<li key={index} className={cx('min-h-[32px] group', 'tabs-item')}>
									<NavLink
										to={link}
										className={({isActive}) =>
											isActive
												? cx('flex items-center', 'tabs-item-active')
												: cx('flex items-center')
										}>
										<div
											className={cx(
												'flex items-center justify-center group-hover:text-white',
												'w-8 h-8 p-2 rounded-[10px] group-hover:bg-violet-500 bg-no-bg-element',
												'tabs-item-icon'
											)}>
											{icon}
										</div>
										<div
											className={cx(
												'capitalize group-hover:text-white ml-4 text-sm font-semibold',
												'tabs-item-name'
											)}>
											{name}
										</div>
									</NavLink>
								</li>
							);
						})}
					</ul>
					<div
						className={cx(
							'relative py-9 min-w[32px] w-full',
							' before:h-[0.5px] before:w-full before:content-[""]',
							'before:bg-no-primary',
							'seperate'
						)}></div>

					<ul className={cx('flex flex-col', 'tabs')}>
						<h1
							className={cx(
								'text-[14px] uppercase py-[2px] mb-6 font-semibold',
								'tabs-title'
							)}>
							category
						</h1>
						{CATEGORY.map((item, index) => {
							const {name, link, icon} = item;
							return (
								<li key={index} className={cx('min-h-[32px] group', 'tabs-item')}>
									<NavLink
										to={link}
										className={({isActive}) =>
											isActive
												? cx('flex items-center', 'tabs-item-active')
												: cx('flex items-center')
										}>
										<div
											className={cx(
												'flex items-center justify-center group-hover:text-white',
												'w-8 h-8 p-2 rounded-[10px] group-hover:bg-violet-500 bg-no-bg-element',
												'tabs-item-icon'
											)}>
											{icon}
										</div>
										<div
											className={cx(
												'capitalize group-hover:text-white ml-4 text-sm font-semibold',
												'tabs-item-name'
											)}>
											{name}
										</div>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={cx('grow flex flex-col', 'content')}>
					<div className={cx('flex items-center p-8 h-24', 'header')}>
						<div
							className={cx(
								'flex items-center h-9 px-4 rounded-lg bg-no-bg-element',
								'max-w-[450px] w-[100%]',
								'search'
							)}>
							<input
								type="text"
								placeholder="search"
								className={cx(
									'w-full h-full grow text-sm placeholder:text-sm caret-red-600',
									'bg-transparent font-medium placeholder:capitalize'
								)}
							/>
							<div
								className={cx(
									'flex items-center justify-center cursor-pointer text-lg font-semibold',
									'search-icon'
								)}>
								<BiSearch />
							</div>
						</div>
						<div className={cx('flex items-center grow justify-end', 'setting')}>
							<img
								className={cx(
									'w-8 h-8 min-h-8 min-w-[32px] object-cover rounded-full',
									'avatar'
								)}
								src={
									'https://i-giaitri.vnecdn.net/2016/05/13/maxresdefault-4300-1463129225.jpg'
								}
								alt={'avatar'}
							/>
							<div className={cx('pl-3 text-sm', 'name')}>2noscript</div>
							<div
								className={cx(
									'flex items-center justify-center cursor-pointer text-lg pr-4',
									'setting-more'
								)}>
								<IoMdArrowDropdown />
							</div>
							<div
								className={cx(
									'flex items-center justify-center cursor-pointer text-base relative',
									'notify'
								)}>
								<div
									className={cx(
										'flex items-center justify-center absolute',
										'text-red-600 text-3xl',
										'dot'
									)}>
									<BsDot />
								</div>
								<BsFillBellFill />
							</div>
						</div>
					</div>
					<div
						className={cx(
							'px-8 pb-8 overflow-hidden overflow-x-hidden overflow-y-scroll',
							'children'
						)}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

export default memo(MainLayout);
