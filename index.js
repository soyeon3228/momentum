$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}

function music() {
    const audioContainer = document.querySelector('#audioContainer');
    audioContainer.play()
    audioContainer.currentTime = 0; // 재생 위치를 처음으로 설정
    }
