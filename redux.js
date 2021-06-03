


	// Redux -------------------------
	
	// Самодостаточная библиотека - можно использовать и без React
	
	// Хранение глобальных данных приложения в одном месте ("глобальный объект") (не исключает
	// наличия у компонентов их личного state для внутренних нужд)
	
	// Единое место для всей логики изменения глобальных данных приложения - функция Reducer
	
	// Reducer и глобальный state - в Store (координирует обновления)
	
	// Компоненты инициируют изменение state через reducer, вызывая события, 
	// представленные объектами Action
	
	// Такая модель взаимодействия данных позволяет избежать property drill, когда
	// необходимо пробрасывать события по иерархии вложенных компонентов для изменения
	// state, хранящегося в главном компоненте приложения, а также,
	// при других архитектурах, fragemneted state, когда state распределён между
	// различными компонентами, что повышает вероятность неверной работы приложения
	
	npm install redux react-redux // react-redux упрощает интеграцию с React
	
	
	
	
	/* Reducer ****/
	
	// Обычная функция, которая принимает 2 агрумента - текущий state и action - любой объект,
	// который должен иметь свойство type
	
	// Если тип action неизвестен - должен вернуть state без изменений
	
	// Если текущий state === undefined - должен вернуть первоначальный (initial) state
	
	const reducer = (state, action) => {
		
		// Или можно задать параметр по умолчанию state = 0
		if (state === undefined) {
			return 0; // initial state
		}
		
		switch (action.type) {
			case 'INC': 
				return state + 1; // Также, как в методе setState, state нельзя менять, нужно вернуть новый!
				
			case 'DEC':
				return state - 1;
				
			case 'RND':
				return state + action.payload; // В action можно передавать параметры.
											   // Классическое название для параметра - payload (можно value или другое название)
				
			default: return state;
		}
	}
	
	// Важно!!! - Reducer должен быть ЧИСТОЙ ФУНКЦИЕЙ:
	// 1. Возвращаемое значение зависит только от аргументов (никаких Math.random() и пр.)
	// 	  Не должна менять аргументы.
	// 2. У чистой функции не должно быть побочных эффектов (вызов сервера, запись в DOM, работа с интервалом, таймаутом и т.п.)
	//
	// Всё это нужно для того, чтобы при повторении ряда действий был получен тот же результат - легко тестировать.
	
	// Action может не быть чистой функцией (но желательно, чтобы был)
	
	
	/* Redux Store ****/
	
	import { createStore } from 'redux';
	
	const store = createStore(reducer); // Создаём store
	
	store.subscribe(() => {             // Назначаем event handler для реакции на изменение state (получение нотификации об изменениях)
		console.log(store.getState());  // Получаем текущее состояние state
	});
	
	store.dispatch({ type: 'INC' }); // Вызываем изменение state путём передачи action
	store.dispatch({ type: 'RND', payload: 10 });
	
	// Для того, чтобы при очередном использовании action не допустить опечатку при написании
	// значения type (в рабочих проектах оно имеет вид 'REMOVE_PRODUCT_FROM_CART'), используют
	// Action creators - функции, возвращающие объект action
	
	const inc = () => ({ type: 'INC' });
	const rnd = (payload) => ({ type: 'RND', payload });
	
	store.dispatch(inc());
	store.dispatch(rnd(10));
	
	
	
	
	/* bindActionCreators(..) ****/
	
	// Для того, чтобы не писать каждый раз store.dispatch(inc())
	// существует специальная функция, которая возвращает одну или несколько
	// функций, представляющих из себя action creator, обёрнутый в store.dispatch(..)
	
	import { createStore, bindActionCreators } from 'redux';
	import reducer from './reducer';
	import * as actions from './actions'; // Файл, содержащий определение action creators
	
	const store = createStore(reducer);
	
	store.subscribe(() => {
		console.log(store.getState());
	});
	
	// Имена возвращаемых функций совпадают с именами action creators,
	// но можно задать псевдонимы - { incFunc: inc, decFunc: dec }
	const { inc, dec } = bindActionCreators(actions, store.dispatch);
	
	inc();
	
	
	
	
	/* Интеграция с React ****/
	
	// Простейший вариант - без библиотеки 'react-redux':
	
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { createStore, bindActionCreators } from 'redux';
	import reducer from './components/reducer';
	import * as actions from './components/actions';

	const store = createStore(reducer);
	const { inc, dec } = bindActionCreators(actions, store.dispatch);

	const Counter = ({ counter, inc, dec }) => {
		return (
			<div>
				<h1>{counter}</h1>
				<div>
					<button onClick={inc}>INC</button>
					<button onClick={dec}>DEC</button>
				</div>
			</div>
		);
	};

	const update = () => {
		ReactDOM.render(<Counter counter={store.getState()} inc={inc} dec={dec} />,
			document.getElementById('root'));
	}

	update(); // Вызываем первый раз для первой отрисовки компонентов

	store.subscribe(update);
	
	
	// С библиотекой 'react-redux':
	
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { createStore, bindActionCreators } from 'redux';
	import { Provider, connect } from 'react-redux';
	import reducer from './components/reducer';
	import * as actions from './components/actions';

	const store = createStore(reducer);

	const Counter = ({ counter, inc, dec }) => {
		return (
			<div>
				<h1>{counter}</h1>
				<div>
					<button onClick={inc}>INC</button>
					<button onClick={dec}>DEC</button>
				</div>
			</div>
		);
	};

	// Функция для связи state со свойствами компонента. Функция connect передаст в неё state (см. ниже)
	const mapStateToProps = (state) => {
		return {
			counter : state // state простой, состоит из одного counter
		};
	};

	// const {inc, dec} = actions;

	// Функция для связи action creators со свойствами компонента. Функция connect передаст в неё store.dispatch(..) (см. ниже)
	const mapDispatchToProps = (dispatch) => {
		/*
		return {
			inc: () => dispatch(inc()),  // возвращает объект с обёрнутыми в dispatch функции action-creators
			dec: () => dispatch(dec()),
			rnd: () => dispatch(rnd(Math.random())
		};
		*/
		
		return bindActionCreators(actions, dispatch); // или так, если action-creators не принимают дополнительных аргументов
	};

	// Функция connect - компонент высшего порядка, которая возвращает функцию, оборачивающую
	// передаваемый компонент для связи его со store в соответствии с mapStateToProps и mapDispatchToProps.
	// Связь со store осуществляется через consumer контекста, получаемого от Provider (см. ниже)
	const ConnectWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);

	ReactDOM.render((
		<Provider store={store}> // Провайдер для передачи store вниз по иерархии. Инициирует перерисовку компонентов
			<ConnectWrapper />	 // при изменении store
		</Provider>
	), document.getElementById('root'));
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	