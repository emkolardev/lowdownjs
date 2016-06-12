var MongoClient = require('mongodb').MongoClient;

var findDocs = function(db, callback) {
	var collection = db.collection('posts');
	if (collection) {
		collection.find({}).toArray(function(err, docs) {
			if (err) { throw err; }
			//console.log('found records:');
			return callback(docs);
		});
	}
};

	MongoClient.connect('mongodb://localhost:27017/content', function(err, db) {
		if (err) {
			throw err;
		}
		console.log("Connected correctly to server");
		findDocs(db, function(result) {
			var text = result.map(function(r) {
				var t = r.text.toString();
				var paragraphs = t.split('+');
				var d = new Date(r.date);	
				return {id: r._id, title: r.title, text: paragraphs, date: d, category: r.category};
			});
			//console.log(postings);
			db.close();
			return text;
		});
	});

exports.posts = findDocs;