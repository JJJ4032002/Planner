/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arr": () => (/* binding */ arr),
/* harmony export */   "taskArr": () => (/* binding */ taskArr),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projectSelector": () => (/* binding */ projectSelector),
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "dataNumberTasks": () => (/* binding */ dataNumberTasks)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");




const addIcon = document.getElementById("addIcon");
const modal = document.body.querySelector(".modal");
const closeModal = document.body.querySelector("#closeBtn");
const sub = document.body.querySelector("#sub");
const myForm = document.body.querySelector(".myForm");
const taskForm = document.body.querySelector(".taskForm");
const leftSection = document.body.querySelector(".left-section");
const barBtn = document.getElementById("barIcon");
const addTaskModal = document.body.querySelector(".modal-tasks");

const addTaskBtn = document.body.querySelector(".task-btn");

const closeTaskBtn = document.body.querySelector("#taskCloseBtn");
const subTaskBtn = document.body.querySelector("#taskSub");

const upperElements = document.querySelectorAll(".left-secItem");

const upperDivsArray = Array.from(upperElements);

const toDoHeading = document.body.querySelector(".rightSecSpan");

let projectSelector = "Inbox";
let projectArray = [];
let dataNumberTasks = 0;
upperDivsArray.forEach(function(e){
    e.addEventListener("click",function(ele){
        console.log(ele.target.textContent);
        projectSelector = ele.target.textContent;
        toDoHeading.textContent = projectSelector;

         

        let addTodiv = taskArr.filter(checkTask);
        console.log(addTodiv);
        _task__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          (0,_task__WEBPACK_IMPORTED_MODULE_1__.taskDivCreator)(e);
        })
    })
})


function checkTask(ar){
           if(projectSelector == ar.projectSelect){
               return true;
           }
        }



addTaskBtn.addEventListener("click",function(){
   addTaskModal.style.display = "block";
})

closeTaskBtn.addEventListener("click",function(){
    addTaskModal.style.display = "none";
})

let taskArr = [];

subTaskBtn.addEventListener("click",function(e){
    e.preventDefault();

    const taskTitle = taskForm.elements[0].value;
    const taskDes = taskForm.elements[1].value;
    const taskDate = taskForm.elements[2].value;
    const taskPriority = taskForm.elements[3].value;
   const FinTaskPriority = taskPriority.toLowerCase();
    console.log(taskTitle);
    console.log(taskDes);
    console.log(taskDate);
    console.log(typeof(taskPriority));
    if(taskTitle == "" || taskDes == "" || taskDate == "" || taskPriority == ""){
        alert("Enter all the values");
    }
    else if((FinTaskPriority !== "red") && (FinTaskPriority !== "yellow") && (FinTaskPriority !== "green")){
        alert("Enter from red,yellow or green");
    }
    else{
        let taskInfo = new _task__WEBPACK_IMPORTED_MODULE_1__.createTask(taskTitle,taskDes,taskDate,FinTaskPriority,dataNumberTasks,projectSelector);
        taskArr.push(taskInfo);

        
        (0,_task__WEBPACK_IMPORTED_MODULE_1__.taskDivCreator)(taskInfo);
        dataNumberTasks++;
        taskForm.reset();
        addTaskModal.style.display = "none";
        console.log(taskArr);
    }




})


 
 







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
    let info = new _project__WEBPACK_IMPORTED_MODULE_0__.createProject(formValue,_project__WEBPACK_IMPORTED_MODULE_0__.dataNumber);
    arr.push(info);
    console.log(arr);
    projectArray.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.projDivCreator)(info));

    


    
    myForm.reset();
    console.log(arr);
    console.log(projectArray);

    projectArray.forEach(function(e){
        e.addEventListener("click",function(ele){
            

            projectSelector = ele.target.childNodes[0].textContent;

            if(projectSelector == "remove_circle_outline"){
               projectSelector = "Inbox" 

            toDoHeading.textContent = projectSelector;

             let addTodiv = taskArr.filter(checkTask);

             _task__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          (0,_task__WEBPACK_IMPORTED_MODULE_1__.taskDivCreator)(e);
        })
            }

            else{

            toDoHeading.textContent = ele.target.childNodes[0].textContent;

            let addTodiv = taskArr.filter(checkTask);

             _task__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          (0,_task__WEBPACK_IMPORTED_MODULE_1__.taskDivCreator)(e);
        })
    }

        })
    })

    
    modal.style.display = "none";
    }
})




  

 

 





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projDivCreator": () => (/* binding */ projDivCreator),
/* harmony export */   "elementCreator": () => (/* binding */ elementCreator),
/* harmony export */   "dataNumber": () => (/* binding */ dataNumber)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



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

            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.forEach(function(e){
               function checkDataProject(ar){
                if(projTextRem === ar.projectSelect){
                    return true;
                }
                else{
                    return undefined;
                }

            }



             let taskIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.findIndex(checkDataProject);

             if(taskIndex == -1){
                 console.log("Nothing to splice");
             }
             else{
             _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.splice(taskIndex,1);
            console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr);
             }
            })

            function checkDataNumber(ar){
                if(Number(data) === ar.dataNumber){
                    return true;
                }
                 

            }

             
            let index = _index_js__WEBPACK_IMPORTED_MODULE_0__.arr.findIndex(checkDataNumber);
        localStorage.removeItem(`proj${data}`);
            
            _index_js__WEBPACK_IMPORTED_MODULE_0__.arr.splice(index,1);
            console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.arr);
             
            
        })
         
  
return projItemsDiv;
   
}

 

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "taskDivCreator": () => (/* binding */ taskDivCreator),
/* harmony export */   "taskContainer": () => (/* binding */ taskContainer)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




const taskContainer = document.body.querySelector(".tasks-container");

function taskDivCreator(taskinfo){

     
     
    const taskDiv = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("div", {className : "task-div"});
    taskDiv.setAttribute("data-numberTasks",taskinfo.dataNumber);
    
    const visibleDiv = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("div",{className : "visible-tasks"});
    taskDiv.appendChild(visibleDiv);
    const paraTitle = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("p", {className : "taskTitle"});
    paraTitle.textContent = taskinfo.title;
    visibleDiv.appendChild(paraTitle);
    const IconsDiv = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("div", {className : "task-icons"});
    visibleDiv.appendChild(IconsDiv);
    const editIcon = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("span",{className : "material-icons taskIcons"});
    editIcon.textContent = "border_color";
    IconsDiv.appendChild(editIcon);
    const removeIcon = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("span",{className : "material-icons taskIcons"});
    removeIcon.textContent = "remove_circle_outline";
    IconsDiv.appendChild(removeIcon);
    const arrowIcon = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("span", {className : "material-icons taskIcons"});
    arrowIcon.textContent = "arrow_drop_down";
    IconsDiv.appendChild(arrowIcon);
    const invisibleDiv = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("div",{className : "invisible-tasks"});
    taskDiv.appendChild(invisibleDiv);
    const datePara = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("p",{});
    datePara.textContent = `Date : ${taskinfo.date}`;
    invisibleDiv.appendChild(datePara);
    const descPara = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("p",{});
    descPara.textContent = taskinfo.desc;
    invisibleDiv.appendChild(descPara);
    const prioDiv = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.elementCreator)("p",{});
    prioDiv.textContent = `Priority : ${taskinfo.priority}`;
    invisibleDiv.appendChild(prioDiv);

    taskContainer.appendChild(taskDiv);
       
    const editForm = document.body.querySelector(".EditForm");
    const modalEdit = document.body.querySelector(".modal-edit");
    let EditTitInput = document.getElementById("EditTitle");
     let EditDescInput = document.getElementById("EditDesc");
     let EditDateInput = document.getElementById("EditDate");
     let EditPrioInput = document.getElementById("EditPriority");



      editIcon.addEventListener("click",function(e){
           
     
      
     const editdataNumber = e.target.parentNode.parentNode.parentNode.getAttribute("data-numbertasks");
      console.log(editdataNumber);

           const gtTitle = e.target.parentNode.previousElementSibling.textContent;
            EditTitInput.value = gtTitle;

            const gtdesc = e.target.parentNode.parentNode.nextElementSibling.childNodes[1].textContent;

            EditDescInput.value = gtdesc;
            


        const gtdate =     e.target.parentNode.parentNode.nextElementSibling.childNodes[0].textContent;
         const gtdateTrim = gtdate.substr(7,16);

         EditDateInput.value = gtdateTrim;

        const gtprio =  e.target.parentNode.parentNode.nextElementSibling.childNodes[2].textContent;
        const gtprioTrim = gtprio.substr(11,13);
        EditPrioInput.value = gtprioTrim;

             console.log(gtdateTrim);
             console.log(gtprioTrim);
            console.log(gtdesc);
           

            
           modalEdit.style.display = "block";

           const editSubBtn = document.body.querySelector("#editSub");

           editSubBtn.addEventListener("click",function(ele){
               ele.preventDefault();

                const taskTitleEdit = editForm.elements[0].value;
    const taskDesEdit = editForm.elements[1].value;
    const taskDateEdit = editForm.elements[2].value;
    const taskPriorityEdit = editForm.elements[3].value;
    const FinTaskPriorityEdit =  taskPriorityEdit.toLowerCase();
if(taskTitleEdit == "" || taskDesEdit == "" || taskDateEdit == "" || taskPriorityEdit == ""){
        alert("Enter all the values");
    }
    else if((FinTaskPriorityEdit !== "red") && (FinTaskPriorityEdit !== "yellow") && (FinTaskPriorityEdit !== "green")){
        alert("Enter from red,yellow or green");
    }
    else{
        let taskInfoEdit = new createTask(taskTitleEdit,taskDesEdit,taskDateEdit,taskPriorityEdit,editdataNumber,_index_js__WEBPACK_IMPORTED_MODULE_0__.projectSelector);

        function checkDataEdit(ar){
                if(Number(editdataNumber) == ar.dataNumber){
                    return true;
                }

            }
            
            const editIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.findIndex(checkDataEdit);
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.splice(editIndex,1,taskInfoEdit);

              let addTodiv = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.filter(_index_js__WEBPACK_IMPORTED_MODULE_0__.checkTask);
        console.log(addTodiv);
        taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          taskDivCreator(e);
        })

         modalEdit.style.display = "none";


    }


    console.log(taskTitleEdit);
           })

      });

 
      const editModalClose = document.body.querySelector("#editCloseBtn");

      editModalClose.addEventListener("click",function(e){
       e.preventDefault();
          
          modalEdit.style.display = "none";
          console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr);
      })

removeIcon.addEventListener("click",function(e){

  const datatasks =  e.target.parentNode.parentNode.parentNode.getAttribute("data-numbertasks");

    e.target.parentNode.parentNode.parentNode.remove();

     function checkDataNumber(ar){
                if(Number(datatasks) == ar.dataNumber){
                    return true;
                }

            }
             let indexTask = _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.findIndex(checkDataNumber);
            if (indexTask == -1){
                console.log("Nothing to be spliced");
            }
            else{
            
            _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.splice(indexTask,1);
            console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArr);
            }
})

let arrowIconCheck = 0;
arrowIcon.addEventListener("click",function(e){

if(arrowIconCheck == 0){
    invisibleDiv.style.display = "block"
    arrowIconCheck = 1;
}
else{
    invisibleDiv.style.display = "none";
    arrowIconCheck = 0;
}

})



}

function createTask(title,desc,date,priority,dataNumber,projectSelect){
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.dataNumber = dataNumber;
    this.projectSelect = projectSelect;
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFubmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BsYW5uZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wbGFubmVyLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vcGxhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGFubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGFubmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYW5uZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRjs7QUFFbkI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsUUFBUSwwREFBdUI7QUFDL0I7O0FBRUEsVUFBVSxxREFBYztBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFVO0FBQ3JDOzs7QUFHQSxRQUFRLHFEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsQ0FBQzs7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Q3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7OztBQUdBOzs7QUFHQTtBQUNBLFlBQVk7O0FBRVosT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw4Q0FBTztBQUM3QixPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHdEQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHFEQUFjO0FBQzFCLHdCQUF3Qiw4Q0FBTztBQUMvQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnRDs7Ozs7Ozs7VUNqTWhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvakRpdkNyZWF0b3IsZWxlbWVudENyZWF0b3IsZGF0YU51bWJlcn0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVUYXNrLHRhc2tEaXZDcmVhdG9yLHRhc2tDb250YWluZXJ9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSWNvblwiKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcbmNvbnN0IHN1YiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNzdWJcIik7XG5jb25zdCBteUZvcm0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubXlGb3JtXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Zvcm1cIik7XG5jb25zdCBsZWZ0U2VjdGlvbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5sZWZ0LXNlY3Rpb25cIik7XG5jb25zdCBiYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhckljb25cIik7XG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtdGFza3NcIik7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idG5cIik7XG5cbmNvbnN0IGNsb3NlVGFza0J0biA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiN0YXNrQ2xvc2VCdG5cIik7XG5jb25zdCBzdWJUYXNrQnRuID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tTdWJcIik7XG5cbmNvbnN0IHVwcGVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZnQtc2VjSXRlbVwiKTtcblxuY29uc3QgdXBwZXJEaXZzQXJyYXkgPSBBcnJheS5mcm9tKHVwcGVyRWxlbWVudHMpO1xuXG5jb25zdCB0b0RvSGVhZGluZyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5yaWdodFNlY1NwYW5cIik7XG5cbmxldCBwcm9qZWN0U2VsZWN0b3IgPSBcIkluYm94XCI7XG5sZXQgcHJvamVjdEFycmF5ID0gW107XG5sZXQgZGF0YU51bWJlclRhc2tzID0gMDtcbnVwcGVyRGl2c0FycmF5LmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlbGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlbGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgcHJvamVjdFNlbGVjdG9yID0gZWxlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgdG9Eb0hlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0U2VsZWN0b3I7XG5cbiAgICAgICAgIFxuXG4gICAgICAgIGxldCBhZGRUb2RpdiA9IHRhc2tBcnIuZmlsdGVyKGNoZWNrVGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZFRvZGl2KTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBhZGRUb2Rpdi5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICBcbiAgICAgICAgICB0YXNrRGl2Q3JlYXRvcihlKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSlcblxuXG5mdW5jdGlvbiBjaGVja1Rhc2soYXIpe1xuICAgICAgICAgICBpZihwcm9qZWN0U2VsZWN0b3IgPT0gYXIucHJvamVjdFNlbGVjdCl7XG4gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICBhZGRUYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbmNsb3NlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgIGFkZFRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5sZXQgdGFza0FyciA9IFtdO1xuXG5zdWJUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tGb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXMgPSB0YXNrRm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tGb3JtLmVsZW1lbnRzWzJdLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tGb3JtLmVsZW1lbnRzWzNdLnZhbHVlO1xuICAgY29uc3QgRmluVGFza1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2codGFza1RpdGxlKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrRGVzKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrRGF0ZSk7XG4gICAgY29uc29sZS5sb2codHlwZW9mKHRhc2tQcmlvcml0eSkpO1xuICAgIGlmKHRhc2tUaXRsZSA9PSBcIlwiIHx8IHRhc2tEZXMgPT0gXCJcIiB8fCB0YXNrRGF0ZSA9PSBcIlwiIHx8IHRhc2tQcmlvcml0eSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBhbGwgdGhlIHZhbHVlc1wiKTtcbiAgICB9XG4gICAgZWxzZSBpZigoRmluVGFza1ByaW9yaXR5ICE9PSBcInJlZFwiKSAmJiAoRmluVGFza1ByaW9yaXR5ICE9PSBcInllbGxvd1wiKSAmJiAoRmluVGFza1ByaW9yaXR5ICE9PSBcImdyZWVuXCIpKXtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBmcm9tIHJlZCx5ZWxsb3cgb3IgZ3JlZW5cIik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGxldCB0YXNrSW5mbyA9IG5ldyBjcmVhdGVUYXNrKHRhc2tUaXRsZSx0YXNrRGVzLHRhc2tEYXRlLEZpblRhc2tQcmlvcml0eSxkYXRhTnVtYmVyVGFza3MscHJvamVjdFNlbGVjdG9yKTtcbiAgICAgICAgdGFza0Fyci5wdXNoKHRhc2tJbmZvKTtcblxuICAgICAgICBcbiAgICAgICAgdGFza0RpdkNyZWF0b3IodGFza0luZm8pO1xuICAgICAgICBkYXRhTnVtYmVyVGFza3MrKztcbiAgICAgICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgYWRkVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29uc29sZS5sb2codGFza0Fycik7XG4gICAgfVxuXG5cblxuXG59KVxuXG5cbiBcbiBcblxuXG5cblxuXG5cblxuYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGxlZnRTZWN0aW9uKTtcbiAgIGNvbnN0IGRpc3AgPSBzdHlsZS5kaXNwbGF5O1xuICAgaWYoZGlzcCA9PSBcIm5vbmVcIil7XG4gICAgICAgbGVmdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgfVxuICAgZWxzZXtcbiAgICAgICBsZWZ0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgIH1cbn0pXG5cbmFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cbmxldCBhcnIgPSBbXTtcblxuXG5zdWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5teUZvcm1cIikuZWxlbWVudHNbMF0udmFsdWU7XG4gICAgY29uc29sZS5sb2coZm9ybVZhbHVlKTtcbiAgICBpZiAoZm9ybVZhbHVlID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIkVudGVyIHRoZSB2YWx1ZVwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICBsZXQgaW5mbyA9IG5ldyBjcmVhdGVQcm9qZWN0KGZvcm1WYWx1ZSxkYXRhTnVtYmVyKTtcbiAgICBhcnIucHVzaChpbmZvKTtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2pEaXZDcmVhdG9yKGluZm8pKTtcblxuICAgIFxuXG5cbiAgICBcbiAgICBteUZvcm0ucmVzZXQoKTtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG5cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHByb2plY3RTZWxlY3RvciA9IGVsZS50YXJnZXQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgaWYocHJvamVjdFNlbGVjdG9yID09IFwicmVtb3ZlX2NpcmNsZV9vdXRsaW5lXCIpe1xuICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdG9yID0gXCJJbmJveFwiIFxuXG4gICAgICAgICAgICB0b0RvSGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3RTZWxlY3RvcjtcblxuICAgICAgICAgICAgIGxldCBhZGRUb2RpdiA9IHRhc2tBcnIuZmlsdGVyKGNoZWNrVGFzayk7XG5cbiAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGFkZFRvZGl2LmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgIFxuICAgICAgICAgIHRhc2tEaXZDcmVhdG9yKGUpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICB0b0RvSGVhZGluZy50ZXh0Q29udGVudCA9IGVsZS50YXJnZXQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgbGV0IGFkZFRvZGl2ID0gdGFza0Fyci5maWx0ZXIoY2hlY2tUYXNrKTtcblxuICAgICAgICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYWRkVG9kaXYuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgdGFza0RpdkNyZWF0b3IoZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIFxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KVxuXG5leHBvcnQge2Fycix0YXNrQXJyLHByb2plY3RBcnJheSxwcm9qZWN0U2VsZWN0b3IsY2hlY2tUYXNrLGRhdGFOdW1iZXJUYXNrc307XG5cblxuICBcblxuIFxuXG4gXG5cblxuXG4iLCJpbXBvcnQge2Fycix0YXNrQXJyLHByb2plY3RBcnJheX0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2pOYW1lLGRhdGFOdW1iZXIpe1xudGhpcy5wcm9qTmFtZSA9IHByb2pOYW1lO1xudGhpcy5kYXRhTnVtYmVyID0gZGF0YU51bWJlcjtcbn1cbmxldCBkYXRhTnVtYmVyID0gMDtcbmZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKHR5cGUscHJvcGVydGllcyl7XG4gICAgbGV0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wZXJ0aWVzKXtcbiAgICAgICAgZWxlW3Byb3BdID0gcHJvcGVydGllc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZTtcbn1cblxuZnVuY3Rpb24gcHJvakRpdkNyZWF0b3IoYXIpe1xuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIucHJvakl0ZW1Db250XCIpO1xuICAgIFxuICAgIFxuICAgICAgICBcbiAgICBjb25zdCAgICBwcm9qSXRlbXNEaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiICwge2NsYXNzTmFtZSA6IFwicHJvai1pdGVtc1wifSk7XG4gICAgICAgIHByb2pJdGVtc0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiLGRhdGFOdW1iZXIpO1xuICAgICAgICBkYXRhTnVtYmVyKys7XG4gICAgY29uc3QgICAgcHJvalBhcmEgPSBlbGVtZW50Q3JlYXRvcihcInBcIix7fSk7XG4gICAgICAgIHByb2pQYXJhLnRleHRDb250ZW50ID0gYXIucHJvak5hbWU7XG4gICAgIGNvbnN0ICAgcHJvalNwYW4gPSBlbGVtZW50Q3JlYXRvcihcInNwYW5cIiwge2NsYXNzTmFtZSA6IFwibWF0ZXJpYWwtaWNvbnMgbWludXNcIn0pO1xuICAgICAgICBwcm9qU3Bhbi50ZXh0Q29udGVudCA9IFwicmVtb3ZlX2NpcmNsZV9vdXRsaW5lXCI7XG4gICAgICAgIHByb2pJdGVtc0Rpdi5hcHBlbmRDaGlsZChwcm9qUGFyYSk7XG4gICAgICAgIHByb2pJdGVtc0Rpdi5hcHBlbmRDaGlsZChwcm9qU3Bhbik7XG4gICAgICAgIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvakl0ZW1zRGl2KTtcblxuICAgICAgICBwcm9qU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2pUZXh0UmVtID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2pUZXh0UmVtKTtcblxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgdGFza0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tEYXRhUHJvamVjdChhcil7XG4gICAgICAgICAgICAgICAgaWYocHJvalRleHRSZW0gPT09IGFyLnByb2plY3RTZWxlY3Qpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICBsZXQgdGFza0luZGV4ID0gdGFza0Fyci5maW5kSW5kZXgoY2hlY2tEYXRhUHJvamVjdCk7XG5cbiAgICAgICAgICAgICBpZih0YXNrSW5kZXggPT0gLTEpe1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgdG8gc3BsaWNlXCIpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgIHRhc2tBcnIuc3BsaWNlKHRhc2tJbmRleCwxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRGF0YU51bWJlcihhcil7XG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyKGRhdGEpID09PSBhci5kYXRhTnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBhcnIuZmluZEluZGV4KGNoZWNrRGF0YU51bWJlcik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBwcm9qJHtkYXRhfWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAgXG4gIFxucmV0dXJuIHByb2pJdGVtc0RpdjtcbiAgIFxufVxuXG4gZXhwb3J0IHtjcmVhdGVQcm9qZWN0LHByb2pEaXZDcmVhdG9yLGVsZW1lbnRDcmVhdG9yLGRhdGFOdW1iZXJ9OyIsImltcG9ydCB7dGFza0Fycixwcm9qZWN0U2VsZWN0b3IsY2hlY2tUYXNrLGRhdGFOdW1iZXJUYXNrc30gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7ZWxlbWVudENyZWF0b3J9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gdGFza0RpdkNyZWF0b3IodGFza2luZm8pe1xuXG4gICAgIFxuICAgICBcbiAgICBjb25zdCB0YXNrRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwge2NsYXNzTmFtZSA6IFwidGFzay1kaXZcIn0pO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJUYXNrc1wiLHRhc2tpbmZvLmRhdGFOdW1iZXIpO1xuICAgIFxuICAgIGNvbnN0IHZpc2libGVEaXYgPSBlbGVtZW50Q3JlYXRvcihcImRpdlwiLHtjbGFzc05hbWUgOiBcInZpc2libGUtdGFza3NcIn0pO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodmlzaWJsZURpdik7XG4gICAgY29uc3QgcGFyYVRpdGxlID0gZWxlbWVudENyZWF0b3IoXCJwXCIsIHtjbGFzc05hbWUgOiBcInRhc2tUaXRsZVwifSk7XG4gICAgcGFyYVRpdGxlLnRleHRDb250ZW50ID0gdGFza2luZm8udGl0bGU7XG4gICAgdmlzaWJsZURpdi5hcHBlbmRDaGlsZChwYXJhVGl0bGUpO1xuICAgIGNvbnN0IEljb25zRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiwge2NsYXNzTmFtZSA6IFwidGFzay1pY29uc1wifSk7XG4gICAgdmlzaWJsZURpdi5hcHBlbmRDaGlsZChJY29uc0Rpdik7XG4gICAgY29uc3QgZWRpdEljb24gPSBlbGVtZW50Q3JlYXRvcihcInNwYW5cIix7Y2xhc3NOYW1lIDogXCJtYXRlcmlhbC1pY29ucyB0YXNrSWNvbnNcIn0pO1xuICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gXCJib3JkZXJfY29sb3JcIjtcbiAgICBJY29uc0Rpdi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgY29uc3QgcmVtb3ZlSWNvbiA9IGVsZW1lbnRDcmVhdG9yKFwic3BhblwiLHtjbGFzc05hbWUgOiBcIm1hdGVyaWFsLWljb25zIHRhc2tJY29uc1wifSk7XG4gICAgcmVtb3ZlSWNvbi50ZXh0Q29udGVudCA9IFwicmVtb3ZlX2NpcmNsZV9vdXRsaW5lXCI7XG4gICAgSWNvbnNEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlSWNvbik7XG4gICAgY29uc3QgYXJyb3dJY29uID0gZWxlbWVudENyZWF0b3IoXCJzcGFuXCIsIHtjbGFzc05hbWUgOiBcIm1hdGVyaWFsLWljb25zIHRhc2tJY29uc1wifSk7XG4gICAgYXJyb3dJY29uLnRleHRDb250ZW50ID0gXCJhcnJvd19kcm9wX2Rvd25cIjtcbiAgICBJY29uc0Rpdi5hcHBlbmRDaGlsZChhcnJvd0ljb24pO1xuICAgIGNvbnN0IGludmlzaWJsZURpdiA9IGVsZW1lbnRDcmVhdG9yKFwiZGl2XCIse2NsYXNzTmFtZSA6IFwiaW52aXNpYmxlLXRhc2tzXCJ9KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGludmlzaWJsZURpdik7XG4gICAgY29uc3QgZGF0ZVBhcmEgPSBlbGVtZW50Q3JlYXRvcihcInBcIix7fSk7XG4gICAgZGF0ZVBhcmEudGV4dENvbnRlbnQgPSBgRGF0ZSA6ICR7dGFza2luZm8uZGF0ZX1gO1xuICAgIGludmlzaWJsZURpdi5hcHBlbmRDaGlsZChkYXRlUGFyYSk7XG4gICAgY29uc3QgZGVzY1BhcmEgPSBlbGVtZW50Q3JlYXRvcihcInBcIix7fSk7XG4gICAgZGVzY1BhcmEudGV4dENvbnRlbnQgPSB0YXNraW5mby5kZXNjO1xuICAgIGludmlzaWJsZURpdi5hcHBlbmRDaGlsZChkZXNjUGFyYSk7XG4gICAgY29uc3QgcHJpb0RpdiA9IGVsZW1lbnRDcmVhdG9yKFwicFwiLHt9KTtcbiAgICBwcmlvRGl2LnRleHRDb250ZW50ID0gYFByaW9yaXR5IDogJHt0YXNraW5mby5wcmlvcml0eX1gO1xuICAgIGludmlzaWJsZURpdi5hcHBlbmRDaGlsZChwcmlvRGl2KTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgXG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuRWRpdEZvcm1cIik7XG4gICAgY29uc3QgbW9kYWxFZGl0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWVkaXRcIik7XG4gICAgbGV0IEVkaXRUaXRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRWRpdFRpdGxlXCIpO1xuICAgICBsZXQgRWRpdERlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRWRpdERlc2NcIik7XG4gICAgIGxldCBFZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJFZGl0RGF0ZVwiKTtcbiAgICAgbGV0IEVkaXRQcmlvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkVkaXRQcmlvcml0eVwiKTtcblxuXG5cbiAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICBcbiAgICAgXG4gICAgICBcbiAgICAgY29uc3QgZWRpdGRhdGFOdW1iZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlcnRhc2tzXCIpO1xuICAgICAgY29uc29sZS5sb2coZWRpdGRhdGFOdW1iZXIpO1xuXG4gICAgICAgICAgIGNvbnN0IGd0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBFZGl0VGl0SW5wdXQudmFsdWUgPSBndFRpdGxlO1xuXG4gICAgICAgICAgICBjb25zdCBndGRlc2MgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIEVkaXREZXNjSW5wdXQudmFsdWUgPSBndGRlc2M7XG4gICAgICAgICAgICBcblxuXG4gICAgICAgIGNvbnN0IGd0ZGF0ZSA9ICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICBjb25zdCBndGRhdGVUcmltID0gZ3RkYXRlLnN1YnN0cig3LDE2KTtcblxuICAgICAgICAgRWRpdERhdGVJbnB1dC52YWx1ZSA9IGd0ZGF0ZVRyaW07XG5cbiAgICAgICAgY29uc3QgZ3RwcmlvID0gIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGROb2Rlc1syXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgZ3RwcmlvVHJpbSA9IGd0cHJpby5zdWJzdHIoMTEsMTMpO1xuICAgICAgICBFZGl0UHJpb0lucHV0LnZhbHVlID0gZ3RwcmlvVHJpbTtcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGd0ZGF0ZVRyaW0pO1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGd0cHJpb1RyaW0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ3RkZXNjKTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICBtb2RhbEVkaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICAgICBjb25zdCBlZGl0U3ViQnRuID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI2VkaXRTdWJcIik7XG5cbiAgICAgICAgICAgZWRpdFN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgICAgZWxlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGVFZGl0ID0gZWRpdEZvcm0uZWxlbWVudHNbMF0udmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc0VkaXQgPSBlZGl0Rm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZUVkaXQgPSBlZGl0Rm9ybS5lbGVtZW50c1syXS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlFZGl0ID0gZWRpdEZvcm0uZWxlbWVudHNbM10udmFsdWU7XG4gICAgY29uc3QgRmluVGFza1ByaW9yaXR5RWRpdCA9ICB0YXNrUHJpb3JpdHlFZGl0LnRvTG93ZXJDYXNlKCk7XG5pZih0YXNrVGl0bGVFZGl0ID09IFwiXCIgfHwgdGFza0Rlc0VkaXQgPT0gXCJcIiB8fCB0YXNrRGF0ZUVkaXQgPT0gXCJcIiB8fCB0YXNrUHJpb3JpdHlFZGl0ID09IFwiXCIpe1xuICAgICAgICBhbGVydChcIkVudGVyIGFsbCB0aGUgdmFsdWVzXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmKChGaW5UYXNrUHJpb3JpdHlFZGl0ICE9PSBcInJlZFwiKSAmJiAoRmluVGFza1ByaW9yaXR5RWRpdCAhPT0gXCJ5ZWxsb3dcIikgJiYgKEZpblRhc2tQcmlvcml0eUVkaXQgIT09IFwiZ3JlZW5cIikpe1xuICAgICAgICBhbGVydChcIkVudGVyIGZyb20gcmVkLHllbGxvdyBvciBncmVlblwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGV0IHRhc2tJbmZvRWRpdCA9IG5ldyBjcmVhdGVUYXNrKHRhc2tUaXRsZUVkaXQsdGFza0Rlc0VkaXQsdGFza0RhdGVFZGl0LHRhc2tQcmlvcml0eUVkaXQsZWRpdGRhdGFOdW1iZXIscHJvamVjdFNlbGVjdG9yKTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja0RhdGFFZGl0KGFyKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZWRpdGRhdGFOdW1iZXIpID09IGFyLmRhdGFOdW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEluZGV4ID0gdGFza0Fyci5maW5kSW5kZXgoY2hlY2tEYXRhRWRpdCk7XG4gICAgICAgICAgICB0YXNrQXJyLnNwbGljZShlZGl0SW5kZXgsMSx0YXNrSW5mb0VkaXQpO1xuXG4gICAgICAgICAgICAgIGxldCBhZGRUb2RpdiA9IHRhc2tBcnIuZmlsdGVyKGNoZWNrVGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZFRvZGl2KTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBhZGRUb2Rpdi5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICBcbiAgICAgICAgICB0YXNrRGl2Q3JlYXRvcihlKTtcbiAgICAgICAgfSlcblxuICAgICAgICAgbW9kYWxFZGl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gICAgfVxuXG5cbiAgICBjb25zb2xlLmxvZyh0YXNrVGl0bGVFZGl0KTtcbiAgICAgICAgICAgfSlcblxuICAgICAgfSk7XG5cbiBcbiAgICAgIGNvbnN0IGVkaXRNb2RhbENsb3NlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI2VkaXRDbG9zZUJ0blwiKTtcblxuICAgICAgZWRpdE1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XG4gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIG1vZGFsRWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgY29uc29sZS5sb2codGFza0Fycik7XG4gICAgICB9KVxuXG5yZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuXG4gIGNvbnN0IGRhdGF0YXNrcyA9ICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlcnRhc2tzXCIpO1xuXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XG5cbiAgICAgZnVuY3Rpb24gY2hlY2tEYXRhTnVtYmVyKGFyKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZGF0YXRhc2tzKSA9PSBhci5kYXRhTnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgbGV0IGluZGV4VGFzayA9IHRhc2tBcnIuZmluZEluZGV4KGNoZWNrRGF0YU51bWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXhUYXNrID09IC0xKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGhpbmcgdG8gYmUgc3BsaWNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4VGFzaywxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpO1xuICAgICAgICAgICAgfVxufSlcblxubGV0IGFycm93SWNvbkNoZWNrID0gMDtcbmFycm93SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcblxuaWYoYXJyb3dJY29uQ2hlY2sgPT0gMCl7XG4gICAgaW52aXNpYmxlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBhcnJvd0ljb25DaGVjayA9IDE7XG59XG5lbHNle1xuICAgIGludmlzaWJsZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYXJyb3dJY29uQ2hlY2sgPSAwO1xufVxuXG59KVxuXG5cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLGRlc2MsZGF0ZSxwcmlvcml0eSxkYXRhTnVtYmVyLHByb2plY3RTZWxlY3Qpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGF0YU51bWJlciA9IGRhdGFOdW1iZXI7XG4gICAgdGhpcy5wcm9qZWN0U2VsZWN0ID0gcHJvamVjdFNlbGVjdDtcbn1cblxuZXhwb3J0e2NyZWF0ZVRhc2ssdGFza0RpdkNyZWF0b3IsdGFza0NvbnRhaW5lcn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9