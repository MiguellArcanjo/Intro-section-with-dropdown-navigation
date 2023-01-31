//calling elements from html

const extension = document.querySelector('.features-extension');
const features = document.querySelector('.features');
const features2 = document.querySelector('.features2')

const arrow = document.querySelector('.arrow');
const arrow1_1 = document.querySelector('.arrow1-1');
const arrow2 = document.querySelector('.arrow2');
const arrow2_2 = document.querySelector('.arrow2-2');
const arrow_mobile = document.querySelector('.arrow1-mobile')
const arrow1_mobile = document.querySelector('.arrow-mobile1')
const arrow1_1_mobile = document.querySelector('.arrow1-1-mobile')
const arrow1_2_mobile = document.querySelector('.arrow1-2-mobile')

const company = document.querySelector('.company');
const extension2 = document.querySelector('.company-extension');

const tres_barra = document.querySelector('.tres-barra');
const barra1 = document.querySelector('.barra1');
const barra2 = document.querySelector('.barra2');
const barra3 = document.querySelector('.barra3');

const back = document.querySelector('.back');
const geral = document.querySelector('.geral')
const mobile1 = document.querySelector('.features-extension-mobile')


features.addEventListener('click', function() {

    if (extension.classList.contains('features-extension')) {
        extension.classList.remove('features-extension')
        extension.classList.add('features-extension2')

        if (arrow.classList.contains('arrow') && arrow1_1.classList.contains('arrow1-1')) {
            arrow.classList.remove('arrow')
            arrow.classList.add('arrow1')
            arrow1_1.classList.remove('arrow1-1')
            arrow1_1.classList.add('arrow1-2')

        }

    } 
    
    else if (extension.classList.contains('features-extension2')) {
        extension.classList.remove('features-extension2')
        extension.classList.add('features-extension')
        
        if (arrow.classList.contains('arrow1') && arrow1_1.classList.contains('arrow1-2')) {
            arrow.classList.remove('arrow1')
            arrow.classList.add('arrow')
            arrow1_1.classList.remove('arrow1-2')
            arrow1_1.classList.add('arrow1-1')

        }
    }

})


company.addEventListener('click', function() {
    if (extension2.classList.contains('company-extension')) {
        extension2.classList.remove('company-extension')
        extension2.classList.add('company-extension2')

        if (arrow2.classList.contains('arrow2') && arrow2_2.classList.contains('arrow2-2')) {
            arrow2.classList.remove('arrow2')
            arrow2.classList.add('arrow3')
            arrow2_2.classList.remove('arrow2-2')
            arrow2_2.classList.add('arrow2-3')

        }

    } 
    
    else if (extension2.classList.contains('company-extension2')) {
        extension2.classList.remove('company-extension2')
        extension2.classList.add('company-extension')
        
        if (arrow2.classList.contains('arrow3') && arrow2_2.classList.contains('arrow2-3')) {
            arrow2.classList.remove('arrow3')
            arrow2.classList.add('arrow2')
            arrow2_2.classList.remove('arrow2-3')
            arrow2_2.classList.add('arrow2-2')

        }
    }

})

tres_barra.addEventListener('click', function() {
    if (barra1.classList.contains('barra1') && barra2.classList.contains('barra2') && barra3.classList.contains('barra3')) {

        barra1.classList.remove('barra1')
        barra1.classList.add('barra1-e')

        barra2.classList.remove('barra2')
        barra2.classList.add('barra2-e')

        barra3.classList.remove('barra3')
        barra3.classList.add('barra3-e')

        if (back.classList.contains('back')) {
            back.classList.remove('back')
            back.classList.add('back2')
        }

        if (geral.classList.contains('geral')) {
            geral.classList.remove('geral')
            geral.classList.add('geral2')
        }

    }

    else {
        barra1.classList.add('barra1')
        barra1.classList.remove('barra1-e')

        barra2.classList.add('barra2')
        barra2.classList.remove('barra2-e')

        barra3.classList.add('barra3')
        barra3.classList.remove('barra3-e')

        if (back.classList.contains('back2')) {
            back.classList.remove('back2')
            back.classList.add('back')
        }

        if (geral.classList.contains('geral2')) {
            geral.classList.remove('geral2')
            geral.classList.add('geral')
        }
    }

})

features2.addEventListener('click', function() {
    if (mobile1.classList.contains('features-extension-mobile')) {
        mobile1.classList.remove('features-extension-mobile')
        mobile1.classList.add('features-extension-mobile2')

        if (arrow_mobile.classList.contains('arrow1-mobile') && arrow1_1_mobile.classList.contains('arrow1-1-mobile')) {
            arrow_mobile.classList.remove('arrow1-mobile')
            arrow_mobile.classList.add('arrow-mobile1')
            arrow1_1_mobile.classList.remove('arrow1-1-mobile')
            arrow1_1_mobile.classList.add('arrow1-2-mobile')
        }
    }

    else if (mobile1.classList.contains('features-extension-mobile2')) {
        mobile1.classList.add('features-extension-mobile')
        mobile1.classList.remove('features-extension-mobile2')

        if (arrow_mobile.classList.contains('arrow-mobile1') && arrow1_1_mobile.classList.contains('arrow1-2-mobile')) {
            arrow_mobile.classList.add('arrow1-mobile')
            arrow_mobile.classList.remove('arrow-mobile1')
            arrow1_1_mobile.classList.add('arrow1-1-mobile')
            arrow1_1_mobile.classList.remove('arrow1-2-mobile')
        }
    }
})