function get_hex(rgb) {

    let answer = "#";

    for (let color in rgb) {

        let small = rgb[color] % 16;
        let big = Math.floor(rgb[color] / 16);

        answer = answer + get_hex_value(big);
        answer = answer + get_hex_value(small);

    }

    function get_hex_value(number) {
        if(number == 10) return 'A';
        else if(number == 11) return 'B';
        else if(number == 12) return 'C';
        else if(number == 13) return 'D';
        else if(number == 14) return 'E';
        else if(number == 15) return 'F';
        else return number.toString();
    }

    return answer;
}