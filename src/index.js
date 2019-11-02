const { ExampleRule } = require('./rule');

module.exports = {
	name: 'salty-dog-oot-example',
	definitions: {
		partial: {
			type: 'object',
			required: [
				'foo',
				'bar',
			],
			properties: {
				bar: {
					type: 'number',
				},
				foo: {
					type: 'number',
				},
			},
		},
	},
	rules: [
		new ExampleRule(),
	],
};
