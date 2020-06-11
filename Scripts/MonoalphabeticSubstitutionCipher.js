/*************单表置换密码************/

// 生成密码本
function generateKeyArray(key) {
    var keyArray = new String(key).toUpperCase().split("");
    for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
        if (jQuery.inArray(String.fromCharCode(i), keyArray) == -1) {
            keyArray.push(String.fromCharCode(i));
        }
    }
    return keyArray;
}


/////////////////////////////////////////////////////////

// 加密
function MonoEncode(source, key) {
    var sourceString = new String(source).toUpperCase();

    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");

    // 生成密码本
    var keyArray = generateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        // 生成密码串
        result.push(keyArray[value.charCodeAt() - 'A'.charCodeAt()]);
    })
    return result.join("");
}

// 解密
function MonoDecode(source, key) {
    var sourceString = new String(source).toUpperCase();

    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.split("");

    // 生成密码本
    var keyArray = generateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        // 生成解密串
        targetChar = jQuery.inArray(value, keyArray);
        if (result != -1)
            result.push(String.fromCharCode(targetChar + 'A'.charCodeAt()));
    })
    return result.join("");
}

/////////////////////////////////////////////////////////