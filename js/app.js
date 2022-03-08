

const main = (()=>
{
    let timeRemaining = 90
    let hits = 0
    let misses = 0
    const mathProblems = ["1 + 3", "2 + 6", "3 + 4", "6 + 1", "3 + 9"]

    let marginPxMove = 10
    let gridColumn = 1;
    let bulletMargin = -10

    const splayArea = document.querySelector("#playArea")
    const spaceshipList = document.querySelectorAll(".spaceships")
    const problemsHeader = document.querySelectorAll(".problem")
    const cannon = document.querySelector("#cannon")
    const bullet = document.querySelector("#bullet")
    const canonText = document.querySelector("#canonAnswer")

    const timer = document.querySelector("#timer")
    const hitsCounter = document.querySelector("#hits")
    const missesCounter = document.querySelector("#misses")

    const gameRulesBtn = document.querySelector("#gameRulesBtn")
    const rulesContainer = document.querySelector("#rulesContainer")

    const startGameBtn = document.querySelector("#startGameBtn")
    const welcomeScreen = document.querySelector("#welcomeScreen")

    const imageSoundToggle = document.querySelector("#startOrStopImg")
    const audioToggle = document.querySelector("#audio")

    const playerDetails = document.querySelector("#playerScreen")
    const playerScreen = document.querySelector("#playerScreen")
    const playerName = document.querySelector("#playerName")

    const difficultyContainer = document.querySelector("#difficulty")
    const easyLevel = document.querySelector("#easyLevelBtn")
    const hardLevel = document.querySelector("#hardLevelBtn")

    const gameOverScreen = document.querySelector("#gameOverContainer")

    const generateRandomExpression = () => {
        const num1 = Math.floor(Math.random() * 10)
        const num2 = Math.floor(Math.random() * 10)

        return `${num1} + ${num2}`
    }

    const populateProblems = () => {
        for(let i =0; i < problemsHeader.length; i++){
            problemsHeader[i].innerHTML = generateRandomExpression()
        }
    }

    const getCorrectAnswer = () => {
        const randomIndex = Math.floor(Math.random() * 5)
        const correctExpression = problemsHeader[randomIndex].innerText
        console.log(`Correct expression: ${correctExpression}`)
        return parseInt(correctExpression[0]) + parseInt(correctExpression[4])
    }

    

   gameRulesBtn.addEventListener("click",()=>
    { 
        rulesContainer.classList.toggle("displayRules")
       
    })


   imageSoundToggle.addEventListener("click", ()=>
   {
        if(audioToggle.paused)
        {
            audioToggle.play()
            imageSoundToggle.src = "media/volume.png"
        }

        else
        {
            imageSoundToggle.src = "media/mute.png"
            imageSoundToggle.alt = "Pause Button"
            audioToggle.pause()
        }

    
   })


    startGameBtn.addEventListener("click", ()=>
    {
       
        welcomeScreen.style.display = "none"
        playerDetails.style.display = "block"

    })

    difficultyContainer.addEventListener("click",(event)=>
    {
        if(event.target.tagName == "BUTTON" && event.target.innerText == "Easy")
        {
            playerDetails.style.display = "none"
            playArea.style.display = "block"

            startGame()

        }

    })

    populateProblems()
    let canonAnswer = getCorrectAnswer()
    canonText.innerText = canonAnswer



    const startGame = () => {

        setInterval(()=>
        {
            timeRemaining--
            timer.innerText = timeRemaining
            for (let i = 0; i < spaceshipList.length; i++) {
                marginPxMove += i;
                spaceshipList[i].style.marginTop = `${marginPxMove}px`



               

                
                let canonBox =cannon.getBoundingClientRect();
                let shipBox =   spaceshipList[i].getBoundingClientRect();
        
                        if(canonBox.top <= shipBox.bottom){
                            
                           /*alert("Game Over")
                           playArea.style.display = "none"
                           gameOverScreen.style.display = "block"*/
                           spaceshipList[i].style.marginTop = 0
                        } 
            }
            
            
        }, 1000)
    }
        

         document.addEventListener("keydown",(event)=>
         {
             

            if(event.key === "ArrowRight")
            {
                gridColumn++
                cannon.style.gridColumn = gridColumn;
            }

        
            else if (event.key === "ArrowLeft")
            {
                gridColumn--
                cannon.style.gridColumn = gridColumn;
            }

            else if (event.key === " ")
            {
                bullet.style.display = "block";
                
               const detectCollision = setInterval(() => {
                    bullet.style.marginTop = `${bulletMargin}px `
                    bulletMargin += -20

                   
                    for (let i = 0; i < spaceshipList.length; i++) {
                      
                        
                        let bulletBox = bullet.getBoundingClientRect();
                        let shipBox =   spaceshipList[i].getBoundingClientRect();
        
                        if(bulletBox.top <= shipBox.bottom){

                            
                            const shipAnswer = parseInt(problemsHeader[i].innerText[0]) + parseInt(problemsHeader[i].innerText[4])

                            
                            if(canonAnswer === shipAnswer && i+1 === gridColumn  ){
                                hits++
                                hitsCounter.innerText =  `Hits: ${hits}`
                                
                                spaceshipList[i].style.marginTop = 0
                             marginPxMove = 10;
                            bulletMargin = -10
                            bullet.style.display = "none"
                            bullet.style.marginTop = 0
                            populateProblems()
                                canonAnswer = getCorrectAnswer()
                                canonText.innerText = canonAnswer
                            clearInterval(detectCollision)
                            } 
                            else if (canonAnswer !== shipAnswer && i+1 === gridColumn  ) {
                                misses++
                                missesCounter.innerText =  `Misses: ${misses}`
                                
                                bulletMargin = -10
                                bullet.style.display = "none"
                                bullet.style.marginTop = 0
                                populateProblems()
                                canonAnswer = getCorrectAnswer()
                                canonText.innerText = canonAnswer
                                clearInterval(detectCollision)
                            }
                            
                            
                        } 
                    }

                    
                }, 300)
            }

         })
        
      
   
    


})()