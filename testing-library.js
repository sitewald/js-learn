

	// При использовании create-react-app устанавливать 
	
	npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event
	
	// не нужно, поскольку они входят по умолчанию (см. package.json)
	
	// Все файлы, имеющие расширение .test.js будут считаться тестами
	
	// В папке компонента создаём папку __test__ и в ней some-name.test.js
	
	import { render } from "@testing-library/react";
	
	// Метод test первым параметром принимает описание теста, далее - callback функцию
	test('test title of shop-header', () => {
		
		// Компоненты, содержащие <Link /> надо оборачивать в <BrowserRouter>
		const shopHeader = render(<BrowserRouter><ShopHeader /></BrowserRouter>);
		
		// Есть много вариантов нахождения нужного элемента в тестируемом компоненте (intellisense
		// покажет после shopHeader. 
		// Одним из надёжных является добавление атрибута data-testid='shop-name' тестируемому элементу
		// и дальнейшее получение его с помощью .getByTestId(..)
		const shopNameEl = shopHeader.getByTestId('shop-name');
		
		// assert-section
		expect(shopNameEl.textContent).toBe('React Book Shop');
	});

	// или:
	
	const shopHeader = <BrowserRouter><ShopHeader /></BrowserRouter>;

	test('test cart initial count = 0', () => {
		const { getByTestId } = render(shopHeader);
		const cartCountEl = getByTestId('cart-count');
		expect(cartCountEl.textContent).toBe('0');
	});
	
	// для вызова события в тесте:
	
	import { render, fireEvent } from '@test-library/react';
	
	test('test button click increases counter by 1', () => {
		const { getByTestId } = render(<Counter />);
		const btnEl = getByTestId('increase-button');
		const counterEl = getByTestId('counter-value');
		
		fireEvent.click(btnEl); // вызываем клик по кнопке
		
		expect(counterEl.textContent).toBe('1');
	});
	
	// В библиотеке есть методы beforeAll, beforeEach, afterEach и др., которые
	// позволяют выполнять подготовку к тестам и др.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	