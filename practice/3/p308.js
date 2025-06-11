function hex2rgb(str) {
  const cleanedStr = str.replace('#', '');
  const hexParts = [];

  for (let i = 0; i < cleanedStr.length; i +=2){
    const part = cleanedStr.slice(i, i + 2);
    hexParts.push(part);
  }

  const rgbParts = hexParts.map(( part) => parseInt(part, 16), {});

  return {
    r: rgbParts[0],
    g: rgbParts[1],
    b: rgbParts[2],
  }
  
}

hex2rgb('#001122');