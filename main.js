const gl = canvas.getContext('webgl');

async function main() {
	const vertexShader = await loadShader('./shaders/vertex-shader.glsl');
	const fragmentShader = await loadShader('./shaders/fragment-shader.glsl');

	const program = await compile(gl, vertexShader, fragmentShader);

	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	gl.clear(gl.COLOR_BUFFER_BIT);

	gl.drawArrays(gl.POINTS, 0, 1);
}

main();
