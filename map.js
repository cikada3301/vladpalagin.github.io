;(function() {
    if (typeof ymaps === 'undefined') {
      return;
    }
  
    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
              center: [53.899058, 30.333161],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              balloonContent: 'Могилёв, Первомайская ул., 12'
          }, {
              iconLayout: 'default#image',
              iconImageHref: '\img\common\marker.svg',
              iconImageSize: [40, 63.2],
              iconImageOffset: [-50, -38]
          });
  
      myMap.geoObjects.add(myPlacemark);
  
      myMap.behaviors.disable('scrollZoom');
  });
  
  })();