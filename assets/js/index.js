const mainHeader = document.querySelector('.section-main__header')
const mainText = document.querySelector('.section-main__text')
const mainButtons = document.querySelector('.section-main__buttons')
const header = document.querySelector('.header')
const mainLinks = document.querySelector('.section-main-links')

mainHeader.style.transform = 'translateY(50px)'
mainHeader.style.opacity = 0
anime({
  targets: mainHeader,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 400
});

mainText.style.transform = 'translateY(30px)'
mainText.style.opacity = 0
anime({
  targets: mainText,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 800
});

mainButtons.style.transform = 'translateY(10px)'
mainButtons.style.opacity = 0
anime({
  targets: mainButtons,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 1200
});

header.style.transform = 'translateY(-150px)'
anime({
  targets: header,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  delay: 1600
});

mainLinks.style.opacity = 0
anime({
  targets: mainLinks,
  duration: 400,
  easing: 'linear',
  delay: 2000,
  opacity: 1,
});


const links = document.querySelectorAll('.section-links__item, .footer-links__item')
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    anime({
      targets: link,
      duration: 200,
      easing: 'linear',
      translateY: -4
    });
  })

  link.addEventListener('mouseout', () => {
    anime({
      targets: link,
      duration: 200,
      easing: 'linear',
      translateY: 0
    });
  })
})

const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    anime({
      targets: btn,
      duration: 200,
      easing: 'linear',
      scale: 1.03
    });
  })

  btn.addEventListener('mouseout', () => {
    anime({
      targets: btn,
      duration: 200,
      easing: 'linear',
      scale: 1
    });
  })
})
