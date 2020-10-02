async function main() {
	const gl = canvas.getContext('webgl');
	const vertexShader = await loadShader('./shaders/vertex-shader.glsl');
	const fragmentShader = await loadShader('./shaders/fragment-shader.glsl');

	const program = await compile(gl, vertexShader, fragmentShader);

	const position = gl.getAttribLocation(program, 'position');
	const size = gl.getAttribLocation(program, 'size');
	const color = gl.getUniformLocation(program, 'color');

	gl.vertexAttrib4f(position, 0, 0, 0, 1);
	gl.vertexAttrib1f(size, 10);
	gl.uniform4f(color, 1, 0, 0, 1);

	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, 1);
}

main();
