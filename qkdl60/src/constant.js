export const INPUT_TYPE = {
    ID: 'ID',
    PW: 'PW',
    PW_CHECK: 'PW_CHECK',
}
export const INPUT_TYPE_ID = {
    [INPUT_TYPE.ID]: '#id',
    [INPUT_TYPE.PW]: '#pw',
    [INPUT_TYPE.PW_CHECK]: '#pw-check',
}

export const ERROR_TYPE = {
    SPACE: 'SPACE',
    [INPUT_TYPE.ID]: 'ID_NOT_VALID',
    [INPUT_TYPE.PW]: 'PW_NOT_VALID',
    [INPUT_TYPE.PW_CHECK]: 'PW_NOT_COLLECT',
}

export const ERROR_MESSAGE = {
    [ERROR_TYPE.SPACE]: '필수 정보입니다. ',
    [ERROR_TYPE.ID]: '5~20자의 영문 대소문자, 숫자를 사용하세요.',
    [ERROR_TYPE.PW]: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    [ERROR_TYPE.PW_CHECK]: '비밀번호가 일치하지 않습니다.',
}
