# Hedron
<br>

{% set reader=pd_read_csv('tables/enemies.csv') %}
{% set filteredReader = reader[reader['Faction']=='Hedron'] %}

## **Drone Enemies**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Drone'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>

{% endfor %}
<br>

## **Heavy Enemies**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Heavy'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>

{% endfor %}
<br>

## **Apex Enemies**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Apex'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; height:auto; width:60%;" />
        <div class="image-subtitle left-box" style="padding: 1rem">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%" />
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <div class="image-subtitle left-box">
            <i class="enemy-desc">{{xindrow['Description']}}</i>
        </div>
    </div>
</div>

{% endfor %}