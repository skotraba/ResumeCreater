
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
//Work experience
//Education

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

