precision mediump float;

uniform sampler2D uTexture;
uniform vec3 uColor;
//varying float vRandom;
varying vec2 vUv;

varying float vElevation;

void main (){

    vec4 textureColor = texture2D(uTexture, vUv );
    textureColor.rgb *= vElevation * 3.0 + 1.0;
    gl_FragColor = textureColor;
}