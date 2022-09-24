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
import {Link, NavLink} from 'react-router-dom';
const cx = classNames.bind(styles);

function MainLayout({children}) {
	return (
		<div className={cx('wrapper')} style={{backgroundImage: `url(${bg1}),url(${bg2})`}}>
			<div className={cx('container', 'text-white ')}>
				<div className={cx('relative ', 'sidebar')}>
					<div
						className={cx(
							'flex flex-col items-center justify-center cursor-pointer ',
							'logo'
						)}>
						<img src={logo} alt="logo" className={cx('object-cover', 'logo-img')} />
						<div className={cx('absolute flex items-center justify-center', 'logo-text')}>
							<span
								className={cx(
									'flex items-center justify-center text-sm font-semibold',
									'logo-text-1'
								)}>
								skate
							</span>
							<span
								className={cx(
									'flex items-center justify-center text-sm font-semibold',
									'logo-text-2'
								)}>
								board
							</span>
						</div>
					</div>
					<div className={cx('mini_logo')}>
						<GiSkateboard />
					</div>
					{/* <div className={cx('seperate')}></div> */}
					<div className={cx('sidebar-trick')}></div>
					<ul className={cx('tabs')}>
						<h1 className={cx('text-xs uppercase font-normal', 'tabs-title')}>menu</h1>
						{MENU.map((item, index) => {
							const {name, link, icon} = item;
							return (
								<li key={index} className={cx('', 'tabs-item')}>
									<NavLink
										to={link}
										// className={cx('flex items-center')}
										className={({isActive}) =>
											isActive
												? cx('flex items-center', 'tabs-item-active')
												: cx('flex items-center')
										}>
										<div
											className={cx(
												'flex items-center justify-center',
												'tabs-item-icon'
											)}>
											{icon}
										</div>
										<div className={cx('capitalize', 'tabs-item-name')}>{name}</div>
									</NavLink>
								</li>
							);
						})}
					</ul>
					<div className={cx('seperate')}></div>
					<ul className={cx('tabs')}>
						<h1 className={cx('text-xs uppercase font-normal', 'tabs-title')}>
							category
						</h1>
						{CATEGORY.map((item, index) => {
							const {name, link, icon} = item;
							return (
								<li key={index} className={cx('', 'tabs-item')}>
									<NavLink
										to={link}
										//  className={cx('flex items-center')}
										className={({isActive}) =>
											isActive
												? cx('flex items-center', 'tabs-item-active')
												: cx('flex items-center')
										}>
										<div
											className={cx(
												'flex items-center justify-center',
												'tabs-item-icon'
											)}>
											{icon}
										</div>
										<div className={cx('capitalize', 'tabs-item-name')}>{name}</div>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={cx('grow flex flex-col', 'content')}>
					<div className={cx('flex items-center', 'header')}>
						<div className={cx('flex items-center', 'search')}>
							<input
								type="text"
								placeholder="search"
								className={cx('w-full grow text-sm placeholder:text-sm', '')}
							/>
							<div
								className={cx(
									'flex items-center justify-center cursor-pointer text-lg',
									'search-icon'
								)}>
								<BiSearch />
							</div>
						</div>
						<div className={cx('flex items-center grow justify-end', 'setting')}>
							<img
								className={cx('avatar')}
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
					{children}
				</div>
			</div>
		</div>
	);
}

export default memo(MainLayout);
