var $ = require('browserify-zepto')
var tmpl = require('./templates')
var ctrl = require('./ctrl')
var getQ = require('./getQ')
var score = require('./score')

exports.start = function() {
	$('#content').empty()
	$('#content').html(tmpl.start())
	ctrl.start()
}

exports.q = function(t) {
	if(t === 'random') {
		var type = t
		var d = getQ.random()
		var rndm = 'random'
	} else if(t === 'ratrap') {
		var type = t
		var d = score.ratrapQ()
	} else {
		var type = null
		var d = getQ.one(t)
	}
	$('#content').empty()
	$('#content').html(tmpl.q())
	ctrl.q(d, type)	
}

exports.end = function(score) {
	$('#content').empty()
	if(score.wrong === 0) {
		$('#content').html(tmpl.endNoError())
		ctrl.end()		
	} else if(score.wrong === 1) {
		$('#content').html(tmpl.endOneError())		
		ctrl.end()	
	} else {
		$('#content').html(tmpl.endErrors(score.wrong))	
		ctrl.end()
	}
}
