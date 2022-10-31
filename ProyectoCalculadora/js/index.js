document.addEventListener("DOMContentLoaded",function(){
    const displayerEl = document.getElementsByClassName("displayer")[0]
    const buttons = document.getElementsByTagName("td")
    const opbuttons = document.getElementsByTagName("th")
    const reg = new RegExp('^[0-9 || *+-/.]+$');


    //start event listener for each button
    for (i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",(e)=>{
            if (e.target.textContent === "C"){
                cleanDisplay()
            }else if(e.target.textContent === "="){
                doOperation()
            }else{
                addToDisplayer(e)
            }
        })
    }

    for (i=0;i<opbuttons.length;i++){
        opbuttons[i].addEventListener("click",(e)=>{
            if (e.target.textContent === "x"){
                displayerEl.value += "*"
            }else{
                addToDisplayer(e)
            }
        })
    }

    displayerEl.addEventListener("keyup",()=>{
        let value = displayerEl.value
        
        if (!reg.test(value)){
            value = value.substring(0,value.length-1)
            displayerEl.value = value
        }
        
        for (let i=0;i<value.length;i++){
            if (value[i] === ","){
                value = value.substring(0,value.length-1)
                value += "."
                displayerEl.value = value
            }
        }
    })

    document.addEventListener("keypress",(e)=>{
        if (e.key === "Enter"){
            doOperation()
        }
    })

    function addToDisplayer(e){
        displayerEl.value += e.target.textContent
    }

    function cleanDisplay(){
        displayerEl.value = "";
    }

    function doOperation(){
        let operation = displayerEl.value
        try{
            displayerEl.value = eval(operation)
        }catch(e){
            console.log(e)
            displayerEl.value = "ERROR"
            setTimeout(()=>{
               cleanDisplay() 
            },2000)
        }
    }

})