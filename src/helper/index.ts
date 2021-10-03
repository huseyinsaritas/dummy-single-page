export const emailFormatValid = (email: string): RegExpMatchArray | null => {
  return email.match(/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

export const passwordFormatValid = (password: string): RegExpMatchArray | null => {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!-@#$^_:,. ]{8,})$/);
};

export const phoneNumberFormatValid = (phone: string): RegExpMatchArray | null => {
  return phone.match(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
};
