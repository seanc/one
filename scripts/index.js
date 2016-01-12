$(function() {
  // Auto-generate list
  var list = $('.map-list');

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

      item.append([
        $('<div class="symbol"></div>').text(s),
        $('<div class="result"></div>').text(r),
      ]);

      list.append(item);
    }
  });
});
