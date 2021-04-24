
let emailcollector = document.getElementById('emailCollector')
console.log(emailcollector)

emailcollector.addEventListener('submit', event => {
    event.preventDefault()
    let formdata = new FormData(event.target)

    let userfirstname = formdata.get('firstname')
    let userEmail = formdata.get('email')
    let updatedHtmlContent = `
    
    <h2>Congratulations, ${userfirstname}!</h2>
    <p> 
        you're on your way to becoming a Hiking Master!
    </p>

    <p class="fine-print">We will sent our news to you at : ${userEmail}</p>
    
    `
    let maincontent = document.getElementById('main-content')
    maincontent.innerHTML = updatedHtmlContent

})

