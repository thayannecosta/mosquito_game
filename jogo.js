//position
var height = 0
var width = 0
//lives and countdown
var lives = 1
var time = 20
// level selected from home page
var levelTime = 1500
var levelSelected = window.location.search
levelSelected = levelSelected.replace('?','')

if (levelSelected === 'easy'){
     levelTime = 1500
} else if (levelSelected === 'medium'){
     levelTime = 1000
} else if (levelSelected === 'hard'){
     levelTime = 750
}

function flySize(){
     height = window.innerHeight
     width = window.innerWidth
     console.log(height,width);
}

flySize()

var countdown = setInterval( function (){
     time -= 1
     if(time<0){
         clearInterval(countdown)
         clearInterval(createFly)
         window.location.href = 'victory.html'
     }else{
          document.getElementById('countdown').innerHTML = time;

     }
},1000)

function randomPosition() {
     //remove the previous fly(if exists)
     var mosquito = document.getElementById('mosquito')
     if(mosquito){
          mosquito.remove()
          if (lives > 3 ){
              window.location.href = 'endgame.html'
          } else{
               document.getElementById('v' + lives).src = '/imagens/coracao_vazio.png'
               lives++
          }
     }
     //get a random number and assign to the variable to  the x and y axes
     var positionX = Math.floor(Math.random() * width) - 90
     var positionY = Math.floor(Math.random() * height) - 90
     //checks if the number is less than zero
     positionX = positionX < 0 ? 0 : positionX
     positionY = positionY < 0 ? 0 : positionY
     
     //create the html element
     var mosquito = document.createElement('img')
     mosquito.src = 'imagens/mosquito.png'
     mosquito.className = randomSize() + ' ' + randomSide()
     mosquito.style.left = positionX + 'px'
     mosquito.style.top = positionY + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'
     mosquito.onclick = function(){
          this.remove()
     }

     document.body.appendChild(mosquito)
}

function randomSize(){
     var size = Math.floor(Math.random() * 3)
     
     switch(size) {
          case 0: 
          return 'fly1'
          case 1: 
          return 'fly2'
          case 2: 
          return 'fly3'
     }
}
function randomSide(){
     var side = Math.floor(Math.random() * 2)
     switch(side) {
          case 0: 
          return 'sideA'
          case 1: 
          return 'sideB'
     }
}