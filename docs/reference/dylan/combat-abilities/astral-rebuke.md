# Astral Rebuke

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_astral_rebuke}}" alt="Astral Rebuke Icon">
        </div>
       <div class="image-subtitle right-box">
            <p class="inline-svg">Unleash a homing spike that erupts beneath enemies and throws them in the air. Applies
            <img src="{{icon_status_lifted}}"/><strong><b>Lifted</b></strong> and builds up
            <img src="{{icon_status_astralized}}"/><strong><b>Astralized</b></strong>.</p>
        </div>
    </div>
    <hr>
    <div class="flex-container">
        <div class="combat-ability-gif left-box">
            <img src="{{gif_astral_rebuke}}" alt="Astral Rebuke">
        </div>
        <div class="right-box" style="overflow-x: auto;">
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


<div style="overflow-x: auto;" markdown="1">
    
{% set reader1=pd_read_csv('tables/damage_tables/combat_abilities/astral_rebuke.csv') %}
{% set _=reader1.columns.values.__setitem__(0, '<span class="inline-svg"><img src="'+ icon_power +'"/><strong><b>Ability Strength</b></strong></span>') %}
{% set _=reader1.columns.values.__setitem__(2, '<span class="inline-svg"><img src="'+ icon_astral_damage +'"/><strong><b>Damage</b></strong></span>') %}
{% set _=reader1.columns.values.__setitem__(3, '<span class="inline-svg"><img src="'+ icon_falter_damage +'"/><strong><b>Falter</b></strong></span>') %}
{{ reader1 | convert_to_md_table }}
    
</div>