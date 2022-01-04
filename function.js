/**
 * AGE FUNCTION 
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function age_cal(name, year) {

    let date = new Date();
    let age1 = date.getFullYear() - year;
    let agechk1 = ageMeter1(age1);
    return `<p class="alert alert-${agechk1.status}">Hi ${name} you are ${age1} years old & your Gender Infomation: ${select_group1.value} now you are ${agechk1.name1}</p>`

};

/**
 * AGE INFORMATION
 * @param {*} age1 
 * @returns 
 */


function ageMeter1(age1) {
    if (age1 >= 0 && age1 < 10) {
        return {
            name1: 'You Are still Child',
            status: 'primary',
        };
    } else if (age1 >= 10 && age1 < 18) {
        return {
            name1: 'Teenager',
            status: 'info',
        };
    } else if (age1 >= 18 && age1 < 25) {
        return {
            name1: 'Young',
            status: 'success',
        };
    } else if (age1 >= 25 && age1 < 50) {
        return {
            name1: 'Going to old',
            status: 'warning',
        };
    } else {
        return {
            name1: 'Sorry Dear, out of age',
            status: 'danger',
        };
    };
};

/**
 * MARRIAGE AGE CHECK FUNCTION 
 */


/**
 * marrigae agechecker---
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function marrideAgeChecker(name, year) {

    let date = new Date();
    age = date.getFullYear() - year;

    let agm = ageMeter(age);
    return `<p class= "alert alert-${agm.status} mt-2"> Hi ${name} your Gender information: ${sele.value} and you are ${age} years old & you are ${agm.name1} and you are </p>`
    // return `<p class="alert alert-${agm.status}">Hi ${name} you are ${age} years old  & you have ${agm.name1}</p>`;
}



/**
 * // marrige agechecker function 2 ---
 * @param {*} age 
 * @returns 
 */


function ageMeter(age) {
    if (age >= 0 && age < 10) {
        return {
            name1: 'You Are still Child',
            status: 'primary',
        };
    } else if (age >= 10 && age < 18) {
        return {
            name1: 'Not eligible for marride',
            status: 'info',
        };
    } else if (age >= 18 && age < 25) {
        return {
            name1: 'Its time to marride',
            status: 'success',
        };
    } else if (age >= 25 && age < 50) {
        return {
            name1: 'Time almost gone',
            status: 'warning',
        };
    } else {
        return {
            name1: 'Sorry Dear, out of age',
            status: 'danger',
        };
    };
};