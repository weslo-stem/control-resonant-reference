# Spore Burst
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_spore_burst}}" alt="Spore Burst Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Rapidly fire
                    <img src="{{icon_mold_damage}}"/><strong><b>Mold</b></strong>
                    projectiles at a target, building up
                    <img src="{{icon_status_infected}}"/><strong><b>Infected</b></strong>.
                </p>
            </div>
        </div>
       <div class="combat-ability-gif">
            <img src="{{gif_spore_burst}}" alt="Spore Burst">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
            <img src="{{gif_spore_burst}}" alt="Spore Burst">
        </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td><strong><b>The Collective</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_mold_damage}}"/><strong><b>Mold Damage</b></strong><br><img src="{{icon_sharp_damage}}"/><strong><b>Sharp Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg"><img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>250</td>
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


{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Mold', 'Sharp']) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/spore_burst.csv', ['Mold', 'Sharp']) }}