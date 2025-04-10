const imgages = document.querySelectorAll('.project-img');
const spinners = document.querySelectorAll('.spinner-grow');
window.onload = () => {
    imgages.forEach((img) => {
        setTimeout(()=> {
            img.classList.remove('visually-hidden');
        }, 1000)    
    })
    spinners.forEach((spinner) => {
        setTimeout(()=> {
            spinner.classList.add('visually-hidden');
        }, 1000)    
    })
}