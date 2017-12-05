// ANIMATION LORS DU SCROLL,'ACTIVE' SUR LES BOUTONS
$(function () {
  var sections = []
  var id = false
  var $navbar = $('.navigation')
  var $navbara = $('a', $navbar)

  // animation vers la section ciblée
  $navbara.click(function (e) {
    e.preventDefault()
    $('.sections').animate({
      scrollTop: $('.sections').scrollTop() - $('.sections').offset().top + $($(this).attr('href')).offset().top
    })
    hash($(this).attr('href'))
  })

  // remplissage du tableau de sections
  $navbara.each(function () {
    sections.push($($(this).attr('href')))
  })

  let scrolledId = ''

  // detection de la section actuelle et modification du boutton qui contient sont lien
  $('.sections').scroll(function (e) {
    var scrollTop = $(this).offset().top + ($(window).height() / 2)
    for (var i in sections) {
      var section = sections[i]
      var offset = section.offset()
      if (offset !== undefined) {
        if (scrollTop > offset.top) {
          scrolledId = section.attr('id')
        }
      }
    }
    if (scrolledId !== id) {
      id = scrolledId
      $navbara.removeClass('current')
      $('a[href="#' + id + '"]', $navbar).addClass('current')
    }
  })
})

// ajout de hash pour enregistrer les positions visitées dans l'historique du navigateur
let hash = function (h) {
  if (history.pushState) {
    history.pushState(null, null, h)
  } else {
    location.hash = h
  }
}

$(document).ready(function () {
  var stars = $('.star')

  for (var i = stars.length - 1; i >= 0; i--) {
    var star = stars[i]
    var note = $(star).attr('class').split(' ')[1]
    $(star).append('<span></span>')
    $(star).find('span').css('left', note + '%')
  }

  var cw = $('.smartphone-hide').width()
  $('.smartphone-hide').css({
    'height': cw + 'px'
  })
})

$(window).resize(function () {
  var cw = $('.smartphone-hide').width()
  $('.smartphone-hide').css({
    'height': cw + 'px'
  })
})
