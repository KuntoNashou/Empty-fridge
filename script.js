
function checkedbread(){ 
  if(document.getElementById("my-checkbox").
    checked){
        document.getElementById("message").
        textContent="Checked";
   }
   else{
        document.getElementById("message").
        textContent="Not Checked";

   }
}

function checkedcheese(){
    if(document.getElementById("my-checkbox2").
    checked){
        document.getElementById("message-cheese").
        textContent="Checked";
        cheese = 1;
   }
   else{
        document.getElementById("message-cheese").
        textContent="Not Checked";
        cheese = 0;
   }
}


function checkedlettuce(){
    if(document.getElementById("my-checkbox4").
    checked){
        document.getElementById("message-lettuce").
        textContent="Checked";
        lettuce = 1;
   }
   else{
        document.getElementById("message-lettuce").
        textContent="Not Checked";
        lettuce = 0;
   }
}
function checkedsteak(){
    if(document.getElementById("my-checkbox3").
    checked){
        document.getElementById("message-steak").
        textContent="Checked";
        steak = 1;
   }
   else{
        document.getElementById("message-steak").
        textContent="Not Checked";
        steak = 0;
   }
}
function checkedbacon(){
     if(document.getElementById("my-checkbox5").
     checked){
         document.getElementById("message-bacon").
         textContent="Checked";
         bacon = 1;
    }
    else{
         document.getElementById("message-bacon").
         textContent="Not Checked";
         bacon = 0;
    }
 }
 function checkedpasta(){
     if(document.getElementById("my-checkbox6").
     checked){
         document.getElementById("message-pasta").
         textContent="Checked";
         pasta = 1;
    }
    else{
         document.getElementById("message-pasta").
         textContent="Not Checked";
         pasta = 0;
    }
 }
 function checkedtomato(){
     if(document.getElementById("my-checkbox7").
     checked){
         document.getElementById("message-tomato").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-tomato").
         textContent="Not Checked";
    }
 }
 function checkedegg(){
     if(document.getElementById("my-checkbox8").
     checked){
         document.getElementById("message-egg").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-egg").
         textContent="Not Checked";
    }
 }

 function checkedrice(){
     if(document.getElementById("my-checkbox9").
     checked){
         document.getElementById("message-rice").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-rice").
         textContent="Not Checked";
    }
 }

 function checkedonion(){
     if(document.getElementById("my-checkbox10").
     checked){
         document.getElementById("message-onion").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-onion").
         textContent="Not Checked";
    }
 }

 function checkedmilk(){
     if(document.getElementById("my-checkbox11").
     checked){
         document.getElementById("message-milk").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-milk").
         textContent="Not Checked";
    }
 }
 function checkedpotato(){
     if(document.getElementById("my-checkbox12").
     checked){
         document.getElementById("message-potato").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-potato").
         textContent="Not Checked";
    }
 }

 function checkedflour(){
     if(document.getElementById("my-checkbox13").
     checked){
         document.getElementById("message-flour").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-flour").
         textContent="Not Checked";
    }
 }

 function checkedcream(){
     if(document.getElementById("my-checkbox14").
     checked){
         document.getElementById("message-cream").
         textContent="Checked";
         
    }
    else{
         document.getElementById("message-cream").
         textContent="Not Checked";
    }
 }

 var loader = document.querySelector(".loader")
    
            window.addEventListener("load", vanish);
            
            function vanish() {
              loader.classList.add("disppear");
            }







