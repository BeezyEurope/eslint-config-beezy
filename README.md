# eslint-config-beezy

This is a shareable Linter(eslint and stylelint) configuration that enforces Beezy's style guide.

ESLint is a tool for identifying and reporting on patterns found in JavaScript code, with the goal of making code more consistent and avoiding bugs. It's an invaluable tool when working with other engineers.

## Usage

Install the conventions by running:

```
yarn add prettier eslint @beezyinc/eslint-config-beezy -E -D
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "@beezyinc/eslint-config-beezy",
  "rules": {
    // your overrides
  }
}
```

Then add the extends to your project that uses `.sass` syntax `stylelint.config.js`:

```javascript
{
  "extends": "@beezyinc/eslint-config-beezy/stylelint.config.sass.js",
  "rules": {
    // your overrides
  }
}
```

Then add the extends to your project that uses `.scss` syntax `stylelint.config.js`:

```javascript
{
  "extends": "@beezyinc/eslint-config-beezy/stylelint.config.scss.js",
  "rules": {
    // your overrides
  }
}
```

Also extend the prettier config to your `package.json`:

```javascript
{
     "prettier": "@beezyinc/eslint-config-beezy/.prettierrc.js",
}
```

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [Prettier options](https://prettier.io/docs/en/options.html) go to `.prettierc` file.
Note that all styling rules are disabled in eslint so that prettier can take control of this (trailing comma, and single quote), so be careful not to activate them because they may conflict with Prettier.

## With VS Code

You probably want your editor to lint and fix it for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
// These are all our auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```
