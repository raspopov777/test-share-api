const btn = document.querySelector('button');
const result = document.querySelector('.result');

const shareData = {
    title: document.title,
    text: 'test text',
    url: window.location.href,
};

btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData)
        result.textContent = 'MDN shared successfully'
    } catch(err) {
        result.textContent = 'Error: ' + err
    }
});
