
//Info
let name = document.getElementById("name");
let city = document.getElementById("city");
let state = document.getElementById("state");
let email = document.getElementById("email");

//links
let linkedin = document.getElementById("linkedin");
let portfolio = document.getElementById("portfolio");
let github = document.getElementById("github");

//Description/about
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");

//Work experience
let work1StartDate = document.getElementById("work1StartDate");
let work2StartDate = document.getElementById("work2StartDate");
let work1EndDate = document.getElementById("work1EndDate");
let work2EndDate = document.getElementById("work2EndDate");
let work1Name = document.getElementById("work1Name");
let workDesc1 = document.getElementById("workDesc1");
let workDesc2 = document.getElementById("workDesc2");

//Education
let schoolName = document.getElementById("schoolName");
let degree = document.getElementsByName("degree");
let schoolDate = document.getElementById("schoolDate");


let space = " "




let style = `<style>

html {
  margin: 0;
  padding: 0;
}

body {
  background-color: #BCBDC0;
}

</style>`

// function temp() {
//   let div = document.createElement('div');
//   let text = document.createTextNode(myText);
//   div.appendChild(text);
//   let show = document.getElementById("show");
//   show.appendChild(div);
// }

function myfunc(){
  
  let myText = name.value + space + city.value
  let openWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
  openWindow.document.write(myText);
  openWindow.document.writeln(style)
}

