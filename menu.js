// document.ready()
document.addEventListener("DOMContentLoaded", function() {
	const el = document.querySelector(".nav-list");

	document.querySelector(".burger").addEventListener("click", function() {
		if (el.classList) {
			el.classList.toggle("open");
		} else {
			const classes = el.className.split(" ");
			const existingIndex = classes.indexOf("open");

			if (existingIndex >= 0) classes.splice(existingIndex, 1);
			else classes.push("open");

			el.className = classes.join(" ");
		}
	});
});
