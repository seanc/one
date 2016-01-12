$(function() {
  // Auto-generate list
  var list = $('.map-list');
  var sym = $('<div class="symbol"></div>');
  var res = $('<div class="result"></div>');

  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/seanc/one/master/shorts.json',
    dataType: 'json',
  })
  .success(function(map) {
    var r = null;
    var item = null;
    for (var s in map) {
      item = $('<div class="map-item"></div>')
      r = map[s];

      sym.text(s);
      res.text(r);

      item.append([ sym, res ]);

      list.append(item);
    }
  });
});
