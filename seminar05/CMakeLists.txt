# Add test executable
add_executable(seminar05 main.cpp Application.cpp Application.hpp)

add_dependencies(seminar05 glfw framework)

target_link_libraries(seminar05 ${GLFW_LIBRARIES} ${GLAD_LIBRARIES} framework)
target_include_directories(seminar05
	PRIVATE ${GLFW_INCLUDE_DIR}
	PRIVATE ${GLAD_INCLUDE_DIR}
	PRIVATE ${SINGLE_HEADER_LIBS_INCLUDE_DIR}
	PRIVATE ${FRAMEWORK_INCLUDE_DIR}
)

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/shaders/main.vert" "${CMAKE_CURRENT_BINARY_DIR}/shaders/main.vert" COPYONLY)
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/shaders/main.frag" "${CMAKE_CURRENT_BINARY_DIR}/shaders/main.frag" COPYONLY)
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/shaders/postprocess.vert" "${CMAKE_CURRENT_BINARY_DIR}/shaders/postprocess.vert" COPYONLY)
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/shaders/postprocess.frag" "${CMAKE_CURRENT_BINARY_DIR}/shaders/postprocess.frag" COPYONLY)
