import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import {MdPeopleAlt} from 'react-icons/md';
const cx = classNames.bind(styles);
function Trending() {
	return (
		<div className={cx('flex')}>
			<div className={cx('grow bg-slate-300')}>1</div>
			<div className={cx('w-[300px] bg-white ml-8')}>
				<div
					className={cx(
						'live-chat bg-[#252836]  h-[426px] rounded-2xl overflow-hidden',
						'px-5'
					)}>
					<div className={cx('flex items-center')}>
						<h1 className={cx('grow')}>live chat</h1>
						<div className={cx('flex items-center text-xs ')}>
							<div className={cx('text-base mr-1')}>
								<MdPeopleAlt />
							</div>
							15,988 people
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trending;
