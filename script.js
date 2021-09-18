function carregar(){

    var msg = document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
//var hora = 13
msg.innerHTML = `<strong>Agora são ${hora}:${minut} horas</strong>`
if(hora >= 0 && hora < 12){
//BOM DIA
img.src = 'fotomanha.png'
document.body.style.background = '#d1d4cd'
}else if(hora >= 12 && hora < 18){
//BOA TARDE
img.src = 'fototarde.png'
document.body.style.background = '#cfa266'
}else{
//BOA NOITE
img.src = 'fotonoite.png'
document.body.style.background = '#1a3455'
}
}
    
