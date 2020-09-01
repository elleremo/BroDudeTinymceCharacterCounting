jQuery(document).ready(function($) {

    $('.word-count').after( '<span>. Символов: </span><span class="chars-count"></span>' );
    var charsCountBlock = $('.chars-count');

    // Функция для подсчёта знаков
    function charsCount (parameters ){
        var content = parameters.content;
        if( content ) charsCountBlock.text( content.replace(/<[^>]+>/g, "").length );
    };

    // Выполним подсчёт при загрузке страницы
    charsCount( {content: $('.wp-editor-area').val()} );

    // Создадим плагин 'keyup_event' для tinymce
    tinymce.PluginManager.add('keyup_event', function( editor, url ) {

        // Create keyup event
        editor.on('keyup', function(e) {

            // Получаем контент из редактора (html)
            get_ed_content = tinymce.activeEditor.getContent();
            // Do stuff here... (run do_stuff_here() function)
            do_stuff_here(get_ed_content);

        });

    });

    // This function allows the script to run from both locations (visual and text)
    function do_stuff_here(content) {

        // Now, you can further process the data in a single function
        charsCount( {content: content} );

    }

});
