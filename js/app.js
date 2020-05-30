const section = document.querySelector('section')
console.log(section)
window.addEventListener('scroll', () => {
	const value = window.scrollY
	section.style.clipPath = `circle(${value}px at center)`
})