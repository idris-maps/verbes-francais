exports.resetCurrent = function() {
	window.score = {
		current: {
			right: 0,
			wrong: 0,
			failed: [],
			count: 0
		}	
	}
}

exports.q = function(bool, q) {
	window.score.current.count = window.score.current.count + 1
	if(bool === true) { 
		window.score.current.right =  window.score.current.right + 1 
	}
	if(bool === false) {
		window.score.current.wrong = window.score.current.wrong + 1
		window.score.current.failed.push(q)
	}
	console.log(score.current)
}

exports.count = function() {
	return window.score.current.count
}

exports.current = function() {
	return window.score.current
}

exports.ratrapQ = function() {
	var nb = window.score.current.failed.length;
	var rndm = Math.floor(Math.random() * nb)
	return window.score.current.failed[rndm]
}

exports.ratrapRm = function(q) {
	var newFailed = []
	var fs = window.score.current.failed
	for(i=0;i<fs.length;i++) {
		var f = fs[i]
		if(q.v == f.v && q.temps == f.temps && q.p == f.p) {
			
		} else {
			newFailed.push(f)
		}
	}
	window.score.current.failed = newFailed
}
