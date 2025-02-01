(function () {
  const homeSwiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
})();

  document.getElementById('form-sugestao').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('agradecimento').classList.add('ativo');
    
    event.target.reset();
});


    document.getElementById('sugestao-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.getElementById('agradecimento').style.display = 'block';

        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('sugestao').value = '';
    });


