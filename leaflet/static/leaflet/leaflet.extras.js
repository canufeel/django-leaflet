L.Control.ResetView = L.Control.extend({
    ICON: 'url(images/reset-view.png)',
    TITLE: "Reset view",

    options: {
        position: 'topleft'
    },

    initialize: function (bounds, options) {
        this.bounds = bounds;
    },

    onAdd: function (map) {
        if (map.resetviewControl) {
            map.removeControl(map.resetviewControl);
        }
        map.resetviewControl = this;
        
        container = L.DomUtil.create('div', 'leaflet-control-zoom');
        var link = L.DomUtil.create('a', 'leaflet-control-zoom-out', container);
        link.href = '#';
        link.title = L.Control.ResetView.TITLE;
        link.style.backgroundImage = L.Control.ResetView.ICON;
        L.DomEvent.addListener(link, 'click', L.DomEvent.stopPropagation)
                  .addListener(link, 'click', L.DomEvent.preventDefault)
                  .addListener(link, 'click', L.Util.bind(function() {
                        map.fitBounds(this.bounds);
                   }, this));
        return container;
    }
});
