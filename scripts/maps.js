var path = window.location.pathname;
var pagename = path.split('/').at(-2);
var getMap = new Map();

console.log(pagename)

getMap.set('downtown', 'district_map_zone_downtown.tex.png')
getMap.set('central', 'district_map_zone_frontline.tex.png')
getMap.set('evacuation-zone', 'district_map_zone_hiss.tex.png')
getMap.set('the-park', 'district_map_zone_mold.tex.png')
getMap.set('west-incursion-zone', 'district_map_zone_pattern.tex.png')
getMap.set('underpass', 'district_map_zone_undercity.tex.png')
getMap.set('unknown', 'district_map_zone_twisted.tex.png')

if (getMap.has(pagename)) {
    var img = new Image()
    img.src = '/control-resonant-reference/images/maps/' + getMap.get(pagename);

    img.addEventListener("load", () => {
        var bounds = [[0, 0], [img.naturalHeight, img.naturalWidth]];
        var mymap = L.map('map', {
            crs: L.CRS.Simple,
            maxZoom: 2,
            minZoom: -2,
            maxBounds: bounds,
            maxBoundsViscosity: 1.0
        }).setView([img.height / 2, img.width / 2]);
        console.log(img.naturalHeight + " " + img.naturalWidth);

        L.imageOverlay(img.src, bounds, {
            class: "full-map-img",
            attribution: '© <a href="https://www.remedygames.com/">Remedy Games</a>',
            id: 'map/' + pagename,
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(mymap);

        mymap.fitBounds(bounds);
        mymap.invalidateSize();

    })
}