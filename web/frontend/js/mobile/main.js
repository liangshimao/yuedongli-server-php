/**
 * Created by smile on 16-12-14.
 */
$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".menu-nav").slideToggle();
    });


})
function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className=i==cursel?"active":"";
        con.style.display=i==cursel?"block":"none";
    }
}
