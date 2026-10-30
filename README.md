# Control Resonant Reference

A public community-driven wiki for the game [Control Resonant](https://controlgame.com/en) hosted on [GitHub](https://github.com/weslo-stem/control-resonant-reference) Pages.

https://weslo-stem.github.io/control-resonant-reference

- All pages are written in markdown format with HTML injections enabled
- Utilizes mkdocs as a base (not mkdocs-material... probably a bad idea on my part, but here we are)
- Utilizes Jinja2 code blocks

If you wish to contribute, you will need Python and Git installed.


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

# Assets
