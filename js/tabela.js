const createTable = (list) => {
  for(let i = 0; i<list.length; i++){

    criaArray(list, i);

    criandoLinha();

  };
  $(".tabela-linhas").click(function(){
    open("http://localhost.marvel.com:3000/details.html?heroId="+this.id);
  });

}


criandoLinha = () =>{
  let   linha = $("<tr>");
  linha.attr('id',superHH.id)
  linha.attr('class',superHH.id);
  let colunaSuperHero = $("<td>");
  let testeColuna = $("<a>").text(superHH.nome);
//  let colunaSuperHero = $("<td>").text(superHH.nome);
  var colunaDescription = $("<td>").text(superHH.descricao);

  testeColuna.addClass("teste1");
  colunaSuperHero.addClass("teste1");
  colunaDescription.addClass("teste2");

  colunaSuperHero.append(testeColuna);
  linha.append(colunaSuperHero);
  linha.append(colunaDescription);
  linha.addClass("tabela-linhas");

var corpoTabela = $(".tabela-completa").find("tbody");
corpoTabela.append(linha);
}
