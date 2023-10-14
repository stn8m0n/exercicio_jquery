// para ver se o j.query esta funcionando
// essa primeira parte foi selecionando botao
// adicionando um evento .addEventlistener
$(document).ready(function () {
    $("header button").click(function () {
      $("form").slideDown();
    });
  
    $("#botao-cancelar").click(function () {
      $("form").slideUp();
    });
  
    $("form").on("submit", function (e) {
      e.preventDefault();
      const novaTarefa = $("#novo").val(); // Corrigido para "novaTarefa"
      const novoItem = $(`<li style="display:none">${novaTarefa}</li>`); // Corrigido para `<li>`
      $("#lista-tarefas").append(novoItem); // Adicionando o novo item à lista
      $(novoItem).fadeIn();
    });
  });

  /*$(document).ready(function() {
  $('header button').click(function(){
      $('form').slideDown();
  })

  $('#bt-cancelar').click(function() {
      $('form').slideUp();
  })

  $('form').on('submit', function(e){
      e.preventDefault();
      const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
      const novoItem = $ ('<li style="display: none"></li>');
      $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
      $(`
          <div class="overlay-imagem-link">
              <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
              Ver imagem em tamanho real
              </a>
          </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(1000);
      $('#endereço-imagem-nova').val('')
  })

})
