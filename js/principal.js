/*var characteres = new Promise(function(resolve, reject){
var hero = $get(initialLink+secondLink+"?apikey="+key,characteres.then())
});*/

const $botao = $("#button");

let superHH={
    id: "",
    nome: "",
    descricao: "",
    thumbnail:"",
    extension:"",
}

let personagens=[];

const initialLink = 'http://gateway.marvel.com/';
const  secondLink = 'v1/public/characters';
const key = 'dc1f0549b5d5924f62633bd775ccbe0f';

axios.get(initialLink+secondLink+'?limit=50&apikey='+key).then(function(response){

  console.log(response.data.data.results);
  const list = response.data.data.results;

  createTable(list);

});

//localhost.com?heroId=1023165

  criaArray = (list, i)=>{
    superHH.id = list[i].id;
    superHH.nome = list[i].name;
    superHH.descricao = list[i].comics.items.length;
    superHH.thumbnail = list[i].thumbnail.path;
    superHH.extension = list[i].thumbnail.extension;

    personagens.push([
      superHH.id,
      superHH.nome,
      superHH.descricao,
      superHH.thumbnail,
      superHH.extension
    ]);
  }
