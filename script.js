$(document).ready(function () {
    $('.icon-download').on('click', (e) => {
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

    const strings = ['JavaScript', 'TypeScript & Node JS', 'React JS & React Native', "I'm Andrii Petrashchuk"];
    var i = 0;
    var [txt] = strings.reverse();
    var speed = 100;
    typeWriter()

    function typeWriter() {
        debugger
        if (i < txt.length) {
            var text = $("#text").html();
            $('#text').html(text += txt.charAt(i));
            i++;
            setTimeout(typeWriter, speed);
        }
    }
})