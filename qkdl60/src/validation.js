import { ERROR_TYPE, INPUT_TYPE, INPUT_TYPE_ID } from './constant.js'
import { reg } from './reg.js'

export function validate(type) {
    const $input = document.querySelector(INPUT_TYPE_ID[type])
    const inputValue = $input.value
    if (inputValue.length === 0) return { error: ERROR_TYPE.SPACE }
    if (type !== INPUT_TYPE.PW_CHECK) {
        console.log(inputValue.length)
        const isNotValid = reg[type].test(inputValue)
        const isNotValidLength =
            type === INPUT_TYPE.ID
                ? inputValue.length < 5 || inputValue.length > 20
                : inputValue.length < 8 || inputValue.length > 16
        if (isNotValid || isNotValidLength) return { error: ERROR_TYPE[type] }
        return { error: null }
    }
    const $pwInput = document.querySelector(INPUT_TYPE_ID[INPUT_TYPE.PW])
    const pwValue = $pwInput.value
    const isNotValid = pwValue !== inputValue
    if (isNotValid) return { error: ERROR_TYPE.PW_CHECK }
    return { error: null }
}
