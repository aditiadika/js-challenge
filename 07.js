// 7 Class

let result1 = 'MAKAN';
let result2 = 'malam';

let result4 = 'kasur';
let result7 = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
let result8 = 'lorem ipsum';
let result9 = 'lorem ipsum';


class Str {

    static lowerCase(input) {
        return input.toLowerCase();
    }

    static upperCase(input) {
        return input.toUpperCase();
    }

    static reverseWord(input) {
        return input.split('').reverse().join('');
    }

    static count(input){
        return input.split('').length;
    }

    static countWord(input){
        return input.length;
    }

    static slug(input) {
        let regex = /([^a-zA-Z0-9\s])+/g;
        let result = input.replace(regex, "").toLowerCase().split(' ').filter(word => word.length > 0).join('-');

        return result;
    }
}

console.log("1- MAKAN - to lower case: "+Str.lowerCase(result1));
console.log("2- malam - to upper case: "+Str.upperCase(result2));
console.log("4- kasur - reverse to: "+Str.reverseWord(result4));
console.log("7- JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018? - slug: "+Str.slug(result7));
console.log("8- lorem ipsum - count to: "+Str.count(result8));
console.log("9- lorem ipsum - count word to: "+Str.countWord(result9));