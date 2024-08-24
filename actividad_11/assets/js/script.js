function convert(checked) {
    const bigTemp = document.querySelector('#bigTemp');
    const bigC = document.querySelector('#bigC');
    const dias = document.querySelectorAll('.mb-0');

    if (checked) {
        bigTemp.innerHTML = fahren(bigTemp.innerHTML);
        bigC.innerHTML = '°F';
        for(const dia of dias){
            dia.innerHTML = fahren(dia.innerHTML);
        }
    } else {
        bigTemp.innerHTML = celsius(bigTemp.innerHTML);
        bigC.innerHTML = '°C';
        for(const dia of dias){
            dia.innerHTML = celsius(dia.innerHTML);
        }
    }
    
    console.log(bigTemp.innerHTML + " " + bigC.innerHTML + ' ' + checked);
    console.log(dias);
}



function fahren(temp) {
    let resultado = (temp * 9) / 5 + 32;
    //resultado = ((resultado * 10)|0 ) /10;
    return resultado.toFixed(1);
}

function celsius(temp){
    const resultado = (temp - 32) * 5 / 9;
    return resultado.toFixed(1);
}