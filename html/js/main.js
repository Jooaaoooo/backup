$(document).ready(function() {
    $('#carousel').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.listaVeiculos button').click(function() {
        const destino = $('#contato');
        const nomeveiculo = $(this).parent().find(h3).text();

        $('#veiculoInteresse').val(nomeveiculo);

        $('html').animate({
            scrollTop: destino.offset().
        })
    })
})