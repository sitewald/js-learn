


	/* React router ***/
	
	// Это не часть React - это библиотека
	
	// cmd
	// npm install react-router-dom // версия для браузера
	
	import { BrowserRouter as Router, Route } from 'react-router-dom';
	
	const App extends Component {
		
		render() {
			return (
				<Router>
					<Header />
					<Route path='/shop' component={ShopPage} />
					<Route path='/about' component={AboutPage} />
					
					// При вводе адреса '/about' отрисуется предыдущий компонет
					// и этот - то есть отработают все Route с path, соответствующим введённому адресу
					<Route path='/about' component={AboutPageFooter} />
					
					// Можно вместо component использовать render-функцию:
					<Route path='/home' render={() => <h1>Home</h1>} />
					
					// Параметр exact (по умолчанию exact={true}),
					// указывает, что путь должен точно соответствовать, а не являться
					// частью адреса (поведение по умолчанию). Если в данном случае
					// его не указать, то компонент HomePage будет отрисован при любом
					// адресе, содержащем '/'
					<Route path='/' component={HomePage} exact />
					
					// В path можно передать динамический параметр (с использованием ':').
					// Он может содержать число или строку и иметь любое название (не только id).
					// Route передаст в render-функцию объект с тремя свойствами - match (содержит ряд свойств,
					// которые описывают, как соотносится введённый адрес к path данного Route -
					// это свойства isExact, path, url и params, которое и содержит переданный параметр),
					// далее - location (информация о текущем адресе) и history - для работы с history api:
					<Route path='/products/:id' render={({ match /*, location, history */ }) => {
							const { id } = match.params;
							return <ProductPage id={id} />;
						}
					} />
				</Router>
			);
		}
	}
	
	// Компонент Link
	
	import { Link } from 'react-router-dom';
	
	// Используется вместо <a href=''>... (чтобы не перезагружать страницу)
	// Работает с history api браузера (обновляет содержимое адресной строки)
	
	const Header = () => {
		return (
			<div>
				<Link to='/shop'>Shop</Link>
				<Link to='/about'>About</Link>
			</div>
		);
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	