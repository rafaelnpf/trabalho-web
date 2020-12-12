// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/web$1.0.0/src/app/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-BR><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1\"><title>Simple Sidebar - Start Bootstrap Template</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link href=./estatico/css/estilo.css rel=stylesheet></head><body><main class=\"container-fluid p-0 d-flex\" id=wrapper><section class=\"col-lg-2 col-md-2 p-0 m-0\"><article class=\"border-right sticky-top\" id=sidebar-wrapper> <nav class=\"list-group list-group-flush\"><a class=\"nav_logo mt-4\"><h2 class=text-white><i class=\"fas fa-paw text-warning\"></i> PetShop</h2></a><a href=./funcionarios class=nav_link> <h6 class=\"nav-nome mt-1\">Lista de Funcionários</h6></a><a href=./funcionarios/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Funcionário</h6></a><a href=./produtos class=nav_link><h6 class=\"nav-nome mt-1\">Lista de Produtos</h6></a><a href=./produtos/form class=nav_link><h6 class=\"nav-nome mt-1\">Cadastrar Produto</h6></a></nav></article></section></main><footer class=rodape>Desenvolvido por &#169; Joelson Santos | 205190134@unifacs.edu.br</footer><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script>\r\n    $(\"#menu-toggle\").click(function (e) {\r\n      e.preventDefault();\r\n      $(\"#wrapper\").toggleClass(\"toggled\");\r\n    });\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/web$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
