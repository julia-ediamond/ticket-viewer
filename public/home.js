//hide tickets' details

$('.ticket-card').hide();


//Display individual ticket details on click

$(".ticketId").click(function () {
    $(this).find('.ticket-card').toggle()
});




