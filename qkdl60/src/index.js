import {
    ERROR_MESSAGE,
    INPUT_TYPE,
    INPUT_TYPE_ID,
    FONT_SIZE,
} from './constant.js'
import { validate } from './validation.js'

// TODO: 이 곳에 정답 코드를 작성해주세요.
autofocus()

const $idInput = document.querySelector(INPUT_TYPE_ID[INPUT_TYPE.ID])
function autofocus() {
    const $idInput = document.querySelector(INPUT_TYPE_ID[INPUT_TYPE.ID])
    $idInput.focus()
}
$idInput.addEventListener('focusout', (event) => {
    validateTarget(INPUT_TYPE.ID, event.target)
})

const $pwInput = document.querySelector(INPUT_TYPE_ID[INPUT_TYPE.PW])
$pwInput.addEventListener('focusout', (event) => {
    validateTarget(INPUT_TYPE.PW, event.target)
})
const $pwCheckInput = document.querySelector(INPUT_TYPE_ID[INPUT_TYPE.PW_CHECK])
$pwCheckInput.addEventListener('focusout', (event) => {
    validateTarget(INPUT_TYPE.PW_CHECK, event.target)
})

const $signInButton = document.querySelector('#submit')
const $modal = document.querySelector('#modal')
const $modalId = document.querySelector('#confirm-id')
const $modalPw = document.querySelector('#confirm-pw')
$signInButton.addEventListener('click', (event) => {
    event.preventDefault()

    const isValidId = validateTarget(INPUT_TYPE.ID, $idInput)
    const isValidPw = validateTarget(INPUT_TYPE.PW, $pwInput)
    const isValidPWCheck = validateTarget(INPUT_TYPE.PW_CHECK, $pwCheckInput)
    if (!isValidId || !isValidPw || !isValidPWCheck) return

    $modalId.textContent = $idInput.value
    $modalPw.textContent = $pwInput.value
    $modal.setAttribute('open', true)
})

const $approveBtn = document.querySelector('#approve-btn')
$approveBtn.addEventListener('click', () => {
    alert('가입 축하🎉🎉')
})

const $cancelBtn = document.querySelector('#cancel-btn')
$cancelBtn.addEventListener('click', () => {
    $modal.removeAttribute('open')
})

function validateTarget(type, $target) {
    const { error } = validate(INPUT_TYPE[type])
    const $pwErrorMessage = document.querySelector(`${INPUT_TYPE_ID[type]}-msg`)
    if (error !== null) {
        $target.classList.add('border-red-600')
        $pwErrorMessage.textContent = ERROR_MESSAGE[error]
        return false
    }
    $target.classList.remove('border-red-600')
    $pwErrorMessage.textContent = ''
    return true
}

let currentFontSize = 2
const $fontControlBox = document.querySelector('#font-control-box')
$fontControlBox.addEventListener('click', (event) => {
    const $target = event.target

    if ($target.id === 'font-control-box') return
    const $plusBtn = document.querySelector('#increase-font-btn')
    const $minusBtn = document.querySelector('#decrease-font-btn')
    if ($target.id === 'increase-font-btn') {
        $idInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        $pwInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        $pwCheckInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        currentFontSize++
        $idInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        $pwInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        $pwCheckInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        //TODO 증가 시키고 최대면 비활상화, - 활성화
        if (currentFontSize === 4) $plusBtn.setAttribute('disabled', true)
        if (currentFontSize === 1) $minusBtn.removeAttribute('disabled')
    } else {
        //TODO 감소시키고 최대 활상화
        $idInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        $pwInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        $pwCheckInput.classList.remove(`text-${FONT_SIZE[currentFontSize]}`)
        currentFontSize--
        $idInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        $pwInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        $pwCheckInput.classList.add(`text-${FONT_SIZE[currentFontSize]}`)
        //TODO 증가 시키고 최대면 비활상화, - 활성화
        if (currentFontSize === 3) $plusBtn.removeAttribute('disabled')
        if (currentFontSize === 0) $minusBtn.setAttribute('disabled', true)
    }
})
