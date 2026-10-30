{% from "reference/world/vendors/shopgrid.html" import vendorTable %}
# Vendor - Unknown

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="vendor-image left-box" style="padding: 5px">
            <img src="{{img_vendor_unknown}}" alt="Vendor - Unknown">
        </div>
    </div>
    <div class="flex-container">
        <div class="left-box" style="overflow-x: auto; padding: 5px;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Unlock: <img src="{{icon_vendor_level_1}}"/><strong><b>Level II</b></strong></th>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Unlock: <img src="{{icon_vendor_level_2}}"/><strong><b>Level III</b></strong></th>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Closest <img src="{{icon_fast_travel}}"/><strong><b>Warp Door</b></strong></th>
                    </tr>
                    <tr>
                        <td>Zone Level: <b>2</b></td>
                        <td>Zone Level: <b>14</b></td>
                        <td><b>Tower Island</b><br><b>Dylan's Apartment</b> (post-game)</td>
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
    <img src="{{icon_vendor_level_1_blue}}" style="border: 0px"/>
    <img src="{{icon_vendor_level_2_yellow}}" style="border: 0px"/>
</div>
<div class="combat-ability-infobox">
    {{ vendorTable('vendor_tables/vendor_unknown.csv') }}
</div>