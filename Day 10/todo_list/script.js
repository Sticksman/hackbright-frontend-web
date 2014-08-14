$(document).ready(function(){
    var addItemBtn = $('#add-item-btn'),
        addItemBox = $('#add-item-box'),
        todoListWrapper = $('.todo-list-wrapper'),
        addItemHandler = function() {
            var todoListItem = $('<li/>').addClass('todo-item'),
                // "  foo  ".trim() = "foo"
                todoName = addItemBox.val().trim(),
                checkbox = $('<input />').attr('type', 'checkbox');

            if (!todoName) {
                return false;
            }

            $('.example').remove();
            todoListItem.append(checkbox).append(todoName);
            todoListWrapper.append(todoListItem);
            addItemBox.val('');
            return false;
        };

    addItemBtn.on('click', addItemHandler);
    addItemBox.on('keypress', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            addItemHandler();
        }
    });
});
