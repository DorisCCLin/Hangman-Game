//loop through 'what' aud check if a word is present

//how to subsititude the correct letter eith the current dash

//when you guess correct ->happens

var answers= ['eggs','banana','happy','opt','fox','range']
var randomAns = answers[Math.floor(Math.random()* answers.length)];
console.log(randomAns)

var letters = document.getElementById('letters')
var keyBoard = document.getElementById('keyBoard')



for(var i=0;i<randomAns.length;i++){
	var  para = document.createElement('p')
	var dashes = document.createTextNode("_")
	para.appendChild(dashes);
	letters.appendChild(para);
	para.setAttribute('class','paras')
}

var paras = document.getElementsByClassName('paras');

var array = randomAns.toUpperCase().split('')

var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z']

for(i=0;i< alpha.length;i++){
var key = document.createElement('div')
var ABC = document.createTextNode(alpha[i])
	key.style.width='50px'
	key.style.height="50px"
	key.style.border='1px solid'
	key.style.display = 'inline-block'
	key.style.margin = '10px'
	keyBoard.appendChild(key)
	key.appendChild(ABC)
	key.setAttribute('class','keys')
}

var keys = document.getElementsByClassName('keys');



// for(i=0;i<26;i++){
//    keys[i].innerHTML = alpha[i]
// }

var clicks = 0;
for(let i=0;i<keys.length;i++){
	keys[i].addEventListener('click', function(){
		var text = keys[i].textContent;	
		console.log(text)
		check(text);	
	})
}

var arr = []
var arrUsed = []
var msg = document.getElementById('message');
var bubble = document.getElementById('bubble');

function check(letter){
var found = 0
clicks += 1;
for (var i=0; i<array.length; i++){
	if (letter === array[i]){
			paras[i].innerText = letter
			found++
			arr.push(paras[i].innerHTML)
			arrUsed.push(letter)			
			bubble.innerHTML = 'Great! keep going!'
			winning();
			clickCount()
			if (clicks >=5){
			bubble.innerHTML = 'You lose'
			}							
		}	 
	}							
	
if (found === 0) {
	if (arrUsed.includes(letter) === true){
			clicks -= 1;
			bubble.innerHTML = 'You have guessed '+ letter	
	} else {		
			bubble.innerHTML = 'opps, try again!'			
			arrUsed.push(letter)
			winning();
			clickCount();
			if (clicks >=5){
			bubble.innerHTML = 'You lose'}
		}
	} 
}

function clickCount(){	
	if (clicks < 5){
		msg.innerHTML = 'You still have '+ (5-clicks)+ ' lives!'
	} else if (click = 5){
		msg.innerHTML = 'You no more lives!'		
	} 
}


function winning(){ 
 if (arr.length === array.length){	
	var newArray = array.slice().sort()
	var newArr = arr.slice().sort()
	if ( arr.toString() === array.toString()) {
		winbox()
	}
   }	
}

var win = document.getElementById('win');
var replay = document.getElementById('reload');

function winbox(){	
	win.style.display = "block";
	replay.addEventListener('click', function(){
		location.reload();
	})
}





