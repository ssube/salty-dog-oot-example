class ExampleRule {
  constructor(options) {
    this.name = 'oot-example-rule';
    this.tags = ['example'];
  }

  async pick(ctx, root) {
    return ctx.pick('$.metadata', root);
  }

  async visit(ctx, node) {
    return {
      changes: [],
      errors: [],
      rule: this,
    };
  }
}

class FailingRule {
  constructor(options) {
    this.name = 'oot-failing-rule';
    this.tags = ['example', 'failing'];
  }

  async pick(ctx, root) {
    return ctx.pick('$.metadata', root);
  }

  async visit(ctx, node) {
    // stream errors directly to the context
    ctx.error({
      data: {},
      level: 'error',
      msg: 'oot-error',
    });

    return {
      changes: [],
      errors: [/* or pass them in a group at the end */],
    };
  }
}
module.exports = {
  ExampleRule,
  FailingRule,
};
