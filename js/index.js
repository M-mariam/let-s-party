
$('.sidebar-icon').click(function() {
    $('.side-bar').addClass('active');
});


$('.close').click( function(){
    $('.side-bar').removeClass('active');
});


$(document).ready(function(){
    $('.spanner').fadeOut(1000, function(){
        $('.loader').fadeOut(1000)
    })
})

$('.toggle').on('click', function(){
    $(this).next().slideToggle();
    $(".inner").not($(this).next()).slideUp()
})


//Counter 
let countDownDate = new Date("Jan 15, 2025 15:37:25").getTime();

function countDown() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days").html(days);
  $(".hours").html(hours);
  $(".min").html(mins);
  $(".sec").html(sec);

}
setInterval(countDown, 1000);


// textarea
$('textarea').keyup( function(){
let msgLength = $(this).val().length;
$('#chars').text(
    100 - msgLength <= 0 ? "your have no more ": 100 - msgLength
)
}
)