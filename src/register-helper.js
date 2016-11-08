'use strict';

function registerHelper(Handlebars, listitems) {
  Handlebars.registerHelper('listitems', function(options) {
    let html = '';
    let items = listitems[options.hash.size];
    items.forEach(function(item) {
      console.log(item)
      html = html + options.fn(item)
    })
    return html;
  });
}

module.exports = registerHelper;
