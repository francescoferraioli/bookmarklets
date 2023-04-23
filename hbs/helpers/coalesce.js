var fn = function () {};

fn.register = function (Handlebars) {
  Handlebars.registerHelper('coalesce', (...args) => args.find(i => !!i));
};

module.exports = fn;
