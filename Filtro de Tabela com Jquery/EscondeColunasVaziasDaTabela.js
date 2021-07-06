//Esconde as colunas 
$('.testeTable tr th').each(function(i) { 
    
    //seleciona todos os tds nessa coluna
    var tds = $(this).parents('table').find('tr td:nth-child(' + (i + 1) + ')'); 
    
    //verifica se todas as celulas na coluna estao vazias
    if(tds.length == tds.filter(':empty').length) { 
        //hide header
        $(this).hide(); 
        
        //hide cells
        tds.hide(); 
    } 
}); 