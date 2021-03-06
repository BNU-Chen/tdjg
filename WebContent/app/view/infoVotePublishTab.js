/*
 * File: app/view/infoVotePublishTab.js
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

Ext.define('MyApp.view.infoVotePublishTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.infoVotePublishTab',

    requires: [
        'Ext.form.Panel',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel'
    ],

    id: 'infoVotePublishTab',
    layout: 'fit',
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'infoVotePublishForm',
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: '',
                    jsonSubmit: true,
                    items: [
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 10,
                            width: 690,
                            fieldLabel: '投票主题',
                            name: 'voteTitle'
                        },
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 40,
                            height: 100,
                            width: 690,
                            fieldLabel: '投票简介',
                            name: 'voteIntroduction'
                        },
                        {
                            xtype: 'textfield',
                            x: 40,
                            y: 150,
                            width: 690,
                            fieldLabel: '发起人',
                            name: 'voteVoter'
                        },
                        {
                            xtype: 'radiogroup',
                            x: 40,
                            y: 180,
                            width: 320,
                            fieldLabel: '投票类型',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'voteClass',
                                    boxLabel: '单选',
                                    inputValue: '单选'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'voteClass',
                                    boxLabel: '多选',
                                    inputValue: '多选'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            x: 410,
                            y: 180,
                            width: 260,
                            fieldLabel: '结束时间',
                            name: 'voteEndtime',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'gridpanel',
                            x: 140,
                            y: 210,
                            height: 319,
                            id: 'infoVoteoptionGrid',
                            width: 590,
                            title: '',
                            store: 'InfoVoteoptionAddStore',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'voptionContent',
                                    text: '选项内容'
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var voptionPanel = Ext.widget("infoVoteoptionShowTab");
                                                var voptionwin = new Ext.Window({

                                                    title: '增加选项',
                                                    closable: true,
                                                    layout: 'fit',
                                                    jsonSubmit: true,
                                                    items:[

                                                    {
                                                        xtype: 'form',
                                                        id: 'voptionForm',
                                                        layout: {
                                                            type: 'auto'
                                                        },
                                                        bodyPadding: 10,
                                                        jsonSubmit: true,
                                                        title: '',
                                                        items: [
                                                        {
                                                            xtype: 'textfield',
                                                            id: 'voptionContent',
                                                            width: 340,
                                                            fieldLabel: '投票选项',
                                                            name: 'voptionContent'
                                                        },
                                                        {
                                                            xtype: 'button',
                                                            handler: function(button, event) {
                                                                var myform = Ext.getCmp('voptionForm').getForm();

                                                                if (myform.isValid()) {
                                                                    myform.submit({
                                                                        url:'add_voteoption',
                                                                        success: function(form, action) {
                                                                            Ext.Msg.alert('成功', '增加选项成功');

                                                                            var mystore = Ext.StoreMgr.get('InfoVoteoptionAddStore');//获得store对象

                                                                            mystore.load({
                                                                                params:{voteId:0}

                                                                            });
                                                                            voptionwin.close();

                                                                        },
                                                                        failure: function(form, action) {
                                                                            Ext.Msg.alert('失败', '修改内容失败');
                                                                            voptionwin.close();
                                                                        }
                                                                    });
                                                                } else {
                                                                    Ext.Msg.alert('注意', '填写信息不能为空，请检查！');
                                                                }

                                                                return;
                                                            },
                                                            text: '确定'
                                                        }
                                                        ]
                                                    }



                                                    ]
                                                });
                                                voptionwin.show();
                                            },
                                            text: '增加选项'
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var grid = Ext.getCmp('infoVoteoptionGrid');

                                                var record = grid.getSelectionModel().getSelection();

                                                if(record.length === 0){
                                                    Ext.Msg.alert('提示','请先选择您要操作的行！');
                                                    return;

                                                }else{


                                                    var  voptionIds =new Array(record.length);
                                                    for(var i = 0;i<record.length;i++){
                                                        voptionIds[i] = record[i].get("voptionId");

                                                    }


                                                    Ext.Ajax.request({
                                                        url:'del_voptionIds',
                                                        params:{voptionIds:voptionIds},

                                                        success:function(response){
                                                            Ext.Msg.alert('成功','删除成功');
                                                            var mystore = Ext.StoreMgr.get('InfoVoteoptionAddStore');
                                                            mystore.load();

                                                        }

                                                    });

                                                }
                                            },
                                            text: '删除选项'
                                        }
                                    ]
                                }
                            ],
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            })
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var myform = Ext.getCmp('infoVotePublishForm').getForm();

                                if (myform.isValid()) {
                                    myform.submit({
                                        url:'add_vote',
                                        success: function(form, action) {
                                            Ext.Msg.alert('成功', '增加选项成功');

                                            var mystore = Ext.StoreMgr.get('InfoVoteStore'); //获得store对象

                                            mystore.load();


                                        },
                                        failure: function(form, action) {
                                            Ext.Msg.alert('失败', '修改内容失败');

                                        }
                                    });
                                } else {
                                    Ext.Msg.alert('注意', '填写信息不能为空，请检查！');
                                }

                                return;
                            },
                            x: 170,
                            y: 540,
                            text: '确定发起投票'
                        },
                        {
                            xtype: 'button',
                            x: 380,
                            y: 540,
                            width: 80,
                            text: '重置'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});