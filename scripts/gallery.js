var pathArr = [
    "../assets/gallery/1.jpg",
    "../assets/gallery/2.jpg",
    "../assets/gallery/3.jpg",
    "../assets/gallery/4.jpg",
    "../assets/gallery/5.jpg",
    "../assets/gallery/6.jpg"
];

function nextImg(){
    idx += 1;
    if (idx > 5)
        idx = 0;
    display();
}

function prevImg(){
    idx -= 1;
    if (idx < 0)
        idx = 5;
    display();
}

function display(){
    document.getElementById("gallImg").src = pathArr[idx];
}

var idx = 0;
display();