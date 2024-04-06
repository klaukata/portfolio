document.addEventListener('DOMContentLoaded', () => {
    // scroll on mouse wheel
    let scrollableSectionIndex = 0
    let sections = document.querySelectorAll('.scroll-section')

    window.addEventListener('wheel', (e) => {
        e.preventDefault();

        if (e.deltaY > 0 && scrollableSectionIndex < sections.length - 1) {
            scrollableSectionIndex++;
        } else if (e.deltaY < 0 && scrollableSectionIndex > 0) {
            scrollableSectionIndex--;
        }
        sections[scrollableSectionIndex].scrollIntoView({
            behavior: 'smooth'
        })
        console.log(e)
    })
})