# Glaive
## <img src="{{icon_aberrant_form}}" style="border: 0px;"/> Primary Aberrant Form

<div class="flex-container">

<div class="combat-ability-infobox" style="width: 100%;">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_glaive}}" alt="Glaive Icon">
        </div>
        <div class="combat-ability-gif right-box">
            <img src="{{gif_astral_rebuke}}" alt="Astral Rebuke">
        </div>
       
    </div>
    <div class="flex-container" style="gap: 10px;">
        <div class="image-subtitle left-box">
            <p class="inline-svg">A fast attack with a high Critical Chance.</p>
        </div>
        <div class="right-box htable" style="overflow-x: auto;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_raw_damage}}"/><strong><b>Raw Damage</b></strong></td>
                    </tr
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

{% from "reference/dylan/aberrant/table-generation/glaivetable.html" import glaiveTable %}
{{ glaiveTable('tables/damage_tables/weapon_forms/glaive.csv') }}