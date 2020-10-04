async function main() {
	const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });
	const vertexShader = await loadShader('./shaders/vertex-shader.glsl');
	const fragmentShader = await loadShader('./shaders/fragment-shader.glsl');

	const program = await compile(gl, vertexShader, fragmentShader);

	const color = gl.getUniformLocation(program, 'color');
	gl.uniform4f(color, 1, 0, 0, 1);

	const vertices = new Float32Array([0, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0]);
	// Bind a data buffer to the position attribute, fill it with the vertices and enable it
	buffer(gl, vertices, program, 'position', 3, gl.FLOAT);

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.TRIANGLES, 0, 3);
}

main();
