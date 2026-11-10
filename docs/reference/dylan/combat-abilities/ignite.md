# Ignite
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_ignite}}" alt="Ignite Icon">
            <div class="image-subtitle">
                <p class="inline-svg">Melee Attacks and 
                <a href="{{page_barrage}}"><img src="{{icon_barrage}}"/><strong><b>Barrage</b></strong></a>,
                <a href="{{page_shield}}"><img src="{{icon_shield}}"/><strong><b>Shield</b></strong></a>, and
                <a href="{{page_volatile_anomaly}}"><img src="{{icon_volatile_anomaly}}"/><strong><b>Volatile Anomaly</b></strong></a> do 
                <img src="{{icon_fire_damage}}"/><strong><b>Fire Damage</b></strong> that applies
                <img src="{{icon_status_burn}}"/><strong><b>Burn</b></strong>.</p>
            </div>
        </div>
        <div class="combat-ability-gif">
            <img src="{{gif_ignite}}" alt="Ignite">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
            <img src="{{gif_ignite}}" alt="Ignite">
        </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td><strong><b>The Deserter</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_fire_damage}}"/><strong><b>Fire Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Initial <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>200</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Persistent <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>45/s</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Bonus damage and falter is applied to all melee attacks and the above listed combat abilities while **Ignite** is active. These values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.

# Damage

#### *Base Damage and Falter values by Ability Strength*


{% include "reference/dylan/combat-abilities/html/buffs_dropdown.html" %}
{% from "reference/dylan/combat-abilities/html/damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/ignite.csv', ['Fire']) }}