
//section: controls
let selectedColor = `rgba(194,128,255,1)`;
let normalColor = `rgba(155,154,255,1)`;
//title text
options.titleTextSize = 32;
options.titleTextColor = selectedColor;

options.controlTextSize = 26;
font('Puritan', './Puritan-Regular.otf');
options.controlFont = `${options.controlTextSize}px Puritan`;
options.controlTextColor = normalColor;
options.controlTextSelectedColor = selectedColor;

options.choiceTextSize = 40;
options.choiceFont = `${options.choiceTextSize}px Puritan`;
options.choiceTextColor = normalColor;
options.choiceTextSelectedColor = selectedColor;

options.checkbox = {
  unchecked: url('./checkbox-unchecked.png'),
  uncheckedActive: url('./checkbox-unchecked-active.png'),
  checked: url('./checkbox-checked.png'),
  checkedActive: url('./checkbox-checked-active.png'),
  textPadding: 4
};

options.button = {
  unselected: url('./button-unselected.png'),
  unselectedActive: url('./button-unselected-active.png'),
  selected: url('./button-selected.png'),
  selectedActive: url('./button-selected-active.png'),
};

options.slider = {
  capLeft: url('./slider-cap-left.png'),
  capRight: url('./slider-cap-right.png'),
  pill: url('./slider-pill.png'),
  pillActive: url('./slider-pill-active.png'),
  line: url('./slider-line.png')
};

options.choice = {
  choice: url('./choice.png'),
  active: url('./choice-active.png'),
  selected: url('./choice-selected.png'),
  margin: 30
};

let textareaFont = 'Puritan',
    textareaSpeakerFont = textareaFont,
    textareaFontSize = 20,
    speakerBoxFontSize = 20;
options.textarea = {
  texture: url('./textarea.png'),
  speakerBox: [10, 10, 380, 20],
  speakerBoxFontSize: speakerBoxFontSize,
  speakerBoxFont: `bold ${speakerBoxFontSize}px ${textareaSpeakerFont}`,
  textBox: [10, 46, 780, 150],
  textFontSize: textareaFontSize,
  textFont: `${textareaFontSize}px ${textareaFont}`,
  textLeading: 10,
  color: `black`
};

options.windowBackground = url('./window-background.png');