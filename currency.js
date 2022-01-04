/**
 * CURRENCY CONVERTER
 */
const signup_form2 = document.querySelector('#signup_form2');
const amount = document.querySelector('#amount');
const p_amount = document.querySelector('#p_amount');
const select_currency_group = document.querySelector('#select_currency_group');
const p_Cselect = document.querySelector('#p_Cselect');
const p_Converter = document.querySelector('#p_Converter');


amount.addEventListener('keyup', () => {
    const uamount = amount.value;
    let upattern = /^[0-9]*$/;

    if (uamount == '') {
        p_amount.innerHTML = `<p class="alert alert-danger">~ please type your amount~</p>
        `
    } else if (upattern.test(uamount) == false) {
        p_amount.innerHTML = `
        <p class="alert alert-danger">~Amount Invalid~</P>
        `
    } else if (upattern.test(uamount) == true) {
        p_amount.innerHTML = '';
    } else {
        p_amount.innerHTML = '';
    }
});

signup_form2.addEventListener('submit', (e) => {
    e.preventDefault();

    if (amount.value == '') {
        p_amount.innerHTML = `<p class="alert alert-danger">fields can't be empty</p>`
    } else if (select_currency_group.value == select_currency_group.children[0].value) {
        p_Cselect.innerHTML = `<p style="text-align:center;" class="alert alert-danger mt-2">~Pelease select currency~</p>`
    } else if (select_currency_group.value == select_currency_group.children[1].value) {
        p_Converter.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} USD = ${(amount.value * select_currency_group.children[1].value).toFixed(2)} = TK </p>`
    } else if (select_currency_group.value == select_currency_group.children[2].value) {
        p_Converter.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} CAD = ${(amount.value * select_currency_group.children[2].value).toFixed(2)} = TK </p>`
    } else if (select_currency_group.value == select_currency_group.children[3].value) {
        p_Converter.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} POUND= ${(amount.value * select_currency_group.children[3].value).toFixed(2)} = TK </p>`
    } else if (select_currency_group.value == select_currency_group.children[4].value) {
        p_Converter.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} EURO = ${(amount.value * select_currency_group.children[4].value).toFixed(2)} = TK </p>`
    } else if (select_currency_group.value == select_currency_group.children[5].value) {
        p_Converter.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} BHR DINAR = ${(amount.value * select_currency_group.children[5].value).toFixed(2)} = TK </p>`
    };
});