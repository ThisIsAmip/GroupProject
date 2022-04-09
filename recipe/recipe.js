const click = document.querySelector('.minimization');
click.addEventListener('click', () => {
    const inner = document.querySelector('.minimization button').innerHTML;
    if (inner.includes('Xem thêm')){
        document.querySelector('.minimization button').innerHTML = 'Xem bớt';
    } else if (inner.includes('Xem bớt')){
    document.querySelector('.minimization button').innerHTML = 'Xem thêm';
    }
})