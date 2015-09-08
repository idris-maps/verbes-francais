var secStart = '<div class="section">'
var secEnd = '</div>'

exports.start = function() {
	var html = secStart
		+ '<button id="random">Tous</button>'
		+ '<p>Imperatif</p>'
		+ '<button id="present">Présent</button>'
		+ '<button id="imparfait">Imparfait</button>'
		+ '<button id="passeCompose">Passé composé</button>'
		+ '<button id="passeSimple">Passé simple</button>'
		+ '<button id="futurSimple">Futur simple</button>'
		+ '<button id="plusQueParfait">Plus-que-parfait</button>'
		+ '<button id="passeAnterieur">Passé antérieur</button>'
		+ '<button id="futurAnterieur">Futur antérieur</button>'
		+ '<p>Subjonctif</p>'
		+ '<button id="subjPresent">Présent</button>'
		+ '<button id="subjPasse">Passé</button>'
		+ '<button id="subjImparfait">Imparfait</button>'
		+ '<button id="subjPlusQueParfait">Plus-que-parfait</button>'
		+ '<p>Conditionnel</p>'
		+ '<button id="condPresent">Présent</button>'
		+ '<button id="condPasse1">Passé 1re forme</button>'
		+ '<button id="condPasse2">Passé 2e forme</button>'
		+ secEnd
	return html
}

exports.q = function() {
	var html = secStart
		+ '<p>Temps</p>'
		+ '<p class="big" id="temps"></p>'
		+ '<hr/>'
		+ '<p>Verbe  <span id="tr">traduction</span></p>'
		+ '<div id="trad">'
		+ 	'<p>en allemand: <b id="de"></b></p>'
		+ 	'<p>en anglais: <b id="en"></b></p>'
		+ '</div>'
		+ '<p class="big" id="verb"></p>'
		+ '<hr/>'
		+ '<p>Personne</p>'
		+ '<p class="big" id="pers"></p>'
		+ '<hr/>'
		+ '<p>Réponse</p>'
		+ '<input class="big" type="text" id="a">'
		+ '<hr/>'
		+ '<p class="big ans" id="answer"></p>'
		+ '<button id="ok">OK</button>'
		+ '<button id="next">Continuer</button>'
		+ secEnd
	return html
}

exports.endNoError = function() {
	var html = secStart
		+ '<p id="msg">Bravo, vous avez fait un sans faute.</p>'
		+ '<button id="restart">Recommencer</button>'
		+ secEnd
	return html
}

exports.endOneError = function() {
	var html = secStart
		+ '<p id="msg">Vous avez fait une faute.</p>'
		+ '<button id="ratrap">Réviser</button>'
		+ '<button id="restart">Recommencer</button>'
		+ secEnd
	return html
}

exports.endErrors = function(nb) {
	var html = secStart
		+ '<p id="msg">Vous avez fait ' + nb + ' fautes.</p>'
		+ '<button id="ratrap">Réviser</button>'
		+ '<button id="restart">Recommencer</button>'
		+ secEnd
	return html
}
