  let id = "";
  //let nomeHero = "";
  let nomeHero = {
  };
  const initialLink = 'http://gateway.marvel.com/';
  const  secondLink = 'v1/public/characters';
  const key = 'dc1f0549b5d5924f62633bd775ccbe0f';
  const divisao = $("<div>");
  const divisao1 = $("<div>");
  const divisao2 = $("<div>");
  const divisao3 = $("<div>");
  const divisao4 = $("<div>");

  let corpo = $(".body");
  let corpo1 = $(".header");

axios.get(initialLink+secondLink+'?apikey='+key).then(function(response){

  leUrl();

  let lista = response.data.data.results;
  console.log(response.data.data.results);
  lookForName(lista);

  createTitle();

  createPage(nomeHero);


});

lookForName = (lista) =>{
for(i =0; i< lista.length; i++){
  if(id == lista[i].id){
    nomeHero = lista[i];
    return nomeHero;
  }
};
};

createTitle = () => {
const divisao1 = $("<div>")
const titulo = $("<h1>").text("Name: "+nomeHero.name);

let logo = $("<img>").attr("src","/img/marvel-logo.png").attr("class","logo").attr("alt", "logotipo Marvel");

divisao1.append(titulo);
divisao1.append(logo);

corpo1.append(divisao1);
divisao1.attr("class","titulo");
}

createPage = (lista) =>{
  createDescription(nomeHero);

  createImage(nomeHero);

  createSeries(nomeHero);

  createStories(nomeHero);

  createRodape();
}

createDescription = (itensHero) => {

  if(itensHero.description == ""){    // TESTE SE NULO
    console.log("sem descrição");
  }else{
    montaDescription(itensHero);

  }

};

montaDescription = (itensHero) => {
  let titleDescription = $("<h2>").text("Description").attr("class", "descricao");
  const descricao = $("<p>").text(itensHero.description).attr("class", "descricao");
  corpo.append(titleDescription);
  corpo.append(descricao);

};

createSeries = (itensHero) => {
let quantos = itensHero.series.available;
console.log(quantos);
  if(quantos != 0){
    let titleDescription = $("<h2>").text("Series: ");

    const series = $("<p>").text(quantos).attr("class","number");

    let linha = $("<ul>");
  montaLista(itensHero, quantos, linha);

  divisao1.append(titleDescription);
  divisao1.append(series);

  divisao1.append(linha).attr("class","coluna");
  divisao.append(divisao1);

  corpo.append(divisao);
}
};

montaLista = (itensHero, quantos, linha) =>{

  for( let a = 0; a< quantos; a++){
    if(a<6){
      coluna = $("<li>").text(itensHero.series.items[a].name);
    linha.append(coluna);
  }
  };

}


createStories = (itensHero) => {
let quantos = itensHero.stories.available; //quantas
let url = itensHero.urls[0].url; //detalhes

if(quantos != 0){
  let titleDescription = $("<h2>").text("With " + quantos+ " stories: ");
  const stories = $("<p>").text(quantos).attr("class","number");
  const link = $("<button>").text("Click here to know more").attr("class","saiba");
divisao3.append(titleDescription).attr("class","coluna2");
divisao3.append(link);
divisao.append(divisao3).attr("class","coluna-geral");
//corpo.append(divisao2)
}

$(".saiba").click(function(){
  open(url);
});
  //"http://gateway.marvel.com/v1/public/characters/1009150/stories"
};


leUrl = () => {
  var urlParams = new URLSearchParams(location.search);

  urlParams.has('type');  // true
  urlParams.get('id');    // 1234
  urlParams.getAll('id'); // ["1234"]
  urlParams.toString();   // type=product&id=1234

   id = urlParams.getAll('heroId')
    return id;
}

createImage = (itensHero) => {
  let photo = itensHero.thumbnail.path+"."+itensHero.thumbnail.extension;
  montaFoto(photo);
};


montaFoto = (photo) =>{
  let foto = $("<img>").text("foto").attr("src", photo).attr("class","foto").attr("alt","super Hero picture");//.attr("href", foto);
  divisao4.append(foto).attr("class","coluna3");
  divisao.append(divisao4);
};

createRodape = () =>{
  foot = $("<footer>").text("@ developer.marvel.com 2019");
  $("body").append(foot);

};
