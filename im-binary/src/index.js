import { changeFontSize, inputAutoFocus } from './utils/index.js'
import {
    validateId,
    validatePassword,
    checkPassword,
    checkValidation,
} from './utils/index.js'

const $idInput = document.getElementById('id')
const $passwordInput = document.getElementById('pw')
const $passwordCheckInput = document.getElementById('pw-check')

const $submitButton = document.getElementById('submit')
const $modal = document.getElementById('modal')
const $confirmId = document.getElementById('confirm-id')
const $confirmPassword = document.getElementById('confirm-pw')
const $closeModalButton = document.getElementById('cancel-btn')
const $approveButton = document.getElementById('approve-btn')

const $html = document.documentElement
const $increaseFontButton = document.getElementById('increase-font-btn')
const $decreaseFontButton = document.getElementById('decrease-font-btn')

inputAutoFocus($idInput)

$increaseFontButton.addEventListener('click', () => {
    changeFontSize({
        change: 1,
        target: $html,
        $increaseFontButton,
        $decreaseFontButton,
    })
})

$decreaseFontButton.addEventListener('click', () => {
    changeFontSize({
        change: -1,
        target: $html,
        $increaseFontButton,
        $decreaseFontButton,
    })
})

$idInput.addEventListener('focusout', () => {
    checkValidation($idInput, validateId)
})

$passwordInput.addEventListener('focusout', () => {
    checkValidation($passwordInput, validatePassword)
})

$passwordCheckInput.addEventListener('focusout', () => {
    checkValidation($passwordCheckInput, () =>
        checkPassword($passwordInput.value, $passwordCheckInput.value)
    )
})

$submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const isValidId = checkValidation($idInput, validateId)
    const isValidPassword = checkValidation($passwordInput, validatePassword)
    const isValidPasswordCheck = checkValidation($passwordCheckInput, () =>
        checkPassword($passwordInput.value, $passwordCheckInput.value)
    )

    if (isValidId && isValidPassword && isValidPasswordCheck) {
        $confirmId.textContent = $idInput.value
        $confirmPassword.textContent = $passwordInput.value
        $modal.showModal()
    }
})

$closeModalButton.addEventListener('click', () => {
    $modal.close()
})

$approveButton.addEventListener('click', () => {
    alert('가입되었습니다 🥳')
    $modal.close()
})
