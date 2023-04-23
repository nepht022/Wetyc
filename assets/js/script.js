function saiba(){
    document.getElementById("saiba").classList.add('d-block')
}

function mostraArqueiro(){
    document.getElementById("arqueiro").classList.remove('d-none')
    document.getElementById("druida").classList.add('d-none')
    document.getElementById("guerreiro").classList.add('d-none')
    document.getElementById("mago").classList.add('d-none')
    document.getElementById("paladino").classList.add('d-none')
}
function mostraDruida(){
    document.getElementById("druida").classList.remove('d-none')
    document.getElementById("arqueiro").classList.add('d-none')
    document.getElementById("guerreiro").classList.add('d-none')
    document.getElementById("mago").classList.add('d-none')
    document.getElementById("paladino").classList.add('d-none')
}
function mostraGuerreiro(){
    document.getElementById("guerreiro").classList.remove('d-none')
    document.getElementById("arqueiro").classList.add('d-none')
    document.getElementById("druida").classList.add('d-none')
    document.getElementById("mago").classList.add('d-none')
    document.getElementById("paladino").classList.add('d-none')
}
function mostraMago(){
    document.getElementById("mago").classList.remove('d-none')
    document.getElementById("arqueiro").classList.add('d-none')
    document.getElementById("druida").classList.add('d-none')
    document.getElementById("guerreiro").classList.add('d-none')
    document.getElementById("paladino").classList.add('d-none')
}
function mostraPaladino(){
    document.getElementById("paladino").classList.remove('d-none')
    document.getElementById("arqueiro").classList.add('d-none')
    document.getElementById("druida").classList.add('d-none')
    document.getElementById("guerreiro").classList.add('d-none')
    document.getElementById("mago").classList.add('d-none')
}

$("#dois").click(()=>{
    $('#body-2').addClass('show')
    $('#body-9').removeClass('show')
    $('#body-8').removeClass('show')
});
$("#nove").click(()=>{
    $('#body-2').removeClass('show')
    $('#body-9').addClass('show')
    $('#body-8').removeClass('show')
});
$("#oito").click(()=>{
    $('#body-2').removeClass('show')
    $('#body-9').removeClass('show')
    $('#body-8').addClass('show')
});

$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})
$(function(){
    $('[data-toggle="popover"]').popover()
})

