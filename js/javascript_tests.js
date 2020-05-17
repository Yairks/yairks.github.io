window.onload = function execute() {
    console.log("Hello, World!");
    let div_elems = document.getElementsByClassName("img");
    for(let i = 0; i < div_elems.length; i++) {
        let   img = div_elems[i].getElementsByTagName("img")[0];
        //let margin_left = parseInt(div_elems[i].getAttribute("margin-left"));
        //let margin_right = div_elems[i].getAttribute("margin");
        console.log(div_elems[i].width);
        console.log(img.width);
        //div_elems[i].setAttribute("width", (img.width + margin_left + margin_right).toString());

    }

}
