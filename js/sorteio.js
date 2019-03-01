
$botao.on('click',()=>{randomm(personagens)} );
let idSorteado = "";
let sorteio = 0;
let nameSorteado = '';
let descricaoSorteada ='';
function randomm(personagens){
  $("#"+idSorteado).removeClass("sorteio");

  $(".logo").attr('src',"img/marvel-logo.png");

  event.preventDefault();

  sorteando();

  personalizando(idSorteado);

  setTimeout(function () {

    let fotoLink = personagens[sorteio-1][3]+"."+personagens[sorteio-1][4];
    procuraFoto(fotoLink, idSorteado);
  }, 3000);
  //console.log(personagens[sorteio-1][3]+"."+personagens[sorteio-1][4])

}

procuraFoto = (foto, id) =>{
  //GET /v1/public/comics/{comicId}/characters

  let linkParteUm = 'http://gateway.marvel.com/';
  let linkParteDois = '/v1/public/characters/';
  let linkParteTres = id;
  let linkParteQuatro = '';

//axios.get(linkParteUm+linkParteDois+linkParteTres+linkParteQuatro+'?apikey='+key).then(function(response){
 //axios.get().then(function(response){
//console.log(response.data.data.results[0]);
//});
$(".logo").attr('src', foto);
};



sorteando = () =>{
  sorteio = (Math.floor((Math.random()*10)+1))+(Math.floor((Math.random()*10)+1));
  idSorteado = personagens[sorteio-1][0];
  nameSorteado = personagens[sorteio-1][1];
  descricaoSorteada = personagens[sorteio-1][2];
  return idSorteado,sorteio,nameSorteado;
}

personalizando = (idSorteado) =>{
  $botao.text(nameSorteado+"?");
//  $botao.text("#"+idSorteado);
  $(".disapear").addClass("question");
  $(".disapear").removeClass("disapear");
  $("#"+idSorteado).addClass("sorteio");

}
