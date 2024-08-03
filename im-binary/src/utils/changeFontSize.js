import { MAX_FONT_SIZE, MIN_FONT_SIZE } from '../constants.js'

function getCurrentFontSize(target) {
    return parseFloat(window.getComputedStyle(target).fontSize)
}

export function changeFontSize({
    change,
    target,
    $increaseFontButton,
    $decreaseFontButton,
}) {
    const currentFontSize = getCurrentFontSize(target)

    const newFontSize = currentFontSize + change

    target.style.fontSize = `${newFontSize}px`

    $increaseFontButton.disabled = newFontSize >= MAX_FONT_SIZE
    $decreaseFontButton.disabled = newFontSize <= MIN_FONT_SIZE
}
