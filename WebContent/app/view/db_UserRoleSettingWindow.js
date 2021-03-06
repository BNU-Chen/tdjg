/*
 * File: app/view/db_UserRoleSettingWindow.js
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

Ext.define('MyApp.view.db_UserRoleSettingWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.db_UserRoleSettingWindow',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.toolbar.Spacer',
        'Ext.selection.CheckboxModel'
    ],

    height: 283,
    id: 'db_UserRoleSettingWindow',
    width: 467,
    layout: 'fit',
    title: '用户角色设置',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'db_UserRoleSettingWindowForm',
                    store: 'uRoleInfoStore',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'urSet_roleNameCn',
                            width: 100,
                            dataIndex: 'roleNameCn',
                            text: '角色名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'urSet_roleName',
                            width: 100,
                            dataIndex: 'roleName',
                            text: '角色代码'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'urSet_enabled',
                            width: 100,
                            dataIndex: 'enabled',
                            text: '是否启用'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'urSet_description',
                            width: 200,
                            dataIndex: 'description',
                            text: '角色说明'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'label',
                                    id: 'urSet_userName',
                                    text: '用户名'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    handler: function() {
                                        var win = Ext.getCmp('db_UserRoleSettingWindow');
                                        win.close();
                                    },
                                    text: '取消'
                                },
                                {
                                    xtype: 'tbspacer',
                                    width: 30
                                },
                                {
                                    xtype: 'button',
                                    handler: function() {
                                        var win = Ext.getCmp('db_UserRoleSettingWindow');

                                        var username = Ext.getCmp('urSet_userName').text;	//获取用户名
                                        var grid = Ext.getCmp('db_UserRoleSettingWindowForm');		//获取表格grid
                                        var recordsSelected = grid.getSelectionModel().getSelection();	//获取选中的记录

                                        if(recordsSelected.length === 0){
                                            Ext.Msg.alert('提示','请先选择您要操作的行！');
                                            return;
                                        }else{
                                            //获取用户角色代码数组
                                            var  roleIds =new Array(recordsSelected.length);
                                            for(var i = 0;i<recordsSelected.length;i++){
                                                roleIds[i] = recordsSelected[i].get("roleId");
                                            }

                                            //更新该用户的角色信息
                                            Ext.Ajax.request(
                                            {
                                                url : 'update_UserRole',
                                                params :
                                                {
                                                    username:username,
                                                    userRoles : roleIds
                                                },
                                                success : function (response){
                                                    Ext.Msg.alert('成功提示', '用户角色信息更新成功。');
                                                    win.close();
                                                },
                                                failure : function (response){
                                                    Ext.Msg.alert('失败提示', '用户角色信息更新失败，请刷新后重试。');
                                                }
                                            });



                                        }
                                    },
                                    text: '确定'
                                }
                            ]
                        }
                    ],
                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                    }),
                    listeners: {
                        afterrender: {
                            fn: me.onDb_UserRoleSettingWindowFormAfterRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onDb_UserRoleSettingWindowFormAfterRender: function(component, eOpts) {
        var userName = Ext.getCmp('urSet_userName').text;

        //查询该用户的所有角色
        Ext.Ajax.request(
        {
            url : 'get_UserRoleList',
            params :
            {
                userName : userName
            },
            success : function (response){
                var result=Ext.decode(response.responseText);
                var userRoleInfo = result.root;

                var store = Ext.StoreMgr.get('uRoleInfoStore'); //获得store对象

                for(var index = 0;index < userRoleInfo.length;index++){
                    var roleName = userRoleInfo[index]['roleName'];
                    var record = store.findRecord("roleName", roleName, 0, true);
                    Ext.getCmp('db_UserRoleSettingWindowForm').getSelectionModel().select(record,true);
                }
            },
            failure : function (response){
                //failedResult();
                // Ext.Msg.alert('失败提示', '记录删除失败。');
            }
        });
    }

});