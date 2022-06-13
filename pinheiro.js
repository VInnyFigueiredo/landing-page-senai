
function imprimaArvore(altura) {
        for (let index =0;index < altura; index++){  
          let estrela = '*';
          let espaco = ' ';

          for(let j = 1; j<= index; j++) {
                estrela += '**'
          }
          let espacoAntes = espaco.repeat(altura-index)
          console.log(espacoAntes + estrela);

        }
       }

