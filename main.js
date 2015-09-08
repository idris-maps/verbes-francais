var $ = require('browserify-zepto')
var sec = require('./lib/sections')
var score = require('./lib/score')
var ctrl = require('./lib/ctrl')


$(document).ready(function() {
	score.resetCurrent()
	sec.start()
	ctrl.head()
})
