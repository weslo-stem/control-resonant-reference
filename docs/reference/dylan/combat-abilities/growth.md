# Growth
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_growth}}" alt="Growth Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Summon a Mold Ally that shoots spores at enemies. These spores build up
                    <img src="{{icon_status_infected}}"/><strong><b>Infected</b></strong>
                    over time.
                </p>
            </div>
        </div>
       <div class="combat-ability-gif">
            <img src="{{gif_growth}}" alt="Growth">
       </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_growth}}" alt="Growth">
    </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%">
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
                        <td>330</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Maximum Mold Allies</th>
                        <td>2 (+1)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Maximum amount of Mold Ally summons can be increased to 3 by unlocking [insert talent name here]. Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.

# Damage

#### *Base Damage and Falter values by Ability Strength*


{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Mold', 'Sharp'], 'Growth', false, false) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/growth.csv', ['Mold', 'Sharp']) }}