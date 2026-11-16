

# Materials

{% set reader=pd_read_csv('tables/materials.csv') %}
{% for indrow in reader['Category']|unique %}
<br />
## {{indrow}}

{% for _,xindrow in reader[reader['Category']==indrow].fillna('').iterrows() %}
{% set desc = xindrow['Description']
    .replace("#Health#", '<img src="/control-resonant-reference/icons/status_effects/icn_status_health.svg" /><strong><b>Health</b></strong>')
    .replace("#Power#", '<img src="/control-resonant-reference/icons/icon/icn_ability_strength.svg" /><strong><b>Power</b></strong>')
    .replace("Hedron", '<span class="iBLURREDi">Hedron</span>')
%}
{% if xindrow['Material'] != "Living Shard" %}
<div class="melee-upgrade-box" id="{{xindrow['Material'].replace(' ', '-').lower()}}" style="display:flex;">
    <div style="height:auto; width:20%;">
        <img src="{{xindrow['Icon']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 24px; margin: 0px;"><b>{{xindrow['Material']}}</b></p>
            <p style="font-size: 18px; margin: 0px;"><i>{{xindrow['Header Description']}}</i></p>
            <p class="inline-svg">
                {{desc}}
            </p>
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Subdescription']}}</i></p>
        </div>
    </div>
</div>
{% else %}
<div class="melee-upgrade-box" id="{{xindrow['Material'].replace(' ', '-').lower()}}" style="display:flex;">
    <div style="height:auto; width:20%;">
        <img src="{{xindrow['Icon']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 24px; margin: 0px;"><b>{{xindrow['Material']}}</b></p>
            <p style="font-size: 18px; margin: 0px;"><i>{{xindrow['Header Description']}}</i></p>
            <p class="inline-svg">
                {{desc}}
            </p>
            <p>
            There are a total of 33 Living Shards in the game.<br><br>
            <b>Downtown</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (4x) Automatically acquired at the beginning of the game</span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Defeat Resonant: <b>The Artist</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/downtown/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Downtown Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The House In Distress</b></span>
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Hedron Link</b></span>
                
            <b>Central</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Power Lines</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Welcome To Manhattan</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/central/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Central Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b>Evacuation Zone</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/evacuation-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Evacuation Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Subway Fault</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Evacuation Procedures</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Into The Sinkhole</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/secret-evacuation-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Secret Evacuation Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />2000) </span> 
                
            <b>The Park</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/the-park/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>The Park Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b>West Incursion Zone</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Incursion Fault</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/west-incursion-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>West Incursion Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b class="iBLURREDi">Underpass</b><br>
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Underpass Fault</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Recursions and Iterations</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/underpass/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Underpass Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b class="iBLURREDi">Unknown</b><br>
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Sever the Hedron Links</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Rebuild</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Fight to the Core</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/unknown/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Unknown Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            </p>
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Subdescription']}}</i></p>
        </div>
    </div>
</div>
{% endif %}

<!-- MOBILE LAYOUT -->

{% if xindrow['Material'] != "Living Shard" %}
<div class="mobile-melee-upgrade-box" style="display:flex; flex-direction:column;">
    <div style="height:auto; width:65%; align-self:center">
        <img src="{{xindrow['Icon']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 24px; margin: 0px;"><b>{{xindrow['Material']}}</b></p>
            <p style="font-size: 18px; margin: 0px;"><i>{{xindrow['Header Description']}}</i></p>
            <p class="inline-svg">
                {{desc}}
            </p>
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Subdescription']}}</i></p>
        </div>
    </div>
</div>
{% else %}
<div class="mobile-melee-upgrade-box" style="display:flex; flex-direction:column;">
    <div style="height:auto; width:65%; align-self:center">
        <img src="{{xindrow['Icon']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 24px; margin: 0px;"><b>{{xindrow['Material']}}</b></p>
            <p style="font-size: 18px; margin: 0px;"><i>{{xindrow['Header Description']}}</i></p>
            <p class="inline-svg">
                {{desc}}
            </p>
            <p>
            There are a total of 33 Living Shards in the game.<br><br>
            <b style="margin-bottom:15px">Downtown</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (4x) Automatically acquired at the beginning of the game</span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Defeat Resonant: <b>The Artist</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/downtown/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Downtown Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The House In Distress</b></span>
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Hedron Link</b></span>
                
            <b style="margin-bottom:15px">Central</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Power Lines</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Welcome To Manhattan</b></span>
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/central/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Central Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b style="margin-bottom:15px">Evacuation Zone</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/evacuation-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Evacuation Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Subway Fault</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Evacuation Procedures</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Into The Sinkhole</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/secret-evacuation-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Secret Evacuation Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />2000) </span> 
                
            <b style="margin-bottom:15px">The Park</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/the-park/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>The Park Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b style="margin-bottom:15px">West Incursion Zone</b><br>
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Incursion Fault</b></span> 
                
                <span style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/west-incursion-zone/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>West Incursion Zone Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b style="margin-bottom:15px" class="iBLURREDi">Underpass</b><br>
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>The Underpass Fault</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Recursions and Iterations</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/underpass/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Underpass Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            <b style="margin-bottom:15px" class="iBLURREDi">Unknown</b><br>
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Sever the Hedron Links</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Rebuild</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (1x) Complete Quest: <b>Fight to the Core</b></span> 
                
                <span class="iBLURREDi" style="margin-left: 2rem; margin-bottom: 10px; display: block;">&#9658; (2x) Purchase from: 
                    <a href='/control-resonant-reference/reference/world/vendors/unknown/' style='color: var(--floral-white)'>
                    <img src='/control-resonant-reference/icons/district_upgrades/icn_district_upgrade_vendor_level.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;'/>
                    <b>Unknown Vendor</b></a> (<img src='/control-resonant-reference/icons/currencies/icn_currency_cash.svg' style='border: 0px; margin: 0px; width: auto; height: auto; padding: 0px;' />4000 each)</span>
                
            </p>
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Subdescription']}}</i></p>
        </div>
    </div>
</div>
{% endif %}
{% endfor %}
{% endfor %}