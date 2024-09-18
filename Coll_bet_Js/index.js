

let one = querySelectorAll('.item');
let disab = querySelectorAll('.item');
let redy = querySelectorAll('.redy');
let yelody = querySelectorAll('.yelody');
let bludy = querySelectorAll('.bludy');
let blacky = querySelector('.blacky');
let _03 = querySelector('._3and');
let _05 = querySelector('._3and');
let _04 = querySelector('._3and');
let cre = querySelectorAll('.result');
let _09 = querySelector('._09');
let _3 = querySelector('._3');
let bet_09 = querySelector('.bet_09');
let _formdata = querySelectorAll('._formdata');
let _price = querySelector('._price');
let clos = querySelector('.close');
let _15 = querySelectorAll('._15');
let _1717 = querySelectorAll('._1717');
let _1818 = querySelectorAll('._1818');
let _1919 = querySelectorAll('._1919');
let _price2 = querySelector('._price2');
let bet_010 = querySelector('.bet_010');
let _min_ = querySelector('._min_');
let _sec_ = querySelector('._sec_');
let _Result_ = querySelectorAll('._Result_');

function HIDEeLEMENT(){
    let index = 0;
    const intval = setInterval(function(){
        if(index >= _Result_.length){
            clearInterval(intval)
        }else{
            _Result_[index].classList.remove('yellow-color');
            _Result_[index].classList.remove('blue-color');
            _Result_[index].classList.remove('red-color');
            _Result_[index].innerHTML = '';
            _Result_[index].removeAttribute('clr');
            index++;   
        }
    }, 1000)
}
function numblue(){
    let nums = [3, 12, 21, 30, 39, 48, 6, 15, 24, 33, 42, 9, 18, 27, 36, 45];
    let numing = Math.floor(Math.random() * nums.length);
    return nums[numing];
}
function numred(){
    let nums = [1, 10, 19, 28, 37, 46, 4, 13, 22, 31, 40, 7, 16, 25, 34, 43];
    let numing = Math.floor(Math.random() * nums.length);
    return nums[numing];
}
function numyellow(){
    let nums = [2, 11, 20, 29, 38, 47, 5, 14, 23, 32, 41, 8, 17, 26, 35, 44];
    let numing = Math.floor(Math.random() * nums.length);
    return nums[numing];
}
function SHoELEmenT(){
    let index = 0;
    const intval = setInterval(function(){
        if(index >= _Result_.length){
            clearInterval(intval)
        }else{
            let getNum;
            let clr = GetColor();
            let attr;
            if(clr == 'yellow-color'){
                attr = 'yl';
                getNum = numyellow();
            }else if(clr == 'red-color'){
                attr = 'rd';
                getNum = numred();
            }else if(clr == 'blue-color'){
                attr = 'bl';
                getNum = numblue();
            }
            // saveToStorage(genNum);
            _Result_[index].classList.add(clr);
            _Result_[index].innerHTML = '<span class="">'+ getNum + '</span>';
            _Result_[index].setAttribute('clr', attr);
            index++;
        }
    }, 2000)
}
function RandoMColor(){
    let color = ['yellow-color','red-color' , 'blue-color' ];
    return color;
}
function GetColor(){
    let colorlength = RandoMColor();
    var index = Math.floor(Math.random() * colorlength.length); //generating random index number from 0 to 2
    var maincolor = RandoMColor()[index];
    return maincolor;
}
function COUNTDOWN_TIMER_AT_COLLY_BET(duration){
    let timer = duration;
    setInterval(function(){
        let min = Math.floor(timer / 60);
        let sec = timer % 60;

        min = min < 10 ? '0'+ min: min;
        sec = sec < 10 ? '0'+ sec: sec; 
        _min_.innerHTML = min;
        _sec_.innerHTML = sec;
        if(min == 0 && sec <20){
            _min_.style.color = 'rgb(213, 9, 9)';
            _sec_.style.color = 'rgb(213, 9, 9)';
        }
        if(timer === 6){
            HIDEeLEMENT();
        }
        if(timer === 0){
            SHoELEmenT();
        }
        if(--timer < 0 ){
            timer = duration;
        }
    },1000)
}
COUNTDOWN_TIMER_AT_COLLY_BET(300);

function NUMBERSOF_COLOR(){
    _1717.forEach((seven, index) =>{
        if(seven.classList.contains('blue')){
            seven.setAttribute('coly', 'blue');
            seven.setAttribute('TXT', seven.innerHTML);
        }
        seven.addEventListener('click', function(){
            for(let p = 0; p < _15.length; p++){
                _15[p].disabled = true;
                _09.addEventListener('click', function(){
                    _15[p].disabled = false;
                })
            }
            for(let c = 0; c < _1919.length; c++){
                _1919[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1919[c].disabled = false;
                })
            }
            for(let c = 0; c < _1717.length; c++){
                _1717[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1717[c].disabled = false;
                })
            }
            for(let c = 0; c < _1818.length; c++){
                _1818[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1818[c].disabled = false;
                })
            }
            for(let x = 0; x < disab.length; x++){
                disab[x].disabled = true;
                _09.addEventListener('click', function(){
                    disab[x].disabled = false;
                })
            }
            if(_05.childNodes.length ==2){
                return;
            }
            let a = createElement('NAV');
            a.className = 'numwraping';
            let b = createElement('BUTTON');
            b.className  = '_17 blue';
            b.innerHTML = seven.getAttribute('TXT');
            a.append(b);
            let c = createElement('SPAN');
            c.className = 'numwrap';
            c.innerHTML = 'blue ' + seven.getAttribute('TXT');
            a.append(c);
            _05.append(a);
        })
    })
    _1818.forEach((eight, index) =>{
        if(eight.classList.contains('red')){
            eight.setAttribute('coly', 'red');
            eight.setAttribute('TXT', eight.innerHTML);
        }
        eight.addEventListener('click', function(){
            for(let p = 0; p < _15.length; p++){
                _15[p].disabled = true;
                _09.addEventListener('click', function(){
                    _15[p].disabled = false;
                })
            }
            for(let c = 0; c < _1919.length; c++){
                _1919[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1919[c].disabled = false;
                })
            }
            for(let c = 0; c < _1818.length; c++){
                _1818[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1818[c].disabled = false;
                })
            }
            for(let c = 0; c < _1717.length; c++){
                _1717[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1717[c].disabled = false;
                })
            }
            for(let x = 0; x < disab.length; x++){
                disab[x].disabled = true;
                _09.addEventListener('click', function(){
                    disab[x].disabled = false;
                })
            }
            if(_05.childNodes.length ==2){
                return;
            }
            let a = createElement('NAV');
            a.className = 'numwraping';
            let b = createElement('BUTTON');
            b.className  = '_17 red';
            b.innerHTML = eight.getAttribute('TXT');
            a.append(b);
            let c = createElement('SPAN');
            c.className = 'numwrap';
            c.style.setProperty('color', 'rgb(213, 9, 9)');
            c.innerHTML = 'red ' + eight.getAttribute('TXT');
            a.append(c);
            _05.append(a);
        })
    })
    _1919.forEach((nine, index) =>{
        if(nine.classList.contains('yellow')){
            nine.setAttribute('coly', 'yellow');
            nine.setAttribute('TXT', nine.innerHTML);
        }
        nine.addEventListener('click', function(){

            for(let p = 0; p < _15.length; p++){
                _15[p].disabled = true;
                _09.addEventListener('click', function(){
                    _15[p].disabled = false;
                })
            }
            for(let c = 0; c < _1919.length; c++){
                _1919[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1919[c].disabled = false;
                })
            }
            for(let c = 0; c < _1717.length; c++){
                _1717[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1717[c].disabled = false;
                })
            }
            for(let c = 0; c < _1818.length; c++){
                _1818[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1818[c].disabled = false;
                })
            }
            for(let x = 0; x < disab.length; x++){
                disab[x].disabled = true;
                _09.addEventListener('click', function(){
                    disab[x].disabled = false;
                })
            }
            if(_05.childNodes.length ==2){
                return;
            }
            let a = createElement('NAV');
            a.className = 'numwraping';
            let b = createElement('BUTTON');
            b.className  = '_17 yellow';
            b.innerHTML = nine.getAttribute('TXT');
            a.append(b);
            let c = createElement('SPAN');
            c.className = 'numwrap';
            c.style.setProperty('color', 'rgb(230, 230, 27)');
            c.innerHTML = 'yellow ' + nine.getAttribute('TXT');
            a.append(c);
            _05.append(a);
        })
    })
}
NUMBERSOF_COLOR();
function WINING_COLOR(){
    _15.forEach((_tin, index) =>{
        if(_tin.classList.contains('red')){
            _tin.setAttribute('coll', 'redo');
        }else if(_tin.classList.contains('blue')){
            _tin.setAttribute('coll', 'bludo');
        }else if(_tin.classList.contains('yellow')){
            _tin.setAttribute('coll', 'yelodo');
        }else if(_tin.classList.contains('draw')){
            _tin.setAttribute('coll', 'blacko');
        }
        _tin.addEventListener('click', function(){
            for(let p = 0; p < _15.length; p++){
                _15[p].disabled = true;
                _09.addEventListener('click', function(){
                    _15[p].disabled = false;
                })
            }
            for(let c = 0; c < _1919.length; c++){
                _1919[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1919[c].disabled = false;
                })
            }
            for(let c = 0; c < _1818.length; c++){
                _1818[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1818[c].disabled = false;
                })
            }
            for(let c = 0; c < _1717.length; c++){
                _1717[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1717[c].disabled = false;
                })
            }
            for(let x = 0; x < disab.length; x++){
                disab[x].disabled = true;
                _09.addEventListener('click', function(){
                    disab[x].disabled = false;
                })
            }
            if(_04.childNodes.length ==2){
                return;
            }
            if(_tin.getAttribute('coll') == 'redo'){
                let crt = createElement('NAV');
                crt.className = 'winning';
                cr2 = createElement('NAV');
                cr2.className = '_1t red';
                cr2.innerHTML = 'red';
                crt.append(cr2);
                let crt3 = createElement('SPAN');
                crt3.className = 'identyfire';
                crt3.innerHTML = 'red win';
                crt.append(crt3);
                _03.append(crt);
            }else if(_tin.getAttribute('coll') == 'bludo'){
                let crt = createElement('NAV');
                crt.className = 'winning';
                cr2 = createElement('NAV');
                cr2.className = '_1t blue';
                cr2.innerHTML = 'blue';
                crt.append(cr2);
                let crt3 = createElement('SPAN');
                crt3.className = 'identyfire';
                crt3.style.setProperty('color', '#1f8dd6');
                crt3.innerHTML = 'blue win';
                crt.append(crt3);
                _04.append(crt);
            }else if(_tin.getAttribute('coll') == 'yelodo'){
                let crt = createElement('NAV');
                crt.className = 'winning';
                cr2 = createElement('NAV');
                cr2.className = '_1t yellow';
                cr2.innerHTML = 'yellow';
                crt.append(cr2);
                let crt3 = createElement('SPAN');
                crt3.className = 'identyfire';
                crt3.style.setProperty('color', 'rgb(230, 230, 27)');
                crt3.innerHTML = 'yellow win';
                crt.append(crt3);
                _04.append(crt);
            }else if(_tin.getAttribute('coll') == 'blacko'){
                let crt = createElement('NAV');
                crt.className = 'winning';
                cr2 = createElement('NAV');
                cr2.className = '_1t draw';
                cr2.innerHTML = 'draw';
                crt.append(cr2);
                let crt3 = createElement('SPAN');
                crt3.className = 'identyfire';
                crt3.style.setProperty('color', 'black');
                crt3.innerHTML = 'draw';
                crt.append(crt3);
                _04.append(crt);
            }
        })
    })
}
WINING_COLOR();
function SELECTALL(){
    one.forEach((cr, index) =>{
        cr.setAttribute('title', cr.innerHTML);
        if(cr.classList.contains('redy')){
            cr.setAttribute('col', 'red');
        }else if(cr.classList.contains('bludy')){
            cr.setAttribute('col', 'blu');
        }else if(cr.classList.contains('yelody')){
            cr.setAttribute('col', 'yel');
        }else if(cr.classList.contains('blacky')){
            cr.setAttribute('col', 'bla');
        }
        cr.addEventListener('click', function(){
            for(let p = 0; p < _15.length; p++){
                _15[p].disabled = true;
                _09.addEventListener('click', function(){
                    _15[p].disabled = false;
                })
            }
            for(let c = 0; c < _1919.length; c++){
                _1919[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1919[c].disabled = false;
                })
            }
            for(let c = 0; c < _1818.length; c++){
                _1818[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1818[c].disabled = false;
                })
            }
            for(let c = 0; c < _1717.length; c++){
                _1717[c].disabled = true;
                _09.addEventListener('click', function(){
                    _1717[c].disabled = false;
                })
            }
            if(ReTurnSelectedNuber() !== null){
                if(ReTurnSelectedNuber().includes(cr.innerText)){
                  this.removeAttribute('style');

                  RemoveUnselected(cr.innerText);
                  let rmve = _03.querySelector('.num-' + cr.innerText);
                  if(rmve !== null){
                      rmve.remove();
                  }
                  return;

                }
            }
            if(ReTurnSelectedNuber() !== null){
                if(ReTurnSelectedNuber().length == 7){
                    return;
                }
            }
            let clik = createElement('NAV');
            clik.className = 'result num-' + cr.innerText;
            clik.innerHTML = cr.innerHTML;
            _03.append(clik);
            if(_03.innerHTML.includes(clik.innerHTML)){
                bet_09.setAttribute('title', 'Stake Game');
            }else{
                bet_09.setAttribute('title', 'Select Game');
            }           
            if(cr.getAttribute('col') == 'red'){
                cr.style.setProperty('background', 'linear-gradient(rgb(210, 15, 15),rgb(213, 9, 9),rgb(230, 13, 13))');
                clik.style.setProperty('background', 'linear-gradient(rgb(210, 15, 15),rgb(213, 9, 9),rgb(230, 13, 13))');
                cr.style.setProperty('color', 'white');
                clik.style.setProperty('color', 'white');
            }else if(cr.getAttribute('col') == 'blu'){
                cr.style.setProperty('background', 'linear-gradient(#3498db,#1f8dd6,#4f7f9f)');
                clik.style.setProperty('background', 'linear-gradient(#3498db,#1f8dd6,#4f7f9f)');
                cr.style.setProperty('color', 'white');
                clik.style.setProperty('color', 'white');
            }else if(cr.getAttribute('col') == 'yel'){
                cr.style.setProperty('background', 'linear-gradient(rgb(230, 230, 27),rgb(230, 230, 42),rgb(236, 217, 44))');
                clik.style.setProperty('background', 'linear-gradient(rgb(230, 230, 27),rgb(230, 230, 42),rgb(236, 217, 44))');
                cr.style.setProperty('color', 'black');
                clik.style.setProperty('color', 'black');
            }else if(cr.getAttribute('col') == 'bla'){
                cr.style.setProperty('background', 'linear-gradient(rgb(8, 7, 7),rgb(8, 7, 7),black)');
                clik.style.setProperty('background', 'linear-gradient(rgb(8, 7, 7),rgb(8, 7, 7),black)');
                cr.style.setProperty('color', 'white');
                clik.style.setProperty('color', 'white');
            }
            ToStorage(cr.innerHTML);
        })
    })
}
bet_09.addEventListener('click', function(){
    if(_03.innerHTML !== ''){
        if(_price.classList.contains('comcate')){
            _price.classList.remove('comcate');
            _price.classList.add('comcote');
            _price.style.setProperty('height', '300px');
            _price.style.setProperty('opacity', '1');
            _price.style.setProperty('transition', '0.5s', 'important');
        }
        if(_price2.classList.contains('conquot')){
            _price2.classList.remove('conquot');
            _price2.classList.add('conquat');
            _price2.style.setProperty('width', 'fit-content');
            _price2.style.setProperty('opacity', '1', 'important');
            _price2.style.setProperty('transition', '0.5s', 'important');
        }
    }else{
        return;
    }  
})
bet_010.addEventListener('click', function(){
    if(_03.innerHTML !== ''){
        if(_price.classList.contains('comcate')){
            _price.classList.remove('comcate');
            _price.classList.add('comcote');
            _price.style.setProperty('height', '300px');
            _price.style.setProperty('opacity', '1');
            _price.style.setProperty('transition', '0.5s', 'important');
        }
        if(_price2.classList.contains('conquot')){
            _price2.classList.remove('conquot');
            _price2.classList.add('conquat');
            _price2.style.setProperty('width', 'fit-content');
            _price2.style.setProperty('opacity', '1', 'important');
            _price2.style.setProperty('transition', '0.5s', 'important');
        }
    }else{
        return;
    }  
})
clos.onclick = function(){
    if(_price.classList.contains('comcote')){
        _price.classList.remove('comcote');
        _price.classList.add('comcate');
        _price.style.setProperty('height', '0');
        _price.style.setProperty('opacity', '0');
        _price.style.setProperty('transition', '0.5s', 'important');
    }
}
_09.onclick = function(){
    localStorage.removeItem('useclick');
    one.forEach((selected, index) =>{
        selected.removeAttribute('style');
        _03.innerHTML = '';
    })
}
function ToStorage(data){
    let a,b,c,d,e,f,g;
    if(localStorage.getItem('useclick') != null){
        b = JSON.parse(localStorage.getItem('useclick'));
        a = [];
        a.push(data);
        c = a.concat(b);
        localStorage.setItem('useclick',JSON.stringify(c));
    }else{
        a = [];
        a.push(data);
        localStorage.setItem('useclick',JSON.stringify(a));
    }
}
function ReTurnSelectedNuber(){
    if(localStorage.getItem('useclick') !== null){
        return JSON.parse(localStorage.getItem('useclick'));
    }

    return null;
}
function RemoveUnselected(data){
    let current = ReTurnSelectedNuber();
    let position = current.indexOf(data);
    let tmp = current.splice(position, 1);
    localStorage.setItem('useclick',JSON.stringify(current));
}
SELECTALL();
function querySelector(x){
    return document.querySelector(x)
}
function querySelectorAll(x){
    return document.querySelectorAll(x)
}
function getElementById(x){
    return document.getElementById(x)
}
function createElement(x){
    return document.createElement(x)
}