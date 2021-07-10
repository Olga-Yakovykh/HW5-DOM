
login.onclick = function () {

    let user = document.getElementById('Username').value;

    let pass = document.getElementById('password').value;

    document.getElementById('str').innerHTML="Вы ввели: " + user + pass;


    localStorage.setItem ('key', document.getElementById('str').innerHTML="Вы ввели: " + user + pass);
    
    console.log ( localStorage.getItem ('key'));
};



