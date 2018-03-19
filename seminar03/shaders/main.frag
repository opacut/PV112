#version 330

uniform vec3 eye_position;

uniform vec4 light_position;
uniform vec3 light_ambient_color;
uniform vec3 light_diffuse_color;
uniform vec3 light_specular_color;

uniform vec3 material_ambient_color;
uniform vec3 material_diffuse_color;
uniform vec3 material_specular_color;
uniform float material_shininess;

in vec3 vertex_position_ws;
in vec3 vertex_normal_ws;

out vec4 final_color;

void main() {
    //vec4 color = vec4(0.0f,0.0f,0.0f,1.0f);
    // TASK 1:
    // Start with visualization of 'Lambert's cosine law'. Fragments color should be brighter
    // if the angle is smaller.
    // Hint 1: use dot() function for the angle
    // Hint 2: use max() or clamp() function to keep the value between 0.0 and 1.0
    // Hint 3: use .w component of light_position to differentiate point and directional light
    //         (relevant for (L)ight vector)

    vec3 N = normalize(vertex_normal_ws);
    vec3 L = normalize(light_position.xyz);
    float Intensity = max(0.0, dot(N,L));

    //vec3 _L = normalize(light_position.xyz - vertex_position_ws);
    //vec4 Idiff = light_diffuse_color * max(dot(N, L), 0.0);
    //Idiff = clamp(Idiff, 0.0, 1.0);
    //final_color = Idiff, 0.0;

    // TASK 2:
    // Calculate the ambient part of the light

    vec3 ambient = light_ambient_color * material_ambient_color;
    //color.xyz = ambient;

    // TASK 3:
    // Calculate the diffuse part of the light

    vec3 diffuse = Intensity * light_diffuse_color * material_diffuse_color;

    // TASK 4:
    // Calculate the specular part of the light
    // Hint 1: You have to add (H)alf vector
    vec3 E = normalize(eye_position);
    vec3 H = normalize(E+L);
    float NdotH = max(dot(N,H), 0.0);

    float specular_factor = pow(NdotH, material_shininess);
    vec3 specular = specular_factor*light_specular_color*material_specular_color;

    //vec3 H = normalize(max(0.0, dot(eye_position, light_position)));
    //vec3 specular = ;

    // TASK 5:
    // Sum all the phong components into final color value

    //vec3 color = ambient + diffuse + specular;

    // TASK 6:
    // Add ANY attenuation, for example Inverse Square Law
    // Hint: Do not apply any attenuation for Directional Light! Why?

    float dist = distance(vertex_position_ws, light_position.xyz);
    float attenuation = 1.0/dist*dist;

    vec3 color = ambient + diffuse*attenuation + specular;

    final_color = vec4(color, 1.0);//*Intensity;//vec4(0.0, 0.0, 1.0, 1.0)*Intensity;
}
