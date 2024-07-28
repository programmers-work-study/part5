import { ERROR_MESSAGE, INPUT_TYPE, INPUT_TYPE_ID } from './constant.js'
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
