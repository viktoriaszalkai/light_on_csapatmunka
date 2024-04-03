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
let rozsaszinekSzama = 0;

function divOsszeallit(lista) {
  let txt = ``;
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
const LEIRASELEM =$(".leiras");
const LAMPAELEM = $(".lampa");

for (let index = 0; index < FODIVELEM.length; index++) {
  FODIVELEM.eq(index).on("click", kattintas);
}

function kattintas(event) {
  $(event.target).toggleClass("pink");
  /* console.log(event.target.id); */
  let id=Number(event.target.id)
  const elotte1 = LAMPAELEM.eq(id-1)
  const utana1 = LAMPAELEM.eq(id+1)
  const elotte2 = LAMPAELEM.eq(id-N)
  const utana2 = LAMPAELEM.eq(id+N)
  if (event.target.id % N == 0) {
    $(elotte1).toggleClass("pink");
    $(elotte2).toggleClass("pink");
    $(utana2).toggleClass("pink");
    
  }else if(event.target.id % N == 1){
    $(utana1).toggleClass("pink");
    $(elotte2).toggleClass("pink");
    $(utana2).toggleClass("pink");
  } else {
    $(elotte1).toggleClass("pink");
    $(elotte2).toggleClass("pink");
    $(utana2).toggleClass("pink");
    $(utana1).toggleClass("pink");
  }
  LEIRASELEM.html(rozsaszinSzamolas)
}
function rozsaszinSzamolas(){
for (let index = 0; index < N.length; index++) {
  if ((LAMPAELEM.eq(index).className = "pink")) {
    rozsaszinekSzama += 1;
  }
  console.log(rozsaszinekSzama); 
}
return rozsaszinekSzama;
}