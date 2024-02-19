module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'vue'],
	rules: {
		'no-console': 'off'
		// "indent": [
		//     "error",
		//     "tab"
		// ],
		// "linebreak-style": [
		//     "error",
		//     "windows"
		// ],
		// "quotes": [
		//     "error",
		//     "single"
		// ],
		// "semi": [
		//     "error",
		//     "never"
		// ]
	},
	ignorePatterns: ['node_modules/']
}
