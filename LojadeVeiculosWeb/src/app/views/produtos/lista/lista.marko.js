// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/app/views/produtos/lista/lista.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1\"><title>Loja de Veiculos</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link href=./estatico/css/estilo.css rel=stylesheet><script src=./estatico/js/core.js></script></head><body><main class=\"container-fluid p-0 d-flex\" id=wrapper><section class=\"col-lg-10 col-md-10 p-0 m-0\"><article id=page-content-wrapper><aside class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\" id=header><button class=\"navbar-toggler menu-expand\" onclick=menu(); title=\"Abrir menu\" type=button><section class=navbar-toggler-icon></section></button><nav class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\"><li class=nav-item><a class=\"nav-link menu-expand\" href=#>Veiculos</a></li><li class=nav-item><a class=\"nav-link menu-expand\" href=#>Funcionarios</a></li></ul></nav></aside><section class=\"container-fluid p-2\"><article class=\"table-title p-2 rounded-top crud_tr\"><div class=\"col-8 pl-4 text-white\"><h3><i class=\"fas fa-list-ul  mt-2\"></i><b class=ml-3>Lista de Veiculos</b></h3></div> </article><article class=\"crud px-3 bg-white rounded-bottom shadow-sm\"> <table class=\"table table-borderless table-striped mt-2 table-hover table-responsive-lg table-responsive-md\" id=list-produtos><thead><tr class=text-primary><th scope=col class=align-middle>ID</th><th scope=col class=align-middle>Modelo</th><th scope=col class=align-middle>Marca</th><th scope=col class=align-middle>Preço</th><th scope=col class=align-middle>Quantidade</th><th scope=col class=align-middle>Descricao</th><th scope=col></th><th scope=col></th><th scope=col></th></tr></thead>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(produtos) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "produto_" + (produtos.id == null ? "" : produtos.id)) +
      "><td>" +
      marko_escapeXml(produtos.id) +
      "</td><td>" +
      marko_escapeXml(produtos.nome) +
      "</td> <td>" +
      marko_escapeXml(produtos.marca) +
      "</td><td>" +
      marko_escapeXml(produtos.preco) +
      "</td><td>" +
      marko_escapeXml(produtos.quantidade) +
      "</td><td>" +
      marko_escapeXml(produtos.descricao) +
      "</td> <td class=\"pagination justify-content-center\"><li class=\"page-item p-0 mr-2\"><a" +
      marko_attr("href", "/produtos/incrementar/" + (produtos.id == null ? "" : produtos.id)) +
      " class=\"btn-lg p-0 m-0\"" +
      marko_attr("data-ref", produtos.id) +
      " data-type=incrementar><i class=\"fas fa-plus-circle text-success\"></i></a></li><li class=\"page-item m-0\"><input type=number name=valor id=valor></li><li class=\"page-item p-0 ml-2\"><a href=# class=\"btn-lg p-0 m-0\"" +
      marko_attr("data-ref", produtos.id) +
      " data-type=decrementar><i class=\"fas fa-minus-circle text-danger\"></i></a></li></td><td><a" +
      marko_attr("href", "/produtos/form/" + (produtos.id == null ? "" : produtos.id)) +
      " class=text-info data-type=alterar>Editar</a></td><td><a href=# class=text-danger" +
      marko_attr("data-ref", produtos.id) +
      " data-type=remover>Excluir</a></td></tr>");
  });

  out.w("</table> </article></section></article></section><section class=\"col-lg-2 col-md-2 p-0 m-0\"><article class=\"border-right sticky-top\" id=sidebar-wrapper> <nav class=\"list-group list-group-flush\"><a class=\"nav_logo logo--list mt-4\"><img src=./../../estatico/imgs/logo_lista.svg></a><a href=/funcionarios class=nav_link> <h6 class=\"nav-nome mt-1\">Lista de Funcionários</h6></a><a href=/funcionarios/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Funcionário</h6></a><a href=/produtos class=\"nav_link active\"><h6 class=\"nav-nome mt-1\">Lista de Veiculos</h6></a><a href=/produtos/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Veiculos</h6></a></nav></article></section></main><footer class=rodape>Desenvolvido pela Equipe 9; Yuri,Gabriel,Mateus,Rafael,Robson.</footer><script src=./estatico/js/remove-produtos.js></script><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script>\r\n    $(\"#menu-toggle\").click(function (e) {\r\n      e.preventDefault();\r\n      $(\"#wrapper\").toggleClass(\"toggled\");\r\n    });\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "74");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web$1.0.0/src/app/views/produtos/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
