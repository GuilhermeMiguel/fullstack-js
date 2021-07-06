$(function(){
    $("#tabela input").keyup(function(){       
        //Index das colunas começa em 0
        var indexColuna = $(this).parent().index();
        //Seleciona o td que é a coluna de cada tr
        var colunaParaPesquisa = "#tabela td:nth-child("+(indexColuna+1).toString()+")";
        var textoPesquisa = $(this).val().toUpperCase();
        $("#tabela tbody tr").show();
        $(colunaParaPesquisa).each(function(){
            if($(this).text().toUpperCase().indexOf(textoPesquisa) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#tabela input").blur(function(){
        $(this).val("");
    });
});



