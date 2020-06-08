const r = require.resolve.bind(null)

module.exports = () => ({
	presets: [
		[r('@babel/env'), {
			bugfixes: true,
			spec: true,
			loose: false,
			useBuiltIns: 'usage',
			corejs: 3
		}],
		[r('@babel/typescrpt'), {
			allowNamespaces: true,
			allowDeclareFields: true,
			onlyRemoveTypeImports: true
		}]
	],
	plugins: [
		r('@babel/proposal-class-properties'),
		r('@babel/proposal-do-expressions'),
		r('@babel/proposal-function-bind'),
		r('@babel/proposal-function-sent'),
		r('@babel/proposal-logical-assignment-operators'),
		r('@babel/proposal-nullish-coalescing-operator'),
		r('@babel/proposal-numeric-separator'),
		r('@babel/proposal-optional-chaining'),
		r('@babel/proposal-pipeline-operator'),
		r('@babel/proposal-private-methods'),
		r('@babel/proposal-private-property-in-object'),
		r('@babel/proposal-throw-expressions'),
	]
})
