window.onload = function () {
  const elID = document.querySelector('#id');
  const elPW = document.querySelector('#pw');
  const elPWC = document.querySelector('#pw-check');

  const elID_EM = document.querySelector('#id-msg');
  const elPW_EM = document.querySelector('#pw-msg');
  const elPWC_EM = document.querySelector('#pw-check-msg');

  const elSubmitBtn = document.querySelector('#submit');
  const elModal = document.querySelector('#modal');
  const elModalId = document.querySelector('#confirm-id');
  const elModalPw = document.querySelector('#confirm-pw');

  const elCancelBtn = document.querySelector('#cancel-btn');
  const elApproveBtn = document.querySelector('#approve-btn');

  const elInFont = document.querySelector('#increase-font-btn');
  const elDeFont = document.querySelector('#decrease-font-btn');
  const MAX_FONT_SIZE = 20;
  const MIN_FONT_SIZE = 12;
  const elForm = document.querySelector('#form');
  elID.focus();

  function showMessage(element, message, addClass) {
    element.textContent = message;
    if (addClass) {
      element.classList.add('border-red-600');
    } else {
      element.classList.remove('border-red-600');
    }
  }

  function handleFocusOut(element, validator, messageElement, message) {
    element.addEventListener('focusout', () => {
      const isValid = validator(element.value);
      showMessage(messageElement, isValid ? '' : message, !isValid);
    });
  }

  handleFocusOut(elID, isValidID, elID_EM, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
  handleFocusOut(elPW, isValidPW, elPW_EM, '8~16자 영문 대 소문자, 숫자를 사용하세요.');
  handleFocusOut(elPWC, () => isSamePW(elPW.value, elPWC.value), elPWC_EM, '비밀번호가 일치하지 않습니다.');

  elSubmitBtn.addEventListener('click', (event) => {
    const resId = isValidID(elID.value);
    const resPw = isValidPW(elPW.value);
    const resPwC = isSamePW(elPW.value, elPWC.value);

    showMessage(elID_EM, resId ? '' : '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.', !resId);
    showMessage(elPW_EM, resPw ? '' : '8~16자 영문 대 소문자, 숫자를 사용하세요.', !resPw);
    showMessage(elPWC_EM, resPwC ? '' : '비밀번호가 일치하지 않습니다.', !resPwC);

    if (!resId || !resPw || !resPwC) {
      event.preventDefault();
    } else {
      elModal.showModal();
      elModalId.textContent = elID.value;
      elModalPw.textContent = elPWC.value;
      event.preventDefault();
    }
  });

  elCancelBtn.addEventListener('click', () => {
    elModal.close();
  });

  elApproveBtn.addEventListener('click', () => {
    elModal.close();
    window.alert('가입되었습니다 🥳');
    window.location.reload();
  });

  elInFont.addEventListener('click', () => {
    onChangeFontSize('increase');
  });

  elDeFont.addEventListener('click', () => {
    onChangeFontSize('decrease');
  });

  function onChangeFontSize(flag) {
    const currentFontSize = parseInt(window.getComputedStyle(elForm).fontSize);
    let newSize = flag === 'increase' ? currentFontSize + 1 : currentFontSize - 1;
    elForm.style.fontSize = `${newSize}px`;
    elDeFont.disabled = newSize <= MIN_FONT_SIZE;
    elInFont.disabled = newSize >= MAX_FONT_SIZE;
  }
};

function isValidID(id) {
  const reg = /^[a-z0-9_-]{5,20}$/;
  return reg.test(id);
}

function isValidPW(pw) {
  const reg = /^[a-zA-Z0-9]{8,16}$/;
  return reg.test(pw);
}

function isSamePW(pw, pwc) {
  return pw === pwc;
}
