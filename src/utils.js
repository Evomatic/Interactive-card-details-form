export const removeLetters = value => {
  return value.replace(/[^\d]/g, '');
};

export const removeNumbers = value => {
  return value.replace(/^\d+$/, '').toUpperCase();
};

export const containsAnyLetters = value => {
  return /[a-z]/i.test(value);
};

export const formatCardNumber = value => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  return removeLetters(value).replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' ')
  );
};

export const isEmptyString = value => {
  return value.trim().length === 0;
};

export const checkLengthOfString = (key, value) => {
  const valueLength = value.split('').length;

  if (key === 'card_number') {
    return valueLength === 16;
  } else if (key === 'cvc') {
    return valueLength === 3;
  } else if (key === 'month' || key === 'year') {
    return valueLength === 2;
  } else {
    return true;
  }
};
