# Top Layer
<br>
{% set reader = pd_read_csv("tables/cosmetics.csv") %}
{% for i1, row in reader[reader["Category"]=="Top Layer"].iterrows() -%}
<h2 id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-header'>{{row["Name"]}}</h2>
<h5><i>{{row["Description"]}}</i></h5>
<div class="generic-infobox cosmetic-container" id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}' style="margin-bottom: 2rem">

{% set colors = row["Colors"] | from_json %}
<div class="cosmetic-images-container" style="display:flex; justify-content:center;">
{%- for x,theme in colors.items() -%}
	{%- if loop.index==1 -%}

		<img class='cosmetic-selected' id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-{{x.lower().replace(" ", "")}}' src='/control-resonant-reference/images/player_outfit/{{theme["full"]}}'/>

	{%- else -%}

		<img class='cosmetic-unselected' id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-{{x.lower().replace(" ", "")}}' src='/control-resonant-reference/images/player_outfit/{{theme["full"]}}'/>

	{%- endif -%}
{%- endfor -%}
<br>
{%- if colors | length  > 1 -%}
<p id="{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-selected">Default</p><br>
{%- endif -%}
</div>

<div class="material-color-container">

{%- for x,theme in colors.items() -%}
	{%- if 'material' in theme -%}
		{%- if loop.index==1 -%}

			<img themename='{{x}}' class="material-color color-selected" id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-{{x.lower().replace(" ", "")}}-material' src='/control-resonant-reference/images/player_outfit/{{theme["material"]}}'/>
		
		{%- else -%}

			<img themename='{{x}}' class="material-color" id='{{row["Name"].replace(" ", "-").replace("'", "").lower()}}-{{x.lower().replace(" ", "")}}-material' src='/control-resonant-reference/images/player_outfit/{{theme["material"]}}'/>
		
		{%- endif -%}
	{%- endif -%}
{%- endfor -%}

</div>
<div style="text-align: center;">
<br>
<p><b>Unlock: </b>{{row["Unlock"]}}</p>
</div>
</div>

{%- endfor -%}