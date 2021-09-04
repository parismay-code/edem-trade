import * as React from 'react';

import Calculator from '@components/Calculator';
import List       from '@components/List';

import './Main.scss';

const Main = ({list, price, storeCount, setStoreCount, changeItemCount, fangTrade, setFangTrade}) => {
	return <div className="main">
		<Calculator
			price={price}
			storeCount={storeCount}
			setStoreCount={setStoreCount}
		/>
		<List
			list={list}
			changeItemCount={changeItemCount}
			fangTrade={fangTrade}
			setFangTrade={setFangTrade}
		/>
	</div>;
};

export default Main;