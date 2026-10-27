# Spore Burst

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_spore_burst}}" alt="Spore Burst Icon">
        </div>
       <div class="image-subtitle right-box">
            <p class="inline-svg">
                Rapidly fire
                <img src="{{icon_mold_damage}}"/><strong><b>Mold</b></strong>
                projectiles at a target, building up
                <img src="{{icon_status_infected}}"/><strong><b>Infected</b></strong>.
            </p>
        </div>
    </div>
    <hr>
    <div class="flex-container">
        <div class="combat-ability-gif left-box">
            <img src="{{gif_spore_burst}}" alt="Spore Burst">
        </div>
        <div class="right-box" style="overflow-x: auto;">
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


<div style="overflow-x: auto;" markdown="1">
    
{% set reader1=pd_read_csv('damage_tables/combat_abilities/spore_burst.csv') %}
{% set _=reader1.columns.values.__setitem__(0, '<span class="inline-svg"><img src="'+ icon_power +'"/><strong><b>Ability Strength</b></strong></span>') %}
{% set _=reader1.columns.values.__setitem__(2, '<span class="inline-svg"><img src="'+ icon_mold_damage +'"/>+<img src="'+ icon_sharp_damage +'"/><strong><b>Damage</b></strong></span> Floor') %}
{% set _=reader1.columns.values.__setitem__(3, '<span class="inline-svg"><img src="'+ icon_mold_damage +'"/>+<img src="'+ icon_sharp_damage +'"/><strong><b>Damage</b></strong></span> Ceiling') %}
{% set _=reader1.columns.values.__setitem__(4, '<span class="inline-svg"><img src="'+ icon_falter_damage +'"/><strong><b>Falter</b></strong></span> Floor') %}
{% set _=reader1.columns.values.__setitem__(5, '<span class="inline-svg"><img src="'+ icon_falter_damage +'"/><strong><b>Falter</b></strong></span> Ceiling') %}
{{ reader1 | convert_to_md_table }}
    
</div>