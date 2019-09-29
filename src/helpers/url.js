export function serializeSearch(searchString){
  if(!searchString)return;

  searchString = searchString.substring(1, searchString.length);

  let paramsArr = searchString.split('&');
  let params = {};

  paramsArr.forEach(param => {
    let paramObj = param.split('=');
    params[paramObj[0]] = paramObj[1]
  });

  return params;
}
