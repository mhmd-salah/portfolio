/*=============== FILTERS TABS ===============*/

const tabs  =  document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll( '[data-content]' )

tabs.forEach((tab)  => {
  tab.addEventListener("click", () => {
    const target = document.querySelector( tab.dataset.target )
    tabContent.forEach( tc => {
      tc.classList.remove("filters__active")
    } )
    target.classList.add("filters__active")
    tabs.forEach( t => {
      t.classList.remove("filters-tab-active")
    } )
    tab.classList.add("filters-tab-active")
  })
})

/*=============== DARK LIGHT THEME ===============*/
const modeButton = document.getElementById( "theme-button" )
modeButton.addEventListener( "click", function () {
  document.body.toggleAttribute("dark-theme")
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
