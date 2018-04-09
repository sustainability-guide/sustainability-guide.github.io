// hover image landing page //
$(document).ready(function () {
    $('.logo')
        .mouseover(function () {
        $(this).attr("src", "../img/DashDiagFinal.png");
    })
        .mouseout(function () {
        $(this).attr("src", "../img/WhiteDashDiag.png");
    });
});

// pop up contact form //
$(function() {

  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

});
