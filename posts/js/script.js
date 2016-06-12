window.addEventListener('load', function() {
	docSetup();
	console.log('loaded!');
});

function docSetup() {
	var menuBtn = document.getElementById('menu-btn');
	var title = document.getElementById('title-text');
	
	title.addEventListener('click', function() {
		window.location = '../index.html#browse';	
	});
	
	menuBtn.addEventListener('click', classToggler);
	
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