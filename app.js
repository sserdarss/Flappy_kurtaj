



document.addEventListener('DOMContentLoaded', () => {
   const bird = document.querySelector('.bird')
   const gameDisplay = document.querySelector('.game-container')
   const ground = document.querySelector('.ground')
   let birdLeft = 220
   let birdBottom = 100
   let gravity = 2
   let isGameOver = false
   let gap = 430

  

   function startGame() {
       birdBottom -= gravity
       bird.style.bottom =birdBottom + 'px'
       bird.style.left = birdLeft + 'px'
   }

   let gameTimerId = setInterval(startGame, 20)

   function control(e) {
       
           jump()
       
   }

   function jump() {
       if (birdBottom < 490) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
        
   }

   document.addEventListener('click', control)

   function generateObstacle(){
       let randomHeight = Math.random()*60
       let obstacleLeft = 500;
       let obstacleBottom = randomHeight;
       const obstacle = document.createElement('div')
       const topObstacle = document.createElement('div')
       if(!isGameOver) {
       obstacle.classList.add('obstacle')
       topObstacle.classList.add('topObstacle')

    }
       gameDisplay.appendChild(obstacle)
       gameDisplay.appendChild(topObstacle)
       obstacle.style.left = obstacleLeft + 'px'
       topObstacle.style.left = obstacleLeft + 'px'
       obstacle.style.bottom = obstacleBottom + 'px'
       topObstacle.style.bottom = obstacleBottom + gap + 'px'

       function moveObstackle() {
           obstacleLeft -= 2
           obstacle.style.left = obstacleLeft + 'px'
           topObstacle.style.left = obstacleLeft + 'px'

           if (obstacleLeft === -60){
               clearInterval(timerId)
               gameDisplay.removeChild(obstacle)
               gameDisplay.removeChild(topObstacle)
           }
           if (obstacleLeft > 170 && obstacleLeft < 280 && birdLeft === 220 && (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200) ||  birdBottom === 0){
               gameOver()
               clearInterval(timerId)
           }

       }
       let timerId = setInterval(moveObstackle,20)
      if(!isGameOver) setTimeout(generateObstacle,3500)

   }
   generateObstacle()


   function gameOver(){

    clearInterval(gameTimerId)
    console.log('game over')
    isGameOver = true
    document.removeEventListener('click', control)
    ground.setAttribute("style"," animation:step-end")
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("bitti").style.visibility = "visible";
   }
   
})

function restart(){
    location.reload();
}


