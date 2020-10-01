function loadShader(url) {
	return fetch(url).then(res => res.text());
}

const vertexShader = loadShader('./shaders/vertex-shader.glsl');
const fragmentShader = loadShader('./shaders/fragment-shader.glsl');

async function compile() {
	const gl = canvas.getContext('webgl');

	const vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs, await vertexShader);
	gl.compileShader(vs);

	const fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, await fragmentShader);
	gl.compileShader(fs);

	const program = gl.createProgram();
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	gl.useProgram(program);

	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);
}

compile();
