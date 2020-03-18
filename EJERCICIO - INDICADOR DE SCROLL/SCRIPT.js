const h1 = document.documentElement.scrollHeight;
const h2 = document.documentElement.clientHeight;
const rootStyles = document.documentElement.style;
const scrollUnit = (h1 - h2) /100

addEventListener('scroll', () =>{
	rootStyles.setProperty('--width', Math.round(scrollY / scrollUnit))
})
