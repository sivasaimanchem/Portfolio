var navmenuanchortext = document.querySelectorAll('.nav-text a');
var interval;
for (var i = 0; i < navmenuanchortext.length;i++) {
    navmenuanchortext[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetId);
        console.log(targetSection);
        interval=setInterval(smoothscroll,20,targetSection);
    });
}
function smoothscroll(targetSection){
    var coordinates=targetSection.getBoundingClientRect();
    if(coordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}