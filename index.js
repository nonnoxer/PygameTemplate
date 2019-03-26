
module.exports = {

    name: "Pygame",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "main.py",           sourceTemplateFile: "main.template"    },
          { destinationFile: "classes.py", sourceTemplateFile: "classes.template" },
          { destinationFile: "variables.py", sourceTemplateFile: "variables.template" }
        ]
      });

    }

}
