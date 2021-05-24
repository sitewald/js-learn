
	// ---------------- REACT JS

	// React JS - UI-библиотека а не фреймворк (opensource от Facebook)
	
	// UI-компоненты
	
	// Reconciliation algorithm - перерисовываются только изменённые места
	
	// Virtual DOM - js-объекты, представляющие DOM и хранящиеся в памяти
	
	// JSX - псевдоразметка + код
	
	import React from 'react';
	import ReactDOM from 'react-dom';
	
	// .... some component
	
	ReactDOM.render(<SomeComponent />, document.getElementById('root'));
	
	// ReactDOM.render(..) превращает виртуальные элементы в реальные
	
	
	
	/* Установка ***/
	
	// В командной строке:
	
	node -v // проверка, установлен ли node.js
	
	npm i -g create-react-app // i - install, -g - global
	
	create-react-app todo
	
	cd todo
	
	npm start
	
	// ECMAScript2019, JSX => Babel => обычный javascript для всех браузеров
	
	// "Babel is a JavaScript transpiler (compiler) that converts edge JavaScript into plain old ES5 JavaScript
	// that can run in any browser (even the old ones)"
	
	
	
	/* React element ***/
	
	const el = <h1>Hello</h1>; // JSX
	
	const el = React.createElement('h1', null, 'Hello);
	
	// element tree
	const el = ( // если несколько строк - используем скобки
		<div>
			<p>1</p>
			<p>2</p>
		</div>
	);
	
	// JSX превращается в React.createElement(..), поэтому надо импортировать React в файл с JSX
	
	
	
	/* React component ***/
	
	// React component (функциональный) - это функция, возвращающая React element
	
	const List = () => { // Название с большой буквы. Всё, что начинается с маленькой, для React - html-тег
		return (
			<ul>
				<li>1</li>
			</ul>
		);
	};
	
	// Важно! List - это функциональный компонент, а <List /> - это элемент,
	// который эта функция возвращает
	ReactDOM.render(<List />, document.getElementById('root');
	
	// Разбиение на компоненты целесообразно, если разметки слишком много, либо
	// компоненты можно переиспользовать в других местах (всё, как для функций)
	
	
	
	/* JSX ***/
	
	// Должен иметь один корень
	
	// Для использования выражений, переменных, вызова функций использовать {}
	
	// Внутри скобок в качестве child-элементов - только простые типы или
	// другие React элементы - объекты нельзя - будет ошибка!
	// Если внутрь передать null, undefined, true, false, то ничего в этом месте не отобразится
	
	const el = <h1>{1 + 1}</h1>
	
	const el = <h1>{ loggedIn ? 'Welcome' : 'Log in' }</h1>
	
	const el = <p>{ (new Date()).toString() }
	
	// Можно другой элемент записать в переменную:
	
	const small = <p>1<p>;
	
	const big = <div>{small}</div>;
	
	// Можно использовать для атрибутов (называются свойствами - properties)
	
	// Для html-тегов ожидаемыми будут только строки:
	
	const str = 'input something';
	
	const el = <input placeholder={str} />
	
	// за исключением стилей, которые можно передать в виде объекта.
	// CSS-свойства пишутся в camel case:
	
	const myStyle = {
		marginTop: "20px"
	};
	
	const el = <div style={myStyle}></div>
	
	// Для React элементов - любые данные - простые типы, объекты и т.д. 
	
	const obj = { name: 'Bob' };
	
	<App name={obj} />
	
	// Обычные html-атрибуты и обработчики событий в JSX называются в camel case
	
	<input tabIndex='1' onClick='alert(..)' />
	
	// Есть два переименованных
	
	<div className='some'></div> // className вместо class
	
	<input type='text' id='first' />
	<label htmlFor='first'></label> // htmlFor вместо for
	
	// JSX противодействует script-injection
	
	const bad = "<script>alert('bad')</script>";
	
	const el = (
		<div>
			{bad} // код выполнен не будет и отрисуется в виде строки
		<div>
	);
	
	
	
	/* Структура проекта ***/
	
	// Папка src/components
	
	// Один component - один файл (export default)
	
	// css файл удобно создавать для каждого компонента и все файлы компонента
	// хранить в одной папке src/components/item
	
	import './item.css';
	
	// Для того, чтобы при импорте компонента не писать
	
	import Item from './components/item/item'; // последний item - это item.js - расширение .js можно не писать
	
	// нужно в папке с компонентом создать файл index.js, где прописать экспорт по умолчанию:
	
	import Item from './item';
	export default Item;
	
	// Когда Webpack обрабатывает импорты и видит, что импортируется папка, то он ищет файл index.js
	// с импортом по умолчанию. 
	
	// Теперь можно писать:
	
	import Item from './components/item'; // item - папка с компонентом
	
	
	
	/* Свойства компонента ***/
	
	const Item = (props) => { // передаются в качестве первого параметра, обычно называют props
		return (
			<h1>{props.name}</h1>
		);
	};
	
	<Item name='first' />
	
	// Можно применить деструктуризацию, значение по умолчанию:
	
	const Item = ({ name = 'empty' }) => {
		return (
			<h1>{name}</h1>
		);
	};
	
	// Можно передать массив данных и для каждого элемента создать React element
	
	const Item = ({ name }) => {
		return (
			<span>{name}</span>
		);
	};
	
	const List = ({data}) => { // data - массив объектов
		const items = data.map((i) => {
			return <li><Item name={i.name} /></li>;
		});
		
		return (
			<ul>
				{items}
			<ul>
		);
	}
	
	// Если свойства элемента и передаваемых данных одноимённые, то 
	// можно использовать Spread оператор для объекта:
	
	const List = ({data}) => {
		const items = data.map((i) => {
			return (
				<li>
					<Item {...i} /> // i.name будет подставлено в name элемента
				</li>
			);
		});
		
		return (
			<ul>
				{items}
			<ul>
		);
	};
	
	// В приведённых выше примерах в тегах <li> нет уникального ключа и React
	// выдаст warning в консоли "child in an array or iterator should have a unique 'key' prop."
	// Этот ключ необходим React, чтобы знать, как обновлять элементы списка. В случае, если
	// новый элемент будет добавлен в начало списка, то React при сравнении его со старым
	// списком решит, что надо перерисовать весь список, что может быть очень затратно.
	
	<li key="someUnique">..</li> // Нет смысла использовать в качестве key индекс массива
	
	
	
	/* Компоненты-классы (stateful components) ***/
	
	// Есть смысл использовать, когда нужно хранить состояние
	
	import React, { Component } /* или React.Component */ from 'react';
	
	export default class Item extends Component {
		
		render() {
			
			const { name } = this.props; // в классе props доступны через this.props!
			
			return (
				<span>{name}</span>
			);
		};
	}
	
	// на элементах можно регистрировать обработчики событий
	
	class ... {
		
		onLabelClick() {
			console.log(this.props.name); // this в этом методе будет потерян - ошибка!
			// Можно решить проблему, привязав функцию к this, но это затратный путь - 
			// при каждой регистрации будет создаваться функция-обёртка:
			
			// в методе render() - <label onClick={this.onLabelClick.bind(this)}>click me</label>
		}
		
		// второй вариант
		
		constructor() {
			super();
			
			this.onLabelClick = () => {
				console.log(this.props.name); // this сохранится
			};
		}
		
		// третий вариант
		
		onLabelClick = () => { // использование функции-стрелки - нововведение(утверждено?)
			console.log(this.props.name);
		};
	
	
		render() {
			return (
				<label onClick={this.onLabelClick}>click me</label>
			);
		}
	}
	
	// state
	
	// state можно инициализировать в конструкторе(консервативный вариант)
	
	class .. {
		constructor() {
			super();
			
			this.state = {
				name: 'initial'
			};
		}
	}
	
	// или как поле класса (нововведение)
	
	class .. {
		state = {
			name: 'initial'
		};
		
		// напрямую state менять НЕЛЬЗЯ! Только через метод setState(..)
		onLabelClick = () => {
			
			// в setState(..) нужно передавать объект ТОЛЬКО c теми полями, которые были изменены!
			// React обновит изменённые поля, а неизменённые трогать не будет
			//
			this.setState({
				name: 'new'
			});
		};
		
		render() {
			return <label onClick={this.onLabelClick}>{this.state.name}</label>; // читать из state
																				 // можно напрямую
		}
	}
	
	// ВАЖНО !!!
	// Необходимо помнить, что setState() - асинхронная функция, то есть state может
	// быть обновлён не мгновенно (React может собирать вызовы нескольких setState() для
	// оптимизации нагрузки или перерисовывать в первую очередь видимые элементы).
	// Поэтому, если требуется использовать внутри setState() предыдущее
	// значение state, нужно в setState() передать функцию вида:
	
	this.setState((state) => { // или сразу деструктурировать sate в { flag, count }
		return {
			flag: !state.flag // случай, когда нужно инвертировать булево поле от предыдущего значения
			count: count + 1 // случай, когда нужно инкрементировать счётчик из предыдущего state
			// или когда нужно из массива в state удалить(или добавить элемент) - но при этом
			// старый массив нельзя редактировать - нужно используя его получить новый массив и
			// вернуть его в state. В данном случае нужно использовать только те методы работы
			// с массивом, которые не меняют предыдущий массив!
		};
	});
	
	
	
	
	/* Жизненный цикл компонентов (lifecycle hooks) ****/
	
	// MOUNTING
	// ---------
	
	// constructor() => render() => componentDidMount() - компонент "подключен" - DOM элементы уже на странице
	// Лучшее место для запроса к api, работы с DOM
	
	// UPDATES
	// --------
	
	// setSate() или new props => render() => componentDidUpdate() - компонент обновился
	// 										  componentDidUpdate(prevProps, prevState)
	// Когда компонент получил новые свойства (новое id), можно запросить у api данные для этого id
	
	
	// UNMOUNTING
	// ---------
	
	// componentWillUnmount() - компонент будет удалён - DOM ещё на странице (освобождаем ресурсы)
	
	
	// ERROR
	// ------
	
	// componentDidCatch() - в компоненте (в его child-элементах) произошла ошибка и в этом
	// методе можно предусмотреть поведение на случай этой ошибки. Ошибка пробрасывается от дочерних
	// к родительским компонентам и может быть поймана на любом уровне в данном методе (граница ошибок - 
	// error boundary).
	// ВАЖНО!!! Этот метод работает с ошибками в методах жизненного цикла компонента (и render())
	// Ошибки в event listeners этим методом не отлавливаются. Также, если в методе жизненного цикла
	// будет вызван асинхронный код (например, обращение к api через fetch(..)), то ошибка в таком коде
	// тоже не будет поймана componentDidCatch()
	// Данный метод не является заменой стандартным проверкам на ошибки и блоку try-catch. Его стоит использовать,
	// как форс-мажор (непредвиденные разработчиком ошибки)
	
	
	
	
	/* props.children - передача свойств в теле элемента ***/
	
	// Данные компоненту можно передать через свойства, похожие на атрибуты:
	
	<Item name={'some'} />
	
	// в компоненте - this.props.name
	
	// Или через тело:
	
	<Item>{name}</Item>
	
	// в компоненте - this.props.children
	
	// Можно так передавать любые данные, включая дерево элементов
	
	// Удобно использовать для компонентов-обёрток
	
	// Поскольку, в качестве this.props.children может быть передано всё, что угодно, то 
	// стандартный метод для работы с массивами map не подойдёт. Для этого есть
	
	<Item>
	{ 
		// в React.Children есть и другие методы
		React.Children.map(this.props.children, (x, idx /* индекс элемента - опционально */) => { 
			return <div>x</div>; // можно скрыть элемент, если вернуть null
		})
	}
	</Item>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	