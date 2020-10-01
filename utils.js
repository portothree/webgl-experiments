function loadShader(url) {
	return fetch(url).then(res => res.text());
}

async function compile(gl, vertexShader, fragmentShader) {
	const vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs, vertexShader);
	gl.compileShader(vs);

	const fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, fragmentShader);
	gl.compileShader(fs);

	const program = gl.createProgram();
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.linkProgram(program);
	gl.useProgram(program);

	return program;
}
