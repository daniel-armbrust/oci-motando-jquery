//
// js/ajax-functions.js
//

function getMotoMarca() {

    $.ajax({

        url: 'https://api.ocibook.com.br/motando/20220304/moto/marca',
        type: 'GET', 
        dataType: 'json',    

        beforeSend: function() {          

            $('#id_select_moto_marca').prop('disabled', true); 
            $('#id_select_moto_marca').empty();
            $('#id_select_moto_marca').append('<option value="" id="id_option_moto_marca_empty">Carregando...</option>');          

        },       
        success: function(jsonResp) {

            if (jsonResp.status === 'success') {

                $('#id_option_moto_marca_empty').attr('value', '').html('Todas as Marcas');
                              
                jsonResp.data.map((marca) => {
                     $('#id_select_moto_marca').append(`<option value="${marca.id}">${marca.marca}</option>`);
                });

                $('#id_select_moto_marca').prop('disabled', false); 
            }
            else {
                
                $('#id_select_moto_marca').prop('disabled', true); 
                $('#id_select_moto_marca').empty(); 
                $('#id_select_moto_marca').append('<option value="" id="id_option_moto_marca_empty">Selecione a Marca</option>');            

                console.error(jsonResp.message);
            }            
        },
        error: function(xhr, textStatus, errorThrown) {

            $('#id_select_moto_marca').prop('disabled', true); 
            $('#id_select_moto_marca').empty(); 
            $('#id_select_moto_marca').append('<option value="" id="id_option_moto_marca_empty">Selecione a Marca</option>');  

            console.error(textStatus);
        }
    });
}

function getMotoModelo(marcaId) {

      $.ajax({

        url: `https://api.ocibook.com.br/motando/20220304/moto/marca/modelo?marca-id=${marcaId}`,
        type: 'GET', 
        dataType: 'json',    

        beforeSend: function() {

            $('#id_select_moto_modelo').prop('disabled', true); 
            $('#id_select_moto_modelo').empty();
            $('#id_select_moto_modelo').append('<option value="" id="id_option_moto_modelo_empty">Carregando...</option>');            

        },      
        success: function(jsonResp) {

            if (jsonResp.status === 'success') {

                $('#id_option_moto_modelo_empty').attr('value', '').html('Todos os Modelos');
                              
                jsonResp.data.map((modelo) => {
                     $('#id_select_moto_modelo').append(`<option value="${modelo.id}">${modelo.modelo}</option>`);
                });

                $('#id_select_moto_modelo').prop('disabled', false); 
            }
            else {
                
                $('#id_select_moto_modelo').prop('disabled', true); 
                $('#id_select_moto_modelo').empty(); 
                $('#id_select_moto_modelo').append('<option value="" id="id_option_moto_modelo_empty">Selecione o Modelo</option>');            

                console.error(jsonResp.message);
            }            
        },
        error: function(xhr, textStatus, errorThrown) {

            $('#id_select_moto_modelo').prop('disabled', true); 
            $('#id_select_moto_modelo').empty(); 
            $('#id_select_moto_modelo').append('<option value="" id="id_option_moto_modelo_empty">Selecione o Modelo</option>');  

            console.error(textStatus);
        }        
    });   
}

function getMotoModeloVersao(marcaId, modeloId) {

    $.ajax({

        url: `https://api.ocibook.com.br/motando/20220304/moto/marca/modelo/versao?marca-id=${marcaId}&modelo-id=${modeloId}`,
        type: 'GET', 
        dataType: 'json',    

        beforeSend: function() {

            $('#id_select_moto_modelo_versao').prop('disabled', true); 
            $('#id_select_moto_modelo_versao').empty();
            $('#id_select_moto_modelo_versao').append('<option value="" id="id_option_moto_modelo_versao_empty">Carregando...</option>');            

        },      
        success: function(jsonResp) {

            if (jsonResp.status === 'success') {

                $('#id_option_moto_modelo_versao_empty').attr('value', '').html('Todas as Vers??es');
                              
                jsonResp.data.map((versao) => {
                     $('#id_select_moto_modelo_versao').append(`<option value="${versao.id}">${versao.versao}</option>`);
                });

                $('#id_select_moto_modelo_versao').prop('disabled', false); 
            }
            else {
                
                $('#id_select_moto_modelo_versao').prop('disabled', true); 
                $('#id_select_moto_modelo_versao').empty(); 
                $('#id_select_moto_modelo_versao').append('<option value="" id="id_option_moto_modelo_versao_empty">Selecione a Vers??o</option>');            

                console.error(jsonResp.message);
            }            
        },
        error: function(xhr, textStatus, errorThrown) {

            $('#id_select_moto_modelo_versao').prop('disabled', true); 
            $('#id_select_moto_modelo_versao').empty(); 
            $('#id_select_moto_modelo_versao').append('<option value="" id="id_option_moto_modelo_versao_empty">Selecione a Vers??o</option>');  

            console.error(textStatus);
        }        
    });   
}

function getBrasilEstados() {

    $.ajax({

      url: 'https://api.ocibook.com.br/motando/20220304/brasil/estado',
      type: 'GET', 
      dataType: 'json',    

      beforeSend: function() {

          $('#id_select_brasil_estado').prop('disabled', true); 
          $('#id_select_brasil_estado').empty();
          $('#id_select_brasil_estado').append('<option value="" id="id_option_brasil_estado_empty">Carregando...</option>');            

      },      
      success: function(jsonResp) {

          if (jsonResp.status === 'success') {

              $('#id_option_brasil_estado_empty').attr('value', '').html('Todos os Estados');
                            
              jsonResp.data.map((estado) => {
                   $('#id_select_brasil_estado').append(`<option value="${estado.id}">${estado.estado} (${estado.sigla})</option>`);
              });

              $('#id_select_brasil_estado').prop('disabled', false); 
          }
          else {
              
              $('#id_select_brasil_estado').prop('disabled', true); 
              $('#id_select_brasil_estado').empty(); 
              $('#id_select_brasil_estado').append('<option value="" id="id_option_brasil_estado_empty">Selecione o Estado</option>');            

              console.error(jsonResp.message);
          }          
      },
      error: function(xhr, textStatus, errorThrown) {

          $('#id_select_brasil_estado').prop('disabled', true); 
          $('#id_select_brasil_estado').empty(); 
          $('#id_select_brasil_estado').append('<option value="" id="id_option_brasil_estado_empty">Selecione o Estado</option>');  

          console.error(textStatus);
      }        
  });   
}

function getBrasilCidade(estadoId) {

    $.ajax({

      url: `https://api.ocibook.com.br/motando/20220304/brasil/estado/cidade?estado-id=${estadoId}`,
      type: 'GET', 
      dataType: 'json',    

      beforeSend: function() {

          $('#id_select_brasil_cidade').prop('disabled', true); 
          $('#id_select_brasil_cidade').empty();
          $('#id_select_brasil_cidade').append('<option value="" id="id_option_brasil_cidade_empty">Carregando...</option>');            

      },      
      success: function(jsonResp) {

          if (jsonResp.status === 'success') {

              $('#id_option_brasil_cidade_empty').attr('value', '').html('Todas as Cidades');
                            
              jsonResp.data.map((cidade) => {
                   $('#id_select_brasil_cidade').append(`<option value="${cidade.id}">${cidade.cidade}</option>`);
              });

              $('#id_select_brasil_cidade').prop('disabled', false); 
          }
          else {
              
              $('#id_select_brasil_cidade').prop('disabled', true); 
              $('#id_select_brasil_cidade').empty(); 
              $('#id_select_brasil_cidade').append('<option value="" id="id_option_brasil_cidade_empty">Selecione a Cidade</option>');            

              console.error(jsonResp.message);
          }          
      },
      error: function(xhr, textStatus, errorThrown) {

          $('#id_select_brasil_cidade').prop('disabled', true); 
          $('#id_select_brasil_cidade').empty(); 
          $('#id_select_brasil_cidade').append('<option value="" id="id_option_brasil_cidade_empty">Selecione a Cidade</option>');  

          console.error(textStatus);
      }        
  });   
}