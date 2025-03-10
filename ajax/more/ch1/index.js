const output = document.querySelector('.output');
console.log(output);
output.textContent = 'New Content'

const url = 'js1.json';

window.addEventListener('DOMContentLoaded', () => {
    output.textContent = 'loading...';
    fetch(url).then(rep => rep.json())
    .then((data) => {
        console.log(data);
        output.innerHTML = '';
        data.forEach(el => {
            makeList(el)
            
        });
    })
})

function makeList(item){
    const div = document.createElement('div');
    div.innerHTML = `${item.firstname}, ${item.lastname}, ${item.age}`;
    output.append(div);

    if(item.age > 20){
    div.classList.add('active')
    } else {
        div.classList.add('inactive')
    }
}