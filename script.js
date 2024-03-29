//kezdés

const FODIVELEM = $(".foDiv");

const NINPUTELEM = $(".N");
let N = 3;

const KEZDGOMBELEM = $(".gombKezd");

KEZDGOMBELEM.on("click", function () {
  let N = Nlekerese();
  let meret = $(":root");
  meret.css("--meret", N);
  divOsszeallit(listaOsszeallit(N));
  /*  leirastKeszit(); */
});

function Nlekerese() {
  return (N = NINPUTELEM.val());
}
function divOsszeallit(lista) {
  let txt = ``;
  var rozsaszinekSzama = 0;
  for (let index = 1; index < lista.length + 1; index++) {
    if (lista[index] == 0) {
      txt += `<div id="${index}" class="lampa"></div>`;
    } else {
      txt += `<div id="${index}" class="lampa pink"></div>`;
      rozsaszinekSzama += 1;
    }
    console.log(rozsaszinekSzama);
  }
  FODIVELEM.html(txt);
  return rozsaszinekSzama;
}

function listaOsszeallit(N) {
  let lista = [];
  for (let index = 0; index < N * N; index++) {
    let randomSzam = Math.floor(Math.random() * 2);
    lista.push(randomSzam);
  }

  return lista;
}

//játék

const LAMPAELEM = $(".lampa");

for (let index = 0; index < FODIVELEM.length; index++) {
  FODIVELEM.eq(index).on("click", kattintas);
}

function kattintas(event) {
  $(event.target).toggleClass("pink");
  /* console.log(event.target.id); */
  const elotte1 = document.getElementById(event.target.id - 1);
  const utana1 = document.getElementById(event.target.id - -1);
  const elotte2 = document.getElementById(event.target.id - N);
  const utana2 = document.getElementById(event.target.id - -N);
  $(elotte1).toggleClass("pink");
  $(utana1).toggleClass("pink");
  $(elotte2).toggleClass("pink");
  $(utana2).toggleClass("pink");
  for (let index = 0; index < N * N.length; index++) {
    if (LAMPAELEM.eq(index).className = "pink") {
      rozsaszinekSzama += 1;
    }
    console.log(rozsaszinekSzama);
    return rozsaszinekSzama;
  }
}
