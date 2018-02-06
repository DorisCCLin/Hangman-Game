
var answers= ['eggs','banana','happy','opt','fox','range','choice','love','hate','manipulate','peanut','knight','dream','sheet','book','star','galaxy']
var randomAns = answers[Math.floor(Math.random()* answers.length)];
console.log(randomAns)

var letters = document.getElementById('letters')
var keyBoard = document.getElementById('keyBoard')


var arr = []
var arrUsed = []
var msg = document.getElementById('message');
var bubble = document.getElementById('bubble');
var mario = document.getElementById('mario');


for(var i=0;i<randomAns.length;i++){
	var  para = document.createElement('p')
	var dashes = document.createTextNode("_")
	para.appendChild(dashes);
	letters.appendChild(para);
	para.setAttribute('class','paras')
}

var paras = document.getElementsByClassName('paras');

var array = randomAns.toUpperCase().split('')

var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

for(i=0;i< alpha.length;i++){
var key = document.createElement('div')
var ABC = document.createTextNode(alpha[i])
	keyBoard.appendChild(key)
	key.appendChild(ABC)
	key.setAttribute('class','keys')
}

var keys = document.getElementsByClassName('keys');

var clicks = 0;

for(let i=0;i<keys.length;i++){
	keys[i].addEventListener('click', function(){
		mario.style.webkitAnimationPlayState = "running"
		var text = keys[i].textContent;	
		console.log(text)
		check(text);				
	})
}


function anime(){
    if (mario.style.AnimationPlayState == "running"){
    	mario.style.AnimationPlayState = "pause"
    }   
}

anime();



function check(letter){	
var found = 0
if (clicks <= 5){
	if (arrUsed.includes(letter) === false){
		arrUsed.push(letter)
		for (var i=0; i<array.length; i++){
			if (letter === array[i]){
				paras[i].innerText = letter
				found++
				arr.push(paras[i].innerHTML)
				bubble.innerHTML = 'Great! keep going!'
				clickCount()
				winning();
			} 
		}
		if (found === 0) {
			clicks += 1
			if (clicks < 5){
			bubble.innerHTML = 'opps, try again!'
			clickCount()
			} else{
				losebox()			
			} 	
		}	
	} else {
		clicks -= 1;
		bubble.innerHTML = 'You have guessed '+ letter	
	}
} else {
	losebox()
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
	if ( newArr.toString() === newArray.toString()) {
		winbox()
  }
}
}

var win = document.getElementById('win');
var replay_w = document.getElementById('reload_w');

function winbox(){	
	win.style.display = "block";
	replay_w.addEventListener('click', function(){
		location.reload();
	})
}

var lose = document.getElementById('lose');
var replay_l = document.getElementById('reload_l');

function losebox(){	
	lose.style.display = "block";
	replay_l.addEventListener('click', function(){
		location.reload();
	})
}






