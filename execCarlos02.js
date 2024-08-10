    let horabrasil, horafranca
  
    horabrasil = parseFloat(prompt('Que horas são aqui no Brasil?'));
    horafranca = horabrasil + 5;

    //Condição para ajustar a hora na frança para o formato de 24 horas
    if (horafranca >= 24) {
     horafranca -= 24; 
    }
    
    alert(`A hora aqui no Brasil é: ${horabrasil.toFixed(2)} e na França é: ${horafranca.toFixed(2)}`);