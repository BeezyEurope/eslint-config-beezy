module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"jest": true
	},
	"extends": ["airbnb", "prettier", "prettier/react"],
	"plugins": ["prettier", "import", "react", "jsx-a11y"],
	"parser": "babel-eslint",
	"rules": {
		"prettier/prettier": "warn",
		"no-return-assign": "error",
		"no-else-return": "warn",
		"import/no-cycle": "off",
		"jsx-a11y/accessible-emoji": "warn",
		"jsx-a11y/anchor-is-valid": "warn",
		"jsx-a11y/click-events-have-key-events": "warn",
		"jsx-a11y/interactive-supports-focus": "warn",
		"jsx-a11y/label-has-associated-control": "warn",
		"jsx-a11y/label-has-for": "warn",
		"jsx-a11y/mouse-events-have-key-events": "warn",
		"jsx-a11y/no-noninteractive-element-interactions": "warn",
		"jsx-a11y/no-static-element-interactions": "warn",
		"react/button-has-type": "error",
		"react/destructuring-assignment": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-curly-brace-presence": "warn",
		"react/no-array-index-key": "warn",
		"react/no-multi-comp": "off",
		"react/require-default-props": "warn",
		"react/sort-comp": "warn",
		"react/jsx-fragments": "off",
		"react/jsx-props-no-spreading": "off",
		"react/static-property-placement": "warn",
		"react/state-in-constructor": "warn",
		"react/no-deprecated": "warn",
		"react/no-find-dom-node": "off"
	}
}
