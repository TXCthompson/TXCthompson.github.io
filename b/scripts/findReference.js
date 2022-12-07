if (window.innerWidth > 1024) {
    $(document).ready( function() {
        $('.font-option').click( function() {
            window.location = $(this).find('a').attr('href');
            return false;
        })
    });

    const divButtons = document.getElementById('styles-buttons');
    if (divButtons.getAttribute('class') === 'style-buttons-show') {
        divButtons.classList.replace('style-buttons-show', 'style-buttons-hidden');
    }
}