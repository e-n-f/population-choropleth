var oboe = require('oboe');
var fs = require('fs');
var turf = require('turf');

var f = fs.createReadStream("tabblock2010_06_pophu.json");
oboe(f).on('node', '*', function(node){
	if (node.type === "Feature") {
		if (node.properties["POP10"] > 0) {
			node.properties.area = turf.area(node);
			console.log(JSON.stringify(node));
		}
		return oboe.drop;
	}
}).done(function() {

}).fail(function(err) {
	console.error(err);
});
