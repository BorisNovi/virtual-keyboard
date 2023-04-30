"use strict"

function drawHTML() {
    // casedown, caseup, caps, shiftcaps. Cледующие 4 - то же самое, но на русском
    const numObj = {
        bquoteKey: ['&#x60;', '~', '&#x60;', '~', 'ё', 'Ё', 'Ё', 'ё'],
        d1Key: ['1', '!', '1', '!', '1', '!', '1', '!'],
        d2Key: ['2', '@', '2', '@', '2', '"', '2', '"'],
        d3Key: ['3', '#', '3', '#', '3', '№', '3', '№'],
        d4Key: ['4', '$', '4', '$', '4', ';', '4', ';'],
        d5Key: ['5', '%', '5', '%', '5', '%', '5', '%'],
        d6Key: ['6', '^', '6', '^', '6', ':', '6', ':'],
        d7Key: ['7', '&', '7', '&', '7', '?', '7', '?'],
        d8Key: ['8', '*', '8', '*', '8', '*', '8', '*'],
        d9Key: ['9', '&lpar;', '9', '&lpar;', '9', '&lpar;', '9', '&lpar;'],
        d0Key: ['0', '&rpar;', '0', '&rpar;', '0', '&rpar;', '0', '&rpar;'],
        minusKey: ['-', '_', '-', '_', '-', '_', '-', '_'],
        equalKey: ['=', '+', '=', '+', '=', '+', '=', '+'],
        backKey: ['Back', 'Back', 'Back', 'Back', '&larr;', '&larr;', '&larr;', '&larr;'],
    };
    const tabObj = {
        tabKey: ['Tab', 'Tab', 'Tab', 'Tab', 'Таб', 'Таб', 'Таб', 'Таб'],
        qKey: ['q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'],
        wKey: ['w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'],
        eKey: ['e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'],
        rKey: ['r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'],
        tKey: ['t', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'],
        yKey: ['y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'],
        uKey: ['u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'],
        ikey: ['i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'],
        oKey: ['o', 'O', 'O', 'o', 'щ', 'Щ', 'Щ', 'щ'],
        pKey: ['p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'],
        lbrackKey: ['&lbrack;', '&lcub;', '&lbrack;', '&lcub;', 'х', 'Х', 'Х', 'х'],
        rbrackKey: ['&rbrack;', '&rcub;', '&rbrack;', '&rcub;', 'ъ', 'Ъ', 'Ъ', 'ъ'],
        bslashKey: ['\\', '|', '\\', '|', '\\', '/', '\\', '/']
    };
    const capsObj = {
        capsKey: ['Caps', 'Caps', 'Caps', 'Caps', 'Кричать', 'Кричать', 'Кричать', 'Кричать'],
        aKey: ['a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'],
        sKey: ['s', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'],
        dKey: ['d', 'D', 'D', 'd', 'в', 'В', 'В', 'в'],
        fKey: ['f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'],
        gKey: ['g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'],
        hKey: ['h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'],
        jKey: ['j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'],
        kKey: ['k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'],
        lKey: ['l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'],
        scolKey: [';', ':', ';', ';', 'ж', 'Ж', 'Ж', 'ж'],
        quotKey: ["'", '"', "'", '"', 'э', 'Э', 'Э', 'э'],
        enterKey: ['Enter', 'Enter', 'Enter', 'Enter', 'Ввод', 'Ввод', 'Ввод', 'Ввод']
    };
    const shiftObj = {
        shiftKey: ['Shift', 'Shift', 'Shift', 'Shift', 'Большие', 'Большие', 'Большие', 'Большие'],
        zKey: ['z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'],
        xKey: ['x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'],
        cKey: ['c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'],
        vKey: ['v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'],
        bKey: ['b', 'B', 'B', 'b', 'и', 'И', 'И', 'и'],
        nKey: ['n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'],
        mKey: ['m', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'],
        comKey: [',', '&lt', ',', '&lt', 'б', 'Б', 'Б', 'б'],
        dotKey: ['.', '&gt', '.', '&gt', 'ю', 'Ю', 'Ю', 'ю'],
        slashKey: ['/', '?', '/', '?', '.', ',', '.', ','],
        tarrKey: ['&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;', '&#9650;'],
        rshiftKey: ['Shift', 'Shift', 'Shift', 'Shift', 'Большие', 'Большие', 'Большие', 'Большие']
    };
    const ctrlObj = {
        ctrlKey: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
        winKey: ['Win', 'Win', 'Win', 'Win', 'Окна', 'Окна', 'Окна', 'Окна'],
        altKey: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
        spaceKey: ['Space', 'Space', 'Space', 'Space', 'Пробел', 'Пробел', 'Пробел', 'Пробел'],
        raltKey: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
        rctrlKey: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
        larrKey: ['&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;',],
        barrKey: ['&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;'],
        rarrKey: ['&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;'],
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

function typeMouse() {
    KEYBOARD.forEach((key) => {
        key.addEventListener('click', () => console.log(key.className))
    });

    let textarea = document.querySelector(".keyboard-textarea");
    textarea.value += "Проверка добавления текста";
    textarea.value += " жопа ";
}
typeMouse();