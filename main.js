function btn_active() {
    var hex_number_arrey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    var hex_1 = hex_number_arrey[ Math.floor(Math.random()* 16)];
    var hex_2 = hex_number_arrey[ Math.floor(Math.random()* 16)];
    var hex_3 = hex_number_arrey[ Math.floor(Math.random()* 16)];
    var hex_4 = hex_number_arrey[ Math.floor(Math.random()* 16)];
    var hex_5 = hex_number_arrey[ Math.floor(Math.random()* 16)];
    var hex_6 = hex_number_arrey[ Math.floor(Math.random()* 16)];

    var hex_output_color = '#'+hex_1+hex_2+hex_3+hex_4+hex_5+hex_6;
    color_fun(hex_output_color);
    
    var hex_display = document.getElementById('p_tag');
    hex_display.innerHTML = "Background Color: " + hex_output_color;
}

function color_fun(color) {
    var background_color = document.querySelectorAll('*');
    var background_div = document.getElementById('btn_div');
    background_color[0].style.background = color;
    background_div.style.background = color;
}


