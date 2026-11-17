![background](crr_custom_theme/img/Wallpaper2.png)

# Control Resonant Reference

A public community-driven wiki for the game [Control Resonant](https://controlgame.com/en) hosted on [GitHub](https://github.com/weslo-stem/control-resonant-reference) Pages.

https://weslo-stem.github.io/control-resonant-reference

- All pages are written in markdown format with HTML injections enabled
- Utilizes mkdocs as a base (not mkdocs-material or Zensical... probably a bad idea on my part, but here we are)
- Utilizes Jinja2 code blocks

I apologize if the project is a bit of a mess. I am new to community-based projects like this and just really wanted to make something.

If you wish to contribute, you will need Python and Git installed.

**No AI or vibecode please.**

## Progress

```
[x] Combat Abilities
[x] Vendors
[x] Artifacts
[x] Weapon Forms
[ ] Zones
[ ] Quests
[ ] Enemies
[x] Status effects/buffs
[x] Talents
[x] Materials
[ ] Cosmetics
```

## Plugins used
- search (built-in)
- [mkdocs-macros-plugin](https://github.com/fralau/mkdocs-macros-plugin)
- [mkdocs-table-reader-plugin](https://github.com/timvink/mkdocs-table-reader-plugin)
- [mkdocs-placeholder-plugin](https://github.com/six-two/mkdocs-placeholder-plugin)
- [mkdocs-awesome-nav](https://github.com/lukasgeiter/mkdocs-awesome-nav)

Make sure to install these if you wish to contribute!

## Site editing guides / standards
- [Debugging and building](#debugging-and-building)
- [Macros and site-wide variables](#macros-and-site-wide-variables)
- [Site navigation](#site-navigation)
- [Placeholders](#placeholders)
- [Assets (Damage table .CSVs, images, icons, etc.)](#assets)

# Debugging and building

My preferred method for editing is opening the project in Visual Studio, as it has the built-in PowerShell, but this can be done simply with cmd and text editing (if you are brave enough.)
To start debugging, run `mkdocs serve` in the `/control-resonant-reference` folder. This will host a copy of the site on `localhost:8000`. Saved changes and file creation in the `/docs` folder will automatically rebuild the site and trigger a page refresh in your browser.

To stop debugging, type `ctrl + c` into the PowerShell window or close PowerShell.

You can also manually build/rebuild the site using `mkdocs build`. This will output to the `/site` folder.

# Macros and site-wide variables

**Important**: Unfortunately, macros will not work in .html template pages and will only work in individual .md pages. I cannot seem to find a way around this inconvenience at the moment, so any ideas are greatly, greatly appreciated.

Site-wide variable macros are defined within the .py files in `/main`. Variable declarations in the .py files are intended mainly for creating paths to asset files. For example:

```
def define_env(env):
	ctx = env.variables['ctx']
	env.variables['gif_foo'] = ctx + '/gifs/foo.gif'
	env.variables['gif_bar'] = ctx + '/gifs/bar.gif'
```

`env.variables['gif_foo']`, 'gif_foo' would represent the name of the variable you are creating.

All variables should follow this format (use of python variables for cleanliness are perfectly fine, see `pages.py`). **Be sure that every defined variable contains `ctx + ` before the path to account for the behavior mentioned in [Debugging and building](#debugging-and-building).**

If you create/remove any .py files in `/main`, make sure this change is reflected in ``__init__.py``:

```
import foo
import bar

def define_env(env):
	foo.define_env(env)
	bar.define_env(env)
```

Make sure these .py modules are also referenced in the `mkdocs.yml` file:

```
plugins:
    - search
    - macros:
        foo: 'main/foo'
        bar: 'main/bar'
        baz: 'main/baz'
```
The .py extension is not necessary when listing modules in `mkdocs.yml`.

One-off macro variables can also be defined and initialized in the `mkdocs.yml` file by adding a new line to the `extra:` field. This variable can be referenced within the .py files in `/main` as well.

To reference these variables in HTML and Markdown, use `{{variable_name}}`. 
Within Jinja2 code blocks, you can use the variable name in python syntax without extra curly braces: `{% if variable_name in foo %} bar {% endif %}`

**HOWEVER**, macros **cannot** be referenced in .html template files!

# Site navigation

The site's navigation and page visibility is overridden and managed by the [mkdocs-awesome-nav](https://github.com/lukasgeiter/mkdocs-awesome-nav) plugin.

This is managed via the `.nav.yml` file in `/docs`. Please refer to the [awesome-nav documentation](https://lukasgeiter.github.io/mkdocs-awesome-nav/features/nav/) for a more in-depth explanation on how the plugin works, but the current layout should give a decent impression on how it works.

The main purpose of having this plugin is to allow markdown pages to act as directories for other pages instead of the actual directories themselves. For example:

This is what the file structure looks like:
```
reference/
├── dylan/
│   ├── combat-abilities/
│   │   ├── barrage.md
│   │   ├── inferno.md
│   │   └── ...
│   ├── combat-abilities.md
│   └── ...
└── ...
```

`.nav.yml` navigation structure:
```
nav:
  - Reference:
    - Dylan:
      - reference/dylan/combat-abilities.md
```

This excludes the `combat-abilities/` folder from site navigation but allows `combat-abilities.md` to display alone instead. Also allows a .md page to act as a directory for other pages in the site url path.

Site navigation before:
```
Reference > Dylan > Combat Abilities (.md file)
Reference > Dylan > Combat Abilities 
Reference > Dylan > Combat Abilities > Barrage
Reference > Dylan > Combat Abilities > Inferno 
Reference > Dylan > Combat Abilities > ... (all .md combat-abilities sub-files)
Reference > Dylan > Talents
...
```

After:
```
Reference > Dylan > Combat Abilities
Reference > Dylan > Talents
```

Looks nicer, especially when you end up having 40+ entries in a single category.

# Placeholders

Placeholders are primarily used for two things (at the moment):

1. Checkbox for blurring spoilers
2. Checkbox toggles + number boxes for the "Buff/Debuff" dropdown on weapon form and combat ability pages

All placeholder values are stored in the `placeholder-plugin.yaml` file in the root directory. These can be assigned to elements on any page for the user to edit.

If you want to blur something as a spoiler, simply pit `class="iBLURREDi"` in the HTML element. For more info on general use, check out the documentation on the plugin:

https://mkdocs-placeholder-plugin.six-two.dev/usage/

# Assets and Scripts

## Assets

At the moment, we have 4 main asset categories:

1. `docs/gifs` for .GIFs
2. `docs/icons` for mostly .SVG files
3. `docs/images` for static images like screenshots
4. `docs/tables` for .CSV tables

.CSS overrides can be found in `docs/stylesheets/extra.css`

As mentioned in [Macros and site-wide variables](#macros-and-site-wide-variables), assets can be assigned to {{macro}} variables to be referenced shorthand.

## Scripts

JavaScript scripts can be found in `docs/scripts`

Jinja2 code is a bit messy at the moment, being contained to .html template/macro files placed in the folder where they are used.

At the moment, we have 2 .js scripts:

1. `muConnector.js` which was borrowed from StackOverflow, it draws lines between points and is used on the Talents page and the individual Weapon Form pages
2. `updateMultipliers.js` which stores and applies all the individual damage and falter multipliers on the Combat Ability and Weapon Form pages

Currently used .html macros include:

- `reference/items/artifacts/artifactpage.html` Which is used on each artifact's page to display their info boxes. Utilizes `artifacts.csv`
- `reference/items/artifactlist.html` Which is used on `artifacts.md`, also utilizes `artifacts.csv`
- `reference/items/material-overrides` Which are used in `materials.md` to replace or inject into the generic information boxes
- `reference/world/vendors/shopgrid.html` Which is used on each vendor's page to display their item stock. Utilizes .CSV files in `docs/tables/vendor_tables`
- `reference/dylan/html/talent_tree.html` Which generates the nodes and lines in the visual talent tree in `talents.md`. Utilizes `docs/tables/vendor_tables` and sets the list of objects that `muConnector.js` will draw lines between
- `reference/dylan/html/weapon_upgrade_tree.html` Which generates the weapon upgrades and lines in the visual weapon upgrade tree on every weapon form page. Utilizes `docs/tables/weapon_upgrades.csv` and sets the list of objects that `muConnector.js` will draw lines between
- `reference/dylan/html/af_damage_table.html` Which is used in every weapon form page. This generates a table of base damage values from each weapon form's respective .CSV in `docs/tables/damage_tables/weapon_forms`
- `reference/dylan/html/ca_damage_table.html` Which is used in every combat ability page (except Command). This generates a table of base damage values from each combat ability's respective .CSV in `docs/tables/damage_tables/combat_abilities`
- `reference/dylan/html/buffs_dropdown.html` Which is used in every weapon form page and combat ability page (except Command). This generates the buff/debuff dropdown and acts as the direct connection between the damage tables and the `updateMultipliers.js` script.
