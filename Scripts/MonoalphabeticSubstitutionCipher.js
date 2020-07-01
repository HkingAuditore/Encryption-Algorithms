/*************单表置换密码************/

// 生成密码本
function GenerateKeyArray(key) {
    var key = new String(key).toUpperCase().split("");
    var keyArray = new Array();
    for (let i = 0; i < key.length; i++) {
        if (jQuery.inArray(key[i], keyArray) == -1) {
            keyArray.push(key[i]);
        }
    }
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
    var sourceString = new String(source);

    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.toUpperCase().split("");

    // 生成密码本
    var keyArray = GenerateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        if (!/[A-Za-z]+/.test(value)) {
            result.push(value);
        } else {
            offset = value.toUpperCase() === value ? 0 : 6;
            result.push(keyArray[value.charCodeAt() - 'A'.charCodeAt() - offset]);
        }
        // 生成密码串
    })
    return result.join("");
}

// 解密
function MonoDecode(source, key) {
    var sourceString = new String(source);

    // 字符串转数组
    var result = new Array();
    var sourceArray = sourceString.toUpperCase().split("");

    // 生成密码本
    var keyArray = GenerateKeyArray(key);

    // 遍历字符
    sourceArray.forEach((value, index, array) => {
        if (!/[A-Za-z]+/.test(value)) {
            result.push(value);
        } else {
            // 生成解密串
            targetChar = jQuery.inArray(value, keyArray);
            if (result != -1) {
                offset = targetChar > 25 ? 6 : 0;
                result.push(String.fromCharCode(targetChar + 'A'.charCodeAt() + offset));
            }
        }
    })
    return result.join("");
}

/////////////////////////////////////////////////////////