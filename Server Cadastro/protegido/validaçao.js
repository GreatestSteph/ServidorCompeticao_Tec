//validações


const botaoenviar = document.getElementById('botao');


//validação nome do time 
//OKK
document.getElementById('nomedotime').addEventListener('input', validanometime);
function validanometime() {
  var input = document.getElementById('nomedotime');
  var alertMessages = document.getElementsByClassName('alertanomedotime');
  var name = input.value.trim();
  var uniqueLetters = new Set(name.toLowerCase().match(/[a-z]/g));

  if (uniqueLetters.size >= 3) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


// validação nome do lider
//OKK
document.getElementById('nomelider').addEventListener('input', validalider);
function validalider() {
  var input = document.getElementById('nomelider');
  var alertMessages = document.getElementsByClassName('alertanomedolider');
  var name = input.value.trim();
  var isValid = /^(?!.*[^a-zA-Z\sçãôõñ]).*(\p{L})(?!(\1+))(?=.*\p{L})(?=.*\s)[\p{L}\sçãôõñ]{1,}\s[\p{L}\sçãôõñ]{11,}$/u.test(name);
  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


//valida opção 1
//OKK
function tecnologiatempo() {
  var selectElement = document.getElementById("tecnologiaidade");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta");

  if (selectElement.value === "nenhum1") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 2
//OKK
function Pessoasnotime() {
  var selectElement = document.getElementById("pessoastime");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta2");

  if (selectElement.value === "nenhum2") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//valida opção 3
//OKK
function Idadetime() {
  var selectElement = document.getElementById("idade");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta3");

  if (selectElement.value === "nenhum3") {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}

//valida caixas de seleção
//OKK
function checkboxtecnologia() {
  var checkboxes = document.querySelectorAll("#tecnologia input[type='checkbox']");
  var alertElements = document.querySelectorAll(".naoselecionadoalerta4");
  var isChecked = false;

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    alertElements.forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    alertElements.forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}


//nome contato, a mesma coisa do de cima
//ok
document.getElementById('nomecontato').addEventListener('input', validacontato);
function validacontato() {
  var input = document.getElementById('nomecontato');
  var alertMessages = document.getElementsByClassName('alertanomecontato');
  var name = input.value.trim();
  var isValid = /^(?!.*[^a-zA-Z\sçãôõñ]).*(\p{L})(?!(\1+))(?=.*\p{L})(?=.*\s)[\p{L}\sçãôõñ]{1,}\s[\p{L}\sçãôõñ]{11,}$/u.test(name);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


// valida o email
//OKK
document.getElementById('email').addEventListener('input', validaemail);

function validaemail() {
  var input = document.getElementById('email');
  var alertMessages = document.getElementsByClassName('alertaemail');
  var username = input.value.trim();
  var isValid = /^[a-zA-Z0-9_-][\w.-]*@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/.test(username);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}


// valida o discord
//OKK
document.getElementById('discord').addEventListener('input', validadiscord);

function validadiscord() {
  var input = document.getElementById('discord');
  var alertMessages = document.getElementsByClassName('alertadiscord');
  var username = input.value.trim();
  var isValid = /^[^\n\r\s]{2,32}#[0-9]{4}$/.test(username);

  if (isValid) {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'none';
    }
    botaoenviar.disabled = false;
  } else {
    for (var i = 0; i < alertMessages.length; i++) {
      alertMessages[i].style.display = 'block';
    }
    botaoenviar.disabled = true;
  }
}

//valida texto do projeto
//OKK
document.getElementById('infoprojeto').addEventListener('input', validaprojeto);

function validaprojeto() {
  var input = document.getElementById('infoprojeto');
  var alertElements = document.getElementsByClassName('alertaprojeto');
  var name = input.value.trim();
  var estaescrito = name.length > 0;

  if (!estaescrito) {
    Array.from(alertElements).forEach(function(element) {
      element.style.display = "block";
      botaoenviar.disabled = true;
    });
  } else {
    Array.from(alertElements).forEach(function(element) {
      element.style.display = "none";
      botaoenviar.disabled = false;
    });
  }
}