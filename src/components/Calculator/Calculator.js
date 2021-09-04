import * as React from 'react';

import './Calculator.scss';

const Calculator = ({price, storeCount, setStoreCount}) => {
	return <div className="calculator">
		<div className="calculator__title">Калькулятор</div>
		<div className="calculator__price price">
			<div className="price__value">Гильз: {price.sleeve}</div>
			<div className="price__value">Клыков: {price.fang}</div>
			<div className="price__store-count store-count">
				<span className="store-count__title">Гильз на складе: </span>
				<input
					className="store-count__input"
					name="n_storeCount"
					type="number"
					placeholder="0"
					value={storeCount}
					onChange={e => setStoreCount(Number(e.target.value))}
				/>
			</div>
		</div>
	</div>;
};

export default React.memo(Calculator);