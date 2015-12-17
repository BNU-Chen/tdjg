/*
 * File: app/view/db_BlacklistTab.js
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

Ext.define('MyApp.view.db_BlacklistTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.db_BlacklistTab',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    id: 'db_BlacklistTab',
    layout: 'border',
    title: '企业黑名单',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    id: 'db_BlacklistGrid',
                    autoScroll: true,
                    store: 'dbBlacklistStore',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'id',
                            text: '用户名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 150,
                            dataIndex: 'companyname',
                            text: '企业名称'
                        },
                        {
                            xtype: 'datecolumn',
                            width: 150,
                            dataIndex: 'time',
                            text: '加入时间',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'reason',
                            text: '违约情况'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'comment',
                            text: '备注'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'db_blacklist_searchkey',
                                    fieldLabel: '',
                                    emptyText: '请输入关键词'
                                },
                                {
                                    xtype: 'button',
                                    icon: 'images/file_view0.png',
                                    text: '搜索',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    icon: 'images/table_refresh.png',
                                    text: '刷新',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick1,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    icon: 'images/table_add.png',
                                    text: '添加',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick2,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    icon: 'images/table_delete.png',
                                    text: '删除',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick3,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                    })
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        var getKeyword = Ext.getCmp('db_blacklist_searchkey').getValue();
        var mystore = Ext.StoreMgr.get('dbBlacklistStore'); //获得store对象
        //在load事件中添加参数
        mystore.load({
            params :{
                searchKeyword : getKeyword
            }
        });
    },

    onButtonClick1: function(button, e, eOpts) {

        var mystore = Ext.StoreMgr.get('dbBlacklistStore'); //获得store对象
        //在load事件中添加参数
        mystore.load({
            params :{
                searchKeyword : ''
            }
        });
    },

    onButtonClick2: function(button, e, eOpts) {
        console.log('show wid blacklist');
        var win = Ext.widget('db_BlacklistWindow');
        win.show();
    },

    onButtonClick3: function(button, e, eOpts) {
        var grid = Ext.getCmp('db_BlacklistGrid');

        var record = grid.getSelectionModel().getSelection();

        if(record.length === 0){
            Ext.Msg.alert('提示','请先选择您要操作的行！');
            return;
        }else{
            var  ids =new Array(record.length);
            for(var i = 0;i<record.length;i++){
                ids[i] = record[i].get("id");
            }

            Ext.Ajax.request({
                url:'del_BlackById',
                params:{ids:ids},
                success:function(response){
                    Ext.Msg.alert('成功','企业成功黑名单中删除。');
                    var mystore = Ext.StoreMgr.get('dbBlacklistStore');
                    mystore.reload();
                }
            });
        }
    }

});