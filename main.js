/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

 




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFubmVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxvREFBb0QseUJBQXlCO0FBQzdFO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7Ozs7O0FBS1QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEljb25cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbmNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VCdG5cIik7XG5jb25zdCBzdWIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIjc3ViXCIpO1xuY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLm15Rm9ybVwiKTtcbmxldCBkYXRhTnVtYmVyID0gMDtcbmNvbnN0IGxlZnRTZWN0aW9uID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtc2VjdGlvblwiKTtcbmNvbnN0IGJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFySWNvblwiKTtcblxuYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGxlZnRTZWN0aW9uKTtcbiAgIGNvbnN0IGRpc3AgPSBzdHlsZS5kaXNwbGF5O1xuICAgaWYoZGlzcCA9PSBcIm5vbmVcIil7XG4gICAgICAgbGVmdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgfVxuICAgZWxzZXtcbiAgICAgICBsZWZ0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgIH1cbn0pXG5cbmFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5cbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxubGV0IGFyciA9IFtdO1xuc3ViLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtVmFsdWUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIubXlGb3JtXCIpLmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZSk7XG4gICAgaWYgKGZvcm1WYWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJFbnRlciB0aGUgdmFsdWVcIik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgbGV0IGluZm8gPSBuZXcgY3JlYXRlUHJvamVjdChmb3JtVmFsdWUpO1xuICAgIGFyci5wdXNoKGluZm8pO1xuICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgcHJvakRpdkNyZWF0b3IoaW5mbyk7XG4gICAgXG4gICAgbXlGb3JtLnJlc2V0KCk7XG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuXG4gIFxuXG5cbiBmdW5jdGlvbiBlbGVtZW50Q3JlYXRvcih0eXBlLHByb3BlcnRpZXMpe1xuICAgIGxldCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IHByb3AgaW4gcHJvcGVydGllcyl7XG4gICAgICAgIGVsZVtwcm9wXSA9IHByb3BlcnRpZXNbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBlbGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUpe1xudGhpcy5wcm9qTmFtZSA9IHByb2pOYW1lO1xuXG59XG5cbmZ1bmN0aW9uIHByb2pEaXZDcmVhdG9yKGFyKXtcbiAgICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLnByb2pJdGVtQ29udFwiKTtcbiAgICBcbiAgICBcbiAgICAgICAgXG4gICAgY29uc3QgICAgcHJvakl0ZW1zRGl2ID0gZWxlbWVudENyZWF0b3IoXCJkaXZcIiAsIHtjbGFzc05hbWUgOiBcInByb2otaXRlbXNcIn0pO1xuICAgICAgICBwcm9qSXRlbXNEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIixkYXRhTnVtYmVyKTtcbiAgICAgICAgZGF0YU51bWJlcisrO1xuICAgIGNvbnN0ICAgIHByb2pQYXJhID0gZWxlbWVudENyZWF0b3IoXCJwXCIse30pO1xuICAgICAgICBwcm9qUGFyYS50ZXh0Q29udGVudCA9IGFyLnByb2pOYW1lO1xuICAgICBjb25zdCAgIHByb2pTcGFuID0gZWxlbWVudENyZWF0b3IoXCJzcGFuXCIsIHtjbGFzc05hbWUgOiBcIm1hdGVyaWFsLWljb25zIG1pbnVzXCJ9KTtcbiAgICAgICAgcHJvalNwYW4udGV4dENvbnRlbnQgPSBcInJlbW92ZV9jaXJjbGVfb3V0bGluZVwiO1xuICAgICAgICBwcm9qSXRlbXNEaXYuYXBwZW5kQ2hpbGQocHJvalBhcmEpO1xuICAgICAgICBwcm9qSXRlbXNEaXYuYXBwZW5kQ2hpbGQocHJvalNwYW4pO1xuICAgICAgICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pJdGVtc0Rpdik7XG5cbiAgICAgICAgcHJvalNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW51bWJlclwiKTtcblxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGFyci5zcGxpY2UoTnVtYmVyKGRhdGEpLDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAgXG4gIFxuXG4gICBcbn1cblxuIFxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==