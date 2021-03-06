/*
 * File: app/view/abnmWSAddTab.js
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

Ext.define('MyApp.view.abnmWSAddTab', {
    extend: 'Ext.window.Window',
    alias: 'widget.abnmWSAddTab',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Display',
        'Ext.form.field.TextArea',
        'Ext.button.Button'
    ],

    height: 450,
    id: 'abnmWSAddTab',
    width: 820,
    layout: 'fit',
    title: '新增异常信息至全过程异常监管',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 600,
                    layout: 'absolute',
                    bodyPadding: 10,
                    jsonSubmit: true,
                    items: [
                        {
                            xtype: 'displayfield',
                            x: 10,
                            y: 20,
                            id: 'projectIdAdd',
                            width: 300,
                            fieldLabel: '项目编号',
                            labelWidth: 80,
                            name: 'projectId'
                        },
                        {
                            xtype: 'textfield',
                            x: 10,
                            y: 60,
                            id: 'abwsTitleAdd',
                            width: 780,
                            fieldLabel: '标题',
                            labelWidth: 80,
                            name: 'abwsTitle'
                        },
                        {
                            xtype: 'textfield',
                            x: 10,
                            y: 20,
                            hidden: true,
                            id: 'sourceRecordidAdd',
                            width: 300,
                            fieldLabel: '来源recordid',
                            labelWidth: 80,
                            name: 'sourceRecordid'
                        },
                        {
                            xtype: 'displayfield',
                            x: 410,
                            y: 20,
                            id: 'projectNameAdd',
                            width: 300,
                            fieldLabel: '项目名称',
                            labelWidth: 80,
                            name: 'projectName'
                        },
                        {
                            xtype: 'displayfield',
                            x: 10,
                            y: 90,
                            id: 'abwsClassAdd',
                            width: 780,
                            fieldLabel: '异常来源',
                            labelWidth: 80,
                            name: 'abwsClass'
                        },
                        {
                            xtype: 'textareafield',
                            x: 10,
                            y: 120,
                            height: 182,
                            id: 'abwsContentAdd',
                            width: 780,
                            fieldLabel: '异常情况描述',
                            labelWidth: 80,
                            name: 'abwsContent'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var form = this.up('form').getForm(); // get the basic form

                                if (form.isValid()) { // make sure the form contains valid data before submitting
                                    form.submit({
                                        url:'add_abws',
                                        success: function(form, action) {

                                            Ext.Msg.alert('成功', '成功提交');
                                            var mystore = Ext.StoreMgr.get('abnmWholeSupervisionStore'); //获得store对象
                                            mystore.load();
                                            var mystore2 = Ext.StoreMgr.get('abnmDkTransSupervisionStore'); //获得store对象
                                            mystore2.load();
                                            var win = Ext.getCmp('abnmWSAddTab');
                                            win.close();
                                        },
                                        failure: function(form, action) {
                                            Ext.Msg.alert('失败', '提交失败');
                                        }
                                    });
                                } else { // display error alert if the data is invalid
                                Ext.Msg.alert('Invalid Data', 'Please correct form errors.');}
                            },
                            x: 180,
                            y: 340,
                            width: 100,
                            text: '确定'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var win = Ext.getCmp('abnmWSAddTab');
                                win.close();
                            },
                            x: 550,
                            y: 340,
                            width: 90,
                            text: '取消'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});