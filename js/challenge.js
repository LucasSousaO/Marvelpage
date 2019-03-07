const initialLink = 'http://gateway.marvel.com/';
const  secondLink = 'v1/public/characters';
const key = 'dc1f0549b5d5924f62633bd775ccbe0f';
let limit = 6;
let offset = 0;

let personagens = [ ];
let personagem={
      id: "",
      nome: "",
      descricao: "",
      comics: "",
      thumbnail:"",
      extension:"",
};

axios.get(initialLink+secondLink+'?limit='+limit+'&offset='+offset+'&apikey='+key).then(function(response){

  console.log(response.data.data.results);
  atualizaQuadros(response);
});


const $botaoPrevious = $('#buttonPrevious');
const $botaoNext = $('#buttonNext');


const $quadro1 = $("#box1");
const $quadro2 = $("#box2");
const $quadro3 = $("#box3");
const $quadro4 = $("#box4");
const $quadro5 = $("#box5");
const $quadro6 = $("#box6");

$quadro1.find("p").text("novo texto");

$botaoPrevious.on("click",() =>{
  offset = offset - 6;
  if(offset <= 0){
    $botaoPrevious.addClass("some");
  }
  console.log(offset);
  busca(offset);
});
$botaoNext.on("click",() =>{
  offset = offset + 6;
  if(offset > 0){
    $botaoPrevious.removeClass("some");
  }
  console.log(offset);
  busca(offset);
});

busca = (offset) => {
  axios.get(initialLink+secondLink+'?limit='+limit+'&offset='+offset+'&apikey='+key).then(function(response){

        console.log(response.data.data.results);
    atualizaQuadros(response);
  });
};


atualizaQuadros = (response) => {

$quadro1.find("h2").text(response.data.data.results[0].name);
$quadro2.find("h2").text(response.data.data.results[1].name);
$quadro3.find("h2").text(response.data.data.results[2].name);
$quadro4.find("h2").text(response.data.data.results[3].name);
$quadro5.find("h2").text(response.data.data.results[4].name);
$quadro6.find("h2").text(response.data.data.results[5].name);

$quadro1.find("p").text(response.data.data.results[0].description);
$quadro2.find("p").text(response.data.data.results[1].description);
$quadro3.find("p").text(response.data.data.results[2].description);
$quadro4.find("p").text(response.data.data.results[3].description);
$quadro5.find("p").text(response.data.data.results[4].description);
$quadro6.find("p").text(response.data.data.results[5].description);

$quadro1.find("a").text(response.data.data.results[0].stories.items.length);
$quadro2.find("a").text(response.data.data.results[1].stories.items.length);
$quadro3.find("a").text(response.data.data.results[2].stories.items.length);
$quadro4.find("a").text(response.data.data.results[3].stories.items.length);
$quadro5.find("a").text(response.data.data.results[4].stories.items.length);
$quadro6.find("a").text(response.data.data.results[5].stories.items.length);

//$quadro1.attr("background-image", url('http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'));
$quadro1.find("img").attr("src", response.data.data.results[0].thumbnail.path+"."+response.data.data.results[0].thumbnail.extension);
$quadro2.find("img").attr("src", response.data.data.results[1].thumbnail.path+"."+response.data.data.results[1].thumbnail.extension);
$quadro3.find("img").attr("src", response.data.data.results[2].thumbnail.path+"."+response.data.data.results[2].thumbnail.extension);
$quadro4.find("img").attr("src", response.data.data.results[3].thumbnail.path+"."+response.data.data.results[3].thumbnail.extension);
$quadro5.find("img").attr("src", response.data.data.results[4].thumbnail.path+"."+response.data.data.results[4].thumbnail.extension);
$quadro6.find("img").attr("src", response.data.data.results[5].thumbnail.path+"."+response.data.data.results[5].thumbnail.extension);

$quadro1.find("img").attr("alt", response.data.data.results[0].name+"'s photo");
$quadro2.find("img").attr("alt", response.data.data.results[1].name+"'s photo");
$quadro3.find("img").attr("alt", response.data.data.results[2].name+"'s photo");
$quadro4.find("img").attr("alt", response.data.data.results[3].name+"'s photo");
$quadro5.find("img").attr("alt", response.data.data.results[4].name+"'s photo");
$quadro6.find("img").attr("alt", response.data.data.results[5].name+"'s photo");

let $botao1 = $quadro1.find('button');
let $botao2 = $quadro2.find('button');
let $botao3 = $quadro3.find('button');
let $botao4 = $quadro4.find('button');
let $botao5 = $quadro5.find('button');
let $botao6 = $quadro6.find('button');

$botao1.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[0].urls[0].url, "_self");
});

$botao2.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[1].urls[0].url, "_self");
});

$botao3.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[2].urls[0].url, "_self");
});

$botao4.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[3].urls[0].url, "_self");
});

$botao5.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[4].urls[0].url, "_self");
});

$botao6.on("click",function(){
  event.preventDefault();
  window.open(response.data.data.results[5].urls[0].url, "_self");
});
};
