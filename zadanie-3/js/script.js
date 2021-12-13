let btnSetBackground = document.getElementById('button');

const setBackground = () => {
    let p1 = document.querySelector('.p1');
    let p2 = document.querySelector('.p2');
    
    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';

}



btnSetBackground.addEventListener('click', setBackground);