const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (message, alertFunction) => {
  return alertFunction(message);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
