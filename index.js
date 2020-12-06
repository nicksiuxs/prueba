let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let codigo = document.getElementById("fcodigo").value;
  let url = document.getElementById("furl").value;
  let categoria = document.getElementById("fcategoria").value;
  let nombre = document.getElementById("fnombre").value;
  let lineaProducto = document.getElementById("flinea").value;
  let subcategoria = document.getElementById("fsubcategoria").value;
  let descripcion = document.getElementById("fdescripcion").value;

  console.log(codigo, url, categoria, nombre, lineaProducto, subcategoria, descripcion);

  // if (fCodigo.nod < 3) {
  //   alert("Ingresa un código valido");
  // }

  document.getElementById("mostrar-info").innerHTML = `
  código: ${codigo} <br>
  url: ${url}<br>
  Nombre:${nombre} <br>
  categoria: ${categoria} <br>
  linea de Producto: ${lineaProducto} <br>
  subcategoria: ${subcategoria} <br>
  descripc+on: ${descripcion} <br>
  `;
});

//Mostrar acordeon
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Menu
function menu() {
  var x = document.getElementById("menu-aside");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
