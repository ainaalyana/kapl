// let x = new Promise ((resolve, reject) =>{
//     a = 1+4
//     if(a==3){
//         resolve('success');
//     }
//     else{
//         reject('Failed!');
//     }
// });
// x.then((message) =>{
//     console.log("This is the message" + message)
// }).catch((message) =>{
//     console.log("this is a" + message)
// });
// function buy(){
//    var anss = prompt("Do you really wanna but that car??");
//    if(anss != ""){
//     new Promise ((okayyy, notokayyy){
//         if(anss=="okay"){
//             okayyy("great");
//         }
//         else{
//             notokayyy("OHOO!!") 
//         }
//         anss.then((message) =>{
//             console.log("This is the message" + message)
//         }).catch((message) =>{
//             console.log("jjjjjj is the message" + message)
//         })
//     })
//    }
//    else{
//     alert("Please fill up the field!!!")
//    }
// }
// function buy() {
//     var anss = prompt("Do you really wanna buy that car??");
//     if (anss !== "") {
//       new Promise((resolve, reject) => {
//         if (anss == "okay") {  
//           resolve("great");
//         } else {
//           reject("OHOO!!");
//         }
//       }).then((message) => {
//         console.log("This is the message: " + message);
//       }).catch((message) => {
//         console.log("This is the error message: " + message);
//       });
//     } else {
//       alert("Please fill up the field!!!");
//     }
//   }

// function buy(){
//     var anss = prompt("Enter Yes Or No");
//     if(anss=="okay"){
//         console.log("this a success message that its okayy you are done with your work")
//     }
//     else{
//         console.log("This is an error message ");
//     }
// }



function buy(){
    var a = document.getElementById("btnid");
    a.addEventListener("mouseover", function(){
        alert("You Are Hovering To The Button!!")
    })
}
buy();

  








