


	// Webpack -------------------------------
	
	// Работает в среде node.js
	
	// Анализирует модули и их зависимости и созадёт bundle - один или несколько файлов,
	// готовых для production (или development)
	
	npm install --save-dev webpack webpack-cli // webpack - ядро приложения, webpack-cli - обёртка для работы в командной строке
	
	// Стандартное поведение - ищет в проекте папку src и в ней файл index.js - точка входа, через
	// которую webpack будет искать все зависимости.
	// Он создаст папку dist, куда сложит полученные файлы
	
	npx webpack --mode development // результирующие файлы для режима development создаются в читабельном виде, для 
								   // production - максимально сжатые
								   
	
	
	
	/* webpack.config.js ***/
	
	// Конфигурационный файл для webpack
	
	module.exports = {  // аналог export default для node.js
		mode: 'development'
	};
	
	// Теперь значение mode будет взято из конф. файла
	
	npx webpack