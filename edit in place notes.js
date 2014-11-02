<form>
    <input type="hidden" name="hiddenField" />
</form>

<p>Please edit me...</p>

<script type="text/javascript">
var replaceWith = $('<input name="temp" type="text" />'),
    connectWith = $('input[name="hiddenField"]');

$('p').inlineEdit(replaceWith, connectWith);
</script>

$('span[name=displayText]').click(function() {
  $(this).hide();
  $('input[name=editText]', $(this).closest('td')).show();
});

//
$.fn.inlineEdit = function(replaceWith, connectWith) {

    $(this).hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $(this).click(function() {

        var elem = $(this);

        elem.hide();
        elem.after(replaceWith);
        replaceWith.focus();

        replaceWith.blur(function() {

            if ($(this).val() != "") {
                connectWith.val($(this).val()).change();
                elem.text($(this).val());
            }

            $(this).remove();
            elem.show();
        });
    });
};


$(document).ready(function() {
  var oldText, newText;
  $(".editable").hover(
                  function()
                  {
                      $(this).addClass("editHover");
                  }, 
                  function()
                  {
                      $(this).removeClass("editHover");
                  }
                  );
 
  $(".editable").bind("dblclick", replaceHTML);
    
    
  $(".btnSave").live("click", 
                  function()
                  {
                      newText = $(this).siblings("form")
                                       .children(".editBox")
                                       .val().replace(/"/g, "");
                                        
                      $(this).parent()
                             .html(newText)
                             .removeClass("noPad")
                             .bind("dblclick", replaceHTML);
                  }
                  ); 
   
  $(".btnDiscard").live("click", 
                  function()
                  {
                      $(this).parent()
                             .html(oldText)
                             .removeClass("noPad")
                             .bind("dblclick", replaceHTML);
                  }
                  ); 
   
  function replaceHTML()
                  {
                      oldText = $(this).html()
                                       .replace(/"/g, """);

                      $(this).addClass("noPad")
                             .html("")
                             .html("<form><input type=\"text\" class=\"editBox\" 
                              value=\"" + oldText + "\" /> </form><a href=\"#\" class=\"btnSave\">Save changes</a> 
                             .unbind('dblclick', replaceHTML);
           
                  }
}
);