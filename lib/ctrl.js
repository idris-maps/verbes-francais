var $ = require('browserify-zepto')
var sec = require('./sections')
var score = require('./score')

exports.head = function() {
	$('#header').on('click', function() {
		sec.start()
	})
}

exports.start = function() {
	$('#random').on('click', function() {
		sec.q('random')
	})
	$('#present').on('click', function() {
		sec.q('présent')
	})	
	$('#imparfait').on('click', function() {
		sec.q('imparfait')
	})	
	$('#passeCompose').on('click', function() {
		sec.q('passé composé')
	})	
	$('#passeSimple').on('click', function() {
		sec.q('passé simple')
	})
	$('#futurSimple').on('click', function() {
		sec.q('futur simple')
	})
	$('#plusQueParfait').on('click', function() {
		sec.q('plus-que-parfait')
	})
	$('#passeAnterieur').on('click', function() {
		sec.q('passé antérieur')
	})
	$('#futurAnterieur').on('click', function() {
		sec.q('futur antérieur')
	})
	$('#subjPresent').on('click', function() {
		sec.q('subjonctif présent')
	})
	$('#subjPasse').on('click', function() {
		sec.q('subjonctif passé')
	})
	$('#subjImparfait').on('click', function() {
		sec.q('subjonctif imparfait')
	})
	$('#subjPlusQueParfait').on('click', function() {
		sec.q('subjonctif plus-que-parfait')
	})
	$('#condPresent').on('click', function() {
		sec.q('conditionnel présent')
	})
	$('#condPasse1').on('click', function() {
		sec.q('conditionnel passé 1re forme')
	})
	$('#condPasse2').on('click', function() {
		sec.q('conditionnel passé 2e forme')
	})
}

exports.q = function(q,type) {
	$('#answer').hide()
	$('#trad').hide()
	$('#next').hide()
	$('#verb').text(q.v)
	$('#pers').text(q.p)
	$('#temps').text(q.temps)
	$('#de').text(q.t.de)
	$('#en').text(q.t.en)
	$('#answer').text(q.a)
	$('#tr').on('click', function() {
		$('#trad').toggle()
	})
	$('#ok').on('click', function() {
		var aU = $('#a').val()
		var a = $('#answer').text()
		if(aU.toUpperCase() === a.toUpperCase()) {
			$('#answer').css('background-color', '#449D44')
			if(type === 'ratrap') { score.ratrapRm(q) } 
			else {score.q(true, null)}
		} else {
			$('#answer').css('background-color', '#C9302C')
			score.q(false, q)
		}
		$('#answer').show()
		$('#ok').hide()
		$('#next').show()
		$('#next').on('click', function() {
			var c = score.count()
			console.log('c', c)
			console.log('type', type)
			if(c > 9 && type !== 'ratrap') {
				console.log('yes')
				sec.end(score.current())			
			} else {
				if(type === 'random') { 
					sec.q('random') 
				} else if(type === 'ratrap') { 
					if(score.current().failed.length === 0) {
						sec.start()
						score.resetCurrent()
					} else {
						sec.q('ratrap')
					}
				} else { 
					sec.q(q.temps)
				}
			}
		})
	})
}

exports.end = function() {
	$('#restart').on('click', function() {
		sec.start()
		score.resetCurrent()
	})
	$('#ratrap').on('click', function() {
		sec.q('ratrap')
	})
}
