$('.iframe-container').addClass('d-none d-md-block')  // add bootstrap class to make iframe hidden on smaller viewports
$('a.btn').attr('target', '_blank')                   // all link btn opens new tab instead of redirect current page
// $('.project-tile').css('display', 'none')

const tileList = $('.project-tile')
const loadingAnimation = '<div class="spinner-grow text-dark" role="status"><span class="sr-only">Loading...</span></div>'

// function to check if element is in viewport
const isElementInViewport = (elem) => {
  // window dimensions
  let windowHeight = $(window).height()
  let windowTop = $(window).scrollTop()
  let windowBottom = windowHeight + windowTop

  // console.log(`Window Dimension: ${windowHeight} ; ${windowTop} ; ${windowBottom}`)

  // element dimensions
  let elemHeight = $(elem).outerHeight()
  let elemTop = $(elem).offset().top
  let elemBottom = elemTop + elemHeight

  // console.log(`Window Dimension: ${elemHeight} ; ${elemTop} ; ${elemBottom}`)

  return (elemBottom >= windowTop) && (elemTop <= windowBottom)
}

// animate all project tile to fadeIn when in viewport
$(window).scroll(() => {

  for (let i = 0; i < tileList.length; i++) {
    isElementInViewport(tileList[i]) ?
      $(tileList[i]).addClass('fadeIn') && $(tileList[i]).removeClass('fadeOut') :
      $(tileList[i]).addClass('fadeOut') && $(tileList[i]).removeClass('fadeIn')
  }
})