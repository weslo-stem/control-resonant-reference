{% from "reference/world/vendors/shopgrid_htmls/shopgrid.html" import vendorTable %}
# Vendor
### *Evacuation Zone (Secret)*

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="vendor-image left-box image-subtitle" style="padding: 5px">
            <img src="{{img_vendor_secret_evacuation_zone}}" alt="Vendor - Evacuation Zone">
            <p class="inline-svg">This Vendor can be found on the 15th floor of the <b>Evac Building</b> after completing the main story quest: <b>Enemy of My Enemy</b>.</p>
        </div>
    </div>
    <div class="flex-container">
        <div class="left-box htable" style="overflow-x: auto; padding: 5px;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Closest <img src="{{icon_fast_travel}}"/><strong><b>Warp Door</b></strong></th>
                    </tr>
                    <tr>
                        <td class="inline-svg"><img src="{{icon_fast_travel}}"/><b>Main Street</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<br>

## Stock
<div class="shop-legend">
    <p>Color Legend: </p>
    <img src="{{icon_vendor_level_0}}" style="border: 0px"/>
</div>
<div class="combat-ability-infobox">
    {{ vendorTable('tables/vendor_tables/vendor_evacuation_zone_secret.csv') }}
</div>