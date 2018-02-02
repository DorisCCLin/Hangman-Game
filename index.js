//loop through 'what' aud check if a word is present

//how to subsititude the correct letter eith the current dash

//when you guess correct ->happens

var answers= ['eggs','banana','happy','opt','fox','range']
var randomAns = answers[Math.floor(Math.random()* answers.length)];
console.log(randomAns)

var letters = document.getElementById('letters')
var used1 = document.getElementById('used1')
var used2 = document.getElementById('used2')
var used3 = document.getElementById('used3')
var used4 = document.getElementById('used4')
var used5 = document.getElementById('used5')
var keyBoard = document.getElementById('keyBoard')

for(var i=0;i<randomAns.length;i++){
	var  para = document.createElement('p')
	var dashes = document.createTextNode("_")
	para.appendChild(dashes);
	letters.appendChild(para);
}

var array = randomAns.split('')


// function check()

// document.addEventListener('keypress',function(e){
// 	for (var i=0;i<used.length;i++){
// 		used[iidf].innerHTML = e.key  
// 	}  
// })


for(i=1;i<=26;i++){
var key = document.createElement('div')
	key.style.width='50px'
	key.style.height="50px"
	key.style.border='1px solid'
	key.style.display = 'inline-block'
	keyBoard.appendChild(key)
	key.setAttribute('class','keys')
}

keys = document.getElementsByClassName('keys');

var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y', 'Z']

for(i=0;i<26;i++){
   keys[i].innerHTML = alpha[i]
}


for(let i=0;i<keys.length;i++){
	keys[i].addEventListener('click', function(){
		var text = keys[i].textContent;
		console.log(text);
	})

}

// for(let i=0;i<used.length;i++){
// 	used[i].addEventListener('click', function(){
// 		var text = used[i].textContent;
// 		console.log(text);
// 	})

// }

// var b=a.match(/[e]+/g) // out put b= 2 e

// class hangMan{

// } 


