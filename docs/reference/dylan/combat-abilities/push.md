# Push
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_push}}" alt="Push Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Sends enemies flying backwards. Push them off ledges and into hazards for more
                    <img src="{{icon_generic_damage}}"/><strong><b>Damage</b></strong>.
                </p>
            </div>
        </div>
       <div class="combat-ability-gif">
            <img src="{{gif_push}}" alt="Push">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_push}}" alt="Push">
    </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td><strong><b>The Dancer</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_raw_damage}}"/><strong><b>Raw Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg"><img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>300</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.

# Damage

#### *Base Damage and Falter values by Ability Strength*


{% include "reference/dylan/combat-abilities/html/buffs_dropdown.html" %}
{% from "reference/dylan/combat-abilities/html/damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/push.csv', ['Raw']) }}