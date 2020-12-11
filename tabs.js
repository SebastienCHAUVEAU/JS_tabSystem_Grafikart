/*
  LORSQUE l'on clique sur l'onglet :
    - retrait de la class active de l'onglet actif
    - ajout class active à onglet sélectionné
    
    - disparaître le contenu de l'actif
    - apparaître le nouveau
*/


let tabs = document.querySelectorAll ('.tabs a');

for(let i = 0 ; i<tabs.length ; i++){
  tabs[i].addEventListener('click', () => {
    let div = tabs[i].parentNode.parentNode.parentNode.parentNode;
    let li = tabs[i].parentNode;
    let content = div.querySelector(".tab-content.active");
    
        
      if(li.classList.contains('active')){
          return false;
        }else{
          div.querySelector('.tabs .active').classList.remove('active');
          li.classList.add('active');
          content.classList.remove("active");
          div.querySelector(tabs[i].getAttribute("href")).classList.add("active");
        }
      
       
  })
}



