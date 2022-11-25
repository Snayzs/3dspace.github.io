//diky_
//shortcut
function $(x){return document.querySelector(x)}
function _(x){return bg.style.backgroundImage = 'url(../'+x+'.gif)'}
function ad(x,y){return x.classList.add(y)}
function re(x,y){return x.classList.remove(y)}
function to(x,y){return x.classList.toggle(y)}
d= 4.9
function g(){switch(x){
      case 0:
        p = 'mercury',
        diameter=d*1,
        dis = 127.535;
        rot = 88 +'hari'
      break;
      case 1:
        p = 'venus',
        diameter=d*2.47-(2*10**-15),
        dis =177.635;
        rot = 225 +'hari'
      break;
      case 2:
        p = 'moon',
        diameter=d*0.5,
        dis = 3.844 ;
        rot = 29.5 +'hari'
      break;
      case 3:
        p = 'earth',
        diameter=d*2.6-(2*10**-15),
        dis =219.635;
        rot = 365 +'hari'
      break;
      case 4:
        p = 'mars',
        diameter=d*1.38,
        dis =297.635;
        rot = 687 +'hari'
      break;
      case 5:
        p = 'jupiter',
        diameter=139.797,
        dis = 847.975821;
        rot = 4333 +'hari'
      break;
      case 6:
        p = 'saturn',
        diameter=116.62,
        dis =1499.635;
        rot = 10759 +'hari'
      break;
      case 7:
        p = 'uranus',
        diameter=d*10.35,
        dis =2949.635;
        rot = 30687 +'hari'
      break;
      case 8:
        p = 'neptune',
        diameter=d*10.5,
        dis =4569.635;
        rot = 60190 +'hari'
      break;
    }}

a =document.querySelectorAll('.orbital-line')
_a = $('.moon-distance')
radio = document.querySelectorAll('.radio input')

const cek1 = $('#cek1')
const ctn = $('.container')
const fake =$('.fake-sun')

/* zoom function */
function zoom (){
  ctn.classList.remove('zoom','zoom2')
  ad(fake,'fade')
  setTimeout(()=> {
    re(fake,'fade')
  },1500)
}

radio.forEach(function(w){
  w.addEventListener('click',()=> {
    zoom();
    if (w.className == 'second') {
      ad(ctn,'zoom')
    }else if(w.className == 'third'){
      ad(ctn,'zoom2')
    }
  })
})

/* hide the line */
cek1.addEventListener('click',()=>{
  to(_a,'distorese');
  for (var i = 0; i < a.length; i++) {
   to(a[i],'distorese');
  }
})

/* hide the name */
let name = document.querySelectorAll('.planet p')
let _name = $('.p')
const cek2 =$('#cek2')

cek2.addEventListener('click',()=>{
  to(_name,'tr')
for (var i = 0; i <name.length; i++) {
  to(name[i],'tr')
}
})


const menbox = $('#hidden')
const box = $('.box');
const menu =$('.I')

/* function on side bar */
function klik(){
  ctn.addEventListener('click', () => {
    re(box,'move');
    menu.innerHTML ='III'
  })
}


menbox.addEventListener('click',()=> {
  to(box,'move');
  klik();
  if (box.className == 'box move') {
    menu.innerHTML = '×'
  }else if (box.className != 'box move') {
    menu.innerHTML = 'III'
  }
})

const kotak = $('.kotak')
const pop =$('.pop-up')

/* close function */
kotak.addEventListener('click',()=> {
  to(pop,'hide')
  re(button[8],'oke')
})

let planet =$('.that-planet')
let button = document.querySelectorAll('.container button')
let bow = document.querySelectorAll('section')
let bg = $('.set')
let title = $('.description h1')
let ring = $('.ring')
let isi =document.querySelectorAll('isi')
let p2 = document.querySelectorAll('tr p2')


/* function click on planet */

button.forEach(function(pic){
  pic.addEventListener('click',()=> {
    to(pop,'hide')
    let att = pic.id;title.innerHTML =att
    _(att);to(pic,'oke')
    
    /* detect the index of planet */
    switch(att){
      case 'mercury': x = 0;
      break;
      case 'venus' : x = 1;
      break;
      case 'moon' : x = 2;
      break;
      case 'earth': x = 3;
      break;
      case 'mars': x = 4;
      break;
      case 'jupiter': x = 5;
      break;
      case 'saturn': x = 6;
      break;
      case 'uranus': x = 7;
      break;
      case 'neptune': x = 8;
      break;
    }
    g();bow_op(0,0);bow_op(1,8)
    /* condition default */
    isi[0].innerHTML = ':±'+ diameter +' juta km'
    isi[1].innerHTML= ':±'+ dis +' juta km'
    isi[2].innerHTML=':'+ rot
    function bow_op(n ,m){
      if(x !=m){
        bow[n].style.opacity = 1
      }else{
        bow[n].style.opacity = 0
      }
    }
    if (x != 6) {
      ring.style.opacity = 0;
    } else {
      ring.style.opacity = 1;
    }
    if (x != 2) {
      p2[1].innerHTML = 'jarak planet ke matahari'
    } else {
      p2[1].innerHTML = 'jarak satelit ke planet'
    }
    /* function change the planet */
    bow[0].addEventListener('click',()=> {
      if (x != 0) {
      x--;g();_(p);
      title.innerHTML = p
      isi[0].innerHTML= ':±'+ diameter +' juta km'
      isi[1].innerHTML= ':±'+ dis +' juta km'
      isi[2].innerHTML=':'+rot
      }
      bow_op(0,0);bow_op(1,8)
      /* ring of saturn */
      if (x !=6) {
      ring.style.opacity =0;
      }else{
      ring.style.opacity =1;
      }
      if (x !=2) {
      p2[1].innerHTML='jarak planet ke matahari'
    } else {
      p2[1].innerHTML='jarak satelit ke planet'
    }
    })
    bow[1].addEventListener('click',()=> {
      if (x != 8) {
      x++;g();_(p);
      title.innerHTML = p
      isi[0].innerHTML= ':±'+ diameter +' juta km'
      isi[1].innerHTML= ':±'+ dis +' juta km'
      isi[2].innerHTML=':'+rot
      }
      bow_op(0,0);bow_op(1,8)
      /* ring of saturn */
      if (x !=6) {
      ring.style.opacity =0;
      }else{
      ring.style.opacity =1;
      }
      if (x !=2) {
      p2[1].innerHTML='jarak planet ke matahari'
    } else {
      p2[1].innerHTML='jarak satelit ke planet'
    }
    })
    })
    
    
    
    
    
})



//home 
let ctn2 =$('.container2')
let ex =$('.bu')
ex.addEventListener('click',()=> {
  ad(ctn2,'close')
})


span = document.querySelectorAll('.bar2 span')
items = document.querySelectorAll('.items')
h = $('.about')
para = $('p4')
percent = $('.percent')

span.forEach(function(c){
  c.addEventListener('click',()=> {
    if (c == span[0]){
      ad(span[0],'active')
      re(span[1],'active')
      re(span[2],'active')
      items[2].style.opacity = 1;
      items[0].style.opacity = 1;
      h.style.opacity = 0;
      para.style.opacity = 0;
      percent.style.opacity = 0;
    }else if(c == span[1]){
      ad(span[1],'active')
      re(span[0],'active')
      re(span[2],'active')
      items[2].style.opacity = 0;
      items[0].style.opacity = 0;
      h.style.opacity = 0;
      para.style.opacity = 1;
      percent.style.opacity = 1;
    }else if(c == span[2]){
      ad(span[2],'active')
      re(span[0],'active')
      re(span[1],'active')
      items[2].style.opacity = 0;
      items[0].style.opacity = 0;
      h.style.opacity = 1;
      para.style.opacity = 0;
      percent.style.opacity = 0;
    }
  })
})

