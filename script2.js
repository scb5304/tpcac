window.addEventListener("load", () => {
	let app = document.getElementById('app');
    if (app && document.title === "Pokémon - Viewer Page") {
		let enabled = true;
    	let sound = new Audio();
		sound.src = chrome.extension.getURL("pokeball.mp3");
		
		setInterval(() => {
			let pulsatingElement = document.querySelector('[class*="pulsating"]');
			if (pulsatingElement && enabled) {
				enabled = false;
				sound.play();
				
				let classNames = pulsatingElement.className.split(' ');
				for (let className of classNames) {
					if (className.indexOf('pulsating') !== -1) {
						pulsatingElement.classList.remove(className);
					}
				}
			
				setTimeout(() => {
					enabled = true;
				}, 10000);
			}	
		}, 2500);
    }
	
});