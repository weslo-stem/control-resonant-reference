# Crush
## <img src="{{icon_aberrant_form}}" style="border: 0px;"/> Secondary Aberrant Form

<div class="flex-container">

<div class="combat-ability-infobox" style="width: 100%;">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_crush}}" alt="Crush Icon">
        </div>
        <div class="combat-ability-gif right-box">
            <img src="{{gif_astral_rebuke}}" alt="Astral Rebuke">
        </div>
       
    </div>
    <div class="flex-container" style="gap: 10px;">
        <div class="image-subtitle left-box">
            <p class="inline-svg">A slow, high <img src="{{icon_generic_damage}}"/><strong><b>Damage</b></strong> attack that can knock enemies down. Can be charged to do more damage. Charged attacks deal <img src="{{icon_falter_damage}}"/><strong><b>Falter</b></strong>.</p>
        </div>
        <div class="right-box htable" style="overflow-x: auto;">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_blunt_damage}}"/><strong><b>Blunt Damage</b></strong></td>
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

{% from "reference/dylan/aberrant/table-generation/crushtable.html" import crushTable %}
{{ crushTable('tables/damage_tables/weapon_forms/crush.csv') }}