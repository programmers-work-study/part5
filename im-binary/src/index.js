import { inputAutoFocus } from './utils/index.js'
import {
    validateId,
    validatePassword,
    checkPassword,
    checkValidation,
} from './utils/index.js'

const $idInput = document.querySelector('#id')
const $passwordInput = document.querySelector('#pw')
const $passwordCheckInput = document.querySelector('#pw-check')

const $submitButton = document.querySelector('#submit')

inputAutoFocus($idInput)

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
        alert('회원가입 성공!')
    } else {
        alert('회원가입 실패!')
    }
})
