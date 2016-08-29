$ ->
  $.get "/pets", (pets) ->
    $.each pets, (index, pet) ->
      $("#pets").append $("<li>").text pet.name