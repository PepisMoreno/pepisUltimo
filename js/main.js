document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class=" container-fluid">
    <a class="navbar-brand" href="../index.html"><img src="../img/home.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="../pages/identificador_de_plantas.html">Plantas</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="../pages/planta_nueva.html">Crear Planta</a>
      </li>
      </ul>
    </div>
  </div>
</nav>
`