/*
 * File: app/view/ShouyiStat_Jianshe.js
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

Ext.define('MyApp.view.ShouyiStat_Jianshe', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ShouyiStat_Jianshe',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    height: 485,
    width: 691,
    layout: 'border',
    title: '建设单位收益分析',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    region: 'north',
                    height: 82,
                    layout: 'absolute',
                    bodyPadding: 10,
                    title: '选择查询条件',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 420,
                            y: 20,
                            id: 'ShouyiStatJiansheField',
                            width: 180,
                            fieldLabel: '关键词',
                            labelWidth: 60,
                            emptyText: '请填写'
                        },
                        {
                            xtype: 'datefield',
                            x: 20,
                            y: 20,
                            id: 'ShouyiStatJiansheDateStart',
                            width: 180,
                            fieldLabel: '起始时间',
                            labelWidth: 60,
                            emptyText: '请选择日期',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            x: 220,
                            y: 20,
                            id: 'ShouyiStatJiansheDateEnd',
                            width: 180,
                            fieldLabel: '结束时间',
                            labelWidth: 60,
                            emptyText: '请选择日期',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var getDate1 = Ext.util.Format.date(Ext.getCmp('ShouyiStatJiansheDateStart').getValue(),'Y-m-d');
                                var getDate2 = Ext.util.Format.date(Ext.getCmp('ShouyiStatJiansheDateEnd').getValue(),'Y-m-d');
                                var getKeyword1 = Ext.getCmp('ShouyiStatJiansheField').getValue();
                                var mystore=Ext.StoreMgr.get('ShouyiStat_Jianshe'); //获得store对象
                                /*/在load事件中添加参数
                                mystore.load(
                                {params:{
                                    searchDate1:getDate1,
                                    searchDate2:getDate2,
                                    searchKeyword:getKeyword
                                }
                            }
                            );
                            /*/
                            mystore.on('beforeload', function (store, options) {
                                var new_params1 = {searchDate1:getDate1};
                                var new_params2 = {searchDate2:getDate2};
                                var new_params3 = {searchKeyword1:getKeyword1};
                                Ext.apply(store.proxy.extraParams, new_params1);
                                Ext.apply(store.proxy.extraParams, new_params2);
                                Ext.apply(store.proxy.extraParams, new_params3);
                            });
                            mystore.load({ params: { start: 0, limit: 20} });
                            },
                            x: 620,
                            y: 20,
                            width: 60,
                            text: '查询'
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    title: '建设单位收益分配统计表',
                    store: 'ShouyiStat_Jianshe',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 45,
                            text: '序号'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'dwmc',
                            text: '单位名称'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'sjdkbh',
                            text: '所建地块编号'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cyrw',
                            text: '参与任务'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'cysj',
                            text: '参与时间'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'sy',
                            text: '收益（万元）'
                        },
                        {
                            xtype: 'numbercolumn',
                            width: 184,
                            dataIndex: 'sybl',
                            text: '所占总收益的百分比（%）'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});