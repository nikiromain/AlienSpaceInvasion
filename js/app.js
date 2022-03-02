


const main = (()=>
{

    let marginPxMove = 10
    let gridColumn = 1;
    let bulletMargin = -10

    const spaceshipList = document.querySelectorAll(".spaceships")
    const canon = document.querySelector("#canon")
    const bullet = document.querySelector("#bullet")

    console.log(spaceshipList.length)

        setInterval(()=>
        {

            for (let i = 0; i < spaceshipList.length; i++) {
                marginPxMove += i;
                spaceshipList[i].style.marginTop = `${marginPxMove}px`
                
            }
/*
            const spaceshipRect = spaceContainers.getBoundingClientRect()
            marginPxMove +=5
            console.log(spaceshipRect.top)

            spaceContainers.style.marginTop = `${marginPxMove}px`


            marginPxMove += 10;
            spaceshipList[0].style.marginTop = `${marginPxMove}px`
            console.log("It working")
            */
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
                
                setInterval(() => {
                    bullet.style.marginTop = `${bulletMargin}px `
                    bulletMargin += -10
                }, 500)
            }

         })
        
        
    


})()