precision mediump float;
uniform vec4 color;

void main() {
    float d = distance(gl_PointCoord, vec2(0.5, 0.5));

    if (d < 0.5)
    {
        gl_FragColor = color;
    } else
    {
        discard;
    }
}
