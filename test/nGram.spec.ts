import nGram from '../src/nGram';

describe('nGram', () => {
  it.each([
    ['Showmethecode.', ['Showmethecode'], ' '],
    ['Show methecode.', ['Show','Show methecode', 'methecode'], ' '],
    ['Show    methecode.', ['Show','Show methecode', 'methecode'], ' '],
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
    [
      'Show   me   the    code.',
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
  ])(
    'should convert the text "%s" into "%o"',
    (text: any, expected: any, separator) => {
      const result = nGram(text, separator);

      expect(result).toMatchObject(expected);
    }
  );
});
