/*************维吉尼亚密码***************/

/////////////////////////////////////////////////////////

// 加密
function VigenereEncode(source, key) {
    var sourceString = new String(source).toUpperCase();
    var keyString = new String(key).toUpperCase();
    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");
    sourceArray.forEach(function(value, index, array) {
        var curValue = value.charCodeAt();
        var curKeyValue = key[index % keyString.length].charCodeAt();
        result.push(GetEncodeTrgetChar(curValue, curKeyValue));
    })
    return result.join("");
}

// 输入两个字符序列号，输出加密目标字符
function GetEncodeTrgetChar(source, key) {
    return String.fromCharCode('A'.charCodeAt() + (source + key) % 26);
}

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

// 解密
function VigenereDecode(source, key) {
    var sourceString = new String(source).toUpperCase();
    var keyString = new String(key).toUpperCase();
    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");
    sourceArray.forEach(function(value, index, array) {
        var curValue = value.charCodeAt();
        var curKeyValue = key[index % keyString.length].charCodeAt();
        result.push(GetDecodeTrgetChar(curValue, curKeyValue));
    })
    return result.join("");
}

// 输入两个字符序列号，输出解密目标字符
function GetDecodeTrgetChar(source, key) {
    var partition = source < key ? 1 : 0;
    return String.fromCharCode('A'.charCodeAt() + 26 * partition + source - key);
}

/////////////////////////////////////////////////////////