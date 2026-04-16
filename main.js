// i forgot how much i hated javascript
let x = 25*60 - 1, z = 0
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
let listen = null;

btn.addEventListener("click", function() {
	z++;
	// zp++;
	// btn.innerHTML = z;
	if(listen == null) timer();

	else {
		// z = 0;
		clearInterval(listen);
		listen = null;
		btn.innerHTML = "start";
	}
});

function timer() {
	console.log("yay");
	btn.innerHTML = "stop";
	listen = setInterval(() => {
		if (x < 0) {
			clearInterval(timer);
		    txt.innerHTML = "Done!";
		    return;
	  	}

	  	xp = Math.floor(x/60);
	  	if(xp < 10) xp = "0" + xp;
	  	yp = x%60;
	  	if(yp < 10) yp = "0" + yp;
	  	txt.innerHTML = xp + ":" + yp;
	  	x--;

	}, 1000);
}