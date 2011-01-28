Why?
---------------------------------------------
When you have many plugins each in separate directory that contains:

* css
* js
* images

and many of them are located in different places

How it works?
---------------------------------------------
::

    $.autoload.css("style.css", {baseFile: "pluginName.js", cssPath: "css/"});

1. Autoload try to find *baseFile* among existing scripts of document head
2. It extract *basePath* from *baseFile*
3. Load CSS from "*basePath* + *cssPath* + style.css"
