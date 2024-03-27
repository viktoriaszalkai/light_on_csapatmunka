//kezdés


const FODIVELEM = $(".foDiv");

const NINPUTELEM = $(".N");
let N=3

const KEZDGOMBELEM = $(".gombKezd");

KEZDGOMBELEM.on("click", function () {

    let N=Nlekerese();
    let meret=$(":root")
    meret.css('--meret', N)
    divOsszeallit(listaOsszeallit(N));

});

function Nlekerese(){
    return N = NINPUTELEM.val();
}

function divOsszeallit(lista){
    let txt = ``;
  for (let index = 0; index < lista.length; index++) {
    if(lista[index]==0){
        txt += `<div id="${index}" class="lampa"></div>`;
    }else{
        txt += `<div id="${index}" class="lampa pink"></div>`;
    }
  }
  FODIVELEM.html(txt)
}

function listaOsszeallit(N){
    let lista=[]
    for (let index = 0; index < N*N; index++) {
        let randomSzam=Math.floor(Math.random() * 2);
        lista.push(randomSzam) 
    }
    
    return lista
}

//játék

const LAMPAELEM=$('.lampa')

for (let index = 0; index < FODIVELEM.length; index++) {
    FODIVELEM.eq(index).on("click", kattintas)
}

function kattintas(event){
    console.log(event.target.id)
    $(event.target).toggleClass("pink")
    FODIVELEM.eq($(event.target-1)).toggleClass("pink")
    FODIVELEM.eq($(event.target)+1).toggleClass("pink")
    FODIVELEM.eq($(event.target)-N).toggleClass("pink")
    FODIVELEM.eq($(event.target)+N).toggleClass("pink")
    
}
