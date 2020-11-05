module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"quotes": [0, 'double'],
		"no-extra-semi": 0,
		"semi": 0,
		"space-before-function-paren": 0,
		"indent": 0,
		"no-tabs": 0,
		"brace-style": 0,
		"no-multiple-empty-lines": 0

	}
}
