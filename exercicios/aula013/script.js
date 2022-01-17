function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horario = data.getHours()
    msg.innerHTML = `Agora são ${horario} horas.`
    if(horario >= 0 && horario < 12) {
        document.body.style.backgroundColor = 'skyblue'
        img.scr = 'fotomanhã.jpg'
    }else if (horario >= 12 && horario < 19) {
        document.body.style.backgroundColor = 'orange'
        img.scr = 'fototarde.jpeg'
    }else{
        document.body.style.backgroundColor = 'darkblue'
        img.scr = 'fotonoite.jpg'
    }
}