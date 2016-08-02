let tableManager = (function(arrFromCM){
  return {
    createBigTable: function(arrFromCM){
      items.innerHTML = "";
      arrFromCM.forEach(function(item, i, arr){
        let container = document.createElement('div');
        container.innerHTML = compiledDetailed(arr[i]);
        items.appendChild(container);
      })

    },
    createSmallTable: function(arrFromCM){
      items.innerHTML = "";
      arrFromCM.forEach(function(item, i, arr){
        let container = document.createElement('div');
        container.innerHTML = compiledCompact(arr[i]);
        items.appendChild(container);
      })
    },
    //Выводим максимальное или минимальное количство домов
    getStreetWithSomeHouses: function(objFromCM){
      items.innerHTML = "";
      let container = document.createElement('div');
      container.innerHTML = compiledDetailed(objFromCM);
      items.appendChild(container);
    }
  };
})();
