import { minify } from "html-minifier";	

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};


export const handle = async ({ request, resolve })=>{
	const response = await resolve(request);

	if (response.headers["content-type"] === "text/html") {
		response.body = minify(response.body, minification_options);

	}

	return response;
}