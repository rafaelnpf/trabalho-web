// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/app/views/funcionarios/lista/lista.marko",
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

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1\"><title>Simple Sidebar - Start Bootstrap Template</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link href=./estatico/css/estilo.css rel=stylesheet><script src=./estatico/js/core.js></script></head><body><main class=\"container-fluid p-0 d-flex\" id=wrapper><section class=\"col-lg-10 col-md-10 p-0 m-0\"><article id=page-content-wrapper><aside class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\" id=header><button class=\"navbar-toggler menu-expand\" onclick=menu(); title=\"Abrir menu\" type=button><section class=navbar-toggler-icon></section></button></aside><section class=\"container-fluid p-2\"><article class=\"table-title p-2 rounded-top crud_tr\"><div class=\"col-8 pl-4 text-white\"><h3><i class=\"fas fa-list-ul  mt-2\"></i><b class=ml-3>Lista de Funcionários</b></h3></div> </article><article class=\"crud px-3 bg-white rounded-bottom shadow-sm\"> <table class=\"table table-borderless mt-2 table-hover table-responsive-lg table-responsive-md\" id=list-funcionarios><thead><tr class=text-primary><th scope=col class=align-middle>ID</th><th scope=col class=align-middle>Nome</th><th scope=col class=align-middle>Sobrenome</th><th scope=col class=align-middle>CPF</th><th scope=col class=align-middle>Idade</th><th scope=col class=align-middle>Cargo</th><th scope=col></th><th scope=col></th></tr></thead>");

  var $for$0 = 0;

  marko_forOf(data.funcionarios, function(funcionarios) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "funcionario_" + (funcionarios.id == null ? "" : funcionarios.id)) +
      "><td>" +
      marko_escapeXml(funcionarios.id) +
      "</td><td>" +
      marko_escapeXml(funcionarios.nome) +
      "</td> <td>" +
      marko_escapeXml(funcionarios.sobrenome) +
      "</td><td>" +
      marko_escapeXml(funcionarios.cpf) +
      "</td><td>" +
      marko_escapeXml(funcionarios.idade) +
      "</td><td>" +
      marko_escapeXml(funcionarios.cargo) +
      "</td><td><a" +
      marko_attr("href", "/funcionarios/form/" + (funcionarios.id == null ? "" : funcionarios.id)) +
      " class=text-warning data-type=alterar>Editar</a></td><td><a href=# class=text-danger" +
      marko_attr("data-ref", funcionarios.id) +
      " data-type=remover>Excluir</a></td></tr>");
  });

  out.w("</table> </article></section></article></section><section class=\"col-lg-2 col-md-2 p-0 m-0\"><article class=\"border-right sticky-top\" id=sidebar-wrapper> <nav class=\"list-group list-group-flush\"><a class=\"nav_logo mt-4\"><img class=\"nav__logo logo--user\" src=./../../estatico/imgs/logo_usuario.svg></a><a href=/funcionarios class=\"nav_link active\"> <h6 class=\"nav-nome mt-1\">Lista de Funcionários</h6></a><a href=/funcionarios/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Funcionário</h6></a><a href=/produtos class=nav_link><h6 class=\"nav-nome mt-1\">Lista Veiculos</h6></a><a href=/produtos/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Veiculos</h6></a></nav></article></section></main><footer class=rodape>Desenvolvido pela Equipe 9; Yuri,Gabriel,Mateus,Rafael,Robson.</footer><script src=./estatico/js/remove-funcionarios.js></script><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script>\r\n    $(\"#menu-toggle\").click(function (e) {\r\n      e.preventDefault();\r\n      $(\"#wrapper\").toggleClass(\"toggled\");\r\n    });\r\n\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "58");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web$1.0.0/src/app/views/funcionarios/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
