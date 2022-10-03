
function duplicateCount(text){
    let lowertext = text.toLowerCase();
    let map = {}
    for (let i = 0; i < lowertext.length; i++) {
        if (map[lowertext[i]] != null) {
            map[lowertext[i]] += 1
        }
        else {
            map[lowertext[i]] = 1
        }
    }
    return map
}






console.log(duplicateCount("aDDEGFSassd1124"));