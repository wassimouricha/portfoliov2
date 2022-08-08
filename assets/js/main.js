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