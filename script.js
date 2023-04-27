let bubble = document.querySelector(".bubble")
const body = document.querySelector("body");
const container = document.querySelector(".container");
const printScore = document.getElementById("score");
let score = 0
let point = 10
let bubbleArray = [bubble, bubble, bubble, bubble]


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

function setScore(height, width){
	
	if(height >= 150 && width >= 150){
		score = score + 5
		printScore.textContent = score;
		point = point - 1
	}
	else if (height >= 100 && width >= 100 && height <= 149 && width <= 149){
		score = score + 10
		printScore.textContent = score;
		point--
	}
	else if (height >= 50 && width >= 50 && height <= 99 && width <= 99){
		score = score + 15
		printScore.textContent = score;
		point--
	}
	else if (height >= 25 && width >= 25 && height <= 49 && width <= 49){
		score = score + 20
		printScore.textContent = score;
		point--
	}
	else if (height >= 10 && width >= 10 && height <= 24 && width <= 24){
		score = score + 25
		printScore.textContent = score;
		point--
	}
	else{
		score = score + 30
		printScore.textContent = score
		point--
	}
	if (point <= 0){
		printScore.textContent = "You won!";
	}	
}

function winner(point){
	let win = createBubbles()
	if (win == 0){
		console.log("You win!");
	}
	return win;
}

function animationStage(e, count){
	if(bubbleAnimationStage == count){
		e.target.src = `images/${bubbleAnimationStage}.png`;
		return bubbleAnimationStage++;
	}
}

function makeBubblesFloat(){

		const bubbleFloat = { transform: "translateY(-100vw)"};
		const bubbleTiming = {
		duration: 10000,
		iterations: 1,	
		}
	bubble.animate(bubbleFloat, bubbleTiming);

			
}

const timer = (time) => time; 


// var i = 1;                  //  set your counter to 1

// function myLoop() {         //  create a loop function
//   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
//     console.log('hello');   //  your code here
//     i++;                    //  increment the counter
//     if (i < 10) {           //  if the counter < 10, call the loop function
//       myLoop();             //  ..  again which will trigger another 
//     }                       //  ..  setTimeout()
//   }, 3000)
// }

// myLoop(); 

function testBubbleCreate(i){
	bubble = document.createElement("img");
	bubble.classList.add("bubble") // adds a general class to newly created img element
	bubble.src = "images/1.png" // displays the first set of images before it animate through the cycle
	let setHeightWidth = randomNum(200);
	const height = bubble.style.height = setHeightWidth
	const width = bubble.style.width = setHeightWidth
	bubble.setAttribute('style', `position: absolute; left: ${randomNum(90)}%; top: 750px; height:${height}px; width:${width}px;`)
	setScore(height, width);
	bubbleArray.push(bubble)
	container.appendChild(bubble);
	makeBubblesFloat();
}	


function removeImg(){
	const images = document.getElementById("image-parent");
	images.removeChild(images.firstElementChild);
}

function createBubbles(){


	
		
		let i = 0;
		while (i < 8) {
  		loop(i);
  		i++
		}
		

	function loop(i){
  		setTimeout(function(){
    		testBubbleCreate()
    		setTimeout(() =>{
    			removeImg();
    		}, "8000");

	
			bubble.addEventListener('mouseover', function(e){
						play();
						
						bubbleAnimationStage = 1;
						animationStage(e, 1);
						setTimeout(() => {
			 			    animationStage(e, 2);
						}, "70");
						
						setTimeout(() => {
			 			 	animationStage(e, 3);
						}, "100");
						setTimeout(() => {
			 			 	animationStage(e, 4);
						}, "130");
						setTimeout(() => {
			 			 	animationStage(e, 5)
						}, "160");
						setTimeout(() => {
			 			 	animationStage(e, 6)
						}, "190");
						setTimeout(() => {
			 			 	animationStage(e, 7)
						}, "220");
						setTimeout(() => {
			 			 	animationStage(e, 8)
						}, "250");
						setTimeout(() => {
			 			 	animationStage(e, 9)
						}, "270");
						setTimeout(() => {
			 			 	animationStage(e, 10)
							remove(this);
						}, "290");
					}) // addeventlistener mouseover
			
  		}, 2000 * i)
	}


	//window load
};// function

// function createBubbles(amount){
// 	for (let i = 0; i < amount; i++){
// 		let newBubble = document.createElement("img"); //create new image element 
// 		newBubble.classList.add("bubble") // adds a general class to newly created img element
// 		newBubble.src = "images/1.png" // displays the first set of images before it animate through the cycle
// 		let setHeightWidth = randomNum(200);
// 		let height = newBubble.style.height = setHeightWidth
// 		let width = newBubble.style.width = setHeightWidth
// 		newBubble.setAttribute('style', `position: absolute; left: ${randomNum(90)}%; top: ${randomNum(700)}px; height:${height}px; width:${width}px;`)
// 		body.appendChild(newBubble);
// 		newBubble.addEventListener('click', function(e){
// 			play();
// 			setScore(height, width);
// 			bubbleCount = 1

// 		if (bubbleCount == 1){
// 			setTimeout(() => {
// 	 			 	e.target.src = `images/${bubbleCount}.png`
// 					bubbleCount++;
// 					if(bubbleCount == 2){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++	
// 					}	
// 			}, "70");
				
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 3){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "100");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 4){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "130");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 5){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "160");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 6){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "190");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 7){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "220");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 8){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "250");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 9){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 				}, "270");
// 				setTimeout(() => {
// 	 			 	if(bubbleCount == 10){
// 						e.target.src = `images/${bubbleCount}.png`
// 						bubbleCount++
// 					}
// 					remove(this);
// 				}, "290");
				

// 			} //large if statement
		
// 		}) // addeventlistenr

// 	} //for loop

// } // function
function randomNum(num){ return Math.floor(Math.random()* num) + 1 };
createBubbles();


