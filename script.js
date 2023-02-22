// let username=document.getElementById("inp");

// let newkid=document.getElementById('newkid')

// let submitbtn=document.getElementById('submitbtn');

// function validation(){
//    if(username.value !="" && username.value.includes('@gmail.com')){
//         let li=document.createElement('li');
//         li.innerText=username.value;
//         newkid.append(li);
//     alert("your detailessaved sucessefullt=y")}
//     else{
//         alert("please input check");
//     }

//     }
// // if(username.value !="" && pasword.value !=""){
// //     alert("Your detailes saved sucessfully");
// //              }
// // else{
// //     alert("please enter your data");    }
// // }

// // document.addEventListener(onclick,validation());
// submitbtn.onclick=validation ;
var color = ['red', 'blue', 'yellow', 'green'];

let btn=document.getElementsByTagName('button')[0];



function change(){
let number = Math.random()*color.length;
let dno=Math.floor(number);
let rcolor=color[dno];
 let cngbg= document.body.style.backgroundColor = color;
}

// function randomColore(){
//     let randomnumber1 = radomnumber;
//     let randomcoler=color[radomnumber];
//     console.log(randomcolor);
// }




btn.addEventListener('click',change);