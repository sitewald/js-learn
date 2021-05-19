
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
	
	// Обычные html-атрибуты в JSX называются в camel case
	
	<input tabIndex='1' />
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	