class CityManager {
  constructor(options) {
    this.itemsWrap = options.itemsWrap,
      this.btnMaxCount = options.btnMaxCount,
      this.btnMinCount = options.btnMinCount,
      this.btnMaxVer = options.btnMaxVer,
      this.btnMinVer = options.btnMinVer,
      this.btnAdd = options.btnAdd,
      this.jsonObj = options.jsonObj;

    this.jsonToArray();
    tableManager.createBigTable(this.arrOfCities);

    this.btnMinVer.onclick = this.showMinVer.bind(this);
    this.btnMaxVer.onclick = this.showMaxVer.bind(this);
    this.btnAdd.onclick = this.addCity.bind(this);
    this.btnMaxCount.onclick = this.FindMaxCountOfHouse.bind(this);
    this.btnMinCount.onclick = this.FindMinCountOfHouse.bind(this);
    this.itemsWrap.onclick = this.deleteCity.bind(this);
  }

  addCity(e) {
    e.preventDefault();
    this.arrOfCities.push({
      id: +document.getElementById('id').value,
      city: document.getElementById('city').value,
      street: document.getElementById('street').value,
      countOfHouses: +document.getElementById('countOfHouses').value
    });

    tableManager.createBigTable(this.arrOfCities);
  }

  deleteCity(e) {
    let target = e.target;
    // console.log(target);
    if (target.tagName == "BUTTON") {
      let idItem = +target.parentNode.parentNode.id;

      this.arrOfCities.forEach((item, i, arr) => {
        if (item.id === idItem) {
          arr.splice(i, 1);
        }
      });
    }
    tableManager.createBigTable(this.arrOfCities);
  }

  showMinVer() {
    tableManager.createSmallTable(this.arrOfCities);
  }

  showMaxVer() {
    tableManager.createBigTable(this.arrOfCities);
  }

  //Найти минимальное количество домов
  FindMinCountOfHouse() {
    let temp = 999999;

    this.arrOfCities.forEach((item, i, arr) => {

      if (temp > arr[i].countOfHouses) {
        temp = arr[i].countOfHouses;
        this.objOfMinHouses = Object.assign({}, arr[i]);
      }

    });

    tableManager.getStreetWithSomeHouses(this.objOfMinHouses);
  }

  // Найти максимальное количество домов
  FindMaxCountOfHouse() {
    let temp = 0;

    this.arrOfCities.forEach((item, i, arr) => {

      if (temp < arr[i].countOfHouses) {
        temp = arr[i].countOfHouses;
        this.objOfMaxHouses = Object.assign({}, arr[i]);
      }

    });

    tableManager.getStreetWithSomeHouses(this.objOfMaxHouses);
  }

  jsonToArray() {
    this.arrOfCities = JSON.parse(this.jsonObj);
  }

}
