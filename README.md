# Pattern Lab Node Plugin - Handlebars Helper Listitems

This is a patternlab node plugin providing a handlebars implementation of the patternlab listitems iterator.

#Installation:
npm install --save plugin-node-handlebars-helper-listitems

Make sure the plugin is enabled in your `patternlab-config.json` file:
```
"plugins": {
  "plugin-node-handlebars-helper-listitems": {
    "enabled": true
  }
}
```

#Usage:
Use the size parameter to control the number of listitems used in the iteration:

```
<ul>
{{#listitems size="4"}}
    <li> {{ title }} </li>
{{/listitems}}
</ul>
```
