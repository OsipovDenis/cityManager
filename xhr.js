function fetch({
  method,
  url,
  data = null
}){
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if(data !== null){
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }

  return new Promise(function(resolve, reject){
    xhr.onload = function(){
      if(this.status == 200){
        try {
          resolve(this.responseText);
        } catch(e) {
          reject(new Error('wrong json'));
        }
      } else {
        reject(new Error(`wrong status ${this.status}`));
      }
    }
  });
}
