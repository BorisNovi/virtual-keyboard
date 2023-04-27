"use strict"

function drawHTML() {
    // casedown, caseup, caps, shiftcaps. следующие 4 - то же самое, но на русском
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

    const tabObj = {};
    const capsObj = {};
    const shiftObj = {};
    const ctrlObj = {};

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
    } // Nums


    console.log(numObj[Object.keys(numObj)[0]][0]); // вывести определенный символ
    console.log(Object.keys(numObj)[0]); // вывести ключ по индексу
}

drawHTML()