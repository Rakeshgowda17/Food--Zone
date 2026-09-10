let myForm = document.querySelector('form')
myForm.onsubmit = (e) => {
    e.preventDefault()
    let inputBox = document.querySelectorAll('input')
    console.log(inputBox);
    let formData = {}

    inputBox.forEach((input) => {
        formData[input.name] = input.value
    })
    console.log(formData);

    let jsonData = JSON.stringify(formData)
    console.log(jsonData)

    localStorage.setItem('userInfo', jsonData)
    alert("user Register Successful")
    window.location.href = './login.html'

}
