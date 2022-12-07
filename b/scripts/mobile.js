const arrayStyles = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'];
const div = document.getElementById('text-container');
const divStyles = document.getElementById('styles-desktop');
const textOutput = document.getElementById('rr');
const buttonBold = document.getElementById('bold');
const buttonItalic = document.getElementById('italic');
const buttonBoldItalic = document.getElementById('bold-italic');
const buttonGrenze = document.getElementById('grenze-gotisch');
const buttonNoto = document.getElementById('noto-sans-mono');
const buttonAkaya = document.getElementById('akaya-telivigala');
const buttonMarker = document.getElementById('permanent-marker');
const buttonBebas = document.getElementById('bebas-neue');
const buttonHenny = document.getElementById('henny-penny');

if (window.innerWidth < 1025) {
    if (div.getAttribute('class') === 'no-inputs-block') {
        div.classList.replace('no-inputs-block', 'inputs-block');
    }

    if (divStyles.getAttribute('class') === 'style-blocks-show') {
        divStyles.classList.replace('style-blocks-show', 'style-blocks-hidden');

    }

    buttonBold.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's1');
    });

    buttonItalic.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's2');
    });

    buttonBoldItalic.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's3');
    });

    buttonGrenze.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's4');
    });

    buttonNoto.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's5');
    });

    buttonAkaya.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's6');
    });

    buttonMarker.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's7');
    });

    buttonBebas.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's8');
    });

    buttonHenny.addEventListener("click", function() {
        if (!textOutput.classList.contains('standart-style')) {
            for (let i = 0; i < 9; i++) {
                if (textOutput.classList.contains(arrayStyles[i])) {
                    textOutput.classList.remove(arrayStyles[i]);
                }
            }

            textOutput.classList.add('standart-style');
        }
        textOutput.classList.replace('standart-style', 's9');
    });
}