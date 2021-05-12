/* const { table } = require("node:console");

let firstName=document.getElementById("fname");
let lastName=document.getElementById("lname");
let myBtn=document.getElementById("btn");
let nextForm=document.getElementById("tab");

myBtn.addEventListener('click',myFunction);

function myFunction(){
    var letters = /^[A-Za-z]+$/;
    if(firstName.value.match(letters) && lastName.value.match(letters)){
        nextForm.style.display="block";
       
    }
    else{
        alert("type");
    }
}


var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
} */


let btn=document.getElementsByClassName("secondary-button");
/* btn.addEventListener("click",clickHandler());

function clickHandler(){
    btn.classList.add("bg-grey");
    btn.classList.remove("bg-white");
} 
 */
/* function changeColor(color,bgcolor){
    document.body.style.background = bgcolor;
    document.body.style.color=color
} */


function myFunction(){
    var x = document.getElementById("upload-file");
   
    var txt = "";
    if ('files' in x) {
      if (x.files.length == 0) {
        txt = "";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          var file = x.files[i];
          if ('name' in file) {
            txt += "<span>" + file.name + "</span>";
          }
          if ('size' in file) {
            txt += "<span> " + file.size+"</span>" +"uploaded" + "<img  src='images/delete.png'>" ;
          }
        }
        document.getElementById("demo").innerHTML = "<p>"+txt+"</p>"+ "<br/>" + "<hr>";
      }
      
    } 
   
   
  }





const firstSlide=document.querySelector(".register");
const firstBtn=document.querySelector(".next-btn");
const myFooter=document.querySelector(".footer");
let firstName=document.getElementById("fname");
let lastName=document.getElementById("lname");

const secondBtn1=document.querySelector("#n-btn1");
const secondBtn2=document.querySelector("#p-btn1");
const secondSlide=document.querySelector(".details-form");
let myAddress=document.getElementById("address");
let myEmail=document.getElementById("email");

const thirdSlide=document.querySelector(".documents");
const thirdBtn1=document.querySelector("#n-btn2");
const thirdBtn2=document.querySelector("#p-btn2");

const fourthSlide=document.querySelector(".price");
const fourthBtn1=document.querySelector("#n-btn3");
const fourthBtn2=document.querySelector("#p-btn3");

const fifthSlide=document.querySelector(".rates");
const fifthBtn1=document.querySelector("#n-btn4");

const sixthSlide=document.querySelector(".progressbar");
const sixthBtn1=document.querySelector("#n-btn5");

const seventhSlide=document.querySelector(".final");


firstBtn.addEventListener("click",function(){
    var letters = /^[A-Za-z]+$/;
    if(firstName.value.match(letters) && lastName.value.match(letters)){
    firstSlide.style.display = "none";
    secondSlide.style.display="flex";
    //thirdSlide.style.display = "none";
    myFooter.style.display = "none";
    }
     else{
        alert("error");
    } 
  });


secondBtn1.addEventListener("click",function(){
    let regExp = /^[a-zA-Z0-9\s,'-:]*$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(myAddress.value.match(regExp) && myEmail.value.match(mailformat)){
    //firstSlide.style.display = "none";
    //secondSlide.style.marginLeft = "-100%";
    thirdSlide.style.display = "block";
    secondSlide.style.display="none";
    myFooter.style.display = "block";
  
    }
    else{
        alert("error");
    }

});


thirdBtn1.addEventListener("click",function(){
  thirdSlide.style.display = "none";
  fourthSlide.style.display="block";
});

fourthBtn1.addEventListener("click",function(){
  //fourthSlide.style.marginLeft="-100%";
  fifthSlide.style.display="block";
  fourthSlide.style.display="none";
});

fifthBtn1.addEventListener("click",function(){
  fifthSlide.style.display="none";
  sixthSlide.style.display="block"; 
});


sixthBtn1.addEventListener("click",function(){
  sixthSlide.style.display="none";
  seventhSlide.style.display="block"; 
});


secondBtn2.addEventListener("click",function(){
    firstSlide.style.display = "block";
    //thirdSlide.style.display = "block";
    //firstSlide.style.display="b"
    secondSlide.style.display="none";
    myFooter.style.display = "block";
});


thirdBtn2.addEventListener("click",function(){
  //secondSlide.style.marginLeft = "0";
  //thirdSlide.style.display = "block";
  //firstSlide.style.display="b"
  secondSlide.style.display="flex";
  thirdSlide.style.display="none";
  myFooter.style.display = "none";
});


fourthBtn2.addEventListener("click",function(){
  //secondSlide.style.marginLeft = "0";
  //thirdSlide.style.display = "block";
  //firstSlide.style.display="b"
  thirdSlide.style.display="block";
  fourthSlide.style.display="none";
});




const check = document.querySelectorAll(".checkmark");
const border = document.querySelectorAll(".options");
const toggle=document.querySelector("input[name=box]");
const sign=document.querySelectorAll(".checksign");

 for(let i=0;i<check.length;i++){
  let x=i;

  check[x].addEventListener("click",() =>
  {
    //checkActive();
    check[x].classList.remove("greyborder");
    check[x].classList.add("focus");
    border[x].classList.add("active");
    sign[x].classList.add("check");
    
  });
  
}

 

/* const check = document.querySelectorAll(".checkmark");
const border = document.querySelectorAll(".options");
const toggle=document.querySelectorAll("input");

for(let i=0;i<check.length;i++){
  let x=i; */
 

/*toggle.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
      body.classList.add('dark-theme');
  } else {
      body.classList.remove('dark-theme');
  }
});  */

/* const check = document.getElementById("#check-box1");
const border = document.querySelectorAll(".ch1");
check.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
      border.classList.add('focus');
  } else {
      border.classList.remove('focus');
  }
});  */



const checkbox = document.querySelectorAll(".box-alarm");
const borderBox = document.querySelectorAll(".box1");
const image=document.querySelectorAll("svg");
const sign1=document.querySelectorAll(".checksign1");
//const toggle=document.querySelectorAll("input");

 for(let i=0;i<checkbox.length;i++){
  let x=i;
  checkbox[x].addEventListener("click",() =>{
  checkbox[x].classList.remove("greyborder");
  checkbox[x].classList.add("focus"); 
  borderBox[x].classList.remove("greyborder");
  borderBox[x].classList.add("active");
  sign1[x].classList.add("check1");
  });
} 


/* toggle.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
      check.classList.remove('focus');
  } else {
      check.classList.add('focus');
  }
});  */

    

/* function clickHandler(){
  const toggle=document.getElementById("check-box");
    toggle.addEventListener('input', e => {
      const isChecked = e.target.checked;
  
      if (isChecked) {
        check[x].classList.remove("greyborder");
        check[x].classList.add("focus"); 
        border[x].classList.add("active");
      } else {
        check[x].classList.add("greyborder");
        check[x].classList.remove("focus"); 
        border[x].classList.remove("active");
      }
  })
};





 */