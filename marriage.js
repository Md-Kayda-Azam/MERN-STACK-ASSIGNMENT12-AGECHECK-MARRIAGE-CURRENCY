/**
 * marrige age checker
 * 
 * 
 */

 const form1 = document.querySelector('#form1');
 const name2 = document.querySelector('#name');
 const yearK = document.querySelector('#age');
 const sele = document.querySelector('#sele');
 const plain = document.querySelector('#plain');
 const btn = document.querySelector('#btn');
 const amin1 = document.querySelector('#amin1');
 const amin2 = document.querySelector('#amin2');
 const h4 = document.querySelector('#h4');
 
 
 
 name2.addEventListener('keyup' , () => {
     let name1 = name2.value;
     let npattern = /^[a-zA-Z\s]*$/
 
     if(npattern.test(name1) == false){
         amin1.innerHTML = `<p class="text-danger">~please type your name~</p>`
         name2.style.border = "red 1px solid";
     }else if(npattern.test(name1) == true){
         amin1.innerHTML = ` `;
         name2.style.border = "#008640 1px solid";
     }else{
        
     }
 })
 yearK.addEventListener('keyup' , () => {
 
     let agechk = yearK.value;
     let apattern = /^[0-9]{4}$/;
 
     if(apattern.test(agechk) == false){
         amin2.innerHTML = `<p class="text-danger">~please type your year~</p>`
         yearK.style.border = "red 1px solid";
     }else if(apattern.test(agechk) == true){
         amin2.innerHTML = ` `;
         yearK.style.border = "#008640 1px solid";
     }else {
 
     }
 
 })
 
 
 sele.addEventListener('change' , () => {
     if(sele.value == sele.children[1].value || sele.value == sele.children[2].value){
         sele.style.border = "#008640 1px solid";
        
     }else{
         sele.style.border = "red 1px solid";
         plain.innerHTML = '<p class="text-danger">~required~</p>*'
     }
 })
 
 form1.addEventListener('submit' , (e) =>{
 e.preventDefault();
 if(name2.value == '' || yearK.value == '' || sele.value == sele.children[0].value){
     plain.innerHTML = `<p class="alert alert-danger text-primary text-center">Please your information</p>`
     name2.style.border = "red 1px solid";
     yearK.style.border = "red 1px solid";
     sele.style.border = "red 1px solid";
     h4.innerHTML = `<p class="alert alert-success text-center text-dark"> Plz Try Again</p>`
 }else{
     plain.innerHTML = marrideAgeChecker(name2.value, yearK.value);
     name2.style.border = "#008640 1px solid";
     yearK.style.border = "#008640 1px solid";
     sele.style.border = "#008640 1px solid";
     h4.innerHTML = `<p class="alert alert-success text-center text-dark">Very Good </p>`
     name2.value = '';
     yearK.value = '';
     
 }
 })
 



































// /**
//  * MARRIAGE CHECK FUNCTION
//  */

// const form1 = document.addEventListener('#form1');
// const mname = document.addEventListener('#mname');
// const pmname = document.addEventListener('#pmname');
// const myear = document.addEventListener('#myear');
// const pmyear = document.addEventListener('#pmyear');
// const mselect = document.addEventListener('#mselect');
// const btn = document.addEventListener('#btn');
// const pmselect = document.addEventListener('#pmselect');
// const presult = document.addEventListener('#presult');


// mname.addEventListener('keyup', () => {
//     const mname1 = mname.value;
//     const mpattern = /^[a-zA-Z\s]*$/

//     if (mpattern.test(mname1) == false) {
//         pmname.innerHTML = `<p class="text-danger">*plz input valid name*</p>`
//         mname.style.border = "red 1px solid";
//     } else if (mpattern.test(mname1) == true) {
//         pmname.innerHTML = ` `;
//         mname.style.border = "#008640 1px solid";
//     } else {

//     }
// });

// myear.addEventListener('keyup', () => {

//     const myear0 = myear.value;
//     const mpattern0 = /^[0-9]{4}$/;

//     if (mpattern0.test(myear0) == false) {
//         pmyear.innerHTML = `<p class="text-danger">*plz input valid year*</p>`
//         myear.style.border = "red 1px solid";
//     } else if (mpattern0.test(myear0) == true) {
//         pmyear.innerHTML = ` `;
//         myear.style.border = "#008640 1px solid";
//     } else {

//     }

// });


// mselect.addEventListener('change', () => {
//     if (mselect.value == mselect.children[1].value || mselect.value == mselect.children[2].value) {
//         mselect.style.border = "#008640 1px solid";

//     } else {
//         mselect.style.border = "red 1px solid";
//         presult.innerHTML = '<p class="text-danger">*required</p>*'
//     }
// });



// form1.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (mname.value == '' || myear.value == '' || mselect.value == mselect.children[0].value) {
//         presult.innerHTML = `<p class="alert alert-warning text-primary text-center">query must be fulfill</p>`
//         mname.style.border = "red 1px solid";
//         myear.style.border = "red 1px solid";
//         mselect.style.border = "red 1px solid";
//         h4.innerHTML = `<p class="alert alert-success text-center text-dark">Try Again</p>`
//     } else {
//         presult.innerHTML = marrideAgeChecker(mname.value, myear.value);
//         mname.style.border = "#008640 1px solid";
//         myear.style.border = "#008640 1px solid";
//         mselect.style.border = "#008640 1px solid";
//         h4.innerHTML = `<p class="alert alert-success text-center text-dark">Nice Try</p>`
//         mname.value = '';
//         myear.value = '';

//     }
// });