/** AGE CALCULATOR FUNCTION */

const signup_form1 = document.querySelector('#signup_form1');
const name1 = document.querySelector('#name1');
const p_age0 = document.querySelector('#p_age0');
const p_age1 = document.querySelector('#p_age1');
const p_age2 = document.querySelector('#p_age2');
const p_age3 = document.querySelector('#p_age3');
const select_group1 = document.querySelector('#select_group1');
const year1 = document.querySelector('#year1');
const submit = document.querySelector('#submit');
const msg = document.querySelector('#msg');



name1.addEventListener('keyup', () => {

    const agename = name1.value;

    const agepattern = /^[a-zA-Z][^0-9\.!@#$%&]*$/;

    if(name1.value == ''){
        p_age0.innerHTML = `<p class="text-danger">~What's your name?~</p>`;
        name1.style.border = "red 1px solid";

    } else if (agepattern.test(agename) == false) {
        p_age0.innerHTML = `<p class="text-danger">Wrong credentials
        Invalid username & {0-9.!@#$%&} are not allowed</p>`

    } else if (agepattern.test(agename) == true) {
        p_age0.innerHTML = ` `;

        agename.style.border = "#27ae60 1px solid";

    } else {

    };

});


year1.addEventListener('keyup' , () =>{
    const ageyear = year1.value;
    const yearpattern = /^[0-9]{4}$/

    if(year1.value == ''){
        p_age1.innerHTML = `<p class="text-danger">~How old are you
        ~</p>`;
        year1.style.border = "red 1px solid";
    }
    else if(yearpattern.test(ageyear) == false){
        p_age1.innerHTML = `<p class="text-danger">Wrong credentials
        Invalid year & {a-zA-Z.!@#$%&} are not allowed</p>`
        year1.style.border = "red 1px solid";
    }else if(yearpattern.test(ageyear) == true){
        p_age1.innerHTML = ``;
        year1.style.border = "#27ae60 1px solid";
    }else{

    };

});

select_group1.addEventListener('change' , () =>{
    if(select_group1.value == select_group1.children[1].value || select_group1.value == select_group1.children[2].value){
        p_age2.innerHTML = ` `;
        select_group1.style.border = "#27ae60 1px solid";
    }else{
        select_group1.style.border = "red 1px solid";
        p_age2.innerHTML = `<p class="text-danger">~Please select your gender~</p>`;
    }
 });


 
 signup_form1.addEventListener('submit' , (e) =>{
    e.preventDefault();
    if(name1.value == '' || year1.value == '' || select_group1.value == select_group1.children[0].value){
        p_age3.innerHTML = '<p class = "alert alert-danger">~Please your information~</p>';
        name1.style.border ="red 1px solid";
        year1.style.border ="red 1px solid";
        select_group1.style.border ="red 1px solid";
    }else{
        p_age3.innerHTML = age_cal(name1.value, year1.value);
        name1.value= '';
        year1.value = '';
        name1.style.border ="#27ae60 1px solid";
        year1.style.border ="#27ae60 1px solid";
        select_group1.style.border ="#27ae60 1px solid";
    }
});
