import * as React from 'react';

import Navigation  from '@components/Navigation';
import SearchField from '@components/SearchField';

import './Header.scss';

const Header = ({searchWord, setSearchWord}) => {
	return <header className="header">
		<div className="header__title">Edem</div>
		<SearchField searchWord={searchWord} setSearchWord={setSearchWord}/>
		<Navigation/>
	</header>;
};

export default React.memo(Header);