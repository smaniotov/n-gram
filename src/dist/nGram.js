"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var nGram = function (text, separator) {
    if (separator === void 0) { separator = ' '; }
    var normalizedText = text.replace(/[.,!?:]/gi, '');
    var list = normalizedText.split(separator);
    return list.reduce(function (out, _, index) {
        var currentInteration = list.slice(index);
        var newValues = currentInteration.map(function (_1, interationIndex) {
            return currentInteration.slice(0, interationIndex + 1).join(' ');
        });
        return __spreadArrays(out, newValues);
    }, []);
};
exports["default"] = nGram;
