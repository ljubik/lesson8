//add and del cnt per click )
$(function(){
    $('#btn-plus').click(function(){
        var cnt = Number($('#counter').html());
        cnt++;
        $('#counter').html(cnt);
    });
    $('#btn-minus').click(function(){
        var cnt=Number($('#counter').html());
        cnt--;
        if (cnt < 0)return;
        $('#counter').html(cnt);
    });
    $('#toggle').click(function(){
        $('#counter').html(cnt);
    });
});
