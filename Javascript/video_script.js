const Botao2 = document.querySelector('.Botao2');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

const video = document.querySelector('iframe');

Botao2.addEventListener('click',()=>{
        videoContainer.classList.add('show');

})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');

})

videoContainer.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
})