#version 330

in vec3 vertex_position_ws;
in vec3 vertex_normal_ws;
in vec2 vertex_texture_coordinate;

out vec4 final_color;

void main() {
    const vec3 red = vec3(1.0, 0.3, 0.0);
    const vec3 white = vec3(1.0, 1.0, 1.0);

    // TASK 1: Create red-white stripes. Start with a simple gradient, then
    //         repeat it. Try a different mixing function for better results
    //vec2 repeat = vec2(4.0,8.0);
    //vec3 tex_color = mod(floor(vertex_texture_coordinate.t * repeat.t), 2) == 0 ? white : red;
    //vec3 tex_color = (mod(floor(vertex_texture_coordinate.t * repeat.t), 2) == 0)&&(mod(floor(vertex_texture_coordinate.r * repeat.r), 2) == 0) ? white : red;
    // TASK 2: Combine vertical and horizontal stripes of different sizes to
    //         create a grid resembling a brick wall.
    //vec3 tex_color = ((mod(floor(vertex_texture_coordinate.t * repeat.t), 2) == 0)&&(mod(floor(vertex_texture_coordinate.r * repeat.r), 2) == 0))||
    //        ((mod(floor(vertex_texture_coordinate.t * repeat.t), 2) != 0)&&(mod(floor(vertex_texture_coordinate.r * repeat.r), 2) != 0)) ? white : red;
    // TASK 3: Offset every other row a bit to create a better brick wall.
    //vec2 offset = vec2(0.5,0.0)*mod(floor(vertex_texture_coordinate.t * repeat.t), 2);
    //vec2 brick_coord = fract(vertex_texture_coordinate * repeat + offset);
    //vec2 brick = smoothstep(0.1, 0.15, brick_coord) - smoothstep(0.95, 1.0, brick_coord);
    //vec3 tex_color = mix(white, red, brick.s * brick.t);
    // Bricks
    // // Number of bricks per row and column
    // vec2 repeat = vec2(4.0, 8.0);
    // // Offsetting every other row by half a brick
    // vec2 offset = vec2(0.5, 0.0) * mod(floor(vertex_texture_coordinate.t * repeat.t), 2);
    // // Coordinates inside the currently drawn brick
    // vec2 brick_coord = fract(vertex_texture_coordinate * repeat + offset);
    // // Deciding whether this fragment represents a brick or the mortar
    // vec2 brick = smoothstep(0.1, 0.15, brick_coord) - smoothstep(0.95, 1.0, brick_coord);
    // // Combining vertical and horisontal stripes
    // vec3 tex_color = mix(white, red, brick.s * brick.t);

    // TASK 4: Comment out the bricks. Create a red circle in the center of
    //         the cube (so that it looks a bit like the flag of Japan).
    //vec2 repeat = vec2(5.0);
    //vec2 offset = vec2(0.5,0.0)*floor(vertex_texture_coordinate.t*repeat.t);
    //vec2 granko_coord = fract(vertex_texture_coordinate*repeat+offset);
    //float granko = smoothstep(0.28,0.3,distance(granko_coord,vec2(0.5)));
    //vec3 tex_color = mix(red,white,granko);
    // TASK 5: Repeat the circles to create a polka-dot pattern. Then draw a
    //         teapot instead of the cube.
    //vec3 tex_color = white;

    // "Granko"
    // Number of dots per row and column
    vec2 repeat = vec2(5.0);
    // Offsetting every other row by half a dot
    vec2 offset = vec2(0.5, 0.0) * floor(vertex_texture_coordinate.t * repeat.t);
    // Coordinates inside the currently drawn dot
    vec2 granko_coord = fract(vertex_texture_coordinate * repeat + offset);
    // Deciding whether this fragment is inside the dot or outside
    float granko = smoothstep(0.28, 0.3, distance(granko_coord, vec2(0.5)));
    // Dot is red, outside is white
    vec3 tex_color = mix(red, white, granko);
    //vec3 tex_color = white;
    //if(distance(vertex_texture_coordinate, vec2(0.5))<0.3){
    //    tex_color = red;
    //}
    //float granko = smoothstep(0.28, 0.3, distance(vertex_texture_coordinate, vec2(0.5)));
    //vec3 tex_color = mix(red, white, granko);

    final_color = vec4(tex_color, 1.0);
}
