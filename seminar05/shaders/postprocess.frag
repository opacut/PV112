#version 330

uniform float app_time_s;
uniform sampler2D scene_texture;

in vec2 vertex_texture_coordinate;

out vec4 final_color;

void main() {
    // TASK 7: Make the scene wave.
    vec2 tex_coord = vertex_texture_coordinate;
    tex_coord.s += sin(4 * app_time_s + 40 * vertex_texture_coordinate.t) * 0.02;

    // TASK 6: Display the scene in grayscale.
    vec4 color = texture(scene_texture, tex_coord);

    vec3 color_weight = vec3(0.3,0.6,0.1);
    float grayscale = dot(color.rgb, color_weight);
    final_color = vec4(grayscale,grayscale,grayscale,1.0);
    //final_color = color;
}
