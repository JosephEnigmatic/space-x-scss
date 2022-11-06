const hamburger = document.querySelector('#menu-btn'); 
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#mobile-menu')
const counters = document.querySelectorAll('.counter')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('open')

    document.body.classList.toggle('stop-scroll')
})


// !!Learn this soon
// function countUp(){
//     counters.forEach((counter)=>{
//         counter.innerText = 0

//         const updateCounter = () =>{
//             const target = +counter.getAttributr('data-target');
//         }
    
//         updateCounter();
//     })

// }

// countUp()