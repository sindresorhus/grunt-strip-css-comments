'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should strip CSS comments', function () {
	var actual = grunt.file.read('test/tmp/stripped.css');
	var expected = grunt.file.read('test/fixture/expected.css');
	assert.equal(actual, expected);
});
