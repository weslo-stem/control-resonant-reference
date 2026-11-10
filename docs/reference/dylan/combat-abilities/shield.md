# Shield
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_shield}}" alt="Shield Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Shield absorbs damage. Its durability is equal to the
                    <img src="{{icon_power}}"/><strong><b>Power</b></strong>
                    meter.
                    <br>
                    <img src="{{icon_nav_dodge}}"/><strong><b>Dodge</b></strong>
                    with Shield to <b>Shield Bash</b>.
                </p>
            </div>
        </div>
        <div class="combat-ability-gif">
            <img src="{{gif_shield}}" alt="Shield">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_shield}}" alt="Shield">
    </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td><strong><b>The Artist</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_blunt_damage}}"/><strong><b>Blunt Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Activation <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>100</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Shield Bash <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>600</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

<p class="inline-svg">Inherits <img src="{{icon_fire_damage}}"/><strong><b>Fire Damage</b></strong> boost and <img src="{{icon_falter_damage}}"/><strong><b>Falter</b></strong> boost from <a href="{{page_ignite}}"><img src="{{icon_ignite}}"/><strong><b>Ignite</b></strong></a>. Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.</p>

# Damage

#### *Base Damage and Falter values by Ability Strength*

#### **Shield Bash Damage:**

{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Blunt']) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/shield.csv', ['Blunt']) }}