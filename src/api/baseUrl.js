export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  console.log([name, url])
  name = name.replace(/[\[\]]/g, "\\$&");
  console.log(name)
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  console.log(results)
  if (!results) return null;
  if (!results[2]) return '';
  console.log(results[2] + 'stuff')
  // console.log(decodeURIComponent(results[2].replace(/\+/g, " ")))
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
