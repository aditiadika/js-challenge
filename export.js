function outer() { 
    function lower(input) {
        return input.toLowerCase();
    }
  
    function upper(input) {
        return input.toUpperCase();
    }
  
    function reverseWord(input) {
        return input.split('').reverse().join('');
    }
  
    function count(input){
        return input.split('').length;
    }

    function countWord(input){
        return input.length;
    }
  
    function slug(input) {
        let regex = /([^a-zA-Z0-9\s])+/g;
        let result = input.replace(regex, "").toLowerCase().split(' ').filter(word => word.length > 0).join('-');

        return result;
    }

    function randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }
  
    return {
        lower: lower,
        upper: upper,
        reverseWord: reverseWord,
        count: count,
        countWord: countWord,
        slug: slug,
        randomString: randomString
    };
}

module.exports = outer();