let tableManager = (function(arrFromCM){
  return {
    createBigTable: function(arrFromCM){
      items.innerHTML = "";
      arrFromCM.forEach(function(item, i, arr){
        let container = document.createElement('div');
        container.innerHTML = compiled1(arr[i]);
        items.appendChild(container);
      })

    },
    createSmallTable: function(arrFromCM){
      items.innerHTML = "";
      arrFromCM.forEach(function(item, i, arr){
        let container = document.createElement('div');
        container.innerHTML = compiled2(arr[i]);
        items.appendChild(container);
      })
    },
    //Выводим максимальное или минимальное количство домов
    getStreetWithSomeHouses: function(objFromCM){
      items.innerHTML = "";
      let container = document.createElement('div');
      container.innerHTML = compiled1(objFromCM);
      items.appendChild(container);
    }
  };
})();
