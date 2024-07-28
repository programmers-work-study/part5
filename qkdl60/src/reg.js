import { INPUT_TYPE } from './constant.js'
export const reg = {
    [INPUT_TYPE.ID]: /[^a-z0-9-_]/,
    [INPUT_TYPE.PW]: /[^a-zA-Z0-9]/,
}
