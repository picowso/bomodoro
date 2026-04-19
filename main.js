// i forgot how much i hated javascript
let x = 25*60 - 1
let z = 0
let mode = 0 // 0: focus, 1: break
const btn = document.getElementById("btn");
const brk = document.getElementById("brk");
const txt = document.getElementById("txt");
const mod = document.getElementById("mode");
let listen = null;

// set time based on x
function settimer(z) {
  	xp = Math.floor(z/60);
  	if(xp < 10) xp = "0" + xp;
  	yp = z%60;
  	if(yp < 10) yp = "0" + yp;
  	txt.innerHTML = xp + ":" + yp;
}

btn.addEventListener("click", function() {
	z++;
	if(z == 1) {
		clearInterval(listen);
		x = 25*60 - 1
		mod.innerHTML = "Focus time";
		listen = null;
	}

	// zp++;
	// btn.innerHTML = z;
	if(listen == null) {
		btn.innerHTML = "stop";
		timer();
	}

	else {
		// z = 0;
		clearInterval(listen);
		listen = null;
		btn.innerHTML = "start";
	}
});

brk.addEventListener("click", function() {
	// z++;
	// zp++;
	// btn.innerHTML = z;
	z = 0
	x = 5*60 - 1
	settimer(x+1);
	mod.innerHTML = "Break time";
	btn.innerHTML = "start";
	clearInterval(listen);
	timer();
});

function timer() {
	console.log("yay");
	listen = setInterval(() => {
		if (x < 0) {
			clearInterval(listen);
		    mod.innerHTML = "Done!";
		    return;
	  	}

	  	settimer(x);
	  	x--;
	}, 1000);
}