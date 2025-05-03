document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('voltar').addEventListener('click', function(event) {
        event.preventDefault();
        window.history.back();
    });
})