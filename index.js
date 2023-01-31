function sub() {
    var l = [];
    var name = $("#name").val();
    var Email = $("#email").val();
    var phone = $("#phn").val();
    var photo =$("#photo").val();
    var gender = $('input[name="gender"]:checked').val();;
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var values = '<div class=s1>'+'<table><tr><td><p class="p"><strong>Name </strong>:'+`${name}`+'</p><p class="p"><strong>Email </strong>: '+`${Email}`+'</p><p class="p"><strong>Phone </strong>:'+`${phone}`+'</p><p class="p"><strong>Gender</strong> : '+`${gender}`+'</p><p class="p"><strong>Skills</strong> : '+`${selected}`+'<td><img src="'+`${photo}`+'"></td></tr></table></div>';
    $('#enroll').append(values);
    $("#form").trigger("reset");
}