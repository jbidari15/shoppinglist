//Adding each item after clicking the add button
const addList = ()=>{
    let addItem = document.getElementById("add");
    addItem.addEventListener("click",()=>{
    //    console.log("hello");
    let givenName=document.getElementById("name");
    let givenQuantity=document.getElementById("quantity");
    if( givenName.value.length!=0 &&   givenQuantity.value.length!=0){
        createItem();
        givenName.value="";
        givenQuantity.value="";
    }
    else{
        alert("PLEASE FILL THE INPUT FIELDS :):)");
    }
  })
}
//This function creates new item each time when invoked
    const createItem = ()=>{
        // let givenName=document.getElementById("name");
        // let givenQuantity=document.getElementById("quantity");
        let secondContainer=document.getElementById("secondContainer");
        let itemDiv= document.createElement("div");
    //  itemDiv.classList.add("item");
    itemDiv.className="item";
    secondContainer.appendChild(itemDiv);
  
    //This function creates and append checkbox in each item
    const createCheckbox=()=>{
        let input=document.createElement("input");
        input.type="checkbox";
        input.className="myCheck";
       // input.onclick="doCheck()";
        itemDiv.appendChild(input);
        doCheck();
   }

   //This function creates and appends two inner divs for name and quantity inside each item
   const createInnerDivs=()=>{
    let givenName=document.getElementById("name");
    let givenQuantity=document.getElementById("quantity");
        let divForName=document.createElement("div");
        let divForQuantity=document.createElement("div");
        divForName.textContent=givenName.value;
        divForName.className="itemName";
        divForQuantity.textContent=givenQuantity.value;
        itemDiv.appendChild(divForName);
        itemDiv.appendChild(divForQuantity);
   }

   //This function creates and appends the delete button inside each item
   const createDeleteButtonAndDelete=()=>{
       let del = document.createElement("button");
       del.textContent="DELETE";
       del.className="doing-delete";
       itemDiv.appendChild(del);
        deleteItem();

   }
   createCheckbox();
   createInnerDivs();
   createDeleteButtonAndDelete();

}

addList();

const deleteItem=()=>{
    var remove=document.getElementsByClassName("doing-delete");
    for(var i=0;i<remove.length;i++){
     remove[i].addEventListener("click",(e)=>{
     e.currentTarget.parentNode.remove();
        },false);
    }
}

deleteItem();
function doFunction(){
    // itemName[i].style.textDecoration ="line-through";
     thirdContainer.appendChild(event.target.parentNode);
     var undo= document.createElement("button");
     undo.textContent="UNDO";
     undo.className="undo";
     event.target.parentNode.classList.add("done-item");
     let theFirstChild= event.target.parentNode.firstChild;
     event.target.parentNode.insertBefore(undo,theFirstChild);
     event.target.remove();
    undoItem();
 

 }
const doCheck =()=>{
    const secondContainer=document.getElementById("secondContainer");
    let thirdContainer=document.getElementById("thirdContainer");
    let itemName=document.getElementsByClassName("itemName");
   
    let myCheck=document.getElementsByClassName("myCheck");
        for(let i=0;i<myCheck.length;i++){
        myCheck[i].addEventListener("click",doFunction);
    }
}
doCheck();

const handleUndo = (e)=>{
    secondContainer.appendChild(e.currentTarget.parentNode);
    let input=document.createElement("input");
    input.type="checkbox";
    input.className="myCheck";
    let theFirstChild= e.currentTarget.parentNode.firstChild;
    e.currentTarget.parentNode.insertBefore(input,theFirstChild);
    e.currentTarget.remove();
    doCheck();
 }

let undoItem=()=>{
    let undoButtons=document.getElementsByClassName("undo");
   for(let i=0;i<undoButtons.length;i++){
       undoButtons[i].addEventListener("click", handleUndo)
       
   }
}
