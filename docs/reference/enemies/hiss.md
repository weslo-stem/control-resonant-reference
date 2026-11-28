# Hiss
<br>

{% from "reference/enemies/droptable.html" import dropTable %}
{% set reader=pd_read_csv('tables/enemies.csv') %}
{% set filteredReader = reader[reader['Faction']=='Hiss'] %}

## **Drone Enemies**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Drone'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; margin: 0px; height:auto; width: 70%;" />
        
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
        
    </div>
    <a style='display: flex; width: auto; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%; margin: 0px; height:auto;" />
        
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
    </div>
    <a style='display: flex; width: 100%; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>

{% endfor %}

<br>

## **Heavy Enemies**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Heavy'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; margin: 0px; height:auto; width: 70%;" />
        
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
        
    </div>
    <a style='display: flex; width: auto; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%; margin: 0px; height:auto;" />
        
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
    </div>
    <a style='display: flex; width: 100%; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>

{% endfor %}
<br>

## **Special**

{% for _,xindrow in filteredReader[filteredReader['Class']=='Special'].fillna('').iterrows() %}

<div class="melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; margin: 0px; height:auto; width: 70%;" />
        
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
        
    </div>
    <a style='display: flex; width: auto; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>
<div class="mobile-melee-upgrade-box" id="{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}" style="display:flex; flex-direction:column;">
    
    <h4><b>{{xindrow['Name']}}</b></h4>

    <div style="height:auto; width:100%;">
        <img src="{{xindrow['Image Folder']}}{{xindrow['Image']}}" style="border: 0px; width:100%; margin: 0px; height:auto;" />
        
    </div>
    <div class="flex-container" style="flex-direction: row; align-items: flex-start; width: 100%;">
        {{ dropTable(xindrow['Drops'], xindrow['Found'], xindrow['Drops Images']) }}
    </div>
    <a style='display: flex; width: 100%; justify-content: flex-end;' href='/control-resonant-reference/library/documents/enemies/hiss/#{{xindrow['Name'].replace(' - ', '-').replace(' ', '-').lower()}}'>Document Entry >></a>
</div>

{% endfor %}
