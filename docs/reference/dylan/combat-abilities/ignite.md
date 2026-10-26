

# Ignite

<br>
<div class="flex-container">

<div class="combat-ability-infobox">
    <!-- Image -->
    <div class="flex-container">
        <div class="combat-ability-image left-box">
            <img src="/icons/combat_abilities/icn_ability_heat_aura.svg" alt="Ignite Icon">
        </div>
        <div class="image-subtitle right-box">
            <p class="inline-svg">Melee Attacks and 
            <a href="{{ctx}}/reference/dylan/combat_abilities/barrage/"><img src="/icons/combat_abilities/icn_ability_barrage.svg"/><strong><b>Barrage</b></strong></a>,
            <a href="{{ctx}}/reference/dylan/combat_abilities/shield/"><img src="/icons/combat_abilities/icn_ability_shield.svg"/><strong><b>Shield</b></strong></a>, and
            <a href="{{ctx}}/reference/dylan/combat_abilities/volatile_anomaly/"><img src="/icons/combat_abilities/icn_ability_seekers.svg"/><strong><b>Volatile Anomaly</b></strong></a> do 
            <img src="/icons/damage_types/icn_damage_fire.svg"/><strong><b>Fire Damage</b></strong> that applies
            <img src="/icons/status_effects/icn_status_burn.svg"/><strong><b>Burn</b></strong>.</p>
        </div>
    </div>
    <hr>
    <div class="flex-container">
        <div class="combat-ability-gif left-box">
            <img src="/gifs/ignite.gif" alt="Ignite">
        </div>
        <div class="right-box">
            <table>
                <tbody>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Obtained by defeating</th>
                        <td><strong><b>The Deserter</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)">Damage Type</th>
                        <td class="inline-svg"><img src="/icons/damage_types/icn_damage_fire.svg"/><strong><b>Fire Damage</b></strong></td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Initial <img src="/icons/icon/icn_ability_strength.svg"/><strong><b>Power</b></strong> cost</th>
                        <td>200</td>
                    </tr>
                    <tr>
                        <th scope="row" style="background-color: var(--shadow-grey)" class="inline-svg">Persistent <img src="/icons/icon/icn_ability_strength.svg"/><strong><b>Power</b></strong> cost</th>
                        <td>45/s</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</div>
<br>

# Damage

### Base Damage and Falter values by Ability Strength
{{ read_csv('damage_tables/combat_abilities/ignite.csv') }}