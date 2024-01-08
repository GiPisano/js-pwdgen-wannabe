const userPassword = document.getElementById('password')

// chiedo all'utente il suo nome 
const userName = prompt('Qual è il tuo nome?');
console.log(userName);

// chiedo all'utente il suo cognome
const userSurname = prompt('Qual è il tuo cognome?') ;
console.log(userSurname);

// chiedo all'utente il suo colore preferito
const userFavoriteColor = prompt('Qual è il tuo colore preferito?') ;
console.log(userFavoriteColor);

// stampo la password creata
userPassword.innerText = 'La password che abbiamo generato per te è' + ' ' + userName + userSurname + userFavoriteColor + 23;








