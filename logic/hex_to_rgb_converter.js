function get_decimal(hex) {

    let color;

    // Check if the hex code starts with '#', deal with it accordingly
    if (hex.charAt(0) === '#' && hex.length == 7) color = hex.slice(1);
    else if (hex.length == 6) color = hex;
    else return "error 1";

    let red = color.substring(0, 2);
    let red_number = hex_pair_value(red);

    let green = color.substring(2, 4);
    let green_number = hex_pair_value(green);

    let blue = color.substring(4, 6);
    let blue_number = hex_pair_value(blue);

    return [red_number, green_number, blue_number];

}

function hex_pair_value(number) {

    let small_digit = number.charAt(1);
    let big_digit = number.charAt(0);

    let small = get_decimal_value(small_digit);
    let big = get_decimal_value(big_digit);

    return big * 16 + small;

}

function get_decimal_value(number) {
    switch (number) {
        case '0':
            return 0;
        case '1':
            return 1;
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        case 'A':
        case 'a':
            return 10;
        case 'B':
        case 'b':
            return 11;
        case 'C':
        case 'c':
            return 12;
        case 'D':
        case 'd':
            return 13;
        case 'E':
        case 'e':
            return 14;
        case 'F':
        case 'f':
            return 15;
    }
}

module.exports = get_decimal;