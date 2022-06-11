//addEventListener
document.querySelector('#postal').addEventListener('click',showPostalCodeForm);
document.querySelector('#postal_code_input').addEventListener('submit',inputPostalCode);


//function
//show postal code on front-end
function showPostalCodeForm(e){
    let ele = document.getElementById('postal_code_input');
    ele.innerHTML = `<label for="postal_code">Postal Code</label>
                     <input type="number" id="postal_code" name="postal_code">
                     <button type = "submit" value = "submit">Check</button>`
    //inputPostalCode();
}
function clearPostalInput(code){
    let ele = document.getElementById('postal_code_input');
    ele.innerHTML = `<label for="postal_code">Postal Code</label>
                     <input type="number" id="postal_code" name="postal_code" value = "${code}">
                     <button type = "submit" value = "submit">Check</button>`
}
function inputPostalCode(e){
    e.preventDefault();
    let result = document.querySelector('#postal_code_result');
    let code = document.getElementById('postal_code').value;
    let expression = /^[0-9]{4}$/;
    if(expression.test(code)){
        result.innerHTML = `The input postal code : <b>${code}</b> is valid!`;
    }
    else{
        result.innerHTML = `The input postal code : <b>${code}</b> is invalid!`;
    }
    code = '';
    clearPostalInput(code);
    
}