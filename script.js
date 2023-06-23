
const nav = document.querySelector('nav')
const aside = document.querySelector('.categories')

document.addEventListener('scroll', function (e) {  
    console.log(window.scrollY)
    if (window.scrollY > 297) {
        nav.classList.add('navAnimation')
      }
      else(
        nav.classList.remove('navAnimation')
      )
    })

document.addEventListener('scroll', function (e){
   
    if (window.scrollY > 1220) {
        aside.classList.add('categoriesFixed')
      }
      else(
        aside.classList.remove('categoriesFixed')
      )
    })
