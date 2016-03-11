module.exports = {
	entry: {
		"EventBus": "./src/index.js",
		"example": "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"@nsisodiya/eventbus": {
			commonjs: '@nsisodiya/eventbus',
			commonjs2: '@nsisodiya/eventbus',
			amd: 'EventBus',
			root: 'EventBus'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};