exports.validationCheck = (data) => {
  for (let key in data) {
    if (!data[key]) {
      return { status: false, errorAt: key };
    }
  }
  return { status: true };
};
