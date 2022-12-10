export const onlyNumbers = value => {
  return value.replace(/[^\d]/g, '');
};

export const lettersOnly = value => {
  return value.replace(/^\d+$/, '').toUpperCase();
};

export const formatCardNumber = value => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  return onlyNumbers(value).replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' ')
  );
};

export const isStringEmpty = value => {
  return value.trim().length === 0;
}

export const checkCreditCardDataOnSubmit = (data, setSubmit) => {
  const { card_holder } = data;
  console.log('data--', data)

  if (isStringEmpty(card_holder)) {
    return console.log('Cant be blank');
  }

  setSubmit(true);
  return data;
};
