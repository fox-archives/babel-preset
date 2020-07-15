const r = require.resolve.bind(null);

module.exports = () => ({
	presets: [
		[
			r("@babel/preset-env"),
			{
				bugfixes: true,
				spec: true,
				loose: false,
				useBuiltIns: "usage",
				corejs: 3,
			},
		],
		[
			r("@babel/preset-typescript"),
			{
				allowNamespaces: true,
				allowDeclareFields: true,
				onlyRemoveTypeImports: true,
			},
		],
	],
	plugins: [
		r("@babel/plugin-proposal-class-properties"),
		r("@babel/plugin-proposal-do-expressions"),
		r("@babel/plugin-proposal-function-bind"),
		r("@babel/plugin-proposal-function-sent"),
		r("@babel/plugin-proposal-logical-assignment-operators"),
		r("@babel/plugin-proposal-nullish-coalescing-operator"),
		r("@babel/plugin-proposal-numeric-separator"),
		r("@babel/plugin-proposal-optional-chaining"),
		[
			r("@babel/plugin-proposal-pipeline-operator"),
			{
				proposal: "minimal",
			},
		],
		r("@babel/plugin-proposal-private-methods"),
		r("@babel/plugin-proposal-private-property-in-object"),
		r("@babel/plugin-proposal-throw-expressions"),
	],
});
