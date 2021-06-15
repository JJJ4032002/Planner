const addIcon = document.getElementById("addIcon");
const modal = document.body.querySelector(".modal");
const closeModal = document.body.querySelector("#closeBtn");
const sub = document.body.querySelector("#sub");
const myForm = document.body.querySelector(".myForm");
let dataNumber = 0;
const leftSection = document.body.querySelector(".left-section");
const barBtn = document.getElementById("barIcon");

barBtn.addEventListener("click",function(e){
   const style = getComputedStyle(leftSection);
   const disp = style.display;
   if(disp == "none"){
       leftSection.style.display = "block"
   }
   else{
       leftSection.style.display = "none"
   }
})

addIcon.addEventListener("click",function(){
     
    modal.style.display = "block";
})

closeModal.addEventListener("click",function(){
    modal.style.display = "none";
})
let arr = [];
sub.addEventListener("click",function(e){
    
    e.preventDefault();
    const formValue = document.body.querySelector(".myForm").elements[0].value;
    console.log(formValue);
    if (formValue == ""){
        alert("Enter the value");
    }
    else{
    let info = new createProject(formValue);
    arr.push(info);
    console.log(arr);
    projDivCreator(info);
    
    myForm.reset();
    console.log(arr);
    
    modal.style.display = "none";
    }
})


  


 function elementCreator(type,properties){
    let ele = document.createElement(type);
    for (let prop in properties){
        ele[prop] = properties[prop];
    }
    return ele;
}

function createProject(projName){
this.projName = projName;

}

function projDivCreator(ar){
    const projContainer = document.body.querySelector(".projItemCont");
    
    
        
    const    projItemsDiv = elementCreator("div" , {className : "proj-items"});
        projItemsDiv.setAttribute("data-number",dataNumber);
        dataNumber++;
    const    projPara = elementCreator("p",{});
        projPara.textContent = ar.projName;
     const   projSpan = elementCreator("span", {className : "material-icons minus"});
        projSpan.textContent = "remove_circle_outline";
        projItemsDiv.appendChild(projPara);
        projItemsDiv.appendChild(projSpan);
        projContainer.appendChild(projItemsDiv);

        projSpan.addEventListener("click",function(e){
            const data = e.target.parentNode.getAttribute("data-number");

            e.target.parentNode.remove();
            arr.splice(Number(data),1);
            console.log(arr);
            
        })
         
  

   
}

 



