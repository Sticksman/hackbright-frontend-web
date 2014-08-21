$(document).ready(function(){

    var COMPLETE_EVENT_STR = 'COMPLETE-ITEM',
        addItemBtn = $('#add-item-btn'),
        addItemBox = $('#add-item-box'),
        removeItemBtn = $('#remove-item-btn'),
        completeItemBtn = $('#complete-item-btn'),
        todoListWrapper = $('.todo-list-wrapper'),
        doneListWrapper = $('.done-list-wrapper'),
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
            todoListItem.on(COMPLETE_EVENT_STR, function() {
                var _this = $(this),
                    fn = function() {
                        _this.remove()
                    };
                fn();
                doneListWrapper.append(_this);

            });
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

    removeItemBtn.on('click', function() {
        var checkedItems = $('.todo-item').children('input[type=checkbox]:checked');

        checkedItems.parents('.todo-item').remove();
    });
    completeItemBtn.on('click', function() {
        var checkedItems = $('.todo-item').children('input[type=checkbox]:checked'),
            todoListItems = checkedItems.parents('.todo-item');

        todoListItems.addClass('complete');
        todoListItems.trigger(COMPLETE_EVENT_STR);
    });

    /*
     * $.ajax({
     *      url: 'items.json',
     *      success: function(response) {
     *          // Same stuff in here.
     *      }
     * });
     *
     */
    $.getJSON('items.json', function(response) {
        var listItems = response.listItems;
        $.each(response.listItems, function(i, el) {
            addItemHandler(el.name);
        });
    });
});
