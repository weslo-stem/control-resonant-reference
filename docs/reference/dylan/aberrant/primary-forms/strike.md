# Strike
## <img src="{{icon_aberrant_form}}" style="border: 0px;"/> Primary Aberrant Form

<div class="flex-container">

<div class="combat-ability-infobox" style="width: 100%;">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_strike}}" alt="strike Icon">
            <div class="image-subtitle">
                <p class="inline-svg">A fast attack with a high Critical Chance.</p>
            </div>
        </div>
        <div class="combat-ability-gif right-box">
            <img src="{{gif_strike}}" alt="Strike">
        </div>
    </div>
    <div class="flex-container" style="gap: 10px;">
        <div class="right-box htable" style="overflow-x: auto; width: 100%;">
            <table class="weapon-info">
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)"><b>Unlock</b></th>
                        <td><a href="/control-resonant-reference/reference/items/materials/living-shard/" style="color: var(--floral-white)"><img src="/control-resonant-reference/images/items/living_shard_small.png" style="border: 0px; margin: 0px; height: 40px; vertical-align: central"><b>Living Shard</b></a></td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Unlock <img src="{{icon_aberrant_strength}}"/><strong><b>Aberrant Strength</b></strong> Boost</th>
                        <td colspan="2" class="inline-svg">+5</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td colspan="2" class="inline-svg"><img src="{{icon_raw_damage}}"/><strong><b>Raw Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg"><img src="{{icon_power}}"/><strong><b>Power</b></strong> Recovery</th>
                        <td colspan="2" class="inline-svg">Low</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Critical Chance</th>
                        <td colspan="2" class="inline-svg">30%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Aberrant Strength level.

# Damage

Damage Falter % Calculation: `100% + ( Aberrant Strength * 1.67% )`

Note that all values displayed in-game are rounded.

#### *Base Damage and Falter values by Aberrant Strength*

{% from "reference/dylan/aberrant/table-generation/striketable.html" import strikeTable %}
{{ strikeTable('tables/damage_tables/weapon_forms/strike.csv') }}