const validarBoleto= (linhaDigitavel:any) => {

  if(linhaDigitavel.length == 47){
      
    let codInst = linhaDigitavel.slice(0,3);
    let moeda = linhaDigitavel.slice(3,4);
    let campolivre1 = linhaDigitavel.slice(4,9); //20 a 24
    let dv1 = linhaDigitavel.slice(9,10);
    let campolivre2 = linhaDigitavel.slice(10,20); //25 a 34
    let dv2 = linhaDigitavel.slice(20,21);
    let campolivre3 = linhaDigitavel.slice(21,31); //35 a 44
    let dv3 = linhaDigitavel.slice(31,32);
    let dv4 = linhaDigitavel.slice(32,33);
    let vencimento = linhaDigitavel.slice(33,37);
    let valor = linhaDigitavel.slice(37,47);
    
    const linedv = codInst+moeda+campolivre1+dv1+campolivre2+dv2+campolivre3+dv3
    const aux = []
    for(let i = 0; i <linedv.length; i++){
      if(i/2 == 0){
        aux.push(linedv[i]*2);
      }
      else{
        aux.push(linedv[i])
      }
    }

    const barcode = codInst+moeda+dv4+vencimento+valor+campolivre1+campolivre2+campolivre3;
    const amount = (parseInt(valor,10)/100).toFixed(2)

    let date = new Date("10/07/1997")
    date.setTime(date.getTime() + (vencimento *24 *60 *60 *1000));
    const expirationDate = date.toISOString().split('T')[0]
    

    const response = [
      {
        "barCode": barcode,
        "amount": amount,
        "expirationDate": expirationDate
      }
    ]
    return response
    }
  else{
    throw new Error
  }
}

export default validarBoleto;
