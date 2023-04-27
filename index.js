"use strict"

function drawHTML(){
    document.body.innerHTML = `<div class="container">
    <h1 class="header">RS Virtual Keyboard</h1>
    <textarea class="keyboard-textarea" id="textarea" cols="50" rows="10"></textarea>
    <div class="keyboard-keys">
        <div class="keyboard-row row numkeys">
            <div class="keyboard-key bquote">
                <span class="rus hidden">
                    <span class="caseDown hidden">ё</span>
                    <span class="caseUp hidden">Ё</span>
                    <span class="caps hidden">Ё</span>
                    <span class="shiftCaps hidden">ё</span>
                </span>
                <span class="eng">
                    <span class="caseDown">q</span>
                    <span class="caseUp hidden">~</span>
                    <span class="caps hidden">q</span>
                    <span class="shiftCaps hidden">~</span>
                </span>
            </div>
            <div class="keyboard-key d1">
                <span class="rus hidden">
                    <span class="caseDown hidden">1</span>
                    <span class="caseUp hidden">!</span>
                    <span class="caps hidden">1</span>
                    <span class="shiftCaps hidden">!</span>
                </span>
                <span class="eng">
                    <span class="caseDown">1</span>
                    <span class="caseUp hidden">!</span>
                    <span class="caps hidden">1</span>
                    <span class="shiftCaps hidden">!</span>
                </span>
            </div>
            <div class="keyboard-key d2">2</div>
            <div class="keyboard-key d3">2</div>
            <div class="keyboard-key d4">3</div>
            <div class="keyboard-key d5">4</div>
            <div class="keyboard-key d6">5</div>
            <div class="keyboard-key d7">6</div>
            <div class="keyboard-key d8">7</div>
            <div class="keyboard-key d9">8</div>
            <div class="keyboard-key d0">9</div>
            <div class="keyboard-key d0">0</div>
            <div class="keyboard-key minus">-</div>
            <div class="keyboard-key equal">=</div>
            <div class="keyboard-key plus">+</div>
            <div class="keyboard-key backspace">backspace</div>
        </div>
        <div class="keyboard-row row tabkeys"></div>
        <div class="keyboard-row row capskeys"></div>
        <div class="keyboard-row row shiftkeys"></div>
        <div class="keyboard-row row cttlkeys"></div>
    </div>
</div>
`
    console.log('place here html');
}

drawHTML()