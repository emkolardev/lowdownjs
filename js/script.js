//var results, shown, list;

window.addEventListener('load', function() {
	if (window.location !== './index.html#browse') { window.location = './index.html#browse'; }
	docSetup();
	makeListElements(showList());
});

function docSetup() {
	// assignments
	var tabs = document.getElementsByClassName('tabLink');
	var menuBtn = document.getElementById('menu-btn');
	var title = document.getElementById('title-text');
	results = [];
	shown = 0;
	
	title.addEventListener('click', function() {
		window.location = './index.html#browse';
	});
	
	// event listeners
	menuBtn.addEventListener('click', classToggler);
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', classToggler);
	}
	
	function classToggler(evt) {
		var targetEl;
		var toggleClass = evt.target.dataset.class;
		if (evt.target.dataset.remove) {
			targetEl = document.getElementsByClassName(evt.target.dataset.remove);
			for (var i = 0; i < targetEl.length; i++) { targetEl[i].classList.remove(toggleClass); }
			this.classList.add(toggleClass);
			return null;
		}
		if (evt.target.dataset.target) { targetEl = document.getElementById(evt.target.dataset.target); }
		else { targetEl = this; }
		targetEl.classList.toggle(toggleClass);
		return null;		
	}
}

function showList() {
	//=============================
	var posts = [
		
		['"This"', 'this.html', '02-16-2016', 'general'],
		['Random Eg', 'eg.html', '02-17-2016', 'frameworks']
	];
	//=============================	
	var path = '../posts/';
	var postsData = posts.map(function(p) {
		var newPath = path + p[1];
		var d = new Date(p[2]);
		return {file: newPath, date: d, cat: p[3]};
	}); 	
	return postsData;
}

function makeListElements(posts) {
	
}