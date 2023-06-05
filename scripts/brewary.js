var idx = Math.floor(Math.random() * 26) + 1;
var btnRight = document.getElementById('btn-right');
var btnLeft = document.getElementById('btn-left');

btnRight.addEventListener('click', function() {
    if (idx === 27) {
        idx = 1;
    } else {
        idx++;
    }
    updateImageAndText();
});

btnLeft.addEventListener('click', function() {
    if (idx === 1) {
        idx = 27;
    } else {
        idx--;
    }
    updateImageAndText();
});

function updateImageAndText() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'dbConfig.php?idx=' + idx, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('beer-label').src = response.file_path;
            document.getElementById('test').textContent = response.descrip;
            document.getElementById('beer-name').textContent = response.name;
            document.getElementById('btn-container').style.display = response.display;
        }
    };
    xhr.send();
}

updateImageAndText();