function tabuada() {
  let num = window.document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) { /* se n for prenchido */
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''//limpa a area antes de gerar a taubuada toda vez q ela for gerada
    while (c <= 10){
        let item = document.createElement('option') //coloca elementos html pelo javascript
        item.text = `${n} X ${c} = ${n*c}` //texto q vai estar no item
        item.value = `tab${c}`//para selecionar a linha na caixa de options
        tab.appendChild(item)//adiciona um elemento filho
        c++
    }
  }
}
