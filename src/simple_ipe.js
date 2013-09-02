this.IPE = {
    init: function() {
        var fields, labels;
        fields = $('input.ipe, textarea.ipe');
        labels = $('.ipe:not(input):not(textarea)');
        fields.hide();
        return labels.click(function() {
            var field, label;
            console.log('click');
            label = $(this);
            label.hide();
            field = label.next('.ipe');
            field.show();
            field.focus();
            return field.focusout(function() {
                field.hide();
                return label.show();
            });
        });
    }
};