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
		"jsx-a11y/click-events-have-key-events": "warn",
		"jsx-a11y/label-has-for": "warn",
		"jsx-a11y/mouse-events-have-key-events": "warn",
		"jsx-a11y/no-noninteractive-element-interactions": "warn",
		"react/button-has-type": "error",
		"react/destructuring-assignment": "off",
		"react/jsx-filename-extension": "off",
		"react/require-default-props": "warn",
		"react/sort-comp": "warn",
		"react/jsx-curly-brace-presence": "warn"
	}
}
