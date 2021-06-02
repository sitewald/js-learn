


	// -------------------- React router
	
	// Это не часть React - это библиотека
	
	// cmd
	// npm install react-router-dom // версия для браузера
	
	
	
	/* BrowserRouter, Route ****/
	
	import { BrowserRouter as Router, Route } from 'react-router-dom';
	
	const App extends Component {
		
		render() {
			return (
				<Router>
					<Header />
					<Route path='/shop' component={ShopPage} />
					<Route path='/about' component={AboutPage} />
					
					// При вводе адреса '/about' отрисуется предыдущий компонет
					// и этот - то есть отработают все Route с path, соответствующим введённому адресу.
					// (Важно!!! Это справедливо, если блок с Routes не обёрнут в Switch (см. ниже))
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
					
					// Есть возможность использовать опциональные параметры вида :par?
					// При таком значении path данный компонент будет отрисован и при
					// адресе /persons/ и при адресе /persons/10
					// Такое поведение может быть нужно, когда на одной странице(компоненте)
					// находится список и отображаемый элемент. Тогда при первой загрузке
					// отрисуется список, затем при выборе элемента - элемент. И при этом
					// идентификатор элемента появится в url, то есть если скопировать адрес из
					// адресной строки и вставить, то откроется страница с выбранным элементом (использование ссылки)
					<Route path='/persons/:id?' component={PersonPage} />
					
					<Route component={Footer} /> // Router без path будет срабатывать всегда
				</Router>
			);
		}
	}

	
	
	/* Link ***/
	
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
	
	
	
	/* withRouter() ***/
	
	// Компонент высшего порядка (HOC - higher order component)
	// который при использовании свойства component
	
	<Route path='/list' component={List} />
	
	// позволяет получить доступ к объекту, который явно передаётся при
	// использовании render-функции
	
	<Route path='/list' render={({ match, location, history }) => {...}} />
	
	// withRouter() можно использовать для программного перехода на нужную страницу:
	
	const List = ({ match, location, history ) => {
		return (
		
			// Метод history.push(..) добавляет в историю браузера нужный адрес
			// и инициирует переход по нему:
			<button onClick={() => history.push('/home')}>To Home</button>
			<button onClick={() => history.push('/about')}>About</button>
		);
	};
	
	export default withRouter(List);
	
	// В React router можно использовать относительные пути (без слеша):
	
	history.push('person');
	
	// В данном случае person будет добавлен к текущему абсолютному пути в том случае,
	// если он заканчивается на /
	
	/entities/person
	
	// Дело в том, что путь, заканчивающийся на / расценивается, как папка. Если текущий
	// адрес не заканчивается на /   , то это расценивается, как конечный ресурс и случае
	
	/entities   и history.push('person') произойдёт замена /entities не на /entities/person а на /person
	
	// Этот способ можно использовать для передачи id или другого идентификатора:
	
	/products/
	
	history.push(10);
	
	/products/10
	
	
	
	/* Redirect ***/
	
	// Компонент для перенаправления пользователя по нужному адресу.
	// Позволяет не прибегать к использованию объекта history
	
	import { Redirect } from 'react-router-dom';
	
	const SecretPage = ({ isLogged }) => {
		
		if (!isLogged) {
			return <Redirect to='/login' />;
		}
			
		return <div>Secret text</div>;
	};
	
	export default SecretPage;
	
	
	
	
	/* Switch ***/
	
	// В поисках соответствия введённому адресу Switch последовательно
	// пройдёт по всем Routes и вызовет первый подходящий (все остальные
	// с таким же path вызваны не будут).
	
	import { Switch } from 'react-router-dom';
	
	const App ....
	
		<Switch>
			<Route path='/about' component={AboutHeader} />
			<Route path='/about' component={AbountFooter} /> // Вызван не будет
			
			// Если был введён несуществующий адрес, то в конце можно поставить
			<Redirect to='/not-found-page' />
			
			// или
			<Route render={() => <h1>Not found</h1>} /> // Route без path будет срабатывать всегда
		</Switch>
	
	...
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	