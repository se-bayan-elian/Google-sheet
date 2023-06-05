const root = document.documentElement;

function setLight() {
  root.setAttribute('class', 'light');
  // set brand img 
  document.querySelector('.google-dark').style.display = 'none'
  document.querySelector('.google-light').style.display = 'block'
  // theme button background change 
  document.querySelector('.theme-btn').style.backgroundColor = '#202124CC'

}
function setDark (){
  root.removeAttribute('class', 'light');
  // set brand img 
  document.querySelector('.google-light').style.display = 'none'
  document.querySelector('.google-dark').style.display = 'block'
  // theme button background change 
  document.querySelector('.theme-btn').style.backgroundColor = '#fff'

}
document.querySelector('.theme-btn').addEventListener('click',()=>{
  root.getAttribute('class') == 'light' ? setDark():setLight()
})


