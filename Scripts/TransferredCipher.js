/*************转换加密法************/

/***************************************** 
               读取行字符数
******************************************/

// 转换加密
function TransferredCountEncode(source, keyCount) {
    var sourceString = new String(source).replace(/\s/g, "");

    // 构建数组
    matrixRow = parseInt(sourceString.length / keyCount) + (sourceString.length % keyCount == 0 ? 0 : 1);
    var sourceMatrix = new Array(matrixRow);
    for (i = 0; i < matrixRow; i++) {
        sourceMatrix[i] = sourceString.substr(i * keyCount, keyCount).split("");
    }

    //输出加密结果
    var result = new Array();
    for (i = 0; i < keyCount; i++) {
        for (j = 0; j < matrixRow; j++) {
            if (sourceMatrix[j][i] != null)
                result.push(sourceMatrix[j][i]);
        }
    }

    return result.join("");
}

// 转换解密
function TransferredCountDecode(source, keyCount) {
    var sourceString = new String(source);

    // 构建数组
    matrixColumn = parseInt(sourceString.length / keyCount) + (sourceString.length % keyCount == 0 ? 0 : 1);
    matrixLongRow = sourceString.length % keyCount;

    var sourceMatrix = new Array(keyCount);
    for (i = 0; i < keyCount; i++) {
        if (i < matrixLongRow)
            sourceMatrix[i] = sourceString.substr(i * matrixColumn, matrixColumn).split("");
        else
            sourceMatrix[i] = sourceString.substr(
                (matrixLongRow * matrixColumn) + (i - matrixLongRow) * (matrixColumn - 1),
                matrixColumn - 1
            ).split("");
    }

    //输出加密结果
    var result = new Array();
    for (i = 0; i < matrixColumn; i++) {
        for (j = 0; j < keyCount; j++) {
            if (sourceMatrix[j][i] != null)
                result.push(sourceMatrix[j][i]);
        }
    }

    return result.join("");
}

/***************************************** 
               读取密钥字符串
******************************************/
// 转换加密
function TransferredKeyEncode(source, key) {
    var sourceString = new String(source);
    var keyString = new String(key);
    keyCount = keyString.length;

    // 构建数组
    matrixRow = parseInt(sourceString.length / keyCount) + (sourceString.length % keyCount == 0 ? 0 : 1);
    var sourceMatrix = new Array(matrixRow);
    for (i = 0; i < matrixRow; i++) {
        sourceMatrix[i] = sourceString.substr(i * keyCount, keyCount).split("");
    }

    //输出加密结果
    var result = new Array();
    var keyArray = keyString.split("");
    var keySort = keyArray.sort();

    for (i = 0; i < keyCount; i++) {
        for (j = 0; j < matrixRow; j++) {
            if (sourceMatrix[j][i] != null)
                result.push(sourceMatrix[j][keyArray.indexOf(keySort[i])]);
        }
    }

    return result.join("");
}

// 转换解密
function TransferredKeyDecode(source, key) {
    var sourceString = new String(source);
    var keyString = new String(key);
    keyCount = keyString.length;

    // 构建数组
    matrixColumn = parseInt(sourceString.length / keyCount) + (sourceString.length % keyCount == 0 ? 0 : 1);
    matrixLongRow = sourceString.length % keyCount;

    var sourceMatrix = new Array(keyCount);
    for (i = 0; i < keyCount; i++) {
        if (i < matrixLongRow)
            sourceMatrix[i] = sourceString.substr(i * matrixColumn, matrixColumn).split("");
        else
            sourceMatrix[i] = sourceString.substr(
                (matrixLongRow * matrixColumn) + (i - matrixLongRow) * (matrixColumn - 1),
                matrixColumn - 1
            ).split("");
    }

    //输出加密结果
    var result = new Array();
    var keyArray = keyString.split("");
    var keySort = keyArray.sort();

    for (i = 0; i < matrixColumn; i++) {
        for (j = 0; j < keyCount; j++) {
            if (sourceMatrix[j][i] != null)
                result.push(sourceMatrix[keyArray.indexOf(keySort[j])][i]);
        }
    }

    return result.join("");
}