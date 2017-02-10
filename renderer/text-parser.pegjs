{
  let self = this;
  let ctx = document.createElement('canvas').getContext('2d');
  function getFont() {
    return self.font;
  }
  function getMaxWidth() {
    return self.maxWidth;
  }
}

PARSER = tokens:TOKEN* {
  let currentText = "";
  ctx.font = getFont();
  let maxWidth = getMaxWidth();
  let lines = [];
  for (let i = 0; i < tokens.length; i++) {
    let { type, value } = tokens[i];
    switch(type) {
      case 'w':
        currentText += value;
        break;
      case 'o':
        let { width } = ctx.measureText(currentText + value);
        if (width > maxWidth) {
          lines.push(currentText);
          currentText = value;
        } else {
          currentText += value;
        }
        break;
      case 'l':
        lines.push(currentText);
        currentText = "";
        break;
    }
  }
  lines.push(currentText);
  return lines;
}

TOKEN = (WHITESPACE / LINEBREAK / OTHER)

WHITESPACE = [\t ]+ {
  return { type: 'w', value: text() };
}

LINEBREAK = ([\r\n] / [\n] / [\r])+ {
  return { type: 'l', value: text() };
}

OTHER = [^\t \n\r]+ {
 return { type: 'o', value: text() };
}