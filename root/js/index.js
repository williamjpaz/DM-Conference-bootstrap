const buttonNewsletter= document.getElementById("buttonNewsletter");
buttonNewsletter.addEventListener("click",function(){
    const emailInput = document.getElementById("emailInput").value;
    const dataForm={
        email:email
    }
})
fetch ("http://www.fake-server.com/subscribe",{
    method: "POST",
    Headers: {
        "Content-type": "aplication-json"
    },
    body:JSON.stringify(FormData)
})
.then(Response=>Response.json())
.then(data => {
    console.log(data)

})
.catch(error=>{
    console.log(error)
});

