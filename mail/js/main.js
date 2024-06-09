// creo la mail autorizzata
const email = ("mifido@hmail.com");

console.log(email);

// chiedere la mail
const login = document.querySelector(".email-element");

// testo email ed invio
const text = document.querySelector(".email-text");
const sent = document.querySelector(".email-sent");

// interazione col click
sent.addEventListener ("click",
    function(e) {
        e.preventDefault();
        const input = document.getElementById(`emailinput`).value;
        let emailTrovata = false;
        console.log(input);

        
    }

    
)




