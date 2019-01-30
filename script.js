function onInit() {
    

    let app = document.getElementById('app');
    if (app && document.title === "Pokémon - Viewer Page") {
    	let sound = new Audio();
		sound.src = chrome.extension.getURL("pokeball.mp3");

        setInterval(() => {
			let pulsatingElement = document.querySelector('[class*="pulsating"]');
            if (pulsatingElement) {
                sound.play();
            } else {
            	sound.pause();
            }
        }, 2500)
    }
}
window.addEventListener("load", onInit);