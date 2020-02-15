var input = document.getElementById('input');
var btn = document.getElementById('btn');
var message = document.getElementById('message');

btn.addEventListener('click', function() {
        message.textContent = "' " + input.value + " '";
        input.value = " ";
})

