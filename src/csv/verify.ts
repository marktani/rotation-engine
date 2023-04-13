export const verifyCsvHeaders = (headers: string[]): boolean => {
  if (headers.length === 2 && headers[0] === 'id' && headers[1] === 'json') {
    return true;
  }

  return false;
};
