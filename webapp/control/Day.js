sap.ui.define(
    ["sap/ui/core/Control"],
	function(Control) {
	"use strict";

	var today = new Date().getDate();
		
	return Control.extend("de.blogspot.openui5.adventcalendar.control.Day", /** @lends de.blogspot.openui5.adventcalendar.control.Day **/ {
		metadata: {
			properties: {
				color: {
					type: "sap.ui.core.CSSColor",
					defaultValue: "auto"
				},
				day: {
					type: "int",
					defaultValue: "25"
				},
				inactive: {
					type: "boolean",
					defaultValue: "false"
				},
				title: {
					type: "string"
				},
				description: {
					type: "string"
				},
				meta: {
					type: "string"
				},
				href: {
					type: "string"
				}
			}
		},
		
		renderer: function(oRm, oControl) {
			oRm.write("<div");
			oRm.addClass("cube");
			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.writeStyles();

			if (oControl.getInactive() === true || oControl.getProperty("day") > today) {
				oRm.writeAttribute("data-inactive", oControl.getInactive());
			}
			oRm.writeAttribute("data-bg-color", oControl.getColor());
			oRm.writeAttribute("data-title", oControl.getTitle());
			oRm.write(">");
			
			oRm.write("<div class=\"content__block\">");
				oRm.write("<h3 class=\"content__title\"><a href=\"" + oControl.getHref() + "\" target=\"_blank\">" + oControl.getTitle() + "</a></h3>");
				oRm.write("<p class=\"content__description\">" + oControl.getDescription() + "</p>");
				oRm.write("<p class=\"content__meta\">" + oControl.getMeta() + "</p>");
			oRm.write("</div>");
			
			oRm.write("</div>");
		}
		
	});
		
});