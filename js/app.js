


const main = (()=>
{


    let marginPxMove = 10
    let gridColumn = 1;
    let bulletMargin = -10

    const spaceshipList = document.querySelectorAll(".spaceships")
    const canon = document.querySelector("#canon")
    const bullet = document.querySelector("#bullet")

   

        setInterval(()=>
        {

            for (let i = 0; i < spaceshipList.length; i++) {
                marginPxMove += i;
                spaceshipList[i].style.marginTop = `${marginPxMove}px`
                
                let canonBox =canon.getBoundingClientRect();
                        let shipBox =   spaceshipList[i].getBoundingClientRect();
        
                        if(canonBox.top <= shipBox.bottom){
                            
                           alert("Game over")
                        } 
            }
            
            
        }, 1000)
        

         document.addEventListener("keydown",(event)=>
         {
             

            if(event.key === "ArrowRight")
            {
                gridColumn++
                canon.style.gridColumn = gridColumn;
            }

        
            else if (event.key === "ArrowLeft")
            {
                gridColumn--
                canon.style.gridColumn = gridColumn;
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
                            
                            spaceshipList[i].style.marginTop = 0
                            marginPxMove = 10;
                            bulletMargin = -10
                            bullet.style.display = "none"
                            bullet.style.marginTop = 0
                            clearInterval(detectCollision)
                        } 
                    }

                    
                }, 300)
            }

         })
        
      
      
        
    


})()