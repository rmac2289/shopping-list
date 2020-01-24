$(function() {
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        let text = $('input').val();
        let listItem = '<li><span class="shopping-item">'+ text +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
        $('ul').append(listItem);

      });
      $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();

      });
      $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
          $(this).parents('.shopping-item-controls').siblings().toggleClass('shopping-item__checked');
      })
        })

