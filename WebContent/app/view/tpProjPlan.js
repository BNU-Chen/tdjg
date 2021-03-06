/*
 * File: app/view/tpProjPlan.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.tpProjPlan', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mytreepanel2',

    id: 'tpProjPlan',
    collapsible: true,
    title: '项目及规划',
    store: 'treestoreProjPlan',
    rootVisible: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                listeners: {
                    itemclick: {
                        fn: me.onViewItemClick,
                        scope: me
                    }
                }
            }
        });

        me.callParent(arguments);
    },

    onViewItemClick: function(dataview, record, item, index, e, eOpts) {
        console.log("tpProjPlan......");
        Ext.getCmp("body").getLayout().setActiveItem(2);
        switch(record.raw.id)
        {
            case 301:Ext.getCmp("proj").getLayout().setActiveItem(0);break;
            case 302:
            	{
            	Ext.getCmp("proj").getLayout().setActiveItem(1);
            	
            		break;
            	}
            case 303:
            	{
            		Ext.getCmp("proj").getLayout().setActiveItem(2);
            		var head = document.getElementsByTagName('head')[0]; 
                    var script= document.createElement("script"); 
                    script.type = "text/javascript"; 
                    script.src="MyMap/ProjectMap.js"; 
                    head.appendChild(script);
            		break;
            	}
            case 304:Ext.getCmp("proj").getLayout().setActiveItem(4);break;
            case 305:Ext.getCmp("proj").getLayout().setActiveItem(5);break;

        }
    }

});