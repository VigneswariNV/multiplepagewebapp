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
    secondSlide.style.display="none";
    myFooter.style.display = "block";
});


thirdBtn2.addEventListener("click",function(){
  secondSlide.style.display="flex";
  thirdSlide.style.display="none";
  myFooter.style.display = "none";
});


fourthBtn2.addEventListener("click",function(){
  thirdSlide.style.display="block";
  fourthSlide.style.display="none";
});


const Toggle = document.querySelectorAll('.toggle');
const body = document.querySelectorAll('.options');
const sign=document.querySelectorAll(".checksign");
const border=document.querySelectorAll(".checkmark");
for(let i=0;i<Toggle.length;i++){
  let x=i;
Toggle[x].addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
      body[x].classList.add('focus');
      body[x].classList.remove('greyborder');
      sign[x].classList.add('blue-check');
      border[x].classList.add('focus');
      
  } else {
      body[x].classList.remove('focus');
      body[x].classList.add('greyborder');
      sign[x].classList.remove('blue-check');
      border[x].classList.remove('focus');
  }
})
};

const toggleBox = document.querySelectorAll('.alarmbox');
const change = document.querySelectorAll('.box1');
const sign1=document.querySelectorAll(".checksign1");
const border1=document.querySelectorAll(".sign-box");
const image=document.querySelectorAll(".fill-svg");

for(let i=0;i<toggleBox.length;i++){
  let x=i;
toggleBox[x].addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
      change[x].classList.add('focus');
      change[x].classList.remove('greyborder');
      sign1[x].classList.add('blue-check');
      border1[x].classList.add('focus');
      image[x].style.fill='#23c0f5';
      
  } else {
      change[x].classList.remove('focus');
      change[x].classList.add('greyborder');
      sign1[x].classList.remove('blue-check');
      border1[x].classList.remove('focus');
      image[x].style.fill='black';
  }
})
};

const changeborder=document.querySelectorAll(".form-input");
for(let i=0;i<Toggle.length;i++){
  let x=i;
changeborder[x].addEventListener('click', () =>
{
changeborder[x].style.border="1px solid #23c0f5";
})
};



class DataList {
	constructor(containerId, inputId, listId, options) {
		this.containerId = containerId;
		this.inputId = inputId;
		this.listId = listId;
		this.options = options;
	}

	create(filter = "") {
		const list = document.getElementById(this.listId);
		const filterOptions = this.options.filter(
			d => filter === "" || d.text.includes(filter)
		);

		list.innerHTML = filterOptions
			.map(o => `<li id=${o.value}>${o.text}</li>`)
			.join("");
	}

	addListeners(datalist) {
		const container = document.getElementById(this.containerId);
		const input = document.getElementById(this.inputId);
		const list = document.getElementById(this.listId);
		container.addEventListener("click", e => {
			if (e.target.id === this.inputId) {
				container.classList.toggle("active");
        container.classList.add("focus");
			} else if (e.target.id === "datalist-icon") {
				container.classList.toggle("active");
				input.focus();
			}
		});

		input.addEventListener("input", function(e) {
			if (!container.classList.contains("active")) {
				container.classList.add("active");
        
			}

			datalist.create(input.value);
		});

		list.addEventListener("click", function(e) {
			if (e.target.nodeName.toLocaleLowerCase() === "li") {
				input.value = e.target.innerText;
				container.classList.remove("active");
			}
		});
	}
}

const data = [
	{ value: "1", text: "This month" },
	{ value: "2", text: "Next Month" },
	{ value: "3", text: "December 2018" },
	{ value: "4", text: "January 2019" },
	{ value: "5", text: "I don't know" }
];

const datalist = new DataList(
	"datalist",
	"datalist-input",
	"datalist-ul",
	data
);
datalist.create();
datalist.addListeners(datalist);



class DragAndDrop {
  constructor() {
      this.filesDropped();
      this.filesChanged();
  }
  filesDropped() {
      let ele = document.querySelectorAll(".drag-drop");

      for (let i = 0; i < ele.length; i++) {

          ele[i].ondragover = ele[i].ondragenter = function(e) {
              e.preventDefault();
          };


          ele[i].ondrop = (e) => {

              e.preventDefault();
              let formId = e.target.getAttribute("data-form-id");
              let formField = e.target.getAttribute("data-form-field");
              let input = document.querySelector(`form#${formId} input[name='${formField}']`);
              input.files = e.dataTransfer.files;
              this.displayFilelist(formId, formField);
          }
      }
  }
 filesChanged() {
      let ele = document.querySelectorAll("input.file-input");

      for (let j = 0; j < ele.length; j++) {
          ele[j].onchange = (e) => {
              let formId = e.target.getAttribute("data-form-id");
              let formField = e.target.getAttribute("data-form-field");
              this.displayFilelist(formId, formField);
          }
      }
  }  
  displayFilelist(formId, formField) {
          let files = document.querySelector(`form#${formId} input[name='${formField}']`).files;
          var fileList = ``;
         

          for (var i = 0; i < files.length; i++) {

              let fileExt = this.getFileExtension(files[i].name);
              let fileSize = this.convertBytesTo(files[i].size, 'K', 0);
              var tag='';
             
              //document.getElementById("image").innerHTML= "hi";
              console.log(fileExt);
              if(fileExt==="pdf"){
                
                tag="images/pdf-color.png";
              } 
             else{
              tag="images/images-color.png";
              }  
              fileList = `
${fileList}
<div class="files-section display-f spacebetween ai-center">
<div class="file ta-left display-f spacebetween">
<div class="file-name ta-left">
<img src=${tag}>
${files[i].name}
</div>
<div class="file-extension">
${fileExt}
</div>
<div class="file-size">
${fileSize}
</div>
<div>
<p>UPLOADED</p>
</div>
</div> 
<span onclick="this.parentElement.style.display='none'" class="close" >
<img   src="images/delete.png">
</span>
</div>
              
`;

          }
          //document.getElementById("image").innerHTML="hi";
          //document.querySelectorAll(".file-list").style.border="1px solid black";
          document.querySelector(`form#${formId} div.file-list[data-form-field='${formField}']`).innerHTML += fileList;

      }
      convertBytesTo(bytes, to, decimalPlaces = 2) {
        if( bytes < 1024){
          return bytes + " Bytes";
        }
      else{
              switch (to) {     
                  case 'K':
                      {
                          bytes = bytes / 1024  ;
                         return bytes = +bytes.toFixed(decimalPlaces) + "KB";
                          break;
                      }
                  case 'M':
                      {
                          bytes = bytes / 1048576;
                       return bytes = +bytes.toFixed(decimalPlaces) + "MB";
                          break;
                      }
              }     
      }
}
  
  getFileExtension(fileName) {
      return fileName.split('.').pop();
  }
}
var dd = new DragAndDrop(); 




function updateTextInput(val) {
  document.getElementById('input1').value='$'+val; 
}
function updateInput(val) {
  document.getElementById('input2').value='$'+val; 
}





