 document.getElementById('formCor').addEventListener('submit', function(event) {
            event.preventDefault();
            var cor = document.getElementById('selecionaCor').value;
            var titulo = document.querySelector('h1');
            switch(cor){
                case 'red':
                    document.body.style.backgroundColor = 'red';
                    titulo.textContent = "Você escolheu a cor Vermelha";
                    break;
                case 'blue':
                    document.body.style.backgroundColor = 'blue';
                    titulo.textContent = "Você escolheu a cor Azul";
                    break;
                case 'green':
                    document.body.style.backgroundColor = 'green';
                    titulo.textContent = "Você escolheu a cor Verde";
                    break;
                default:
                    document.body.style.backgroundColor = 'white';
                    titulo.textContent = "Você não escolheu uma cor válida";
            }
        });