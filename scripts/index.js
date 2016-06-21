$(function() {
  function list(map) {
    var r = null;
    var item = null;
    for (var s in map) {
      item = $('<div class="map-item"></div>')
      r = map[s];

      item.append([
        $('<div class="symbol"></div>').text(s),
        $('<div class="result"></div>').html(r.map(x => '<span>' + x + '</span>')),
      ]);

      this.append(item);
    }
  }

  var shortsHandler = list.bind($('.map-list'));
  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/shorts.json', shortsHandler);
  
  var propsHandler = list.bind($('.prop-list'));
  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/props.json', propsHandler);
});
