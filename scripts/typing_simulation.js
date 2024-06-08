document.addEventListener('DOMContentLoaded', () => {
    let text = 'hello, world!'
    let speed = 170

    let index = 0
    
    const typing = setInterval(() => {
        document.getElementById('simulateTyping').textContent += text[index];
        index++;
        if (index == text.length) {
            clearInterval(typing)
        }
    }, speed)
})