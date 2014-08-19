$(document).ready(function(){
    var addItemBtn = $('#add-item-btn'),
        addItemBox = $('#add-item-box'),
        todoListWrapper = $('.todo-list-wrapper'),
        addItemHandler = function(name) {
            var todoListItem = $('<li/>').addClass('todo-item'),
                checkbox = $('<input />').attr('type', 'checkbox');

            if (!name) {
                return false;
            }

            $('.example').remove();
            todoListItem.append(checkbox).append(name);
            todoListWrapper.append(todoListItem);
            addItemBox.val('');
            return false;
        };


    addItemBtn.on('click', function() {
        // "  foo  ".trim() = "foo"
        var name = addItemBox.val().trim();
        addItemHandler(name)
    });
    addItemBox.on('keypress', function(e) {
        var name = addItemBox.val().trim();
        if (e.keyCode === 13) {
            e.preventDefault();
            // "  foo  ".trim() = "foo"
            addItemHandler(name);
        }
    });
    $.getJSON('items.json', function(response) {
        var listItems = response.listItems;
        $.each(response.listItems, function(i, el) {
            addItemHandler(el.name);
        });
    });
});
