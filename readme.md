# grunt-strip-css-comments [![Build Status](https://travis-ci.org/sindresorhus/grunt-strip-css-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-strip-css-comments)

> Strip comments from CSS using [`strip-css-comments`](https://github.com/sindresorhus/strip-css-comments)


## Install

```
$ npm install --save-dev grunt-strip-css-comments
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	stripCssComments: {
		dist: {
			files: {
				'dist/app.css': 'src/app.css'
			}
		}
	}
});

grunt.registerTask('default', ['stripCssComments']);
```


## Options

See the `strip-css-comments` [options](https://github.com/sindresorhus/strip-css-comments#options).



## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
