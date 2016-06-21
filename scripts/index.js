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

  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/shorts.json', function() {
    list.call($('.short-list'));
  });
  
  $.getJSON('https://raw.githubusercontent.com/seanc/one/master/props.json', function() {
    list.call($('.prop-list'));
  });
});
