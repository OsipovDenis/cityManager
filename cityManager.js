class CityManager {
  constructor(options) {
    this.itemsWrap = options.itemsWrap,
      this.btnMaxCount = options.btnMaxCount,
      this.btnMinCount = options.btnMinCount,
      this.btnMaxVer = options.btnMaxVer,
      this.btnMinVer = options.btnMinVer,
      this.btnAdd = options.btnAdd;

    let self = this;
    fetch({
      method: 'GET',
      url: url
    }).then( function(data){
      console.log(data);
      self.jsonToArray(data);
    })

    this.btnMinVer.onclick = this.showMinVer.bind(this);
    this.btnMaxVer.onclick = this.showMaxVer.bind(this);
    this.btnAdd.onclick = this.addCity.bind(this);
    this.btnMaxCount.onclick = this.findMaxCountOfHouse.bind(this);
    this.btnMinCount.onclick = this.findMinCountOfHouse.bind(this);
    this.itemsWrap.onclick = this.deleteCity.bind(this);
  }

  addCity(e) {
    e.preventDefault();
    this.arrOfCities.push({
      id: +document.getElementById('Id').value,
      city: document.getElementById('City').value,
      street: document.getElementById('Street').value,
      countOfHouses: +document.getElementById('CountOfHouses').value
    });

    let self = this;
    fetch({
      method: 'PUT',
      url: url,
      data: this.arrOfCities
    }).then( function(){
      tableManager.createBigTable(self.arrOfCities);
    })
  }

  deleteCity(e) {
    let target = e.target;
    // console.log(target);
    if (target.tagName == "BUTTON") {
      let idItem = +target.parentNode.parentNode.id;

      _.remove(this.arrOfCities, function(item){
        return item.id === idItem;
      })
    }

    let self = this;
    fetch({
      method: 'PUT',
      url: url,
      data: this.arrOfCities
    }).then( function(){
      tableManager.createBigTable(self.arrOfCities);
    })
  }

  showMinVer() {
    tableManager.createSmallTable(this.arrOfCities);
  }

  showMaxVer() {
    tableManager.createBigTable(this.arrOfCities);
  }

  //Найти минимальное количество домов
  findMinCountOfHouse() {
    let temp;

    this.objOfMinHouses = _.minBy(this.arrOfCities, function(item){
      return item.countOfHouses;
    });

    tableManager.getStreetWithSomeHouses(this.objOfMinHouses);
  }

  // Найти максимальное количество домов
  findMaxCountOfHouse() {

    this.objOfMaxHouses = _.maxBy(this.arrOfCities, function(item){
      return item.countOfHouses;
    });

    tableManager.getStreetWithSomeHouses(this.objOfMaxHouses);
  }

  jsonToArray(jsonObj) {
    // console.log(jsonObj);
    this.arrOfCities = JSON.parse(jsonObj);
    tableManager.createBigTable(this.arrOfCities);
  }

}
