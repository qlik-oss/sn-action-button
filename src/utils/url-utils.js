const getImageUrl = (imgUrl) => {
  imgUrl.replace(/^\.\.\//i, '/');
  imgUrl = imgUrl.replace(/"/g, '\\"');
  imgUrl = imgUrl.replace(/'/g, "\\'");
  const a = document.createElement('a');
  a.href = '/';
  const rootPath = a.href;
  imgUrl = rootPath + (imgUrl[0] === '/' ? imgUrl.substr(1) : imgUrl);
  return imgUrl;
};

export default {
  getImageUrl,
};
