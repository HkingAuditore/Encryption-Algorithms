/*************维吉尼亚密码***************/

/////////////////////////////////////////////////////////

// 加密
function VigenereEncode(source, key) {
    var sourceString = String(source);
    var keyString = String(key).toUpperCase();
    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");
    sourceArray.forEach(function(value, index, array) {
        if (!/[A-Za-z]+/.test(value)) {
            result.push(value);
        } else {
            var curValue = value.charCodeAt();
            var curKeyValue = keyString[index % keyString.length].charCodeAt();
            result.push(GetEncodeTargetChar(curValue, curKeyValue));
        }
    })
    return result.join("");
}

// 输入两个字符序列号，输出加密目标字符
function GetEncodeTargetChar(source, key) {
    indicator = source >= 'a'.charCodeAt() ? 'a'.charCodeAt() : 'A'.charCodeAt();
    key = source >= 'a'.charCodeAt() ? key + 32 : key;
    return String.fromCharCode(indicator + (source + key - 2 * indicator) % 26);
}

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

// 解密
function VigenereDecode(source, key) {
    var sourceString = String(source);
    var keyString = String(key).toUpperCase();
    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");
    sourceArray.forEach(function(value, index, array) {
        if (!/[A-Za-z]+/.test(value)) {
            result.push(value);
        } else {
            var curValue = value.charCodeAt();
            var curKeyValue = keyString[index % keyString.length].charCodeAt();
            result.push(GetDecodeTargetChar(curValue, curKeyValue));
        }
    })
    return result.join("");
}

// 输入两个字符序列号，输出解密目标字符
function GetDecodeTargetChar(source, key) {
    indicator = source >= 'a'.charCodeAt() ? 'a'.charCodeAt() : 'A'.charCodeAt();
    key = source >= 'a'.charCodeAt() ? key + 32 : key;
    partition = source < key ? 1 : 0;
    return String.fromCharCode(indicator + 26 * partition + source - key);
}

/////////////////////////////////////////////////////////