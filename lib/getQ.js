var data = require('../data/data.json')
var p = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles']

exports.one = function(tempsChoice) {
	var verbRndm = Math.floor(Math.random() * data.length)
	var persRndm = Math.floor(Math.random() * 6)
	var verb = data[verbRndm]
	var t
	for(i=0;i<verb.temps.length;i++) {
		if(verb.temps[i].temps === tempsChoice) {
			t = verb.temps[i].pers
			break
		}
	}

	var pers = p[persRndm]
	var answer = t[persRndm]
	var trad = verb.trad
	var toSend = {
		v: verb.infinitif,
		p: pers,
		a: answer,
		t: trad,
		temps: tempsChoice
	}
	return toSend
}

exports.random = function() {
	var verbRndm = Math.floor(Math.random() * data.length)
	var persRndm = Math.floor(Math.random() * 6)
	var verb = data[verbRndm]
	var tempRndm = Math.floor(Math.random() * verb.temps.length)
	var t = verb.temps[tempRndm].pers
	var tp = verb.temps[tempRndm].temps
	var pers = p[persRndm]
	var answer = t[persRndm]
	var trad = verb.trad
	var toSend = {
		v: verb.infinitif,
		p: pers,
		a: answer,
		t: trad,
		temps: tp
	}
	return toSend
}
