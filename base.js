

	/******** ОСНОВЫ ЯЗЫКА JAVASCRIPT */
	
	// В большинстве случаев можно не использовать точку с запятой
	// Кавычки - можно использовать любые
	// one line comment
	/*
		many lines comment
	*/
	
	// ------------ Переменные
	
	// Именование:
	
	let ab = 'ab'; // Буквы (любые вариации). Рекомендуется camel case: firstName
	let _ = 1; // Нижнее подчёркивание (любые вариации) 
	let $ = 2; // Знак доллара (любые вариации)
	let v3 = 3; // Числа можно использовать, но не в качестве первого символа
	
	// Объявление:
	
	var name = 'js'; // var - устарело. Значение можно менять
	
	let i; // объявление переменной, переменная имеет значение undefined
	i = 1; // инициализация
	
	const first = '1'; // константа - значение менять нельзя. Просто объявить константу нельзя - надо присвоить значение!
	let age = 100; // значение можно менять
	
	// Лучше всегда использовать const
	
	
	// ------------- Тип данных
	
	// Определить тип переменной:
	
	const i = 1;
	console.log(typeof i);
	// или
	console.log(typeof(i));
	
	// Примитивные типы:
	const a = 'a'; // ----- string
	const i = 1; // ------- number
	const f = true; // ---- boolean
	let u; // ------------- undefined (или let u = undefined)
	let n = null; // ----- null (typeof null вернёт object)
	
	// Числа:

	
	
	// ------------ Мутирование
	
	// + для строк - конкатенирование
	
	let str = 'my name is ' + 'Serg'; // my name is Serg
	
	let str = 'my age is ' + 10; // my age is 10 -> движок javascript привёл 10 к строке (10.toString())
	
	
	
	// ------------ Логические операторы
	
	true && true // true
	true && false // false
	true || false // true
	false || false // false
	!true // false
	!!true // true
	
	
	
	// ------------- Условные операторы
	
	// === сравнение с приведением типов
	// == сравнение без приведения типов (лучше не использовать)
	
	let i = 0;
	
	if (i === 0) {
		// todo
	} else if {
		// todo
	} else {
		// todo
	}
	
	// Тернарный оператор
	let a = true ? 1 : 0;
	
	// switch
	let i = 0;

	switch (i) {
		case 0: {
			console.log(0);
			break;
		}
		case 1: {
			console.log(1);
			break;
		}
		default: console.log(NaN);
	}
	
	// ------------ Циклы
	
	const arr = ['one', 'two', 'three'];
	const obj = { name: 'Serg', age: 20 };

	// for
	for (let i = 0; i < arr.length; i++)
	{
		console.log(arr[i]);
	}

	// for ... of
	// Выведет значения элементов массива. Объект не итерируется
	for (let item of arr) {
		console.log(item);
	}

	// for .. in
	// В переменную field попадает индекс массива или имя свойств объекта.
	// Отображение значений свойств объекта возможно через квадратные скобки(вместо индекса - имя свойства)
	for (let field in obj) {
		console.log(field);
		console.log(obj[field]);
	}

	for (let index in arr) {
		console.log(index);
		console.log(arr[index]);
	}

	// while
	let i = 0;

	while (i < arr.length) {
		console.log(arr[i]);
		i++;
	}

	// do-while
	do {
		console.log(arr[i]);
		i++;
	}
	while (i < arr.length);
	
	// для выхода из цикла break(или return внутри функции), для продолжения continue
	
	
	
	// ------------ Объекты
	
	let obj = {
		name: 'Serg',
		age: 20,
		say: function () {
			console.log('hello');
		}
	};

	console.log(obj.name);
	console.log(obj['name']); // либо через квадратные скобки, но название свойства в виде строки.
	// Обращение к свойству-функции объекта через строковое название или вызов без круглых скобок
	// выведет в консоль содержимое её определения
	
	// Можно добавить ключ, которого изначально не было:
	obj.newField = 100;
	
	
	
	// last JavaScript Основы для Начинающих - Полный Курс за 6 часов [2020].mp4 - (1:45:00)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	