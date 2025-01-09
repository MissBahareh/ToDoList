

let morWin = document.getElementById("morWin")
let morDiv = document.getElementById("morDiv")
morWin.addEventListener("click",()=>{
    morDiv.style.visibility ="visible"
})
morDiv.addEventListener("mouseleave",()=>{
    morDiv.style.visibility ="hidden"
})
let interDiv = document.querySelectorAll(".interDiv")
let popDiv = document.getElementById("popDiv")
let closepg = document.querySelectorAll("#closepg")
let fullpg =document.querySelectorAll("#fullpg")
let minpg = document.querySelectorAll("#minpg")
let btnDisplay =document.querySelector(".btnDisplay")
let minPop = document.getElementById("minPop")
let daysDiv = document.getElementById("daysDiv")
let centerSite = document.getElementById("centerSite")
let centerPage = document.getElementById("centerPage")
let card1 = document.getElementById("card1")
for(let i = 0 ; i < interDiv.length ; i++){
    interDiv[i].addEventListener("click",()=>{
        popDiv.classList.replace("popup0","popup")
        btnDisplay.style.display="flex"
        centerPage.classList.replace("cenretBtn","cenretBtn0")
        minPop.classList.replace("minPopUp","minPopUp0")
    })
}
for(let i = 0 ; i < minpg.length ; i++ ){
    minpg[i].onclick = minPage
}
for(let i = 0 ; i < closepg.length ; i++){
    closepg[i].onclick = closepage
}
for(let i = 0 ; i < fullpg.length ; i++){
    fullpg[i].onclick = fullpage
}
function closepage (){
    popDiv.classList.replace("popup","popup0") 
    minPop.classList.replace("minPopUp","minPopUp0")
    card1.style.animationName ="icon"

}
function fullpage(){

    popDiv.classList.replace("popup","popup1")
    daysDiv.style.zIndex="0"
    minPop.classList.replace("minPopUp0","minPopUp")
    popDiv.classList.replace("popup0","popup1")
    btnDisplay.style.display="none"
    centerPage.classList.replace("cenretBtn0","cenretBtn")
    for(let i of closepg){
        i.addEventListener("click",()=>{
            popDiv.classList.replace("popup1","popup0") 
        })  
    }
    for(let i of minpg){
        i.addEventListener("click",()=>{
            minPop.classList.replace("minPopUp0","minPopUp")
            popDiv.classList.replace("popup1","popup0")
        })
    }
    
}
function minPage(){
    popDiv.classList.replace("popup","popup0")
    minPop.classList.replace("minPopUp0","minPopUp")
    btnDisplay.style.display="flex"
    centerPage.classList.replace("cenretBtn","cenretBtn0")
    
    
}
centerPage.addEventListener("click",()=>{
    popDiv.classList.replace("popup1","popup")
    btnDisplay.style.display="flex"
    centerPage.classList.replace("cenretBtn","cenretBtn0")
    minPop.classList.replace("minPopUp","minPopUp0")

})
centerSite.addEventListener("click" , ()=>{
    popDiv.classList.replace("popup0","popup")
    minPop.classList.replace("minPopUp","minPopUp0")
    

})


let divTab1 = document.getElementById("divTab1")
let divTab2 = document.getElementById("divTab2")
let divTab3 = document.getElementById("divTab3")
let divTab4 = document.getElementById("divTab4")

let tab1 = document.getElementById("tab1")
let tab2 = document.getElementById("tab2")
let tab3 = document.getElementById("tab3")
let tab4 = document.getElementById("tab4")



card1.addEventListener("click" , ()=>{
    card1.style.animationName ="none"
    tab1.addEventListener("click",()=>{
        divTab1.classList.replace("contentTab10","contentTab1")
        divTab2.classList.replace("contentTab2","contentTab20")
        divTab3.classList.replace("contentTab3","contentTab30")
        divTab4.classList.replace("contentTab4","contentTab40")
        studyTab3.style.visibilit="hidden"
    })
    tab2.addEventListener("click",()=>{
        divTab2.classList.replace("contentTab20","contentTab2")
        divTab1.classList.replace("contentTab10","contentTab1")
        divTab3.classList.replace("contentTab3","contentTab30")
        divTab4.classList.replace("contentTab4","contentTab40")
        studyTab3.style.visibilit="hidden"
    
    })
    tab3.addEventListener("click",()=>{
        divTab3.classList.replace("contentTab30","contentTab3")
        divTab1.classList.replace("contentTab10","contentTab1")
        divTab2.classList.replace("contentTab2","contentTab20")
        divTab4.classList.replace("contentTab4","contentTab40")
        studyTab3.style.visibilit="visible"
    
    })
    tab4.addEventListener("click",()=>{
        divTab4.classList.replace("contentTab40","contentTab4")
        divTab1.classList.replace("contentTab10","contentTab1")
        divTab2.classList.replace("contentTab2","contentTab20")
        divTab3.classList.replace("contentTab3","contentTab30")
        studyTab3.style.visibilit="hidden"
    
    })

})
let cleanInput = document.getElementById("cleanInput") 
cleanInput.addEventListener("click",()=>{
    inputTab1.style.pointerEvents="auto"
    liList.style.display="none"

})
let inputTab1 = document.getElementById("inputTab1")
let selectDiv = document.getElementById("selectDiv")
let question = document.getElementById("question")
let homeBtn = document.getElementById("homeBtn")
inputTab1.addEventListener("keyup",(press)=>{
    if(inputTab1.value !== "" && inputTab1.value.trim() !== ""){
        inputTab1.style.backgroundColor = "rgb(73,36,62)"
        inputTab1.style.color = "white"
        if(press.keyCode==13){
            selectDiv.classList.replace("selectLI0","selectLI")
            question.textContent =" : Choose your project"
            inputTab1.style.pointerEvents="none"
            finished.style.visibility ="visible"
        }
        else{
            finished.style.visibility ="hidden"
            
        }
    }
    else{
        selectDiv.classList.replace("selectLI","selectLI0")
        inputTab1.style.backgroundColor = "red"

    }


})
inputTab1.focus()
let liArray=[]
let ulListTab1 = document.getElementById("ulListTab1") 
let liList = document.createElement("li")
liArray.push(liList)
let acceptBtn = document.getElementById("acceptBtn")
let finished = document.getElementById("finished")
let mProjectName =""
let projectName = document.querySelectorAll(".btnPjN")
let statusName = ""
for(let i = 0 ; i < liArray.length ; i++){


    for(let i = 0 ; i < projectName.length ; i++){
        projectName[i].onclick = projectNameFunc
    }
    function projectNameFunc(){
        mProjectName = this.textContent
        selectDiv.style.backgroundColor="rgb(73,36,62)" 
    }
    
    
    
    let mPriority =""
    let priority = document.querySelectorAll(".btnPjP")
    for(let i = 0 ; i < priority.length ; i++){
        priority[i].onclick = priorityFunc
    }
    function priorityFunc(){
        mPriority = this.textContent
        selectDiv.style.backgroundColor="rgb(73,36,62)"
        
    }
    
    
    
    
    
    let mStatuses =""
    let statuses = document.querySelectorAll(".btnPjS")

    for(let i = 0 ; i < statuses.length ; i++){
        statuses[i].onclick = statusesFunc
    }
    function statusesFunc(){
        mStatuses = this.textContent
        // this.classList.add = this.innerHTML
        selectDiv.style.backgroundColor="rgb(73,36,62)"
        statusName = mStatuses
    }    
    acceptBtn.addEventListener("click",()=>{
        liList.style.display= "block";
        ulListTab1.appendChild(liList)
        liList.textContent = `${inputTab1.value} My project name is in the ${mProjectName} list with priority ${mPriority} and ${mStatuses} Statuses.`
        liList.classList.remove("Done","Delete","Waiting")
        liList.classList.add(statusName)
        
        inputTab1.style.pointerEvents="none"
        finished.style.visibility="visible"
        let projectName = document.querySelector(".projectName")
        projectName.style.backgroundColor="rgba(255, 0, 0, 0)"
        if(mProjectName =="" ){
            finished.style.visibility="hidden"
            projectName.style.backgroundColor="red"
        }
        let priority = document.querySelector(".priority")
        priority.style.backgroundColor="rgba(255, 0, 0, 0)"
        if(mPriority =="" ){
            finished.style.visibility="hidden"
            priority.style.backgroundColor="red"
        }
        let statuses = document.querySelector(".statuses")
        statuses.style.backgroundColor="rgba(255, 0, 0, 0)"
        if(mStatuses =="" ){
            finished.style.visibility="hidden"
            statuses.style.backgroundColor="red"
        }
       
       
    })
    // statusName =""
    let toCorrectBtn = document.getElementById("toCorrectBtn")
    toCorrectBtn.addEventListener("click",()=>{

        liList.style.display= "none";
        inputTab1.style.pointerEvents="none"
        mProjectName=""
        mPriority =""
        mStatuses =""
    })
    


    let hightProgress = document.getElementById("hightProgress")
    let progress = document.getElementById("progress")
    let valNumOfCirW = +document.getElementById("valNumOfCirW").innerHTML
    let valNumOfCirWF = document.getElementById("valNumOfCirW")
    let numCircelWate = 0
    let hightCircelWateImg = 80
    let changCircelWateImg = 0 

    let imgAllLIst = document.getElementById("imgAllLIst")
    let allTasks = document.getElementById("allTasks")
    let valNumOfCirA = +document.getElementById("valNumOfCirA").innerHTML
    let valNumOfCirAF = document.getElementById("valNumOfCirA")
    let numCircelAll = 0
    let hightCircelAllImg = 80
    let changCircelAllImg = 0

    let imgDel = document.getElementById("imgDel")
    let deleteed = document.getElementById("delete")
    let valNumOfCirD = +document.getElementById("valNumOfCirD").innerHTML
    let valNumOfCirDF = document.getElementById("valNumOfCirD")
    let numCircelDel = 0
    let hightCircelDelImg = 80
    let changCircelDelImg = 0

    let hightTaskes = document.getElementById("hightTaskes")
    let numOfCirT = +document.getElementById("numOfCirT").innerHTML
    let numOfCirTF = document.getElementById("numOfCirT")
    let ulMores = document.querySelector(".ulMores")
    let numCircelTasks = 0
    let hightCircelTasksImg = 80
    let changCircelTasksImg = 0
    
    finished.addEventListener("click",()=>{
   
    numCircelTasks ++
    numOfCirT =  numCircelTasks
    numOfCirTF.innerHTML =  numOfCirT  
    ulMores.innerHTML =  numOfCirT  
    
    changCircelTasksImg =  4
    hightCircelTasksImg = hightCircelTasksImg - changCircelTasksImg
    hightTaskes.style.marginTop = hightCircelTasksImg + "%" ;
    


   
    if(progress.innerHTML == mStatuses){
        numCircelWate ++
        valNumOfCirW =  numCircelWate
        valNumOfCirWF.innerHTML =  valNumOfCirW 
        changCircelWateImg =  7
        hightCircelWateImg = hightCircelWateImg - changCircelWateImg
        hightProgress.style.marginTop = hightCircelWateImg + "%" ;
    }
    
    
    if(allTasks.innerHTML == mStatuses){
        numCircelAll ++
        valNumOfCirA =  numCircelAll
        valNumOfCirAF.innerHTML = valNumOfCirA 
        changCircelAllImg =  7
        hightCircelAllImg = hightCircelAllImg - changCircelAllImg
        imgAllLIst.style.marginTop = hightCircelAllImg + "%" ;
    }

    
    if(deleteed.innerHTML == mStatuses){
        numCircelDel ++
        valNumOfCirD =  numCircelDel
        valNumOfCirDF.innerHTML =  valNumOfCirD 
        changCircelDelImg =  7
        hightCircelDelImg = hightCircelDelImg - changCircelDelImg
        imgDel.style.marginTop = hightCircelDelImg + "%" ;

    }
    })
}
// statusName =""
let listTab2 = document.getElementById("listTab2")  
let listTab3 = document.getElementById("listTab3")
let listTab4 = document.getElementById("listTab4")
let homeTab2 = document.getElementById("homeTab2")
let studyTab3 = document.getElementById("studyTab3")
let workTab4 = document.getElementById("workTab4")
let StudyBtn = document.getElementById("StudyBtn")
let countreHome = +document.getElementById("countreHome").innerHTML
let countreHomeH = document.getElementById("countreHome")
let numHome = 0
let countreStudy = +document.getElementById("countreStudy").innerHTML
let countreStudyS = document.getElementById("countreStudy")
let numStudy = 0
let countreWork = +document.getElementById("countreWork").innerHTML
let countreWorkW = document.getElementById("countreWork")
let numWork = 0
let studyArr = []

finished.addEventListener("click",()=>{
    // let liTab02 = document.querySelectorAll(".liTab1")
    let liTab2 = document.createElement("li")
    ulMore.appendChild(liTab2)
    liTab2.textContent = liList.textContent
    // liTab2.className = liList.className
    
    
    
    // let dDoneBtn = document.getElementById("DoneBtn")
    // dDoneBtn.addEventListener("click",()=>{
    //     console.log("NOTok");
            
    //     // liTab2.classList.add("doneBtn")

    // })




    if(homeTab2.innerHTML == mProjectName ){
        liList.style.display= "none";
        inputTab1.value=""
        let liTab2 = document.createElement("li")
        let listOfS = listTab2.appendChild(liTab2)
        numHome ++
        countreHome =  numHome
        countreHomeH.innerHTML = countreHome
        liTab2.innerHTML = liList.innerHTML
        // liTab2.className = liList.className 
        inputTab1.style.pointerEvents="auto" 
        selectDiv.classList.replace("selectLI","selectLI0")
        studyArr.push(listOfS)
        




        let delStudy = document.getElementById("delStudy")
        let numOfRowHomeDel = document.getElementById("numOfRowHomeDel")
        let numOfRowHomeRes = document.getElementById("numOfRowHomeRes")
        let numOfRowHomeWat = document.getElementById("numOfRowHomeWat")
        let numOfRowHomeDon = document.getElementById("numOfRowHomeDon")
        let liUlHomes = document.querySelectorAll("#listTab2 li")
        let boxControplWMHome = document.getElementById("boxControplWMHome")
        let comInputHome =document.getElementById("comInputHome")
        let addComHome =document.getElementById("addComHome")
        let addComChang =document.getElementById("addComChang")
        let changInputCom = document.getElementById("changInputCom")
        // let changCmm = document.getElementById("changCmm")
        for(let i = 0 ; i < liUlHomes.length ; i++){
            liUlHomes[i].onclick = openMenu
            liUlHomes[i].classList.add("compliteHome")
    
        }
        numOfRowHomeDel.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlHomes.length ; i++){
                if(event.keyCode == 13){
                    liUlHomes[(numOfRowHomeDel.value)-1].style.color="black"
                    liUlHomes[(numOfRowHomeDel.value)-1].style.opacity ="1"
                    liUlHomes[(numOfRowHomeDel.value)-1].style.textDecoration ="line-through"
                    numOfRowHomeDel.value = ""
                }
                
                
            }
            
        })
        numOfRowHomeRes.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlHomes.length ; i++){
                if(event.keyCode == 13){
                    liUlHomes[(numOfRowHomeRes.value)-1].style.opacity ="1"
                    liUlHomes[(numOfRowHomeRes.value)-1].style.textDecoration ="none"
                    liUlHomes[(numOfRowHomeRes.value)-1].style.color ="green"
                    numOfRowHomeRes.value= ""
                    
                } 
            } 
        })
        numOfRowHomeWat.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlHomes.length ; i++){
                if(event.keyCode == 13){
                    liUlHomes[(numOfRowHomeWat.value)-1].style.opacity ="1"
                    liUlHomes[(numOfRowHomeWat.value)-1].style.textDecoration ="none"
                    liUlHomes[(numOfRowHomeWat.value)-1].style.color ="yellow"
                    numOfRowHomeWat.value= ""
                    
                } 
            } 
        })
        numOfRowHomeDon.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlHomes.length ; i++){
                if(event.keyCode == 13){
                    liUlHomes[(numOfRowHomeDon.value)-1].style.opacity =".2"
                    liUlHomes[(numOfRowHomeDon.value)-1].style.textDecoration ="none"
                    liUlHomes[(numOfRowHomeDon.value)-1].style.color ="black"
                    numOfRowHomeDon.value= ""
                    
                } 
            } 
        })
        function openMenu(){
            boxControplWMHome.classList.replace("btnBox0Home","btnBoxHome")
            let prographHome = document.createElement("p")
            
            addComHome.addEventListener("click",()=>{
                if(this.className == "compliteHome"){
                    
                    this.classList.replace("compliteHome" , "dcompliteHome")
                    this.appendChild(prographHome)
                    prographHome.style.backgroundColor="rgb(112,66,100)"
                    prographHome.innerHTML = "Your Comment : "+ comInputHome.value
                    comInputHome.value = ""
                    // changCmm.classList.replace("divCange0","divCange")
                }
            })
            prographHome.addEventListener("click" , ()=>{
                prographHome.textContent == comInputHome.value

            })

        }
    }
    
    
    else if(studyTab3.innerHTML == mProjectName){
        // alert("study")
        liList.style.display= "none";
        inputTab1.value=""
        let liTab3 = document.createElement("li")
        listTab3.appendChild(liTab3)
        numStudy ++
        countreStudy =  numStudy
        countreStudyS.innerHTML = countreStudy
        liTab3.textContent = liList.textContent
        // liTab3.className = liList.className
        inputTab1.style.pointerEvents="auto" 
        selectDiv.classList.replace("selectLI","selectLI0")



        let delStudy = document.getElementById("delStudy")
        let numOfRowStudyDel = document.getElementById("numOfRowStudyDel")
        let numOfRowStudyRes = document.getElementById("numOfRowStudyRes")
        let numOfRowStudyWat = document.getElementById("numOfRowStudyWat")
        let numOfRowStudyDon = document.getElementById("numOfRowStudyDon")
        let liUlStudys = document.querySelectorAll("#listTab3 li")
        let boxControplWM = document.getElementById("boxControplWM")
        let comInput =document.getElementById("comInput")
        let addCom =document.getElementById("addCom")
        let addComChang =document.getElementById("addComChang")
        let changInputCom = document.getElementById("changInputCom")
        // let changCmm = document.getElementById("changCmm")
        for(let i = 0 ; i < liUlStudys.length ; i++){
            liUlStudys[i].onclick = openMenu
            liUlStudys[i].classList.add("complite")
        }
        numOfRowStudyDel.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlStudys.length ; i++){
                if(event.keyCode == 13){
                    liUlStudys[(numOfRowStudyDel.value)-1].style.color="black"
                    liUlStudys[(numOfRowStudyDel.value)-1].style.opacity ="1"
                    liUlStudys[(numOfRowStudyDel.value)-1].style.textDecoration ="line-through"
                    numOfRowStudyDel.value = ""
                }
                
                
            }
            
        })
        numOfRowStudyRes.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlStudys.length ; i++){
                if(event.keyCode == 13){
                    liUlStudys[(numOfRowStudyRes.value)-1].style.opacity ="1"
                    liUlStudys[(numOfRowStudyRes.value)-1].style.textDecoration ="none"
                    liUlStudys[(numOfRowStudyRes.value)-1].style.color ="green"
                    numOfRowStudyRes.value= ""
                    
                } 
            } 
        })
        numOfRowStudyWat.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlStudys.length ; i++){
                if(event.keyCode == 13){
                    liUlStudys[(numOfRowStudyWat.value)-1].style.opacity ="1"
                    liUlStudys[(numOfRowStudyWat.value)-1].style.textDecoration ="none"
                    liUlStudys[(numOfRowStudyWat.value)-1].style.color ="yellow"
                    numOfRowStudyWat.value= ""
                                
                } 
            } 
            
            if(event.keyCode == 13){
                liUlStudys[(numOfRowStudyWat.value)-1].style.opacity ="1"
                liUlStudys[(numOfRowStudyWat.value)-1].style.textDecoration ="none"
                liUlStudys[(numOfRowStudyWat.value)-1].style.color ="yellow"
                numOfRowStudyWat.value= ""
                            
            } 
        })
        numOfRowStudyDon.addEventListener("keyup" , (event)=>{
            for(let i = 0 ; i < liUlStudys.length ; i++){
                if(event.keyCode == 13){
                    liUlStudys[(numOfRowStudyDon.value)-1].style.opacity =".2"
                    liUlStudys[(numOfRowStudyDon.value)-1].style.textDecoration ="none"
                    liUlStudys[(numOfRowStudyDon.value)-1].style.color ="black"
                    numOfRowStudyDon.value= ""
                    
                } 
            } 
        })
        function openMenu(){
            boxControplWM.classList.replace("btnBox0","btnBox")
            let prograph = document.createElement("p")
            addCom.addEventListener("click",()=>{
                if(this.className == "complite"){
                    
                    this.classList.replace("complite" , "dcomplete")
                    this.appendChild(prograph)
                    prograph.style.backgroundColor="rgb(112,66,100)"
                    prograph.innerHTML = "Your Comment : "+ comInput.value
                    comInput.value = ""
                    // changCmm.classList.replace("divCange0","divCange")
                }
            })
            prograph.addEventListener("click" , ()=>{
                prograph.textContent == comInput.value

            })

        }
    }
    else if(workTab4.innerHTML == mProjectName){
        liList.style.display= "none";
        inputTab1.value=""
        let liTab4 = document.createElement("li")
        listTab4.appendChild(liTab4)
        numWork ++
        countreWork =  numWork
        countreWorkW.innerHTML = countreWork
        liTab4.textContent = liList.textContent
        // liTab4.className = liList.className
        inputTab1.style.pointerEvents="auto" 
        selectDiv.classList.replace("selectLI","selectLI0")


        // let delStudy = document.getElementById("delStudy")
        let numOfRowWorkDel = document.getElementById("numOfRowWorkDel")
        let numOfRowWorkRes = document.getElementById("numOfRowWorkRes")
        let numOfRowWorkWat = document.getElementById("numOfRowWorkWat")
        let numOfRowWorkDon = document.getElementById("numOfRowWorkDon")
        let liUlWorks = document.querySelectorAll("#listTab4 li")
        let boxControplWMWork = document.getElementById("boxControplWMWork")
        let comInputWork =document.getElementById("comInputWork")
        let addComWork =document.getElementById("addComWork")
        let addComChang =document.getElementById("addComChang")
        let changInputCom = document.getElementById("changInputCom")
        // let changCmm = document.getElementById("changCmm")
        for(let i = 0 ; i < liUlWorks.length ; i++){
            liUlWorks[i].onclick = openMenuWork
            liUlWorks[i].classList.add("compliteWork")
            numOfRowWorkDel.addEventListener("keyup" , (event)=>{
                if(event.keyCode == 13){
                    let indexesD = (numOfRowWorkDel.value)-1
                    liUlWorks[indexesD].style.color="black"
                    liUlWorks[indexesD].style.opacity ="1"
                    liUlWorks[indexesD].style.textDecoration ="line-through"
                    // valNumOfCirD = +document.getElementById("valNumOfCirD").innerHTML
                    // valNumOfCirDF = document.getElementById("valNumOfCirD")
                    // let increaseD = valNumOfCirD + 1
                    // if(liUlWorks[indexesD].className == "Done" ){
                    //     // console.log("Done");
                    //     valNumOfCirA = +document.getElementById("valNumOfCirA").innerHTML
                    //     valNumOfCirAF = document.getElementById("valNumOfCirA")
                    //     let decreaseDD = valNumOfCirA - 1
                    //     valNumOfCirAF.textContent = decreaseDD
                    //     // numOfRowWorkDon.value = ""
                        

                    // }
                    // if(liUlWorks[indexesD].className == "Waiting"){
                    //     // console.log("Waiting");
                    //     valNumOfCirW = +document.getElementById("valNumOfCirW").innerHTML
                    //     valNumOfCirWF = document.getElementById("valNumOfCirW")
                    //     let decreaseDW = valNumOfCirW - 1
                    //     valNumOfCirWF.textContent = decreaseDW
                    //     // numOfRowWorkRes.value = ""
                    // }
                    // valNumOfCirDF.textContent = increaseD
                    numOfRowWorkDel.value = ""
                }
            })
            numOfRowWorkRes.addEventListener("keyup" , (event)=>{
                if(event.keyCode == 13){
                    liUlWorks[(numOfRowWorkRes.value)-1].style.opacity ="1"
                    liUlWorks[(numOfRowWorkRes.value)-1].style.textDecoration ="none"
                    liUlWorks[(numOfRowWorkRes.value)-1].style.color ="green"
                    numOfRowWorkRes.value= ""
                    
                } 
            })
            numOfRowWorkWat.addEventListener("keyup" , (event)=>{
                if(event.keyCode == 13){
                    let indexesW = (numOfRowWorkWat.value)-1
                    liUlWorks[indexesW].style.opacity ="1"
                    liUlWorks[indexesW].style.textDecoration ="none"
                    liUlWorks[indexesW].style.color ="yellow"
                    // numOfRowWorkWat.value= ""
                    // valNumOfCirW = +document.getElementById("valNumOfCirW").innerHTML
                    // valNumOfCirWF = document.getElementById("valNumOfCirW")
                    // let increaseW = valNumOfCirW + 1
                    // if(liUlWorks[indexesW].className == "Done" ){
                    //     // console.log("Done");
                    //     valNumOfCirA = +document.getElementById("valNumOfCirA").innerHTML
                    //     valNumOfCirAF = document.getElementById("valNumOfCirA")
                    //     let decreaseWD = valNumOfCirA - 1
                    //     valNumOfCirAF.textContent = decreaseWD
                    //     // numOfRowWorkDon.value = ""
                        
                    // }
                    // if(liUlWorks[indexesW].className == "Delete" ){
                    //     // console.log("Done");
                    //     valNumOfCirD = +document.getElementById("valNumOfCirD").innerHTML
                    //     valNumOfCirDF = document.getElementById("valNumOfCirD")
                    //     let decreaseWD = valNumOfCirD - 1
                    //     valNumOfCirDF.textContent = decreaseWD
                    //     // numOfRowWorkDon.value = ""
                        
                    // }
                    // valNumOfCirWF.textContent = increaseW
                    numOfRowWorkWat.value = ""
                    
                }
            })
            numOfRowWorkDon.addEventListener("keyup" , (event)=>{
                if(event.keyCode == 13){
                    liUlWorks[(numOfRowWorkDon.value)-1].style.opacity =".2"
                    liUlWorks[(numOfRowWorkDon.value)-1].style.textDecoration ="none"
                    liUlWorks[(numOfRowWorkDon.value)-1].style.color ="black"
                    numOfRowWorkDon.value= ""

                    // valNumOfCirA = +document.getElementById("valNumOfCirA").innerHTML
                    // valNumOfCirAF = document.getElementById("valNumOfCirA")
                    // let increase = valNumOfCirA + 1
                    // valNumOfCirAF.textContent = increase
                    // numOfRowWorkDon.value = ""
                    
                }
            })
    
        }
       
        function openMenuWork(){
            boxControplWMWork.classList.replace("btnBox0Work","btnBoxWork")
            let prographWork = document.createElement("p")
            addComWork.addEventListener("click",()=>{
                if(this.className == "compliteWork"){
                    
                    this.classList.replace("compliteWork" , "dcompliteWork")
                    this.appendChild(prographWork)
                    prographWork.style.backgroundColor="rgb(112,66,100)"
                    prographWork.innerHTML = "Your Comment : "+ comInputWork.value
                    comInputWork.value = ""
                    // changCmm.classList.replace("divCange0","divCange")
                }
            })
            prographWork.addEventListener("click" , ()=>{
                prographWork.textContent == comInputWork.value

            })

        }














    }




   

    else{
        selectDiv.style.backgroundColor="red"
       
        

    }
  
    mProjectName=""
    mPriority =""
    mStatuses =""
    inputTab1.focus()
   
    
})



















