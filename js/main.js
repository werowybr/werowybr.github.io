
if (document.querySelector('#header-bars button')){
    document.querySelector('#header-bars button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('body > nav').style.display = document.querySelector('body > nav').style.display === 'block' ? 'none' : 'block';
    });
}


