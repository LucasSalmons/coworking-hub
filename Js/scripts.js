//Switch the icon and text for the 'tile' containers//
$("#tile0").on('mouseenter', function () {
    $("#tile0").children("span").removeClass('fa fa-phone fa-lg');
    $("#tile0").children("span").html('Curious about the Hub? Experience everything we have to offer with a free day pass');
});
$("#tile0").on('mouseleave', function () {
    $("#tile0").children("span").addClass('fa fa-phone fa-lg');
    $("#tile0").children("span").html('');
});

$("#tile1").on('mouseenter', function () {
    $("#tile1").children("span").removeClass('fa fa-phone fa-lg');
    $("#tile1").children("span").html('Get involved! Stay up to date with our latest news and events.');
});
$("#tile1").on('mouseleave', function () {
    $("#tile1").children("span").addClass('fa fa-phone fa-lg');
    $("#tile1").children("span").html('');
});

$("#tile2").on('mouseenter', function () {
    $("#tile2").children("span").removeClass('fa fa-phone fa-lg');
    $("#tile2").children("span").html('We offer free tours every Friday at 11am- sign up today!');
});
$("#tile2").on('mouseleave', function () {
    $("#tile2").children("span").addClass('fa fa-phone fa-lg');
    $("#tile2").children("span").html('');
});

$("#tile3").on('mouseenter', function () {
    $("#tile3").children("span").removeClass('fa fa-phone fa-lg');
    $("#tile3").children("span").html('Purchase a day pass in advance to work from Impact Hub Seattle!');
});
$("#tile3").on('mouseleave', function () {
    $("#tile3").children("span").addClass('fa fa-phone fa-lg');
    $("#tile3").children("span").html('');
});
//navigation testing//

$("#testDrop").on('mouseenter', function () {
    $("#dropParent").addClass('show');
    $("#dropChild").addClass('show');
});
$("#dropChild").on('mouseleave', function () {
    $("#dropParent").removeClass('show');
    $("#dropChild").removeClass('show');
});
