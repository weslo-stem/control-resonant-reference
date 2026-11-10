# Astral Rebuke
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox" style="width: 100%;" >
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_astral_rebuke}}" alt="Astral Rebuke Icon">
            <div class="image-subtitle">
                <p class="inline-svg">Unleash a homing spike that erupts beneath enemies and throws them in the air. Applies
                <img src="{{icon_status_lifted}}"/><strong><b>Lifted</b></strong> and builds up
                <img src="{{icon_status_astralized}}"/><strong><b>Astralized</b></strong>.</p>
            </div>
        </div>
       <div class="combat-ability-gif ">
            <img src="{{gif_astral_rebuke}}" alt="Astral Rebuke">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_astral_rebuke}}" alt="Astral Rebuke">
    </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td class="iBLURREDi"><strong><b>The Physicist</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_astral_damage}}"/><strong><b>Astral Damage</b></strong></td>
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
{{ caBuffsDropdown(['Astral']) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/astral_rebuke.csv', ['Astral']) }}
    