// create your own component

sap.ui.core.UIComponent.extend("bookmycric.results.A1.Component", {
	
	metadata : {
	     manifest : "json"
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	

});

