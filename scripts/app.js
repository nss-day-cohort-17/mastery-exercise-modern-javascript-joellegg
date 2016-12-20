// Show the correct html sections
$(document).ready(function() {
    /* Show the initial view that accepts player name */
    $("#player-setup").show();

    // When any button with card__link class is clicked, move on to the next view.
    $(".card__link").click(function(e) {
        var nextCard = $(this).attr("next");
        var moveAlong = false;

        switch (nextCard) {
            case "card--battleground":
                moveAlong = ($("#player-name").val() !== "") && ($("#enemy-name").val() !== "");
                break;
        }

        if (moveAlong) {
            $(".card").hide();
            $("." + nextCard).show();
        }

        //If no name, class or weapon selected and user tries to advance to next page, an alert will pop up.

        if (moveAlong === false && ($("#player-name").val() == "")) {
            alert('Please name your robot');
        } if (moveAlong === false && ($("#enemy-name").val() == "")) {
            alert("Please name your enemy");
        }

    });

    // When the back button clicked, move back a view

    $(".card__back").click(function(e) {
        var previousCard = $(this).attr("previous");
        $(".card").hide();
        $("." + previousCard).show();
    });
});

////////////////////////////
///    Event Listeners   ///
////////////////////////////

// When a class type button has focus, add a class to it and remove the class when another class type button has focus.
$('.classButton').focus(function(event) {
    var target = $(event.target)
    if(target.hasClass('classButton')) {
        $('.classButton').removeClass('borderClick')
        target.addClass('borderClick')
    } else if (target.parent().hasClass('classButton')) {
        target.parent().addClass('borderClick')
        $('.borderClick').removeClass('borderClick')
    }
})


$('.weaponButton').focus(function(event) {
    var target = $(event.target)
    if(target.hasClass('weaponButton')) {
        $('.weaponButton').removeClass('borderClick')
        target.addClass('borderClick')
    } else if (target.parent().hasClass('weaponButton')) {
        target.parent().addClass('borderClick')
        $('.borderClick').removeClass('borderClick')
    }
})
