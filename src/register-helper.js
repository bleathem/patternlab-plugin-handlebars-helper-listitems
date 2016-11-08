'use strict';

function registerHelper(patternlab, Handlebars) {
  Handlebars.registerHelper('listitems', function(options) {
    let html = '';
    let listitems = patternlab.listitems[options.hash.size];
    listitems.forEach(function(listitem) {
      if (patternlab.config.debug) {
        console.log(listitem);
      }
      html = html + options.fn(listitem)
    })
    return html;
  });
}

module.exports = registerHelper;
