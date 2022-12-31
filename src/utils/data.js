export const userQuery = userId => {
  const docId = userId.replace('@gmail.com', '');
  const query = `*[_type == "user" && _id == '${docId}']`;
  return query;
};
