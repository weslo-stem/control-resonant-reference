

# Ignite

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_ignite}}" alt="Ignite Icon">
        </div>
        <div class="image-subtitle right-box">
            <p class="inline-svg">Melee Attacks and 
            <a href="{{page_barrage}}"><img src="{{icon_barrage}}"/><strong><b>Barrage</b></strong></a>,
            <a href="{{page_shield}}"><img src="{{icon_shield}}"/><strong><b>Shield</b></strong></a>, and
            <a href="{{page_volatile_anomaly}}"><img src="{{icon_volatile_anomaly}}"/><strong><b>Volatile Anomaly</b></strong></a> do 
            <img src="{{icon_fire_damage}}"/><strong><b>Fire Damage</b></strong> that applies
            <img src="{{icon_status_burn}}"/><strong><b>Burn</b></strong>.</p>
        </div>
    </div>
    <hr>
    <div class="flex-container">
        <div class="combat-ability-gif left-box">
            <img src="{{gif_ignite}}" alt="Ignite">
        </div>
        <div class="right-box" style="overflow-x: auto;">
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
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Initial <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>200</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Persistent <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>45/s</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

Bonus damage and falter is applied to all melee attacks and the above listed combat abilities while **Ignite** is active. These values will be increased by talents and status buffs. Below is a table of the base damage and falter values per Ability Strength level.

# Damage

#### *Base Damage and Falter values by Ability Strength*


<div style="overflow-x: auto;" markdown="1">
    
{% set reader=pd_read_csv('tables/damage_tables/combat_abilities/ignite.csv') %}
{% set _=reader.columns.values.__setitem__(0, '<span class="inline-svg"><img src="'+ icon_power +'"/><strong><b>Ability Strength</b></strong></span>') %}
{% set _=reader.columns.values.__setitem__(2, 'Bonus <span class="inline-svg"><img src="'+ icon_fire_damage +'"/><strong><b>Fire Dmg</b></strong></span> Floor') %}
{% set _=reader.columns.values.__setitem__(3, 'Bonus <span class="inline-svg"><img src="'+ icon_fire_damage +'"/><strong><b>Fire Dmg</b></strong></span> Ceiling') %}
{% set _=reader.columns.values.__setitem__(4, 'Bonus <span class="inline-svg"><img src="'+ icon_falter_damage +'"/><strong><b>Falter</b></strong></span>') %}
{{ reader | convert_to_md_table }}
    
</div>
