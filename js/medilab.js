let LargeImege =document.querySelector('#LargeImege')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let img4 = document.querySelector('#img4')
let img5 = document.querySelector('#img5')
let img6 = document.querySelector('#img6')
let img7 = document.querySelector('#img7')
let img8 = document.querySelector('#img8')
let img9 = document.querySelector('#img9')
let btn = document.querySelector('.next')
let Indecator = document.querySelectorAll('.widget-box-indecator')
let IndecatorImag = document.querySelectorAll('.widget-box-indecator img')
let ShowImg = document.querySelector('.ShowImg')
let imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
let randomImg = Math.floor(Math.random() * imgArray.length)

function getRandomImg(){
    randomImg = Math.floor(Math.random() * imgArray.length)
    LargeImege.setAttribute('src', imgArray[randomImg].src)
}
getRandomImg();

setInterval(getRandomImg ,5000)

btn.addEventListener('click', function (){
    randomImg = (randomImg + 1) % imgArray.length;
    LargeImege.setAttribute('src', imgArray[randomImg].src)
})

function prevImg() {
    randomImg = (randomImg - 1 + imgArray.length) % imgArray.length;
    LargeImege.setAttribute('src', imgArray[randomImg].src);
}

Indecator.forEach(function(dot){
    dot.addEventListener('click',function(e){
        LargeImege.setAttribute('src', e.target.getAttribute('src'));
        ShowImg.classList.add('d-flex');
        ShowImg.classList.remove('d-none');
    })
})

function closeImage(){
    ShowImg.classList.add('d-none');
}
