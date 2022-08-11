// sidebar

// compétences Bar
// fonction pour la barre de compétence
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')  

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })
            target.classList.add('skills__active')



            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })
            tab.classList.add('skills__active')
        })
      });


      
// Script pour le SplashScreen

// je crée mes variables 
let intro = document.querySelector('.intro');
let intrologoheader = document.querySelector('.intrologoheader');
let logospan = document.querySelectorAll('.logointro');

// je crée l'événement sur  l'ensemble de ma fenetre avec une fonction fleché , une fonction fléché est une forme de syntaxe pour une fonction javascript
window.addEventListener('DOMContentLoaded' , () => {
  // DOMContentLoaded  est un evenement qui se déclenche lorsque ma fenetre html est chargé et cela avant meme les fichiers css
  setTimeout(() => {
    // setTimeout est une methode qui permet de crée un minuteur afin de déclencher une fonction ou un code après un délai indiqué
    logospan.forEach((span, idx ) => {
      // la méthode forEach permet de d'executer une fonction sur chaques éléments indiqué , ici les span et les numéros des  index de chaques éléments span ici idx 
        setTimeout( () => {

          span.classList.add('active');
          // pour chaques span la fonction ajoute la classe active
        }, (idx + 1 ) * 400 )
        // en bas de la méthode settimeout on indique le délai du minuteur et donc la durée sera pour chaques index on ajoute 1 multiplié par 400 millisecondes
        // donc index 0 * 400ms puis index 1*400ms l'index 2 * 400ms etc 

    });

    // ensuite ici on refait un minuteur pour qu'a chaques éléments span on retire la classe active et on ajoute la classe fade, en indiquant le delai à la fin de la méthode

    setTimeout(() => {
      logospan.forEach((span, idx ) => {
        setTimeout( () => {

          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1 ) * 50 )
    })

  }, 2000);

  // et donc en tout à la fin de ma grande fonction pour mes span on indique la durée de celle ci qui sera de 2000ms

  //  ici je re crée un minuteur  afin d'indiquer qu'a ma class intro je vais ajouter dans son style la valeur top: -100vh après un délair de 2300ms
  setTimeout(() => {
    intro.style.top = '-100vh';
  }, 2500)


})

});

// fin de ma fonction pour le SplashScreen


// Mixitup filtre

let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

// lien Active work

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click" , activeWork))


// Fonction Pour les fenetres popup

// Fonction pour ouvrir la fenetre popup
document.addEventListener("click" , (e) => {
  if(e.target.classList.contains("work__button")) {
    togglePorfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePorfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

// fonction pour fermer la fenetre popup

document.querySelector(".portfolio__popup-close").addEventListener("click" , togglePorfolioPopup);

// fonction pour changer l'image et les informations en fonction de l'article cliqué 

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span ").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body  ").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


// Fonction Pour les fenetres services
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__content'),
  modalCloses = document.querySelectorAll('.services__modal-close')

  let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
  }


  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click' , () => {
      modal(i)
    })
  })

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})