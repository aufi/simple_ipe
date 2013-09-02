@IPE =
  init: ->
    fields = $('input.ipe, textarea.ipe')
    labels = $('.ipe:not(input):not(textarea)')
    fields.hide()
    labels.click ->
      console.log 'click'
      label = $(this)
      label.hide()
      field = label.next('.ipe')
      field.show()
      field.focus()
      field.focusout ->
        field.hide()
        label.show()