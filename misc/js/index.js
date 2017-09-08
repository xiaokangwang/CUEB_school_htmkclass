$(function () {
    var updatew = () => {
        //好((开心)|(快乐)|(高兴)|(欣喜))，又?有一个人(和我一起)?保护((地球)|(人类自己))。相信会?有一天，这个((世界)|(社会))因为我们的改变((变得)|而)不同。
        var gener = RegGener("好((开心)|(快乐)|(高兴)|(欣喜))，又?有一个人(和我一起)?保护((地球)|(人类自己))。相信会?有一天，这个((世界)|(社会))因为我们的改变((变得)|而)不同。");
        $("#Cent").text(gener.Next());
        var result = $("form.valids")[0].checkValidity();
        if (result) {
            $("div.input-group").removeClass("has-danger");
            $("div.input-group").addClass("has-success");
            $("#Assoc").text($("#inos").val());
        } else {
            $("div.input-group").removeClass("has-success");
            $("div.input-group").addClass("has-danger");
        }
    };
    $("input").on("change keyup paste mouseup", (e) => {
        console.log("Ev");
        updatew();
    });
    $("#GenBtn").click((e) => {
        var gener = RegGener("([A-Z]){4}-([a-z]){4}-([0-9a-z]){1,15}-([0-9A-Z]){1,15}");
        $("#inos").val(gener.Next());
        e.preventDefault();
        updatew();
    });
});
