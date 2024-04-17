
    let notification = document.querySelector(".correctornot");
    let nametext = document.querySelector(".name69") ;
    let img = document.createElement("img") ;
    let img1 = document.createElement("img") ; 
    let list = ["lion.jpg","oiseau.jpg","chat.jpg","chien.jpg"] ; 
    let allimg = document.querySelectorAll(".add") ;  
    let score = 0 ;

    
    

    
    function start () {
        let a = setInterval(function() {
        
            let random1 =  Math.floor(Math.random() * 3) ; 
        
            let random2 =  Math.floor(Math.random() * 3) ;

            let  random3 = Math.floor(Math.random() * 8) ;
        
            let  random4 = Math.floor(Math.random() * 8) ;
        
            while(random1===random2) {
                random2 = Math.floor(Math.random() * 3) ;

        }
       
            while(random4 === random3) {
                random4 = Math.floor(Math.random() * 8 ) ; 
            }
            img.src = list[random1] ;
        
            img.style.cssText ="margin-left : 10px ;border-radius : 50% ; width : 50x ; height : 60px  ; margin-top :20px ; " ;
        
            allimg[random3].appendChild(img) ;
        
            img1.src= list[random2] ;
        
            img1.style.cssText ="margin-left : 22px ;border-radius : 70px ; width : 100px ; height : 100px   " ;
        
            allimg[random4].appendChild(img1) ; 
        
            let name = list[random1].substr(0,list[random1].indexOf(".")).toUpperCase();
        
        
            nametext.innerHTML = name ; 
        
            img.onclick = function() {
            nametext.innerHTML = "" ;
            notification.innerHTML = "NICE , YOUR ANSWER IS CORRECT !" ; 
            score+=10 ;
            notification.style.cssText = "color : black ;" ;
            document.querySelector(".score1").innerHTML = `${score}` ;
            allimg.forEach((e) => {
                if(e.children.length>=2) {
                    e.children[1].remove() ;   
                }

            });       
        }
    

            img1.onclick = function() { 
                nametext.innerHTML = "" ;
                notification.style.cssText = "color : black ;" ; 
                notification.innerHTML = "YOUR ANSWER IS WRONG  GAME OVER !" ;

                allimg.forEach((e)=> {
                    if(e.children.length>=2) {
                        e.children[1].remove() ; 

                }
            }); 
                clearInterval(a) ;
                document.querySelector(".playagain").style.display = "block" ;            

            }


    },4000);};
      document.querySelector(".startgame").addEventListener("click",function() {
        start() ;
        setTimeout(function() {
            notification.innerHTML = "THE GAME START !" ; 
        },100);
        setTimeout(function() {
            notification.innerHTML  = "" ;
        },2000) ;  
      })

    
      document.querySelector(".playagain").addEventListener("click",function() {
       notification.innerHTML = "" ;
       score = 0 ;
       nametext.innerHTML = "" ; 
       document.querySelector(".score1").innerHTML = `${score}`;
       start() ; 

    });



            

