module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'jest': true
	},
	'extends': ['airbnb', 'prettier', 'prettier/react'],
	'plugins': ['prettier', 'import', 'react', 'jsx-a11y', 'react-hooks'],
	'parser': 'babel-eslint',
	'rules': {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				mjs: 'never'
			}
		],
		'import/no-cycle': 'off',		
		'import/prefer-default-export': 'warn',
		'jsx-a11y/accessible-emoji': 'warn',
		'jsx-a11y/anchor-is-valid': 'warn',
		'jsx-a11y/click-events-have-key-events': 'warn',
		'jsx-a11y/interactive-supports-focus': 'warn',
		'jsx-a11y/label-has-associated-control': 'warn',
		'jsx-a11y/label-has-for': 'warn',
		'jsx-a11y/mouse-events-have-key-events': 'warn',
		'jsx-a11y/no-noninteractive-element-interactions': 'warn',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'max-classes-per-file': ['error', 3],
		'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
		'no-else-return': 'warn',
		'no-nested-ternary': 'off',
		'no-param-reassign': ["error", { "props": false }],
		'no-plusplus': 'off',
		'no-restricted-syntax': 'warn',
		'no-return-assign': ['error', 'except-parens'],
		'no-undef': ['error', { 'typeof': false }],
		'no-use-before-define': ['warn', { 'functions': false, 'classes': true, 'variables': false }],
		'no-useless-escape': 'off',
		'no-unused-expressions': [
			'off',
			{
			  'allowShortCircuit': true,
			  'allowTernary': true
			}
		],
		'prefer-destructuring': ['error', { 'object': true, 'array': false }],
		'prettier/prettier': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react/button-has-type': 'error',
		'react/destructuring-assignment': 'off',
		'react/forbid-prop-types': ['error', { 'forbid': ['object', 'array'] }],
		'react/jsx-curly-brace-presence': 'warn',
		'react/jsx-filename-extension': 'off',
		'react/jsx-fragments': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-find-dom-node': 'off',
		'react/no-multi-comp': 'off',
		'react/require-default-props': 'warn',
		'react/sort-comp': 'warn',
		'react/static-property-placement': ['warn', 'static public field']
	},
	'settings': {
		'import/resolver': {
			node: {
				moduleDirectory: ['./node_modules']
			}
		},
		'react': {
			'version': 'latest'
		}
	}
}
