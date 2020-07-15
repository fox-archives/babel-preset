const { transformSync } = require("@babel/core");
const preset = require("../lib");

test("ensure preset is loadable", () => {
	const usingDo = `let x = do {
  let tmp = f();
  tmp * tmp + 1
};
`;
	let code;
	expect(() => {
		({ code } = transformSync(usingDo, {
			filename: "testfile.js",
			presets: [preset],
		}));
	}).not.toThrow();

	const expectedCode = `"use strict";

var tmp;
var x = (tmp = f(), tmp * tmp + 1);`;

	expect(code).toBe(expectedCode);
});
