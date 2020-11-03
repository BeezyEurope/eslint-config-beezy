module.exports = {
	defaultSeverity: 'warning',
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: 'inside-block',
				ignoreAtRules: ['after-comment', 'include', 'import', 'keyframes']
			}
		],
		'at-rule-name-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'at-rule-name-space-after': 'always',
		'at-rule-semicolon-newline-after': [
			'always',
			{
				severity: 'error'
			}
		],
		'at-rule-no-vendor-prefix': [
			true,
			{
				severity: 'error'
			}
		],
		'block-closing-brace-newline-after': [
			'always',
			{
				severity: 'error'
			}
		],
		'block-closing-brace-newline-before': 'always',
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'color-hex-length': 'short',
		'color-named': [
			'never',
			{
				ignore: 'inside-function'
			}
		],
		'color-no-invalid-hex': [
			true,
			{
				severity: 'error'
			}
		],
		'declaration-bang-space-after': [
			'never',
			{
				severity: 'error'
			}
		],
		'declaration-bang-space-before': [
			'always',
			{
				severity: 'error'
			}
		],
		'declaration-block-no-duplicate-properties': [
			true,
			{
				severity: 'error'
			}
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-property-value-disallowed-list': [
			{
				border: 'none',
				'border-top': 'none',
				'border-right': 'none',
				'border-bottom': 'none',
				'border-left': 'none'
			},
			{
				message: 'Unexpected value in border. Use zero instead of none',
				severity: 'error'
			}
		],
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': [
			'always-multi-line',
			{
				severity: 'error'
			}
		],
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': [
			true,
			{
				severity: 'error'
			}
		],
		'function-max-empty-lines': 0,
		'function-name-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'function-parentheses-space-inside': 'never',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		indentation: 2,
		'length-zero-no-unit': [
			true,
			{
				severity: 'error'
			}
		],
		'max-empty-lines': 1,
		'max-nesting-depth': [
			4,
			{
				ignoreAtRules: ['media', 'supports', 'include']
			}
		],
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-space-after': 'always',
		'media-query-list-comma-space-before': 'never',
		'no-duplicate-selectors': [
			true,
			{
				severity: 'error'
			}
		],
		'no-eol-whitespace': true,
		'no-extra-semicolons': [
			true,
			{
				severity: 'error'
			}
		],
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': true,
		'number-leading-zero': 'never',
		'number-no-trailing-zeros': true,
		'order/order': [
			[
				'custom-properties',
				'dollar-variables',
				{
					type: 'at-rule',
					name: 'extend'
				},
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: false
				},
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: true
				},
				'declarations',
				'rules'
			]
		],
		'property-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: 'first-nested',
				ignore: 'after-comment'
			}
		],
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-function-pattern': /^\@[a-z]+ +([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension-blacklist': 'scss',
		'scss/at-mixin-pattern': /^\@[a-z]+ +([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/,
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-pattern': [
			/^\$[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/,
			{
				ignore: 'global'
			}
		],
		'scss/percent-placeholder-pattern': /^[a-z]+([a-z-]+[a-z]+)?$/,
		'scss/selector-no-redundant-nesting-selector': true,
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-class-pattern': [
			/^\.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/,
			{
				message: 'Selector should be written in lowercase following the BEM format (selector-class-pattern)'
			}
		],
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-space-before': 'never',
		'selector-max-compound-selectors': 4,
		'selector-max-empty-lines': 0,
		'selector-max-id': [
			0,
			{
				severity: 'error'
			}
		],
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'selector-pseudo-element-colon-notation': [
			'double',
			{
				message: 'Use double colon for pseudo elements',
				severity: 'error'
			}
		],
		'selector-pseudo-element-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'string-quotes': 'single',
		'unit-case': [
			'lower',
			{
				severity: 'error'
			}
		],
		'value-keyword-case': 'lower',
		'value-list-comma-space-after': 'always',
		'value-list-comma-space-before': 'never',
		'value-no-vendor-prefix': true
	}
};
