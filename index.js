"use strict"

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
        Backspace: ['Back', 'Back', 'Back', 'Back', '&larr;', '&larr;', '&larr;', '&larr;'],
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
        Backslash: ['\\', '|', '\\', '|', '\\', '/', '\\', '/']
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
        ArrowLeft: ['&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;',],
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
`; // Body

    const NUM_INSERT = document.querySelector('.numkeys');
    const TAB_INSERT = document.querySelector('.tabkeys');
    const CAPS_INSERT = document.querySelector('.capskeys');
    const SHIFT_INSERT = document.querySelector('.shiftkeys');
    const CTRL_INSERT = document.querySelector('.ctrlkeys');

    for (let i = 0; i < Object.keys(numObj).length; i++) {
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
</div>`
    } // Num row

    for (let i = 0; i < Object.keys(tabObj).length; i++) {
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
</div>`
    } // Tab row

    for (let i = 0; i < Object.keys(capsObj).length; i++) {
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
</div>`
    } // Caps row

    for (let i = 0; i < Object.keys(shiftObj).length; i++) {
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
</div>`
    } // Shift row

    for (let i = 0; i < Object.keys(ctrlObj).length; i++) {
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
</div>`
    } // Ctrl row
}
drawHTML();

const KEYBOARD = document.querySelectorAll('.keyboard-key');
const CASE_DOWN = document.querySelectorAll('.caseDown');
const CASE_UP = document.querySelectorAll('.caseUp');
const CAPS = document.querySelectorAll('.caps');
const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');

console.log('KEYS: ', KEYBOARD);

function pushLogic(pushStatus, key) {
    if (pushStatus) {
        KEYBOARD[key].classList.add('pushed');
    } else {
        KEYBOARD[key].classList.remove('pushed');
    }
}  // pushStatus: true - кнопка нажата, false - кнопка отжата,
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
} // передаем название кейса - снимается его хидден, с этого кейса. Добавляется хидден к остальным кейсам.

let isCapsLocked = false;
function turnOnCaps() {

    function capsLogic() {
        if (!isCapsLocked) {
            pushLogic(true, 28);
            caseToggle(CAPS);
            isCapsLocked = true;
        } else {
            pushLogic(false, 28);
            caseToggle(CASE_DOWN);
            isCapsLocked = false;
        }
    }
    KEYBOARD[28].addEventListener('click', () => {
        capsLogic()
    });

    document.addEventListener('keydown', (event) => {
        if (event.code == "CapsLock") {
            capsLogic();
        }
    });
}
turnOnCaps();

function turnOnShift() {
    function behaviourDown() {
        if (isCapsLocked == false) {
            caseToggle(CASE_UP);
        } else {
            caseToggle(SHIFT_CAPS);
        }
    }

    function behaviourUp() {
        if (isCapsLocked == false) {
            caseToggle(CASE_DOWN);
        } else {
            caseToggle(CAPS);
        }
    }

    KEYBOARD[41].addEventListener('mousedown', () => {
        behaviourDown();
    });
    KEYBOARD[41].addEventListener('mouseup', () => {
        behaviourUp();
    });
    KEYBOARD[53].addEventListener('mousedown', () => {
        behaviourDown();
    });
    KEYBOARD[53].addEventListener('mouseup', () => {
        behaviourUp();
    });

    document.addEventListener('keydown', (event) => {
        if (event.code == "ShiftLeft") {
            behaviourDown();
            pushLogic(true, 41);
        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.code == "ShiftLeft") {
            behaviourUp();
            pushLogic(false, 41);
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.code == "ShiftRight") {
            behaviourDown();
            pushLogic(true, 53);
        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.code == "ShiftRight") {
            behaviourUp();
            pushLogic(false, 53);
        }
    });
}
turnOnShift();


const EN_LANG = document.querySelectorAll('.eng');
const RU_LANG = document.querySelectorAll('.rus');
const LANG_KEY = 'lang';

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
            currentLanguage = true; // для исключения необходимости кликать на кнопку дважды, если пердыдущее состояние ru
        });
    }
} // переключатель языка аналогичный переключателю кейсов, но с хранинием значения языка в localStorage

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem(LANG_KEY);
    if (savedLang === 'ru') {
        langToggle('ru');
    } else {
        langToggle('en');
    }
}); // при загрузке страницы чекаем localStorage на язык


let currentLanguage = false;
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
    KEYBOARD[63].addEventListener('mousedown', () => {
        langLogic();
    });

    document.addEventListener('keydown', function (event) {
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
            // console.log(event.code, key.classList[1]);
            if (event.code === key.classList[1]) {
                key.classList.add("pushed");
            }
        });
        document.addEventListener('keyup', event => {
            if (event.code != 'CapsLock') {
                key.classList.remove("pushed");
            }
        });
    });

    //     textarea.value += " жопа ";
}
lightKeyboard();

const TEXTAREA = document.querySelector(".keyboard-textarea");
function typeKeyboard() {
    KEYBOARD.forEach(key => {
        document.addEventListener('keydown', event => {
            event.preventDefault();
            console.log(event.code);
            // console.log(event.code, key.classList[1]);
            if (event.code === key.classList[1]) {
                if (event.code.slice(0, 3) === 'Key' ||
                    event.code.slice(0, 3) === 'Dig' ||
                    event.code.slice(0, 3) === 'Min' ||
                    event.code.slice(0, 3) === 'Equ' ||
                    event.code.slice(0, 3) === 'Bra' ||
                    event.code == 'Backslash' ||
                    event.code == 'Slash') {
                    console.log(key.innerText, key.classList[1], event.code.slice(0, 3));
                    TEXTAREA.value += key.innerText;
                }
                // key.classList.add("pushed");
                if (event.code == 'Backspace') {
                    let currentValue = TEXTAREA.value;
                    let newValue = currentValue.substring(0, currentValue.length - 1);
                    TEXTAREA.value = newValue;
                }
                if (event.code == 'Tab') {
                    TEXTAREA.value += '    ';
                }
                if (event.code == 'Space') {
                    TEXTAREA.value += ' ';
                }

            }
        });
        document.addEventListener('keyup', event => {
            if (event.code != 'CapsLock') {
                // key.classList.remove("pushed");
            }
        });
    });
}
typeKeyboard()