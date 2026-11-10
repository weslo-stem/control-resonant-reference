# Spike
## <img src="{{icon_power}}" style="border: 0px;"/> Combat Ability

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_spike}}" alt="Spike Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Summon an Astral Spike to attack enemies. It can also be directed to attack and knock down a target. Builds up
                    <img src="{{icon_status_astralized}}"/><strong><b>Astralized</b></strong>.
                </p>
            </div>
        </div>
       <div class="combat-ability-gif">
            <img src="{{gif_spike}}" alt="Spike">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
        <img src="{{gif_spike}}" alt="Spike">
    </div>
    <hr>
    <div class="flex-container">
        <div class="htable" style="overflow-x: auto; width: 100%;">
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

Following activations will command the Astral Spike to attack and stun the target. Damage and falter values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level. 

# Damage

#### *Base Damage and Falter values by Ability Strength*


{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Astral']) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/spike.csv', ['Astral']) }}