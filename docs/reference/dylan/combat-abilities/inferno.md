# Inferno
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_inferno}}" alt="Inferno Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Generates increasingly intense
                    <img src="{{icon_fire_damage}}"/><strong><b>Fire</b></strong>
                    waves applying
                    <img src="{{icon_status_burn}}"/><strong><b>Burn</b></strong>
                    that builds up.
                </p>
            </div>
        </div>
        <div class="combat-ability-gif">
            <img src="{{gif_inferno}}" alt="Inferno">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_inferno}}" alt="Inferno">
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
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg"><img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>150</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Inferno attacks can be rapidly chained by quick, persistent inputs. Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.

# Damage

#### *Base Damage and Falter values by Ability Strength*


{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Fire']) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/inferno.csv', ['Fire']) }}