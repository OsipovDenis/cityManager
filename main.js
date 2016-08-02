let bigTemplate = document.getElementById('template').innerHTML,
    compiledDetailed = _.template(bigTemplate),
    smallTemplate = document.getElementById('template-2').innerHTML,
    compiledCompact = _.template(smallTemplate),
    url = 'https://citymanager-aaec7.firebaseio.com/cities.json';
