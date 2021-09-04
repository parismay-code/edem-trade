import * as React from 'react';

import './Settings.scss';

const Settings = ({list, changeItemPrice}) => {
	return <div className="settings">
		<div className="settings__title">Настройка стоимости товара (в клыках)</div>
		<div className="settings__map map">
			{list.map((el, key) => {
				return <div key={key} className="map__element element">
					<div className="element__name">{el.name}</div>
					<div className="element__price-input price-input">
						<span className="price-input__title">Цена:</span>
						<input
							className="price-input__field"
							name="n_priceInput"
							type="number"
							value={el.price}
							onChange={e => changeItemPrice(el.name, Number(e.target.value))}
						/>
					</div>
				</div>;
			})}
		</div>
	</div>;
};

export default Settings;