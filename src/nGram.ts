const nGram = (text: string, separator: string = ' ') => {
  const normalizedText = text.replace(/[.,!?:]/gi, '');

  const list: string[] = normalizedText
    .split(separator)
    .map(word => word.trim())
    .filter(Boolean);

  return list.reduce((out: string[], _: any, index: number) => {
    const currentInteration = list.slice(index);

    const newValues = currentInteration.map((_1, interationIndex) =>
      currentInteration.slice(0, interationIndex + 1).join(' ')
    );

    return [...out, ...newValues];
  }, []);
};

export default nGram;
