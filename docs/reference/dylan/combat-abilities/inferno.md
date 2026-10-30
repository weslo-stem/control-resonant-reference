

# Inferno

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_inferno}}" alt="Inferno Icon">
        </div>
        <div class="image-subtitle right-box">
            <p class="inline-svg">
                Generates increasingly intense
                <img src="{{icon_fire_damage}}"/><strong><b>Fire</b></strong>
                waves applying
                <img src="{{icon_status_burn}}"/><strong><b>Burn</b></strong>
                that builds up.
            </p>
        </div>
    </div>
    <hr>
    <div class="flex-container">
        <div class="combat-ability-gif left-box">
            <img src="{{gif_inferno}}" alt="Inferno">
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


<div style="overflow-x: auto;" markdown="1">
    
{% set reader=pd_read_csv('tables/damage_tables/combat_abilities/inferno.csv') %}
{% set _=reader.columns.values.__setitem__(0, '<span class="inline-svg"><img src="'+ icon_power +'"/><strong><b>Ability Strength</b></strong></span>') %}
{% set _=reader.columns.values.__setitem__(2, '<span class="inline-svg"><img src="'+ icon_fire_damage +'"/><strong><b>Damage</b></strong></span>') %}
{% set _=reader.columns.values.__setitem__(3, '<span class="inline-svg"><img src="'+ icon_falter_damage +'"/><strong><b>Falter</b></strong></span>') %}

{{ reader | convert_to_md_table }}
    
</div>
