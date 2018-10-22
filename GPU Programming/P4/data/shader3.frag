#define PROCESSING_TEXTURE_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform sampler2D texture;


void main() {
  vec4 diffuse_color = texture2D(texture, vertTexCoord.st) * vertColor;
  gl_FragColor = vec4(diffuse_color.rgb, 1.0);
}


