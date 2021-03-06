/*
 * File: app/view/Mapserver.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('MyApp.view.Mapserver', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Mapserver',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    height: 596,
    width: 875,
    layout: 'border',
    collapsed: false,
    title: '项目地图显示',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    split: true,
                    html: '<div id="mapdiv_MapServer" class="MapClass"> </div>',
                    layout: 'fit',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            autoScroll: true,
                            items: [
                                {
                                    xtype: 'radiogroup',
                                    id: 'radioGroup_mapserver',
                                    width: 300,
                                    fieldLabel: '查看地图',
                                    labelWidth: 60,
                                    items: [
                                        {
                                            xtype: 'radiofield',
                                            name: 'mapserver',
                                            boxLabel: '规划图',
                                            inputValue: '规划图'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name: 'mapserver',
                                            boxLabel: '现状图',
                                            inputValue: '现状图'
                                        },
                                        {
                                            xtype: 'radiofield',
                                            name: 'mapserver',
                                            boxLabel: '竣工图',
                                            inputValue: '竣工图'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        var tabs=this.up('tabpanel');
                                        tabs.removeAll(true);
                                        var newtab= tabs.add(Ext.widget('manageProject'));
                                    },
                                    icon: 'images/return.png',
                                    text: '返回'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'east',
                    split: true,
                    id: 'mapserver_searchResult',
                    width: 200,
                    layout: 'fit',
                    collapsed: false,
                    collapsible: true,
                    title: '查询结果',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'mapserver_projectId',
                                    fieldLabel: '项目编号',
                                    labelWidth: 60
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'panel',
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    id: 'mapserver_graphicGrid',
                                    columns: [
                                        {
                                            xtype: 'rownumberer'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 120,
                                            dataIndex: 'landparcelid',
                                            text: '地块编号'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            width: 80,
                                            dataIndex: 'area',
                                            text: '面积(平方米)'
                                        }
                                    ],
                                    listeners: {
                                        cellclick: {
                                            fn: me.onMap_ShowFindResultGridCellClick1,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onMap_ShowFindResultGridCellClick1: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var graphic = record.get('graphic');
        locateByGraphic(graphic);
    }

});