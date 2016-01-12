$(function() {
  // Auto-generate list
  var list = $('.map-list');
  var item = $('<div class="map-item"></div>');
  var sym = $('<div class="symbol"></div>');
  var res = $('<div class="result"></div>');
  item.append([ sym, res ]);

  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/seanc/one/master/shorts.json',
    dataType: 'json',
  })
  .success(function(map) {
    var r = null;
    for (var s in map) {
      r = map[s];

      sym.text(s);
      res.text(r);

      list.append(item);
    }
  });
});
