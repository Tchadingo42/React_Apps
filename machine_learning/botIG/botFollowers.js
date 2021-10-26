(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 30) clearInterval(followInterval);
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];
        if (nextButton.textContent.toLowerCase() === 'follow') { // write in the language of your ig
            nextButton.click();
        }
        i++;
    }, 2000)
})()