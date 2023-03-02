const search = document.querySelector('#search');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

let temp = '';

search.addEventListener('keyup', () => {
    let max = 0;
    if (search.value.trim() !== ''){
        temp = search.value.trim();
        li.forEach(e => {
            if (e.textContent.toLowerCase().indexOf(temp.toLowerCase()) > -1) {
                if (max < 10) {
                    max += 1;
                    e.classList.add('show');
                }
            }
            else {
                e.classList.remove('show');
            }
        })
    }
    else {
        li.forEach(e => e.classList.remove('show'));
    }
})