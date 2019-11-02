class ExampleRule {
  constructor(options) {
		this.name = 'oot-example-rule';
		this.tags = ['example'];
  }

  async pick(ctx, root) {
    return ctx.pick('$.foo', root);
  }

  async visit(ctx, node) {
    return {
      changes: [],
      errors: [{
        data: {},
        level: 'error',
        msg: 'oot-error',
      }],
    };
  }
}

module.exports = {
  ExampleRule,
};
