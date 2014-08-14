$(document).ready(function(){
    var addItemBtn = $('#add-item-btn'),
        addItemBox = $('#add-item-box'),
        todoListWrapper = $('.todo-list-wrapper');

    addItemBtn.on('click', function() {
        var todoListItem = $('<li/>').addClass('todo-item'),
            // "  foo  ".trim() = "foo"
            todoName = addItemBox.val().trim(),
            checkbox = $('<input />').attr('type', 'checkbox');

        if (!todoName) {
            return false;
        }

        todoListItem.append(checkbox).append(todoName);
        todoListWrapper.append(todoListItem);
        return false;
    });
});
