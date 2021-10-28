function contar() {
  let i = window.document.getElementById('ni')
  let f = window.document.getElementById('nf')
  let p = window.document.getElementById('np')
  let msg = window.document.querySelector('div#msg')
  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    window.alert('[ERRO] verifique os dados e tente novamente')
    msg.innerHTML = `Impossivel contar !`
  } else {
    msg.innerHTML = `Contando: `
    let ini = Number(i.value)
    let fin = Number(f.value)
    let passo = Number(p.value)
    if (passo <= 0) {
      window.alert('[passo invalido] considerando passo = 1 !')
      passo = 1
    }
    if (ini < fin) {
      for (let c = ini; c <= fin; c += passo) {
        msg.innerHTML += ` ${c} \u{1F449}` /*U+1F449(codigo de emoji html). 
            \u{1F449}(codigo de emoji p/ javascript) lembrar q o u é minusculo no javascript  */
      }
    } else {
      for (let c = ini; c >= fin; c -= passo) {
        msg.innerHTML += `${c} \u{1F449}`
      }
    }
    msg.innerHTML += `\u{1F44D}` /* LEMBRAR de concatenar SINAL DE CONCATENAÇÂO = += */
  }
}
