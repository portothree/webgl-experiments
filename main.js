async function main() {
	const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });
	const vertexShader = await loadShader('./shaders/vertex-shader.glsl');
	const fragmentShader = await loadShader('./shaders/fragment-shader.glsl');

	const program = await compile(gl, vertexShader, fragmentShader);

	const position = gl.getAttribLocation(program, 'position');
	const size = gl.getAttribLocation(program, 'size');
	const color = gl.getUniformLocation(program, 'color');

	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	setInterval(() => {
		gl.clear(gl.COLOR_BUFFER_BIT);

		const x = Math.random() * 2 - 1;
		const y = Math.random() * 2 - 1;

		gl.vertexAttrib4f(position, x, y, 0, 1);
		gl.vertexAttrib1f(size, 10);
		gl.uniform4f(color, 1, 0, 0, 1);

		gl.drawArrays(gl.POINTS, 0, 1);
	}, 500);
}

main();
