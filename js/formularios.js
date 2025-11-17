function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}
// Detectar parámetro ?tipo=ayuda o ?tipo=voluntario
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");

  const formAyuda = document.getElementById("formAyuda");
  const formVoluntario = document.getElementById("formVoluntario");

  if (tipo === "ayuda") {
    formAyuda.style.display = "block";
  } else if (tipo === "voluntario") {
    formVoluntario.style.display = "block";
  }
});

function volverInicio() {
  window.location.href = "index.html";
}

const fileInput = document.getElementById('fileInput');
if (fileInput) {
  fileInput.addEventListener('change', () => {
    const fileName = document.getElementById('fileName');
    fileName.textContent = fileInput.files.length ? fileInput.files[0].name : '';
  });
}

function abrirLogin() {
  window.location.href = "index.html?abrirLogin=true";
}

function loginConPami() {
  window.location.href = "https://login.mi.pami.org.ar/login?authRequest=V2_345823951265528786";
}