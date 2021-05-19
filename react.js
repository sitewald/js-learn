
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
	
	
	
	/* React element ***/
	
	const el = <h1>Hello</h1>; // JSX
	
	const el = React.createElement('h1', null, 'Hello);
	
	// element tree
	const el = ( // если несколько строк
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	