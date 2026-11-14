

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

<!-- MOBILE LAYOUT -->

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
{% endfor %}
{% endfor %}