const isEmpty = (rows) => {
  if ((rows && rows.length === 0) || !rows) return true;

  return false;
};

module.exports = isEmpty;
