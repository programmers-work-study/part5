// TODO: 이 곳에 정답 코드를 작성해주세요.

// DOM 요소 선택
const form = document.getElementById('form')
const idInput = document.getElementById('id')
const pwInput = document.getElementById('pw')
const pwCheckInput = document.getElementById('pw-check')
const submitButton = document.getElementById('submit')
const modal = document.getElementById('modal')
const cancelBtn = document.getElementById('cancel-btn')
const approveBtn = document.getElementById('approve-btn')
const increaseFontBtn = document.getElementById('increase-font-btn')
const decreaseFontBtn = document.getElementById('decrease-font-btn')

// 유효성 검사 패턴
const idPattern = /^[a-z0-9_-]{5,20}$/
const pwPattern = /^[A-Za-z0-9]{8,16}$/

// 폰트 사이즈 관리
let currentFontSize = 16

// 1. Autofocus
window.addEventListener('load', () => {
    idInput.focus()
})

// 2. 유효성 검사 로직
function validateInput(input, pattern) {
    if (!input.value) {
        showError(input, '필수 정보입니다.')
        return false
    }
    if (pattern && !pattern.test(input.value)) {
        if (input === idInput) {
            showError(
                input,
                '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
            )
        } else if (input === pwInput) {
            showError(input, '8~16자 영문 대 소문자, 숫자를 사용하세요.')
        }
        return false
    }
    showError(input, '')
    return true
}

function validatePwCheck() {
    if (pwCheckInput.value !== pwInput.value) {
        showError(pwCheckInput, '비밀번호가 일치하지 않습니다.')
        return false
    }
    showError(pwCheckInput, '')
    return true
}

function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-msg`)
    errorElement.textContent = message
    input.classList.toggle('border-red-600', message !== '')
}

// 3. 입력 확인 모달 창
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (
        validateInput(idInput, idPattern) &&
        validateInput(pwInput, pwPattern) &&
        validatePwCheck()
    ) {
        document.getElementById('confirm-id').textContent = idInput.value
        document.getElementById('confirm-pw').textContent = pwInput.value
        modal.showModal()
    }
})

cancelBtn.addEventListener('click', () => {
    modal.close()
})

approveBtn.addEventListener('click', () => {
    alert('가입되었습니다!')
    modal.close()
})

// 4. 폰트 사이즈 조절 버튼
function updateFontSize() {
    document.body.style.fontSize = `${currentFontSize}px`
    increaseFontBtn.disabled = currentFontSize >= 20
    decreaseFontBtn.disabled = currentFontSize <= 12
}

increaseFontBtn.addEventListener('click', () => {
    if (currentFontSize < 20) {
        currentFontSize++
        updateFontSize()
    }
})

decreaseFontBtn.addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize--
        updateFontSize()
    }
})

// 초기 폰트 사이즈 설정
updateFontSize()

// input focus out 이벤트 처리
;[idInput, pwInput, pwCheckInput].forEach((input) => {
    input.addEventListener('blur', () => {
        if (input === pwCheckInput) {
            validatePwCheck()
        } else {
            validateInput(input, input === idInput ? idPattern : pwPattern)
        }
    })
})
