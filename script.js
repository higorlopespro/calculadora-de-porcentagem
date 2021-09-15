function porcentagemcomun(){
    var tn1 = window.document.getElementById("n1")
    var tn2 = window.document.getElementById("n2")
    var result = window.document.getElementById("result01")
    if(tn1.value == 0 || tn2.value == 0){
        window.alert("Erro!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = (n1/100) * n2
        result.innerHTML = (`<p>${soma}</p>`)
    }
    
}

function aumentodeporcentagem(){
    var tn1 = window.document.getElementById("aun1")
    var tn2 = window.document.getElementById("aun2")
    var result = window.document.getElementById("result02")
    if(tn1.value == 0 || tn2.value == 0){
        window.alert("Erro!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma01 = (n2 - n1) / n1
        var soma02 = soma01*100
        result.innerHTML = (`<p>${soma02}%</p>`)
    }
}

function diminuiudeporcentagem(){
    var tn1 = window.document.getElementById("dimn1")
    var tn2 = window.document.getElementById("dimn2")
    var result = window.document.getElementById("result03")
    if(tn1.value == 0 || tn2.value == 0){
        window.alert("Erro!")
    }else{
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma01 = (n1 - n2) / n1
        var soma02 = soma01*100
        result.innerHTML = (`<p>${soma02}%</p>`)
    }
}