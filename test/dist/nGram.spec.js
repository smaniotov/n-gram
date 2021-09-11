"use strict";
exports.__esModule = true;
var nGram_1 = require("../src/nGram");
describe('nGram', function () {
    it.each([
        ['Showmethecode.', ['Showmethecode'], ' '],
        ['Show methecode.', ['Show', 'Show methecode', 'methecode'], ' '],
        [
            'Show me the code.',
            [
                'Show',
                'Show me',
                'Show me the',
                'Show me the code',
                'me',
                'me the',
                'me the code',
                'the',
                'the code',
                'code'
            ],
            ' '
        ],
        ['Cys-Gly', ['Cys', 'Cys Gly', 'Gly'], '-']
    ])('should convert the text "%s" into "%o"', function (text, expected, separator) {
        var result = nGram_1["default"](text, separator);
        expect(result).toMatchObject(expected);
    });
});
