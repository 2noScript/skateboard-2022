import {publicRoutes} from '../../configs/routes';

import {Routes, Route} from 'react-router-dom';
import {memo, useCallback} from 'react';

function RenderRoutes() {
	const extractRoutes = useCallback(routes => {
		return routes.map((route, index) => {
			const Page = route.page;
			const Layout = route.layout;
			return (
				<Route
					key={index}
					path={route.path}
					element={
						<Layout>
							<Page />
						</Layout>
					}
				/>
			);
		});
	}, []);
	return <Routes>{extractRoutes(publicRoutes)}</Routes>;
}
export default memo(RenderRoutes);
