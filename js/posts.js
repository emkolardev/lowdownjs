var list = function() {

	//=============================
	var posts = [
		
		{file: 'this.html', date: '02-15-2016', cat: 'general'},
		{file: 'eg.html', date: '02-16-2016', cat: 'frameworks'}
		
	];
	//=============================
		
	var path = '../posts/';
	
	var postsData = posts.map(function(p) {
		var newPath = path + p.file;
		var d = new Date(p.date);
		return {file: newPath, date: d, cat: p.cat};
	});
	
	return postsData;
	
};
