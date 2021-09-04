import * as React from 'react';

import './SearchField.scss';

const SearchField = ({searchWord, setSearchWord}) => {
	return <input
		className="search-field"
		name="n_searchField"
		type="text"
		placeholder="Поиск..."
		maxLength={30}
		value={searchWord}
		onChange={e => setSearchWord(e.target.value)}
	>
	
	</input>;
};

export default React.memo(SearchField);