function drawHTML() {
  // casedown, caseup, caps, shiftcaps. Cледующие 4 - то же самое, но на русском
  const numObj = {
    Backquote: ['&#x60;', '~', '&#x60;', '~', 'ё', 'Ё', 'Ё', 'ё'],
    Digit1: ['1', '!', '1', '!', '1', '!', '1', '!'],
    Digit2: ['2', '@', '2', '@', '2', '"', '2', '"'],
    Digit3: ['3', '#', '3', '#', '3', '№', '3', '№'],
    Digit4: ['4', '$', '4', '$', '4', ';', '4', ';'],
    Digit5: ['5', '%', '5', '%', '5', '%', '5', '%'],
    Digit6: ['6', '^', '6', '^', '6', ':', '6', ':'],
    Digit7: ['7', '&', '7', '&', '7', '?', '7', '?'],
    Digit8: ['8', '*', '8', '*', '8', '*', '8', '*'],
    Digit9: ['9', '&lpar;', '9', '&lpar;', '9', '&lpar;', '9', '&lpar;'],
    Digit0: ['0', '&rpar;', '0', '&rpar;', '0', '&rpar;', '0', '&rpar;'],
    Minus: ['-', '_', '-', '_', '-', '_', '-', '_'],
    Equal: ['=', '+', '=', '+', '=', '+', '=', '+'],
    Backspace: ['Back', 'Back', 'Back', 'Back', '&larr;', '&larr;', '&larr;', '&larr;']
  };
  const tabObj = {
    Tab: ['Tab', 'Tab', 'Tab', 'Tab', 'Таб', 'Таб', 'Таб', 'Таб'],
    KeyQ: ['q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'],
    KeyW: ['w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'],
    KeyE: ['e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'],
    KeyR: ['r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'],
    KeyT: ['t', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'],
    KeyY: ['y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'],
    KeyU: ['u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'],
    KeyI: ['i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'],
    KeyO: ['o', 'O', 'O', 'o', 'щ', 'Щ', 'Щ', 'щ'],
    KeyP: ['p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'],
    BracketLeft: ['&lbrack;', '&lcub;', '&lbrack;', '&lcub;', 'х', 'Х', 'Х', 'х'],
    BracketRight: ['&rbrack;', '&rcub;', '&rbrack;', '&rcub;', 'ъ', 'Ъ', 'Ъ', 'ъ'],
    Backslash: ['\\', '|', '\\', '|', '\\', '/', '\\', '/'],
    Delete: ['Del', 'Del', 'Del', 'Del', 'Удал', 'Удал', 'Удал', 'Удал']
  };
  const capsObj = {
    CapsKey: ['Caps', 'Caps', 'Caps', 'Caps', 'Кричать', 'Кричать', 'Кричать', 'Кричать'],
    KeyA: ['a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'],
    KeyS: ['s', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'],
    KeyD: ['d', 'D', 'D', 'd', 'в', 'В', 'В', 'в'],
    KeyF: ['f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'],
    KeyG: ['g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'],
    KeyH: ['h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'],
    KeyJ: ['j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'],
    KeyK: ['k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'],
    KeyL: ['l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'],
    Semicolon: [';', ':', ';', ';', 'ж', 'Ж', 'Ж', 'ж'],
    Quote: ["'", '"', "'", '"', 'э', 'Э', 'Э', 'э'],
    Enter: ['Enter', 'Enter', 'Enter', 'Enter', 'Ввод', 'Ввод', 'Ввод', 'Ввод']
  };
  const shiftObj = {
    shiftKey: ['Shift', 'Shift', 'Shift', 'Shift', 'Большие', 'Большие', 'Большие', 'Большие'],
    KeyZ: ['z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'],
    KeyX: ['x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'],
    KeyC: ['c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'],
    KeyV: ['v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'],
    KeyB: ['b', 'B', 'B', 'b', 'и', 'И', 'И', 'и'],
    KeyN: ['n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'],
    KeyM: ['m', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'],
    Comma: [',', '&lt', ',', '&lt', 'б', 'Б', 'Б', 'б'],
    Period: ['.', '&gt', '.', '&gt', 'ю', 'Ю', 'Ю', 'ю'],
    Slash: ['/', '?', '/', '?', '.', ',', '.', ','],
    ArrowUp: ['&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;'],
    rshiftKey: ['Shift', 'Shift', 'Shift', 'Shift', 'Большие', 'Большие', 'Большие', 'Большие']
  };
  const ctrlObj = {
    ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
    MetaLeft: ['Win', 'Win', 'Win', 'Win', 'Окна', 'Окна', 'Окна', 'Окна'],
    AltLeft: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
    Space: ['Space', 'Space', 'Space', 'Space', 'Пробел', 'Пробел', 'Пробел', 'Пробел'],
    AltRight: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
    ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
    ArrowLeft: ['&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;'],
    ArrowDown: ['&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;'],
    ArrowRight: ['&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;'],
    fnKey: ['EN', 'EN', 'EN', 'EN', 'RU', 'RU', 'RU', 'RU']
  };

  document.body.innerHTML = `<div class="container">
    <h1 class="header">RS Virtual Keyboard</h1>
    <textarea class="keyboard-textarea" id="textarea" cols="50" rows="8"></textarea>
    <div class="keyboard-keys">
        <div class="keyboard-row row numkeys"></div>
        <div class="keyboard-row row tabkeys"></div>
        <div class="keyboard-row row capskeys"></div>
        <div class="keyboard-row row shiftkeys"></div>
        <div class="keyboard-row row ctrlkeys"></div>
    </div>
    <p class="keyboard-notice">Переключение языка - ShiftLeft + AltLeft, либо кнопка с указанием языка.</p>
    <p class="keyboard-notice">Создано в ОС Windows.</p>
`; // Body

  const NUM_INSERT = document.querySelector('.numkeys');
  const TAB_INSERT = document.querySelector('.tabkeys');
  const CAPS_INSERT = document.querySelector('.capskeys');
  const SHIFT_INSERT = document.querySelector('.shiftkeys');
  const CTRL_INSERT = document.querySelector('.ctrlkeys');

  for (let i = 0; i < Object.keys(numObj).length; i += 1) {
    NUM_INSERT.innerHTML += `<div class="keyboard-key ${Object.keys(numObj)[i]}">
<span class="rus hidden">
    <span class="caseDown hidden">${numObj[Object.keys(numObj)[i]][4]}</span>
    <span class="caseUp hidden">${numObj[Object.keys(numObj)[i]][5]}</span>
    <span class="caps hidden">${numObj[Object.keys(numObj)[i]][6]}</span>
    <span class="shiftCaps hidden">${numObj[Object.keys(numObj)[i]][7]}</span>
</span>
<span class="eng">
    <span class="caseDown">${numObj[Object.keys(numObj)[i]][0]}</span>
    <span class="caseUp hidden">${numObj[Object.keys(numObj)[i]][1]}</span>
    <span class="caps hidden">${numObj[Object.keys(numObj)[i]][2]}</span>
    <span class="shiftCaps hidden">${numObj[Object.keys(numObj)[i]][3]}</span>
</span>
</div>`;
  } // Num row

  for (let i = 0; i < Object.keys(tabObj).length; i += 1) {
    TAB_INSERT.innerHTML += `<div class="keyboard-key ${Object.keys(tabObj)[i]}">
<span class="rus hidden">
    <span class="caseDown hidden">${tabObj[Object.keys(tabObj)[i]][4]}</span>
    <span class="caseUp hidden">${tabObj[Object.keys(tabObj)[i]][5]}</span>
    <span class="caps hidden">${tabObj[Object.keys(tabObj)[i]][6]}</span>
    <span class="shiftCaps hidden">${tabObj[Object.keys(tabObj)[i]][7]}</span>
</span>
<span class="eng">
    <span class="caseDown">${tabObj[Object.keys(tabObj)[i]][0]}</span>
    <span class="caseUp hidden">${tabObj[Object.keys(tabObj)[i]][1]}</span>
    <span class="caps hidden">${tabObj[Object.keys(tabObj)[i]][2]}</span>
    <span class="shiftCaps hidden">${tabObj[Object.keys(tabObj)[i]][3]}</span>
</span>
</div>`;
  } // Tab row

  for (let i = 0; i < Object.keys(capsObj).length; i += 1) {
    CAPS_INSERT.innerHTML += `<div class="keyboard-key ${Object.keys(capsObj)[i]}">
<span class="rus hidden">
    <span class="caseDown hidden">${capsObj[Object.keys(capsObj)[i]][4]}</span>
    <span class="caseUp hidden">${capsObj[Object.keys(capsObj)[i]][5]}</span>
    <span class="caps hidden">${capsObj[Object.keys(capsObj)[i]][6]}</span>
    <span class="shiftCaps hidden">${capsObj[Object.keys(capsObj)[i]][7]}</span>
</span>
<span class="eng">
    <span class="caseDown">${capsObj[Object.keys(capsObj)[i]][0]}</span>
    <span class="caseUp hidden">${capsObj[Object.keys(capsObj)[i]][1]}</span>
    <span class="caps hidden">${capsObj[Object.keys(capsObj)[i]][2]}</span>
    <span class="shiftCaps hidden">${capsObj[Object.keys(capsObj)[i]][3]}</span>
</span>
</div>`;
  } // Caps row

  for (let i = 0; i < Object.keys(shiftObj).length; i += 1) {
    SHIFT_INSERT.innerHTML += `<div class="keyboard-key ${Object.keys(shiftObj)[i]}">
<span class="rus hidden">
    <span class="caseDown hidden">${shiftObj[Object.keys(shiftObj)[i]][4]}</span>
    <span class="caseUp hidden">${shiftObj[Object.keys(shiftObj)[i]][5]}</span>
    <span class="caps hidden">${shiftObj[Object.keys(shiftObj)[i]][6]}</span>
    <span class="shiftCaps hidden">${shiftObj[Object.keys(shiftObj)[i]][7]}</span>
</span>
<span class="eng">
    <span class="caseDown">${shiftObj[Object.keys(shiftObj)[i]][0]}</span>
    <span class="caseUp hidden">${shiftObj[Object.keys(shiftObj)[i]][1]}</span>
    <span class="caps hidden">${shiftObj[Object.keys(shiftObj)[i]][2]}</span>
    <span class="shiftCaps hidden">${shiftObj[Object.keys(shiftObj)[i]][3]}</span>
</span>
</div>`;
  } // Shift row

  for (let i = 0; i < Object.keys(ctrlObj).length; i += 1) {
    CTRL_INSERT.innerHTML += `<div class="keyboard-key ${Object.keys(ctrlObj)[i]}">
<span class="rus hidden">
    <span class="caseDown hidden">${ctrlObj[Object.keys(ctrlObj)[i]][4]}</span>
    <span class="caseUp hidden">${ctrlObj[Object.keys(ctrlObj)[i]][5]}</span>
    <span class="caps hidden">${ctrlObj[Object.keys(ctrlObj)[i]][6]}</span>
    <span class="shiftCaps hidden">${ctrlObj[Object.keys(ctrlObj)[i]][7]}</span>
</span>
<span class="eng">
    <span class="caseDown">${ctrlObj[Object.keys(ctrlObj)[i]][0]}</span>
    <span class="caseUp hidden">${ctrlObj[Object.keys(ctrlObj)[i]][1]}</span>
    <span class="caps hidden">${ctrlObj[Object.keys(ctrlObj)[i]][2]}</span>
    <span class="shiftCaps hidden">${ctrlObj[Object.keys(ctrlObj)[i]][3]}</span>
</span>
</div>`;
  } // Ctrl row
}
drawHTML();

const KEYBOARD = document.querySelectorAll('.keyboard-key');
const CASE_DOWN = document.querySelectorAll('.caseDown');
const CASE_UP = document.querySelectorAll('.caseUp');
const CAPS = document.querySelectorAll('.caps');
const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');

function pushLogic(pushStatus, key) {
  if (pushStatus) {
    KEYBOARD[key].classList.add('pushed');
  } else {
    KEYBOARD[key].classList.remove('pushed');
  }
} // pushStatus: true - кнопка нажата, false - кнопка отжата,
// key: номер кнопки из массива KEYBOARD

function caseToggle(caseName) {
  if (caseName === CASE_DOWN) {
    CASE_DOWN.forEach(element => {
      element.classList.remove('hidden');
    });
    CASE_UP.forEach(element => {
      element.classList.add('hidden');
    });
    CAPS.forEach(element => {
      element.classList.add('hidden');
    });
    SHIFT_CAPS.forEach(element => {
      element.classList.add('hidden');
    });
  }
  if (caseName === CASE_UP) {
    CASE_DOWN.forEach(element => {
      element.classList.add('hidden');
    });
    CASE_UP.forEach(element => {
      element.classList.remove('hidden');
    });
    CAPS.forEach(element => {
      element.classList.add('hidden');
    });
    SHIFT_CAPS.forEach(element => {
      element.classList.add('hidden');
    });
  }
  if (caseName === CAPS) {
    CASE_DOWN.forEach(element => {
      element.classList.add('hidden');
    });
    CASE_UP.forEach(element => {
      element.classList.add('hidden');
    });
    CAPS.forEach(element => {
      element.classList.remove('hidden');
    });
    SHIFT_CAPS.forEach(element => {
      element.classList.add('hidden');
    });
  }
  if (caseName === SHIFT_CAPS) {
    CASE_DOWN.forEach(element => {
      element.classList.add('hidden');
    });
    CASE_UP.forEach(element => {
      element.classList.add('hidden');
    });
    CAPS.forEach(element => {
      element.classList.add('hidden');
    });
    SHIFT_CAPS.forEach(element => {
      element.classList.remove('hidden');
    });
  }
} // передаем название кейса - снимается его хидден,
// с этого кейса. Добавляется хидден к остальным кейсам.

let isCapsLocked = false;
function turnOnCaps() {
  function capsLogic() {
    if (!isCapsLocked) {
      pushLogic(true, 29);
      caseToggle(CAPS);
      isCapsLocked = true;
    } else {
      pushLogic(false, 29);
      caseToggle(CASE_DOWN);
      isCapsLocked = false;
    }
  }
  KEYBOARD[29].addEventListener('click', () => {
    capsLogic();
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      capsLogic();
    }
  });
}
turnOnCaps();

function turnOnShift() {
  function behaviourDown() {
    if (isCapsLocked === false) {
      caseToggle(CASE_UP);
    } else {
      caseToggle(SHIFT_CAPS);
    }
  }

  function behaviourUp() {
    if (isCapsLocked === false) {
      caseToggle(CASE_DOWN);
    } else {
      caseToggle(CAPS);
    }
  }

  KEYBOARD[42].addEventListener('mousedown', () => {
    behaviourDown();
  });
  KEYBOARD[42].addEventListener('mouseup', () => {
    behaviourUp();
  });
  KEYBOARD[54].addEventListener('mousedown', () => {
    behaviourDown();
  });
  KEYBOARD[54].addEventListener('mouseup', () => {
    behaviourUp();
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft') {
      behaviourDown();
      pushLogic(true, 42);
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft') {
      behaviourUp();
      pushLogic(false, 42);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftRight') {
      behaviourDown();
      pushLogic(true, 54);
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftRight') {
      behaviourUp();
      pushLogic(false, 54);
    }
  });
}
turnOnShift();

const EN_LANG = document.querySelectorAll('.eng');
const RU_LANG = document.querySelectorAll('.rus');
const LANG_KEY = 'lang';

let currentLanguage = false;
function langToggle(langName) {
  if (langName === 'en') {
    localStorage.setItem(LANG_KEY, 'en');
    EN_LANG.forEach(element => {
      element.classList.remove('hidden');
    });
    RU_LANG.forEach(element => {
      element.classList.add('hidden');
    });
  }
  if (langName === 'ru') {
    localStorage.setItem(LANG_KEY, 'ru');
    EN_LANG.forEach(element => {
      element.classList.add('hidden');
    });
    RU_LANG.forEach(element => {
      element.classList.remove('hidden');
      caseToggle(CASE_DOWN);
      currentLanguage = true; // чтобы не кликать на кнопку дважды, если пердыдущее состояние ru
    });
  }
} // переключатель языка аналогичный переключателю кейсов,
// но с хранинием значения языка в localStorage

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang === 'ru') {
    langToggle('ru');
  } else {
    langToggle('en');
  }
}); // при загрузке страницы чекаем localStorage на язык

function switchLang() {
  function langLogic() {
    if (!currentLanguage) {
      langToggle('ru');
      currentLanguage = true;
    } else {
      langToggle('en');
      currentLanguage = false;
    }
  }
  KEYBOARD[64].addEventListener('mousedown', () => {
    langLogic();
  });

  document.addEventListener('keydown', event => {
    if (event.altKey && event.shiftKey) {
      langLogic();
    }
  });
}
switchLang();

function lightKeyboard() {
  KEYBOARD.forEach(key => {
    document.addEventListener('keydown', event => {
      event.preventDefault();
      if (event.code === key.classList[1]) {
        key.classList.add('pushed');
      }
    });
    document.addEventListener('keyup', event => {
      if (event.code !== 'CapsLock' && event.code === key.classList[1]) {
        key.classList.remove('pushed');
      }
    });
  });
}
lightKeyboard();

const TEXTAREA = document.querySelector('.keyboard-textarea');
function typeKeyboard() {
  KEYBOARD.forEach(key => {
    document.addEventListener('keydown', event => {
      event.preventDefault();
      TEXTAREA.focus();
      if (event.code === key.classList[1]) {
        if (event.code.slice(0, 3) === 'Key'
                    || event.code.slice(0, 3) === 'Dig'
                    || event.code.slice(0, 3) === 'Min'
                    || event.code.slice(0, 3) === 'Equ'
                    || event.code.slice(0, 3) === 'Bra'
                    || event.code === 'Backquote'
                    || event.code === 'Backslash'
                    || event.code === 'Semicolon'
                    || event.code === 'Quote'
                    || event.code === 'Comma'
                    || event.code === 'Period'
                    || event.code === 'Slash') {
          TEXTAREA.value += key.innerText;
        }
        if (event.code === 'Delete') {
          let currentValue = TEXTAREA.value;
          let selectionStart = TEXTAREA.selectionStart;
          let selectionEnd = TEXTAREA.selectionEnd;
          let newValue = currentValue
            .substring(0, selectionStart) + currentValue.substring(selectionEnd + 1);
          TEXTAREA.value = newValue;
          TEXTAREA.selectionStart = selectionStart;
          TEXTAREA.selectionEnd = selectionStart;
        }
        let currentPos = TEXTAREA.selectionStart;
        let newValue = null;
        if (event.code === 'Backspace') {
          if (currentPos > 0) {
            // Delete left symbol
            let prefix = TEXTAREA.value.substring(0, currentPos - 1);
            let suffix = TEXTAREA.value.substring(currentPos);
            newValue = prefix + suffix;
          }
        }
        if (newValue !== null) {
          // Update textarea and move to new position
          TEXTAREA.value = newValue;
          TEXTAREA.setSelectionRange(currentPos - 1, currentPos - 1);
          return false;
        }
        if (event.code === 'Tab') {
          TEXTAREA.value += '    ';
        }
        if (event.code === 'Enter') {
          const currentPosition = TEXTAREA.selectionStart;
          TEXTAREA.value = TEXTAREA.value.substring(0, currentPosition) + '\r' + TEXTAREA.value.substring(TEXTAREA.selectionEnd);
          TEXTAREA.setSelectionRange(currentPosition + 1, currentPosition + 1);
        }
        if (event.code === 'Space') {
          TEXTAREA.value += ' ';
        }
      }
      return null;
    });
  });
}
typeKeyboard();

function typeMouse() {
  for (let i = 0; i < KEYBOARD.length; i += 1) {
    KEYBOARD[i].addEventListener('mousedown', () => {
      let key = KEYBOARD[i];
      let keyCode = KEYBOARD[i].classList[1];
      if (keyCode.slice(0, 3) === 'Key'
                || keyCode.slice(0, 3) === 'Dig'
                || keyCode.slice(0, 3) === 'Min'
                || keyCode.slice(0, 3) === 'Equ'
                || keyCode.slice(0, 3) === 'Bra'
                || keyCode === 'Backquote'
                || keyCode === 'Backslash'
                || keyCode === 'Semicolon'
                || keyCode === 'Quote'
                || keyCode === 'Comma'
                || keyCode === 'Period'
                || keyCode === 'Slash') {
        TEXTAREA.value += key.innerText;
      }
      if (keyCode === 'Delete') {
        let currentValue = TEXTAREA.value;
        let selectionStart = TEXTAREA.selectionStart;
        let selectionEnd = TEXTAREA.selectionEnd;
        let newValue = currentValue
          .substring(0, selectionStart) + currentValue.substring(selectionEnd + 1);
        TEXTAREA.value = newValue;
        TEXTAREA.selectionStart = selectionStart;
        TEXTAREA.selectionEnd = selectionStart;
      }
      let currentPos = TEXTAREA.selectionStart;
      let newValue = null;
      if (keyCode === 'Backspace') {
        if (currentPos > 0) {
          // Delete left symbol
          let prefix = TEXTAREA.value.substring(0, currentPos - 1);
          let suffix = TEXTAREA.value.substring(currentPos);
          newValue = prefix + suffix;
        }
      }
      if (newValue !== null) {
        // Update textarea and move to new position
        TEXTAREA.value = newValue;
        TEXTAREA.setSelectionRange(currentPos - 1, currentPos - 1);
        return false;
      }
      if (keyCode === 'Tab') {
        TEXTAREA.value += '    ';
      }
      if (keyCode === 'Enter') {
        const currentPosition = TEXTAREA.selectionStart;
        TEXTAREA.value = TEXTAREA.value.substring(0, currentPosition) + '\r' + TEXTAREA.value.substring(TEXTAREA.selectionEnd);
        TEXTAREA.setSelectionRange(currentPosition + 1, currentPosition + 1);
      }
      if (keyCode === 'Space') {
        TEXTAREA.value += ' ';
      }
      return null;
    });
  }
}
typeMouse();

function moveCursor() {
  TEXTAREA.addEventListener('keydown', function move(event) {
    let keyCode = event.key;
    let currentPos = this.selectionStart;
    let newPos = null;
    if (keyCode === 'ArrowLeft') { // Left
      newPos = currentPos - 1;
    } else if (keyCode === 'ArrowUp') { // Up
      // To start of last string
      let currentLineStart = this.value.lastIndexOf('\n', currentPos - 1) + 1;
      let prevLineStart = this.value.lastIndexOf('\n', currentLineStart - 2) + 1;
      newPos = prevLineStart + Math
        .min(currentPos - currentLineStart, this.value.substr(prevLineStart).length);
    } else if (keyCode === 'ArrowRight') { // Right
      newPos = currentPos + 1;
    } else if (keyCode === 'ArrowDown') { // Down
      // To start of next string
      let currentLineStart = this.value.lastIndexOf('\n', currentPos - 1) + 1;
      let nextLineStart = this.value.indexOf('\n', currentPos);
      if (nextLineStart === -1) {
        newPos = this.value.length;
      } else {
        newPos = nextLineStart + Math
          .min(currentPos - currentLineStart, this.value.substr(nextLineStart).length);
      }
    }
    if (newPos !== null) {
      // To new position
      this.setSelectionRange(newPos, newPos);
      event.preventDefault();
      return false;
    }
    return null;
  });
}
moveCursor();

function moveCursorByClick() {
  for (let i = 0; i < KEYBOARD.length; i += 1) {
    KEYBOARD[i].addEventListener('mousedown', event => {
      let keyCode = KEYBOARD[i].classList[1];
      let currentPos = TEXTAREA.selectionStart;
      let newPos = null;
      if (keyCode === 'ArrowLeft') { // Left
        TEXTAREA.focus();
        newPos = currentPos - 1;
      } else if (keyCode === 'ArrowUp') { // Up
        // To start of last string
        TEXTAREA.focus();
        let currentLineStart = TEXTAREA.value.lastIndexOf('\n', currentPos - 1) + 1;
        let prevLineStart = TEXTAREA.value.lastIndexOf('\n', currentLineStart - 2) + 1;
        newPos = prevLineStart + Math
          .min(currentPos - currentLineStart, TEXTAREA.value.substr(prevLineStart).length);
      } else if (keyCode === 'ArrowRight') { // Right
        TEXTAREA.focus();
        newPos = currentPos + 1;
      } else if (keyCode === 'ArrowDown') { // Down
        // To start of next string
        TEXTAREA.focus();
        let currentLineStart = TEXTAREA.value.lastIndexOf('\n', currentPos - 1) + 1;
        let nextLineStart = TEXTAREA.value.indexOf('\n', currentPos);
        if (nextLineStart === -1) {
          newPos = TEXTAREA.value.length;
        } else {
          newPos = nextLineStart + Math
            .min(currentPos - currentLineStart, TEXTAREA.value.substr(nextLineStart).length);
        }
      }
      if (newPos !== null) {
        // To new position
        TEXTAREA.setSelectionRange(newPos, newPos);
        event.preventDefault();
        return false;
      }
      return null;
    });
  }
}
moveCursorByClick();
