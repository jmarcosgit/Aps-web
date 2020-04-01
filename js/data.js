function relogio(){
    // Obtém a data/hora atual
    var data = new Date();
    var dias = new Array(
        'domingo','segunda','terça','quarta','quinta','sexta','sábado'
    );

    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes+1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;

    // Mostra o resultado
    document.getElementById("data").innerHTML = 'Hoje é ' + dias[data.getDay()] +' dia '+str_data;

    document.getElementById("hora").innerHTML = str_hora;

    alert('Hoje é ' + dias[data.getDay()] +' dia '+str_data);
    alert(str_hora);
}
setTimeout("atualizaRelogio()",1000);

function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
    
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}
    
    dataFormat = vdia + "/" + vmes + "/" + vano;
    horaFormat = vhora + ":" + vminuto + ":" + vsegundo;
    
    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;
    
    setTimeout("atualizaRelogio()",1000);
}