$(document).ready(function() {
    console.log($(this))
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
// generates the time block into setions past, current amd future 
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var value = localStorage.getItem(id);
        if (value) {
            $(this).children(".description").val(value);
        }  

        var currentHour = dayjs().hour();
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
        if (timeBlockHour < currentHour) {
            $(this).addClass("past");
        } else if (timeBlockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
    $(`#clearBtn`).click(function() {
        $(`textarea.description`).val("");
        localStorage.clear();
    }
    );
    // get and display current date and time
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
    $("#currentTime").text(dayjs().format("h:mm A"));
});