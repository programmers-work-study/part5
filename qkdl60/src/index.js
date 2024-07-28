// TODO: 이 곳에 정답 코드를 작성해주세요.
const $signInButton = document.querySelector('#submit')
$signInButton.addEventListener('click', (event) => {
    event.preventDefault()
})
autofocus()

function autofocus() {
    const $idInput = document.querySelector('#id')
    $idInput.focus()
}
