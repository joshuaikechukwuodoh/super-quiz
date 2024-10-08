const details = document.querySelectorAll('details');

details.forEach((detail) => {
    detail.addEventListener('click', () => {
        details.forEach((item) => {
            if (item !== detail) {
                item.removeAttribute('open');
            }
        }); 
    });

});