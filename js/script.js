let ele = document.getElementById('postal_code_input');
let phn = document.getElementById('phone_number');
let eml = document.getElementById('email');

//function
//show postal code on front-end
function showPostalCodeForm(e){
    //let ele = document.getElementById('postal_code_input');
    ele.innerHTML = `<label for="postal_code">Postal Code</label>
                     <input type="number" id="postal_code" name="postal_code">
                     <button type = "submit" value = "submit">Check</button>`
}
function clearPostalInput(code){
    //let ele = document.getElementById('postal_code_input');
    ele.innerHTML = `<label for="postal_code">Postal Code</label>
                     <input type="number" id="postal_code" name="postal_code" value = "${code}">
                     <button type = "submit" value = "submit">Check</button>`
    console.log(code);
}
function inputPostalCode(e){
    e.preventDefault();
    let result = document.querySelector('#result');
    let code = document.getElementById('postal_code').value;
    let expression = /^[0-9]{4}$/;
    if(expression.test(code)){
        result.innerHTML = `The input postal code : <b>${code}</b> is valid!`;
    }
    else{
        result.innerHTML = `The input postal code : <b>${code}</b> is invalid!`;
    }
    console.log(code);
    code = '';
    clearPostalInput(code);
}

//Phone Number Validator
function showPhoneForm(){
    phn.innerHTML = `<label for="phone">Phone number</label>
    <input type="text" id="phone_no" name="phone">
    <button type = "submit" value = "submit">Check</button>`
}
function inputPhonenumber(e){
    e.preventDefault();
    let result = document.querySelector('#result');
    let code = document.getElementById('phone_no').value;
    let expression = /^(\+)?(88)?(0(\-)?1)[0-9]{9}$/;
    if(expression.test(code)){
        result.innerHTML = `The input Phone number : <b>${code}</b> is valid!`;
    }
    else{
        result.innerHTML = `The input Phone Number : <b>${code}</b> is invalid!`;
    }
    console.log(code);
    code = '';
    clearPhoneNumberInput(code);
}
function clearPhoneNumberInput(code){
    phn.innerHTML = `<label for="phone">Phone number</label>
    <input type="text" id="phone_no" name="phone" value = "${code}">
    <button type = "submit" value = "submit">Check</button>`
    console.log(code);
}


//email validator
function showEmailForm(){
    eml.innerHTML = `<label for="email_input">Email</label>
    <input type="text" id="email_input" name="email_input">
    <button type = "submit" value = "submit">Check</button>`
}
function inputEmail(e){
    e.preventDefault();
    let result = document.querySelector('#result');
    let code = document.getElementById('email_input').value;
    let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(expression.test(code)){
        result.innerHTML = `The input Email Address : <b>${code}</b> is valid!`;
    }
    else{
        result.innerHTML = `The input Email Address : <b>${code}</b> is invalid!`;
    }
    console.log(code);
    code = '';
    clearEmailInput(code);
}
function clearEmailInput(code){
    eml.innerHTML = `<label for="email_input">Email</label>
    <input type="text" id="email_input" name="email_input" value="${code}">
    <button type = "submit" value = "submit">Check</button>`
}

//addEventListener
document.querySelector('#postal').addEventListener('click',showPostalCodeForm);
document.querySelector('#postal_code_input').addEventListener('submit',inputPostalCode);
document.querySelector('#phone').addEventListener('click',showPhoneForm);
document.querySelector('#phone_number').addEventListener('submit',inputPhonenumber);
document.querySelector('#email_btn').addEventListener('click',showEmailForm);
document.querySelector('#email').addEventListener('submit',inputEmail);