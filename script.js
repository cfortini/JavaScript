function verificar(){
    debugger

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img = document.createElement('img')
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)

    img.setAttribute('id', 'foto') 
    if ( fsex[0].checked){
    if (fano.value.lenght == 0 || fano.value >= ano ) {
        alert('[Error] Verifique os dados e tente novamente!!!')
    } else {

        if (idade > 0 && idade < 21){
            //Garoto
            img.setAttribute('src', 'img/garoto.png')
        } else if (idade >= 21 && idade <=59 ) {
            img.setAttribute('src', 'img/homem.png')
        } else if (idade > 60 ) {
            img.setAttribute('src', 'img/idoso.png')
        }
    
    }
    } else {
        if (idade >= 0 && idade < 21){
            //Garota
            img.setAttribute('src', 'img/garota.png')
        } else if (idade >= 21 && idade <=59 ) {
            img.setAttribute('src', 'img/mulher.png')
        } else if (idade > 60 ) {
            img.setAttribute('src', 'img/idosa.png')
        }
    }    

    res.style.textAlign = 'center'
    res.innerHTML = `Resultado da Idade calculada : ${idade}`
    res.appendChild(img)

}