const bubble = document.querySelector(".bubble")
const body = document.querySelector("body");
const container = document.querySelector(".container");


function removeElements(elements){
    for(var i = 0; i < elements.length; i++){
        elements[i].parentNode.removeChild(elements[i]);
    }
}

function remove(el) {
  let element = el;
  element.remove();
}

function play(){
	const audio = document.getElementById("audio");
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}


function randomBubbles(amount){
	for (let i = 0; i < amount; i++){
		let newBubble = document.createElement("img");
		newBubble.classList.add("bubble")
		newBubble.src = "images/1.png"
		let setHeightWidth = randomNum(300);
		newBubble.setAttribute('style', `position: absolute; left: ${randomNum(85)}%; top: ${randomNum(600)}px; height:${setHeightWidth}px; width:${setHeightWidth}px; `)
		body.appendChild(newBubble);
		newBubble.addEventListener('click', function(e){
			play();
			bubbleCount = 1

		if (bubbleCount == 1){
			setTimeout(() => {
	 			 	console.log("Delayed for 2 second.");
	 			 	e.target.src = `images/${bubbleCount}.png`
	 			 	console.log(bubbleCount + 1)
					bubbleCount++;
					console.log(bubbleCount == 2)
					if(bubbleCount == 2){
						console.log("bubble is" + bubbleCount)
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
						
					}	
			}, "70");
				
				setTimeout(() => {
	 			 	console.log("Delayed again for 3 second.");
	 			 	if(bubbleCount == 3){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "100");
			
				setTimeout(() => {
	 			 	console.log("Delayed again for 4 second.");
	 			 	if(bubbleCount == 4){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "130");
				setTimeout(() => {
	 			 	console.log("Delayed again for 5 second.");
	 			 	if(bubbleCount == 5){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "160");
				setTimeout(() => {
	 			 	console.log("Delayed again for 6 second.");
	 			 	if(bubbleCount == 6){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "190");
				setTimeout(() => {
	 			 	console.log("Delayed again for 7 second.");
	 			 	if(bubbleCount == 7){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "220");
				setTimeout(() => {
	 			 	console.log("Delayed again for 8 second.");
	 			 	if(bubbleCount == 8){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "250");
				setTimeout(() => {
	 			 	console.log("Delayed again for 9 second.");
	 			 	if(bubbleCount == 9){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}

				}, "270");
				setTimeout(() => {
	 			 	console.log("Delayed again for 10 second.");
	 			 	if(bubbleCount == 10){
						e.target.src = `images/${bubbleCount}.png`
						bubbleCount++
					}
					remove(this);

				}, "290");
				

			} //large if statement
		
		}) // addeventlistenr

	} //for loop


} // function

randomBubbles(50)

function randomNum(num){
	return Math.floor(Math.random()* num) + 1
}
function randomNum(num){
	return Math.floor(Math.random()* num) + 1
}




