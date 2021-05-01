$(document).ready(function () {
    $('.icon-download').on('click', () => {
        $('.download_title').hide();
        const opt = {
            margin: 1,
            filename: 'Andrii Petrashchuk.pdf',
            image: {type: 'jpeg', quality: 1},
            html2canvas: {scale: 2},
            jsPDF: {unit: 'pt', format: 'a4', orientation: 'p'}
        };

        html2pdf($('.container').html(), opt);
    })
    $('.icon-download').on('mouseover', (e) => {
        $('.download_title').show();
    })
    $('.icon-download').on('mouseout', (e) => {
        $('.download_title').hide();
    })
    titleTyping();

    function titleTyping() {
        const textEl = document.getElementById('text')
        let typewriter = new Typewriter(textEl, {
            delay: 20,
            cursorClassName: '',
            strings: ['JavaScript', 'TypeScript & Node JS', 'React JS & React Native'],
            autoStart: true,
        })
        typewriter
            .typeString("I'm Andrii Petrashchuk")
            .callFunction(() => textEl.lastChild.remove())
            .start()
    }
})