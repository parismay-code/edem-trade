import * as React from 'react';

import './List.scss';

const List = ({list, changeItemCount, fangTrade, setFangTrade}) => {
	return <div className="list">
		<div className="list__title">Список</div>
		<div className="list__fang">
			<span>Клыки: </span>
			<input
				name="n_fangTrade"
				type="text"
				placeholder="0"
				value={fangTrade}
				onChange={e => setFangTrade(Number(e.target.value))}
			/>
		</div>
		<div className="list__map map">
			{list.map((el, key) => {
				const price = el.price / 30 >= 1 ? (el.price / 30).toFixed(1) : el.price,
					type = el.price / 30 >= 1 ? 'гильз' : 'клыков';
				
				return <div key={key} className="map__element element">
					<div className="element__name">{el.name}</div>
					<div className="element__price">Цена: {price} {type}</div>
					<div className="element__count">Количество: {el.count} шт.</div>
					<div className="element__buttons">
						<div
							onClick={() => {
								if (el.count > 0) {
									changeItemCount(el.name, false);
								}
							}}
						>
							-
						</div>
						<div
							onClick={() => {
								changeItemCount(el.name, true);
							}}
						>
							+
						</div>
					</div>
				</div>;
			})}
		</div>
	</div>;
};

export default React.memo(List);