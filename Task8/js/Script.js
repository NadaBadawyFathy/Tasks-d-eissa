////////////Sidebar
$(document).ready(function () {
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
    }
});
/////////////////////gallary
$(document).ready(function() {
    $("img").mouseenter(function () {
        $(this).addClass("highlight");
    });
    $("img").mouseleave(function () {
        $(this).removeClass("highlight");
    });
});

$(document).ready(function() {
        $("#s1").show(300);
        $("#s2").show(700);
        $("#s3").show(900);
        $("#s4").show(1400);
        $("#s5").show(1800);
        $("#s6").show(2000);

    $("#all").click(function () {
        $("img").hide();

        $("#s1").show(100);
        $("#s2").show(700);
        $("#s3").show(900);
        $("#s4").show(1400);
        $("#s5").show(1800);
        $("#s6").show(2000);
    });

    $("#student").click(function () {
        $("img").hide();

        $("#s1").show(900);
        $("#s2").show(1600);
        $("#s3").show(2000);
    });

    $("#school").click(function () {
        $("img").hide();

        $("#s4").show(900);
        $("#s5").show(1600);
        $("#s6").show(2000);
    });
});

//////////////////////About
$(document).ready(function() {
    $("#about .box").mouseenter(function () {
        $(this).addClass("light");
    });
    $("#about .box").mouseleave(function () {
        $(this).removeClass("light");
    });

    $("#about .img2").mouseenter(function () {
        $("#about .img2").hide();
    });
    $("#about .img2").mouseleave(function () {
        $("#about .img2").show();
    });

    $("#about .img22").mouseenter(function () {
        $("#about .img22").hide();
    });
    $("#about .img22").mouseleave(function () {
        $("#about .img22").show();
    });

    $("#about .img222").mouseenter(function () {
        $("#about .img222").hide();
    });
    $("#about .img222").mouseleave(function () {
        $("#about .img222").show();
    });

});

///////////////////////////menu
    $(document).ready(function () {
    $('.menu-tab').mouseenter(function(){
        $('.menu-tab').toggleClass('active')
        $('.menu-hide').toggleClass('show')
    });

    $("#down ul").hide();
    $('a').click(function () {
        $("#down ul").show();
    });
});
    