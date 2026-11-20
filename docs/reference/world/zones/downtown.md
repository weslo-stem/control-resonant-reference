# Downtown

For a far more verbose interactive map, please check out <a href='https://mapgenie.io/control-resonant/maps/district'>mapgenie.io</a>. (Spoiler warning)

<div style="display:flex; flex-direction:row; ">
	<div id="map"></div>
	{% from "reference/world/zones/zone_upgrades.html" import zone_upgrades %}
	{{ zone_upgrades('Downtown') }}
</div>

{% from "reference/world/zones/zone_upgrades.html" import zone_upgrades_mobile %}
{{ zone_upgrades_mobile('Downtown') }}