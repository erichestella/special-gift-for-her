let display = document.querySelectorAll('#lock-screen input');
let current_int = 0;
let password= "0401";
let inputs = document.querySelectorAll('.numberkeys');


inputs.forEach(function(button){
    button.addEventListener('click', function(){
   
        if (current_int < display.length){
            display[current_int].value = button.textContent.trim()
            current_int++;
        }
    });
});


document.getElementById('Clear').addEventListener('click', function(){
    display.forEach(function(input){
        input.value = "";
        
    })
    current_int = 0;
});

document.getElementById('Enter').addEventListener('click', function(){
    let entered_pin = Array.from(display).map(function(input){
        return input.value;
    }).join('');

    if (entered_pin === password){
        window.location.href= "gamepage.html";
    }
    else {
        display.forEach(function(input){
            input.value = "";
            
        })
        current_int = 0;
    }

});