# Hiss
<br>

{% set reader=pd_read_csv('tables/enemies.csv') %}
{% set filteredReader = reader[reader['Faction']=='Hiss'] %}

## Drone Enemies

{% for _,xindrow in filteredReader[filteredReader['Class']=='Drone'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <p style="font-size: 18px; margin: auto; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>

{% endfor %}
<br>

## Heavy Enemies

{% for _,xindrow in filteredReader[filteredReader['Class']=='Heavy'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <p style="font-size: 18px; margin: auto; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>

{% endfor %}
<br>

## Apex Enemies

{% for _,xindrow in filteredReader[filteredReader['Class']=='Apex'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <p style="font-size: 18px; margin: auto; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4>{{xindrow['Name']}}</h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <p style="font-size: 18px; margin: 0px; color: #564F56ff;"><i>{{xindrow['Description']}}</i></p>
        </div>
    </div>
</div>

{% endfor %}