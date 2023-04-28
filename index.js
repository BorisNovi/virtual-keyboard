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
        backKey: ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Стереть', 'Стереть', 'Стереть', 'Стереть'],
    };
    const tabObj = {
        tabKey: ['Tab', 'Tab', 'Tab', 'Tab', 'Таб', 'Таб', 'Таб', 'Таб'],
        qKey: ['q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'],
        wKey: ['w', 'W', 'W', 'w', 'й', 'Й', 'Й', 'й'],
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
        capsKey: ['Caps lock', 'Caps lock', 'Caps lock', 'Caps lock', 'Кричать', 'Кричать', 'Кричать', 'Кричать'],
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
        lshiftKey: ['Shift', 'Shift', 'Shift', 'Shift', 'Большие', 'Большие', 'Большие', 'Большие']
    };
    const ctrlObj = {
        ctrlKey: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
        winKey: ['Win', 'Win', 'Win', 'Окна', 'Окна', 'Окна', 'Окна'],
        altKey: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
        spaceKey: ['Space', 'Space', 'Space', 'Space', 'Пробел', 'Пробел', 'Пробел', 'Пробел'],
        laltKey: ['Alt', 'Alt', 'Alt', 'Alt', 'Альт', 'Альт', 'Альт', 'Альт'],
        lctrlKey: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ктрл', 'Ктрл', 'Ктрл', 'Ктрл'],
        larrKey: ['&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;', '&#9668;',],
        barrKey: ['&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;', '&#9660;'],
        rarrKey: ['&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;', '&#9658;']
    };

    document.body.innerHTML = `<div class="container">
    <h1 class="header">RS Virtual Keyboard</h1>
    <textarea class="keyboard-textarea" id="textarea" cols="50" rows="10"></textarea>
    <div class="keyboard-keys">
        <div class="keyboard-row row numkeys"></div>
        <div class="keyboard-row row tabkeys"></div>
        <div class="keyboard-row row capskeys"></div>
        <div class="keyboard-row row shiftkeys"></div>
        <div class="keyboard-row row ctrlkeys"></div>
    </div>
`; // Body

    const numInsert = document.querySelector('.numkeys');
    const tabInsert = document.querySelector('.tabkeys');
    const capsInsert = document.querySelector('.capskeys');
    const shiftInsert = document.querySelector('.shiftkeys');
    const ctrlInsert = document.querySelector('.ctrlkeys');

    for (let i = 0; i < Object.keys(numObj).length; i++) {
        numInsert.innerHTML += `<div class="keyboard-key ${Object.keys(numObj)[i]}">
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
        tabInsert.innerHTML += `<div class="keyboard-key ${Object.keys(tabObj)[i]}">
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
        capsInsert.innerHTML += `<div class="keyboard-key ${Object.keys(capsObj)[i]}">
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
        shiftInsert.innerHTML += `<div class="keyboard-key ${Object.keys(shiftObj)[i]}">
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
        ctrlInsert.innerHTML += `<div class="keyboard-key ${Object.keys(ctrlObj)[i]}">
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

    console.log(numObj[Object.keys(numObj)[0]][0]); // вывести определенный символ
    console.log(Object.keys(numObj)[0]); // вывести ключ по индексу
}

drawHTML()