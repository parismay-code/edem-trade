import * as React          from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn                  from 'classnames';

import routes from '@configs/routes';

import './Navigation.scss';

const Navigation = () => {
	const location = useLocation();
	
	return <nav className="navigation">
		<Link to={routes.main.index}>
			<span className={
				cn(
					'navigation__link',
					location.pathname === routes.main.index ? 'navigation__link_active' : null,
				)}
			>
				Торговля
			</span>
		</Link>
		<Link to={routes.settings.index}>
			<span className={
				cn(
					'navigation__link',
					location.pathname === routes.settings.index ? 'navigation__link_active' : null,
				)}
			>
				Настройки
			</span>
		</Link>
	</nav>;
};

export default React.memo(Navigation);