# Volatile Anomaly
### *Combat Ability*

<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="{{icon_volatile_anomaly}}" alt="Volatile Anomaly Icon">
            <div class="image-subtitle">
                <p class="inline-svg">
                    Summon an ally that can be thrown and detonated - does more
                    <img src="{{icon_generic_damage}}"/><strong><b>Damage</b></strong>
                    if the ally has low health.
                </p>
            </div>
        </div>
        <div class="combat-ability-gif">
            <img src="{{gif_volatile_anomaly}}" alt="Volatile Anomaly">
        </div>
    </div>
    <div class="mobile-combat-ability-gif">
            <img src="{{gif_volatile_anomaly}}" alt="Volatile Anomaly">
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
                        <th scope="row" style="background-color: var(--shadow-grey)">Projectile Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_blunt_damage}}"/><strong><b>Blunt Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Explosion Damage Type</th>
                        <td class="inline-svg"><img src="{{icon_blunt_damage}}"/><strong><b>Blunt Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Summon <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Explosion <img src="{{icon_power}}"/><strong><b>Power</b></strong> cost</th>
                        <td>400</td>
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

#### **Projectile Damage:**

{% from "reference/dylan/combat-abilities/html/ca_buffs_dropdown.html" import caBuffsDropdown %}
{{ caBuffsDropdown(['Blunt'], 'Volatile Anomaly', false, false) }}
{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable %}
{{ dmgTable('tables/damage_tables/combat_abilities/volatile_anomaly_projectiles.csv', ['Blunt']) }}


#### **Explosion Damage:**

{% from "reference/dylan/combat-abilities/html/ca_damage_table.html" import dmgTable2 %}
{{ dmgTable2('tables/damage_tables/combat_abilities/volatile_anomaly_explosion.csv', ['Blunt']) }}
