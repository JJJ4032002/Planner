import {arr,taskArr,projectArray} from "./index.js";


function createProject(projName,dataNumber){
this.projName = projName;
this.dataNumber = dataNumber;
}
let dataNumber = 0;
function elementCreator(type,properties){
    let ele = document.createElement(type);
    for (let prop in properties){
        ele[prop] = properties[prop];
    }
    return ele;
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

            
            const projTextRem = e.target.previousElementSibling.textContent;
            console.log(projTextRem);

            e.target.parentNode.remove();

            taskArr.forEach(function(e){
               function checkDataProject(ar){
                if(projTextRem === ar.projectSelect){
                    return true;
                }
                else{
                    return undefined;
                }

            }



             let taskIndex = taskArr.findIndex(checkDataProject);

             if(taskIndex == -1){
                 console.log("Nothing to splice");
             }
             else{
             taskArr.splice(taskIndex,1);
            console.log(taskArr);
             }
            })

            function checkDataNumber(ar){
                if(Number(data) === ar.dataNumber){
                    return true;
                }
                 

            }

             
            let index = arr.findIndex(checkDataNumber);
        localStorage.removeItem(`proj${data}`);
            
            arr.splice(index,1);
            console.log(arr);
             
            
        })
         
  
return projItemsDiv;
   
}

 export {createProject,projDivCreator,elementCreator,dataNumber};