const image = document.querySelector('img.project-img');
const spinner = document.querySelector('div.spinner-grow');
window.onload = () => {
    spinner.classList.add('visually-hidden');
    image.classList.remove('visually-hidden');
}