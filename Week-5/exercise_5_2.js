function isVowel(char){
    return 'aeiou'.includes(char);
}

function countVowel(str){
    const vowelMap = new Map();
    for(let chr of str){

        //converting into lower case
        chr = chr.toLowerCase();

        //checking for vowel
        if(isVowel(chr)){
            if(vowelMap.has(chr)){
                vowelMap.set(chr, vowelMap.get(chr) + 1);
            }else{
                vowelMap.set(chr,1);
            }
        }
    }

    return vowelMap;
}

const text = "A brown fox jump into the jungle";
const vowelMap = countVowel(text);
console.log(vowelMap);