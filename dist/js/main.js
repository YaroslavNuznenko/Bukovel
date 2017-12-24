



$(document).ready(function(){

    $('.select').on('click','.select__placeholder',function(){
        var parent = $(this).closest('.select');
        if ( !parent.hasClass('is-open')){
            parent.addClass('is-open');
            parent.find('ul').css('display', 'block');
            $('.select.is-open').not(parent).removeClass('is-open');
        }else{
            parent.removeClass('is-open');
            parent.find('ul').css('display', 'none');
        }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.select__placeholder').html( $(this).html() );
        parent.find('ul').css('display', 'none');
    });


    $(".pickupTourButton").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        if($('.collapsed-menu').css('display')==='block'){
            $('.collapsed-menu').css('display','none');
            $('#scrolled_navbar').css('display','block');
            $(document).css('overflow','hidden');
        }
    });

    var email, tel, name;


    // $("#orderTourForm").submit(function(e) { //устанавливаем событие отправки для формы с id=form
    //     e.preventDefault();
    //     email = $('.inputDefault__email').val();
    //     tel = $('.inputDefault__tel').val();
    //     name = $('.inputDefault__name').val();
    //     console.log(email+ ' '+ name +' '+ tel);
    //
    //     var form_data = [ name, tel, email]; //собераем все данные из формы
    //     console.log(form_data);
    //     $.ajax({
    //         type: "POST", //Метод отправки
    //         url: "send.php", //путь до php фаила отправителя
    //         data: form_data,
    //         success: function() {
    //             //код в этом блоке выполняется при успешной отправке сообщения
    //             alert("Ваше сообщение отпрвлено!");
    //         }
    //     });
    // });

    function initMap() {
        var uluru ={lat: 50.443662, lng:  30.489804};
        var map = new google.maps.Map(document.getElementById('map'), {
            center: uluru,
            zoom: 17
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    initMap();
});