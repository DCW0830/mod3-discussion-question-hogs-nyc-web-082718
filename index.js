/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  time = Math.random() * range
  setTimeout(() => {
    fadeOut(div)
  }, time)
}

function delayedFadeIn(div, range) {
  time = Math.random() * range
  setTimeout(() => {
    fadeIn(div)
  }, time)
}

function fadeAllOut(el, group) {
  newGroup = group.filter((item) => item !== el)
  newGroup.forEach(div => {
    delayedFadeOut(div, SHORTRANGE)
  })

  delayedFadeOut(el, LONGRANGE)
}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}
