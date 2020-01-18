const helper = {
  register(Handlebars) {
    Handlebars.registerHelper('times', function times(num, block) {
      let accum = '';
      for (let i = 0; i < num; ++i) {
        accum += block.fn(i);
      }
      return accum;
    });
  },
};

module.exports = helper;
