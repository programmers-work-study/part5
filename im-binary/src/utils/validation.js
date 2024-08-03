import { ERROR_MESSAGE } from '../constants.js'

export function validateId(id) {
    // 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
    const idRegex = /^[a-z0-9_-]{5,20}$/
    return idRegex.test(id)
}

export function validatePassword(password) {
    // 8~16자. 영문 대/소문자, 숫자 사용 가능
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/

    return passwordRegex.test(password)
}

export function checkPassword(password, passwordConfirm) {
    return password === passwordConfirm
}

function setErrorMessage($input, message) {
    const $errorElement = document.querySelector(`#${$input.id}-msg`)
    $errorElement.textContent = message
}

function errorMessage({ type }) {
    return ERROR_MESSAGE[type]
}

export function checkValidation($input, validationFunc) {
    const value = $input.value

    if (value.trim() === '') {
        $input.classList.add('invalid')
        setErrorMessage($input, errorMessage({ type: 'required' }))
        return false
    }
    if (validationFunc(value)) {
        $input.classList.remove('invalid')
        setErrorMessage($input, '')
        return true
    } else {
        $input.classList.add('invalid')
        setErrorMessage($input, errorMessage({ type: $input.id }))
        return false
    }
}
