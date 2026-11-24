# Accessories

{% set reader = pd_read_csv("tables/cosmetics.csv") %}
{% for i1, row in reader[reader["Category"]=="Accessories"].iterrows() -%}
<h2>{{row["Name"]}}</h2>
<div class="generic-infobox" style="margin-bottom: 2rem">

{% set colors = row["Colors"] | from_json %}

{% for x,theme in colors.items() -%}
<img src='/control-resonant-reference/images/player_outfit/{{theme["full"]}}'/>
{%- endfor %}
<br>
{% for x,theme in colors.items() -%}
{% if 'material' in theme -%}
<img class="material-color" src='/control-resonant-reference/images/player_outfit/{{theme["material"]}}'/>
{%- endif %}
{%- endfor %}
</div>

{%- endfor %}