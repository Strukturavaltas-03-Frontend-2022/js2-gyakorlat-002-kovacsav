const numericConverter = (number) => {
  const bin = number.toString(2);
  const octa = number.toString(8);
  const hexa = number.toString(16);
  return { binary: bin, octal: octa, hexa: hexa };

  //console.log(hexa);
};

export default numericConverter;
