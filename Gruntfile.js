module.exports = function (grunt) {
	// Project configuration
	grunt.initConfig({
						 pkg   : grunt.file.readJSON("package.json"),
						 tslint: {
							 options: {
								 configuration: "tslint.json",
								 force        : false,
								 fix          : true
							 },
							 files  : {
								 src: [
									 "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\src\\main\\ts/**/*.ts"
								 ]
							 }
						 },
						 ts    : {
							 options: {
								 rootDir: "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\src\\main\\ts"
							 },
							 main   : {
								 tsconfig: true,
								 src     : "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\src\\main\\ts/**/*.ts",
								 dest    : "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\target/generated-sources/ts-compiled"
							 }
						 },
						 uglify: {
							 options: {
								 sourceMap: true
							 },
							 main   : {
								 files: [
									 {
										 expand: true,
										 cwd   : "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\target/generated-sources/ts-compiled",
										 src   : "**/*.js",
										 dest  : "C:\\Users\\ChrissW-R1\\ws_intellij\\garuda-core\\target/generated-sources/uglified",
										 ext   : ".min.js"
									 }
								 ]
							 }
						 }
					 });

	// Load plugins
	grunt.loadNpmTasks("grunt-tslint");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// Default task(s)
	grunt.registerTask("default", [
		"tslint",
		"ts",
		"uglify"
	]);
};
