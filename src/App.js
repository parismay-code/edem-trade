import * as React                from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Main     from '@pages/Main';
import Settings from '@pages/Settings';
import Header   from '@components/Header';

import routes from '@configs/routes';

const App = () => {
	const [items, setItems] = React.useState({
			0: {
				name: 'Закуска под пиво',
				price: 15,
				count: 0,
			},
			1: {
				name: 'Деталь для бура',
				price: 180,
				count: 0,
			},
			2: {
				name: 'Набор для чистки оружия',
				price: 390,
				count: 0,
			},
			3: {
				name: 'Упаковка сыр косичка',
				price: 30,
				count: 0,
			},
			4: {
				name: 'Пачка пельменей',
				price: 45,
				count: 0,
			},
			5: {
				name: 'Сухпаек',
				price: 60,
				count: 0,
			},
			6: {
				name: 'Картофель',
				price: 14,
				count: 0,
			},
			7: {
				name: 'Томаты',
				price: 15,
				count: 0,
			},
			8: {
				name: 'Кука-Кула',
				price: 63,
				count: 0,
			},
			9: {
				name: 'Эль-Тигре',
				price: 60,
				count: 0,
			},
			10: {
				name: 'Сэндвич в вакууме',
				price: 60,
				count: 0,
			},
			11: {
				name: 'Бастурма',
				price: 45,
				count: 0,
			},
			12: {
				name: 'Круассан с мясом и картофелем',
				price: 45,
				count: 0,
			},
			13: {
				name: 'Ягодный сок',
				price: 20,
				count: 0,
			},
			14: {
				name: 'Рамен',
				price: 90,
				count: 0,
			},
			15: {
				name: 'Мясное рагу',
				price: 45,
				count: 0,
			},
			16: {
				name: 'Сладкий круассан',
				price: 45,
				count: 0,
			},
			17: {
				name: 'Энергетик',
				price: 180,
				count: 0,
			},
			18: {
				name: 'Начос',
				price: 45,
				count: 0,
			},
			19: {
				name: 'Кекс',
				price: 25,
				count: 0,
			},
			20: {
				name: 'Плитка шоколада',
				price: 75,
				count: 0,
			},
			21: {
				name: 'Упаковка M&M',
				price: 30,
				count: 0,
			},
			22: {
				name: 'Энергетический батончик',
				price: 45,
				count: 0,
			},
			23: {
				name: 'Упаковка чипсов',
				price: 30,
				count: 0,
			},
			24: {
				name: 'Орео',
				price: 45,
				count: 0,
			},
			25: {
				name: 'Мужской корм',
				price: 30,
				count: 0,
			},
			26: {
				name: 'Мармеладные червячки',
				price: 45,
				count: 0,
			},
			27: {
				name: 'Соленые орешки',
				price: 25,
				count: 0,
			},
			28: {
				name: 'Доктор Пропер',
				price: 45,
				count: 0,
			},
			29: {
				name: 'Пончики',
				price: 45,
				count: 0,
			},
			30: {
				name: 'Хлеб',
				price: 25,
				count: 0,
			},
			31: {
				name: 'Соль',
				price: 30,
				count: 0,
			},
			32: {
				name: 'Перец',
				price: 30,
				count: 0,
			},
			33: {
				name: 'Яйца',
				price: 30,
				count: 0,
			},
			34: {
				name: 'Жареные сосиски',
				price: 45,
				count: 0,
			},
			35: {
				name: 'Лапша',
				price: 180,
				count: 0,
			},
			36: {
				name: 'Молоко',
				price: 30,
				count: 0,
			},
			37: {
				name: 'Сахар',
				price: 30,
				count: 0,
			},
			38: {
				name: 'Лимоны',
				price: 60,
				count: 0,
			},
			39: {
				name: 'Круассан с клубникой',
				price: 45,
				count: 0,
			},
			40: {
				name: 'Круассан с вишней',
				price: 45,
				count: 0,
			},
			41: {
				name: 'Морковка',
				price: 60,
				count: 0,
			},
			42: {
				name: 'Яблоко',
				price: 60,
				count: 0,
			},
			43: {
				name: 'Банан',
				price: 60,
				count: 0,
			},
			44: {
				name: 'Арбуз',
				price: 90,
				count: 0,
			},
			45: {
				name: 'Апельсин',
				price: 90,
				count: 0,
			},
			46: {
				name: 'Огурцы',
				price: 30,
				count: 0,
			},
			47: {
				name: 'Арахисовое масло',
				price: 60,
				count: 0,
			},
			48: {
				name: 'Груша',
				price: 60,
				count: 0,
			},
			49: {
				name: 'Персик',
				price: 60,
				count: 0,
			},
			50: {
				name: 'Ягодный микс',
				price: 60,
				count: 0,
			},
			51: {
				name: 'Виноград',
				price: 90,
				count: 0,
			},
			52: {
				name: 'Хлопья с молоком',
				price: 60,
				count: 0,
			},
			53: {
				name: 'Лимонад',
				price: 60,
				count: 0,
			},
			54: {
				name: 'Вишня',
				price: 90,
				count: 0,
			},
			55: {
				name: 'Сникерс',
				price: 60,
				count: 0,
			},
		}),
		[fangTrade, setFangTrade] = React.useState(''),
		[filteredItems, setFilteredItems] = React.useState([]),
		[searchWord, setSearchWord] = React.useState(''),
		[price, setPrice] = React.useState({
			fang: 0,
			sleeve: 0,
		}),
		[storeCount, setStoreCount] = React.useState(1000);
	
	const changeItemCount = React.useCallback((name, bool) => {
			let el, arr = [];
			
			const key = Object.values(items).findIndex(el => el.name === name);
			
			if (bool) el = {...items[key], count: items[key].count + 1};
			else el = {...items[key], count: items[key].count - 1};
			
			Object.values(items).map((_el, _key) => {
				if (_key !== key) return arr.push(_el);
				else return arr.push(el);
			});
			
			setItems({
				...arr,
			});
		}, [items]),
		changeItemPrice = React.useCallback((name, value) => {
			let el, arr = [];
			
			const key = Object.values(items).findIndex(el => el.name === name);
			
			el = {...items[key], price: value};
			
			Object.values(items).map((_el, _key) => {
				if (_key !== key) return arr.push(_el);
				else return arr.push(el);
			});
			
			setItems({
				...arr,
			});
		}, [items]);
	
	React.useEffect(() => {
		const _price =
			Object.values(items)
				.reduce((acc, curr) => {
					return acc + curr.price * curr.count;
				}, 0) - fangTrade;
		
		let result, remainder;
		
		if (_price / 30 > 0) result = Math.floor(_price / 30);
		else result = Math.ceil(_price / 30);
		
		if (_price % 30 > 0) remainder = Math.floor(_price % 30);
		else remainder = Math.ceil(_price % 30);
		
		setPrice({
			fang: remainder,
			sleeve: result,
		});
	}, [price.fang, fangTrade, items]);
	
	React.useEffect(() => {
		if (searchWord) setFilteredItems(Object.values(items).filter(el => el.name.toLowerCase().includes(searchWord.toLowerCase())));
		else setFilteredItems(Object.values(items));
	}, [items, searchWord]);
	
	return (
		<div className="App">
			<Header searchWord={searchWord} setSearchWord={setSearchWord}/>
			<Switch>
				<Route path={routes.main.index} exact>
					<Main
						list={filteredItems}
						changeItemCount={changeItemCount}
						price={price}
						storeCount={storeCount}
						setStoreCount={setStoreCount}
						fangTrade={fangTrade}
						setFangTrade={setFangTrade}
					/>
				</Route>
				<Route path={routes.settings.index} exact>
					<Settings
						list={filteredItems}
						changeItemPrice={changeItemPrice}
					/>
				</Route>
				<Redirect to={routes.main.index}/>
			</Switch>
		</div>
	);
};

export default App;