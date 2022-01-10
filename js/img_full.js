window.onload=function () {
    addExpand();
}
function addExpand() {
    var imgs = document.getElementsByTagName("img");
    // imgs[0].focus();
    for(var i = 0;i<imgs.length;i++){
        imgs[i].onclick = expandPhoto;
        imgs[i].onkeydown = expandPhoto;
    }
}
function expandPhoto(){
    if (!document.getElementById("overlay")){
        var imageboxplugin = document.createElement("div");
        imageboxplugin.setAttribute("id","image-box-plugin");
        imageboxplugin.setAttribute("class","image-box-plugin");
        imageboxplugin.setAttribute("style","display:table;");
        document.body.appendChild(imageboxplugin);
        var imageboxcontainer = document.createElement("div");
        imageboxcontainer.setAttribute("id","image-box-container");
        imageboxcontainer.setAttribute("class","image-box-container");
        document.getElementById("image-box-plugin").appendChild(imageboxcontainer);

        var img = document.createElement("img");
        img.setAttribute("id","image-box-img")
        img.setAttribute("class","image-box-img");
        img.src = this.getAttribute("src");
        document.getElementById("image-box-container").appendChild(img);

        img.onclick = restore;}
}
function restore(){
    document.body.removeChild(document.getElementById("image-box-plugin"));
    document.body.removeChild(document.getElementById("image-box-img"));
}

