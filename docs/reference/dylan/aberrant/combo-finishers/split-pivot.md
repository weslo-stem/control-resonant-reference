# Split Pivot
## <img src="{{icon_aberrant_form}}" style="border: 0px;"/> Combo Finisher Form

<div class="flex-container">

<div class="combat-ability-infobox" style="width: 100%;">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_split_pivot}}" alt="Split Pivot Icon">
            <div class="image-subtitle">
                
                <p class="inline-svg">An attack that becomes a circular blade that causes <img src="{{icon_generic_damage}}"/><strong><b>Damage</b></strong> and <img src="{{icon_falter_damage}}"/><strong><b>Falter</b></strong> for a short time.</p>
            </div>
        </div>
        <div class="combat-ability-gif right-box">
            <img src="{{gif_split_pivot}}" alt="Split Pivot">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_split_pivot}}" alt="Split Pivot">
    </div>
    <hr>
    <div class="flex-container" style="gap: 10px;">
        <div class="htable" style="overflow-x: auto; width: 100%;">
            <table class="weapon-info">
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)"><b>Unlock</b></th>
                        <td><a href="/control-resonant-reference/reference/items/materials/living-shard/" style="color: var(--floral-white)"><img src="/control-resonant-reference/images/items/living_shard_small.png" style="border: 0px; margin: 0px; height: 40px; vertical-align: central"><b>Living Shard</b></a></td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Unlock <img src="{{icon_aberrant_strength}}"/><strong><b>Aberrant Strength</b></strong> Boost</th>
                        <td colspan="2" class="inline-svg">+5</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td colspan="2" class="inline-svg"><img src="{{icon_sharp_damage}}"/><strong><b>Sharp Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg"><img src="{{icon_power}}"/><strong><b>Power</b></strong> Recovery</th>
                        <td colspan="2" class="inline-svg">High</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Critical Chance</th>
                        <td colspan="2" class="inline-svg">0%</td>
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

{% from "reference/dylan/aberrant/table-generation/split_pivottable.html" import split_pivotTable %}
{{ split_pivotTable('tables/damage_tables/weapon_forms/split_pivot.csv') }}

# Upgrades
#### *Weapon Upgrade Tree*

{% from "reference/dylan/aberrant/upgrade_tree.html" import upgrade_tree %}
{{ upgrade_tree('Split Pivot') }}