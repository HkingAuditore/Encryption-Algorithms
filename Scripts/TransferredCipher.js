/*************转换加密法************/

// 转换加密
function TransferredEncode(source, keyCount) {
    var sourceString = new String(source);

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
function TransferredDecode(source, keyCount) {
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