# Control Resonant Reference

A public community-driven wiki for the game [Control Resonant](https://controlgame.com/en) hosted on [GitHub](https://github.com/weslo-stem/control-resonant-reference) Pages.

https://weslo-stem.github.io/control-resonant-reference

- All pages are written in markdown format with HTML injections enabled
- Utilizes mkdocs as a base (not mkdocs-material... probably a bad idea on my part, but here we are)
- Utilizes Jinja2 code blocks

## Plugins used
- search (built-in)
- [mkdocs-macros-plugin](https://github.com/fralau/mkdocs-macros-plugin)
- [mkdocs-table-reader-plugin](https://github.com/timvink/mkdocs-table-reader-plugin)
- [mkdocs-placeholder-plugin](https://github.com/six-two/mkdocs-placeholder-plugin)
- [mkdocs-awesome-nav](https://github.com/lukasgeiter/mkdocs-awesome-nav)

Make sure to install these!

## Site editing guides / standards
- [Debugging and building](#debugging-and-building)
- [Macros and site-wide variables](#macros-and-site-wide-variables)
- [Site navigation](#site-navigation)
- [Placeholders](#placeholders)
- [Assets (Damage table .CSVs, images, icons, etc.)](#assets)

# Debugging and building

**Important**
Before debugging, I recommend going to `mkdocs.yml` and changing the option:
```
extra:
  ...
  ctx: /control-resonant-reference
```
to
```
extra:
  ...
  ctx: '' #/control-resonant-reference
```
This switches the site context macro value. Without this change, most assets will not load properly when debugging. This macro value exists because GitHub Pages hosts the site at `root/control-resonant-reference` while the mkdocs debug site is hosted at `root`. This breaks majority of the HTML-embedded src and href paths.

While debugging: `ctx: '' #/control-resonant-reference`

Before committing: `ctx: /control-resonant-reference`

---

My preferred method for editing is opening the project in Visual Studio, as it has the built-in PowerShell, but this can be done simply with cmd and text editing (if you are brave enough.)
To start debugging, run `mkdocs serve` in the `/control-resonant-reference` folder. This will host a copy of the site on `localhost:8000`. Saved changes and file creation in the `/docs` folder will automatically rebuild the site and trigger a page refresh in your browser.

To stop debugging, type `ctrl + c` into the PowerShell window or close PowerShell.

You can also manually build/rebuild the site using `mkdocs build`. This will output to the `/site` folder.

# Macros and site-wide variables

# Site navigation

# Placeholders

# Assets
