const buttonNewsletter = document.getElementById("buttonNewsletter");
buttonNewsletter.addEventListener("click", function() {
  const emailInput = document.getElementById("emailInput").value;
  const formData = { 
    email: emailInput 
  };

  fetch("http://www.fake-server.com/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Eseguire altre azioni, come mostrare un messaggio di successo
    })
    .catch(error => {
      console.error(error);
      // Eseguire azioni per gestire l'errore, come mostrare un messaggio di errore
    });
});
