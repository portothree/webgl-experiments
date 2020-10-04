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

function buffer(gl, data, program, attribute, size, type) {
	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

	const attributeLocation = gl.getAttribLocation(program, attribute);
	gl.vertexAttribPointer(attributeLocation, size, type, false, 0, 0);
	gl.enableVertexAttribArray(attributeLocation);
}
