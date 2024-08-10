        let valor, notas100, notas50, notas10 
        
        const valorSaque = parseFloat(prompt('Digite o valor do saque!'))

        if(valorSaque % 10 !== 0){
            alert('valor invalid! Adicione outro valor para sacar!')
        }else{
            valor = valorSaque

            notas100 = Math.floor(valor / 100)
            valor %= 100
            
            notas50 = Math.floor(valor / 50)
            valor %= 50

            notas10 = Math.floor(valor / 10)
            
            alert(`Notas de 100; ${notas100}\n Notas de 50; ${notas50} \n Notas de 10; ${notas10}`)
        }