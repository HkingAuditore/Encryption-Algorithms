/*************单表置换密码************/

// 生成密码本
function generateKeyArray(key) {
    var keyArray = new String(key).split("");
    for (let index = 'A'.charCodeAt(); index <= 'Z'.charCodeAt(); index++) {
        if (jQuery.inArray(String.fromCharCode(index), keyArray) == -1) {
            keyArray.push(String.fromCharCode(index));
        }
    }
    return keyArray;
}

/////////////////////////////////////////////////////////

// 加密
function MonoEncode(source, key) {
    var sourceString = new String(source).toUpperCase();

    // 字符串转数组
    var target = new Array();
    var sourceArray = sourceString.split("");

    // 生成密码本
    var keyArray = generateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        // 生成密码串
        target.push(keyArray[value.charCodeAt() - 'A'.charCodeAt()]);
    })
    return target.join("");
}



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// 解密
function MonoDecode(source, key) {
    var sourceString = new String(source).toUpperCase();

    // 字符串转数组
    var target = new Array();
    var sourceArray = sourceString.split("");

    // 生成密码本
    var keyArray = generateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        // 生成解密串
        result = jQuery.inArray(value, keyArray);
        if (result != -1)
            target.push(String.fromCharCode(result + 'A'.charCodeAt()));
    })
    return target.join("");
}


/////////////////////////////////////////////////////////