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
  const list = response.data.data.results;
  atualizaDados(list);
});


const $botaoPrevious = $('#buttonPrevious');
const $botaoNext = $('#buttonNext');
let rodapePage =1;

const $quadro1 = $("#box1");
const $quadro2 = $("#box2");
const $quadro3 = $("#box3");
const $quadro4 = $("#box4");
const $quadro5 = $("#box5");
const $quadro6 = $("#box6");
const $rodape = $("#page");

$quadro6.find("p").text("novo texto");

//$quadro1.attr("background-image", "url(\"file:///C:/Users/Cristiane/Desktop/Marvelpage-master/img/marvel-logo.png\")");

$botaoPrevious.on("click",() =>{
  rodapePage--;
  $rodape.text(rodapePage);
  offset = offset - 6;
  if(offset <= 0){
    $botaoPrevious.removeClass("btn btn-warning").addClass("some");
  }
  console.log(offset);
  busca(offset);
});

$botaoNext.on("click",() =>{
  rodapePage++;
  $rodape.text(rodapePage);
  offset = offset + 6;
  if(offset > 0){
    $botaoPrevious.removeClass("some").addClass("btn btn-warning");
  }
  console.log(offset);
  busca(offset);
});

  busca = (offset) => {
    axios.get(initialLink+secondLink+'?limit='+limit+'&offset='+offset+'&apikey='+key).then(function(response){

    const list = response.data.data.results;
        console.log(list);
        atualizaDados(list);
    });
  };

atualizaDados = (list) =>{

$quadro1.find("h2").text(list[0].name);
$quadro2.find("h2").text(list[1].name);
$quadro3.find("h2").text(list[2].name);
$quadro4.find("h2").text(list[3].name);
$quadro5.find("h2").text(list[4].name);
$quadro6.find("h2").text(list[5].name);
//condition ? expr1 : expr2

//console.log(list[1].description.length);
//console.log(list[2].description.length);


  list[0].description.length >150?
    ($quadro1.find("p").text(list[0].description.substring(0,150)+"...")):
    ($quadro1.find("p").text(list[0].description));
  list[1].description.length >150?
    ($quadro2.find("p").text(list[1].description.substring(0,150)+"...")):
    ($quadro2.find("p").text(list[1].description));
  list[2].description.length >150?
    ($quadro3.find("p").text(list[2].description.substring(0,150)+"...")):
    ($quadro3.find("p").text(list[2].description));
  list[3].description.length >150?
    ($quadro4.find("p").text(list[3].description.substring(0,150)+"...")):
    ($quadro4.find("p").text(list[3].description));
  list[4].description.length >150?
    ($quadro5.find("p").text(list[4].description.substring(0,150)+"...")):
    ($quadro5.find("p").text(list[4].description));
  list[5].description.length >150?
    ($quadro6.find("p").text(list[5].description.substring(0,150)+"...")):
    ($quadro6.find("p").text(list[5].description));

list[0].description == "" ? $quadro1.find("h3").addClass("some") : $quadro1.find("h3").removeClass("some");
list[1].description == "" ? $quadro2.find("h3").addClass("some") : $quadro2.find("h3").removeClass("some");
list[2].description == "" ? $quadro3.find("h3").addClass("some") : $quadro3.find("h3").removeClass("some");
list[3].description == "" ? $quadro4.find("h3").addClass("some") : $quadro4.find("h3").removeClass("some");
list[4].description == "" ? $quadro5.find("h3").addClass("some") : $quadro5.find("h3").removeClass("some");
list[5].description == "" ? $quadro6.find("h3").addClass("some") : $quadro6.find("h3").removeClass("some");

$quadro1.find("a").text(list[0].comics.available);
$quadro2.find("a").text(list[1].comics.available);
$quadro3.find("a").text(list[2].comics.available);
$quadro4.find("a").text(list[3].comics.available);
$quadro5.find("a").text(list[4].comics.available);
$quadro6.find("a").text(list[5].comics.available);

list[0].comics.available == 0 ? ($quadro1.find("h4").addClass("some"),
                                  $quadro1.find("a").text("")
                                  ): $quadro1.find("h4").removeClass("some");
list[1].comics.available == 0 ? ($quadro2.find("h4").addClass("some"),
                                  $quadro2.find("a").text("")
                                  ) : $quadro2.find("h4").removeClass("some");
list[2].comics.available == 0 ? ($quadro3.find("h4").addClass("some"),
                                  $quadro3.find("a").text("")
                                  ) : $quadro3.find("h4").removeClass("some");
list[3].comics.available == 0 ? ($quadro4.find("h4").addClass("some"),
                                  $quadro4.find("a").text("")
                                  ) : $quadro4.find("h4").removeClass("some");
list[4].comics.available == 0 ? ($quadro5.find("h4").addClass("some"),
                                  $quadro5.find("a").text("")
                                  ) : $quadro5.find("h4").removeClass("some");
list[5].comics.available == 0 ? ($quadro6.find("h4").addClass("some"),
                                  $quadro6.find("a").text("")
                                  ) : $quadro6.find("h4").removeClass("some");


list[0].thumbnail.path.indexOf("not_available") == -1 ? $quadro1.find("img").attr("src",(list[0].thumbnail.path +"."+ list[0].thumbnail.extension)):
                                                        $quadro1.find("img").attr("src",("img\\marvel-282124.png"));
list[1].thumbnail.path.indexOf("not_available") == -1 ? $quadro2.find("img").attr("src",(list[1].thumbnail.path +"."+ list[1].thumbnail.extension)):
                                                        $quadro2.find("img").attr("src",("img\\marvel-282124.png"));
list[2].thumbnail.path.indexOf("not_available") == -1 ? $quadro3.find("img").attr("src",(list[2].thumbnail.path +"."+ list[2].thumbnail.extension)):
                                                        $quadro3.find("img").attr("src",("img\\marvel-282124.png"));
list[3].thumbnail.path.indexOf("not_available") == -1 ? $quadro4.find("img").attr("src",(list[3].thumbnail.path +"."+ list[3].thumbnail.extension)):
                                                        $quadro4.find("img").attr("src",("img\\marvel-282124.png"));
list[4].thumbnail.path.indexOf("not_available") == -1 ? $quadro5.find("img").attr("src",(list[4].thumbnail.path +"."+ list[4].thumbnail.extension)):
                                                        $quadro5.find("img").attr("src",("img\\marvel-282124.png"));
list[5].thumbnail.path.indexOf("not_available") == -1 ? $quadro6.find("img").attr("src",(list[5].thumbnail.path +"."+ list[5].thumbnail.extension)):
                                                        $quadro6.find("img").attr("src",("img\\marvel-282124.png"));

let $b1 = $quadro1.find("button").attr("href",list[0].urls[0].url);
let $b2 = $quadro2.find("button").attr("href",list[1].urls[0].url);
let $b3 = $quadro3.find("button").attr("href",list[2].urls[0].url);
let $b4 = $quadro4.find("button").attr("href",list[3].urls[0].url);
let $b5 = $quadro5.find("button").attr("href",list[4].urls[0].url);
let $b6 = $quadro6.find("button").attr("href",list[5].urls[0].url);

$b1.on("click", () => {open($b1.attr("href"),"_self");});
$b2.on("click", () => {open($b2.attr("href"),"_self");});
$b3.on("click", () => {open($b3.attr("href"),"_self");});
$b4.on("click", () => {open($b4.attr("href"),"_self");});
$b5.on("click", () => {open($b5.attr("href"),"_self");});
$b6.on("click", () => {open($b6.attr("href"),"_self");});


};


criaPersonagem = (list) => {

for(let i = 0; i< list.length; i++){
personagem.id = list[i].id;
personagem.nome = list[i].name;
personagem.descricao = list[i].description;
personagem.comics = list[i].comics.items.length;
personagem.thumbnail = list[i].thumbnail.path;
personagem.extension = list[i].thumbnail.extension;

//console.log(personagem);

personagens.push([
  personagem.id,
  personagem.nome,
  personagem.descricao,
  personagem.thumbnail,
  personagem.extension,
]);
//personagens.push(personagem);
}
//console.log(personagens);



}
