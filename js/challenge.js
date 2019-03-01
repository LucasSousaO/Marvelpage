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


const $quadro1 = $("#box1");
const $quadro2 = $("#box2");
const $quadro3 = $("#box3");
const $quadro4 = $("#box4");
const $quadro5 = $("#box5");
const $quadro6 = $("#box6");



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


    const list = response.data.data.results;
        console.log(list);
    atualizaDados(list);
  });
};

atualizaDados = (list) =>{

  criaPersonagem(list);

  atualizaQuadros (personagens);
};

atualizaQuadros = () => {
$quadro1.find("h2").text(list[0].name);
$quadro2.find("h2").text(list[1].name);
$quadro3.find("h2").text(list[2].name);
$quadro4.find("h2").text(list[3].name);
$quadro5.find("h2").text(list[4].name);
$quadro6.find("h2").text(list[5].name);




};


criaPersonagem = (list) => {

for(let i = 0; i< list.length; i++){
personagem.id = list[i].id;
personagem.nome = list[i].name;
personagem.descricao = list[i].description;
personagem.comics = list[i].comics.items.length;
personagem.thumbnail = list[i].thumbnail.path;
personagem.extension = list[i].thumbnail.extension;

console.log(personagem);

personagens.push([
  personagem.id,
  personagem.nome,
  personagem.descricao,
  personagem.thumbnail,
  personagem.extension,
]);
//personagens.push(personagem);
}
console.log(personagens);



}
