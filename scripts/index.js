$(function() {
  function list(map, list) {
    var r = null;
    var item = null;
    for (var s in map) {
      item = $('<div class="map-item"></div>')
      r = map[s];

      item.append([
        $('<div class="symbol"></div>').text(s),
        $('<div class="result"></div>').html(r.map(x => '<span>' + x + '</span>')),
      ]);

      list.append(item);
    }
  }

  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/shorts.json', function(map) {
    list(map, $('.short-list'));
  });
  
  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/props.json', function(map) {
    list(map, $('.prop-list'));
  });
});
