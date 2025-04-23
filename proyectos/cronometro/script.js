let [segundos, minutos, horas] = [0, 0, 0];
        let tiempoRef = document.getElementById("tiempo");
        let intervalo = null;
        
        function actualizarTiempo() {
            segundos++;
            if (segundos === 60) { segundos = 0; minutos++; }
            if (minutos === 60) { minutos = 0; horas++; }
            
            let formatoTiempo = 
                (horas < 10 ? "0" + horas : horas) + ":" +
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos);
            
            tiempoRef.innerText = formatoTiempo;
        }
        
        document.getElementById("iniciar").addEventListener("click", () => {
            if (!intervalo) {
                intervalo = setInterval(actualizarTiempo, 1000);
            }
        });
        
        document.getElementById("reiniciar").addEventListener("click", () => {
            clearInterval(intervalo);
            intervalo = null;
            [segundos, minutos, horas] = [0, 0, 0];
            tiempoRef.innerText = "00:00:00";
        });