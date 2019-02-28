var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function(e) {
    var n = 5000;
    modal.classList.add('modal_active');
    setTimeout(function() {
        document.getElementById('modal').classList.remove('modal_active');
    }, n);
    e.preventDefault();
});

close.addEventListener('click', function() {
    modal.classList.remove('modal_active');
});
