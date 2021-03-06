/*
 * File: app/view/syrContrastAnalysis.js
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

Ext.define('MyApp.view.syrContrastAnalysis', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.syrContrastAnalysis',

    requires: [
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.selection.CheckboxModel',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    id: 'syrContrastAnalysis',
    layout: 'fit',
    title: '监测分析',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    autoShow: true,
                    height: 435,
                    layout: 'fit',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'gridpanel',
                            autoRender: true,
                            autoShow: true,
                            height: 870,
                            id: 'AnalysisProject',
                            width: 667,
                            title: '',
                            forceFit: true,
                            store: 'syrSchemeShow4',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 106,
                                    dataIndex: 'projectName',
                                    text: '项目名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'projectLocation',
                                    text: '项目位置'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'involvedTown',
                                    text: '涉及乡镇'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'constructStarttime',
                                    text: '施工时间'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'currentState',
                                    text: '目前状态'
                                }
                            ],
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            }),
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'textareafield',
                                            height: 22,
                                            id: 'projectname4',
                                            margin: 0,
                                            width: 183,
                                            fieldLabel: '项目名称',
                                            labelAlign: 'right',
                                            labelWidth: 60,
                                            preventMark: true,
                                            name: 'projectName'
                                        },
                                        {
                                            xtype: 'combobox',
                                            id: 'province4',
                                            width: 106,
                                            fieldLabel: '省',
                                            labelAlign: 'right',
                                            labelWidth: 20
                                        },
                                        {
                                            xtype: 'combobox',
                                            id: 'city4',
                                            width: 108,
                                            fieldLabel: '市',
                                            labelAlign: 'right',
                                            labelWidth: 20
                                        },
                                        {
                                            xtype: 'combobox',
                                            id: 'county4',
                                            width: 104,
                                            fieldLabel: '县',
                                            labelAlign: 'right',
                                            labelWidth: 20
                                        },
                                        {
                                            xtype: 'datefield',
                                            id: 'monitorstart4',
                                            width: 132,
                                            fieldLabel: '监测时间',
                                            labelAlign: 'right',
                                            labelWidth: 60
                                        },
                                        {
                                            xtype: 'datefield',
                                            id: 'monitorend4',
                                            width: 103,
                                            fieldLabel: '——',
                                            labelAlign: 'right',
                                            labelSeparator: '—',
                                            labelWidth: 20
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var  mystore=Ext.StoreMgr.get('syrSchemeShow4');//获取store对象

                                                //在load时间中添加参数
                                                mystore.load(
                                                { params:{
                                                    start:"0",
                                                    limit:"15",
                                                    projectName:Ext.getCmp('projectname4').getValue(),//参数名称- 值
                                                    province:Ext.getCmp('province4').getValue(),
                                                    city:Ext.getCmp('city4').getValue(),
                                                    county:Ext.getCmp('county4').getValue(),
                                                    monitorstarttime:Ext.util.Format.date(Ext.getCmp('monitorstart4').getValue(),'Y-m-d'),
                                                monitorendtime:Ext.util.Format.date(Ext.getCmp('monitorend4').getValue(),'Y-m-d')}
                                            }
                                            );
                                            },
                                            width: 55,
                                            icon: 'images/file_view0.png',
                                            text: '搜索'
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var grid = Ext.getCmp('AnalysisProject');//获取Grid控件
                                                var record = grid.getSelectionModel().getSelection();//获取选择行
                                                var projectName = record[0].get("projectName");//获取选择行的项目名称

                                                if(record.length > 1){
                                                    Ext.MessageBox.show({
                                                        title:"提示",
                                                        msg:"只能选择一个项目",
                                                        icon: Ext.MessageBox.INFO,
                                                        buttons: Ext.Msg.OK
                                                    });
                                                    return;
                                                }
                                                else if (record.length===0) {
                                                    Ext.Msg.alert('提示', '请先选择您要查看的项目!');
                                                    return;
                                                } else{
                                                    Ext.Msg.alert('提示', projectName);
                                                    var tabs = this.up('tabpanel');
                                                    tabs.removeAll(true);
                                                    var newtab = tabs.add(Ext.widget('syrOneProjectAllData'));

                                                    var  mystore=Ext.StoreMgr.get('syrMonitorData');//获取store对象
                                                    //在load时间中添加参数
                                                    mystore.load(
                                                    { params:{
                                                        start:"0",
                                                        limit:"15",
                                                        projectName:projectName//参数名称- 值
                                                    }
                                                });
                                            }
                                            },
                                            id: 'project_location',
                                            width: 90,
                                            text: '查看监测数据'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'project_location1',
                                            width: 69,
                                            text: '进行定位'
                                        }
                                    ]
                                }
                            ],
                            listeners: {
                                cellclick: {
                                    fn: me.onAnalysisProjectCellClick,
                                    scope: me
                                }
                            }
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            displayMsg: '显示 {0} - {1} 条，共 计{2}',
                            emptyMsg: '没有数据',
                            store: 'syrSchemeShow4'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onAnalysisProjectCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var win=new Ext.Window({
            height: 255,
            width: 425,
            title: '监测详情',
            layout: {
                type: 'absolute'
            },
            modal:true,
            items: [
            {
                xtype: 'form',
                id: 'MonitorAnalysisForm',
                height: 400,
                layout: {
                    type: 'absolute'
                },
                bodyPadding: 10,
                title: '',
                jsonSubmit: true,
                items: [
                {
                    xtype: 'textareafield',
                    x: 40,
                    y: 40,
                    height: 22,
                    id: 'projectname',
                    width: 300,
                    fieldLabel: '项目名称',
                    labelAlign: 'right',
                    labelSeparator: '：',
                    labelWidth: 60,
                    readOnly: true,
                    name:'projectname'
                },
                {
                    xtype: 'textareafield',
                    x: 40,
                    y: 80,
                    height: 22,
                    id: 'town',
                    width: 300,
                    fieldLabel: '涉及乡镇',
                    labelAlign: 'right',
                    labelSeparator: '：',
                    labelWidth: 60,
                    readOnly: true,
                    name:'town'
                },
                {
                    xtype: 'datefield',
                    x: 40,
                    y: 120,
                    id: 'monitorstart',
                    width: 160,
                    fieldLabel: '监测时间',
                    labelAlign: 'right',
                    labelWidth: 60,
                    allowBlank: false,
                    name:'monitorstart'
                },
                {
                    xtype: 'datefield',
                    x: 200,
                    y: 120,
                    id: 'monitorend',
                    width: 150,
                    fieldLabel: '——',
                    labelSeparator: '—',
                    labelWidth: 20,
                    allowBlank: false,
                    name:'monitorend'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        win.close();
                    },
                    x: 100,
                    y: 160,
                    height: 40,
                    width: 50,
                    text: '返回'
                },
                {
                    xtype: 'button',
                    x: 180,
                    y: 160,
                    height: 40,
                    text: '进行定位'
                },
                {
                    xtype: 'button',
                    handler: function(button, event) {
                        var projectName=Ext.getCmp('projectname').getValue();
                        var monitorStart=Ext.getCmp('monitorstart').getValue();
                        var monitorEnd= Ext.getCmp('monitorend').getValue();
                        //var myform = Ext.getCmp('MonitorAnalysisForm').getForm();
                        //if (myform.isValid()) { // make sure the form contains valid data before submitting
                        //  myform.submit({
                        Ext.Ajax.request({
                            url:'analysis_static',
                            params:{projectname:projectName,
                                monitorstart:monitorStart,
                                monitorend: monitorEnd
                            },
                            success: function(response) {

                                var tabs=Ext.getCmp('syrContrastAnalysis');
                                tabs.removeAll(true);
                                win.close();
                                var newtab = tabs.add(Ext.widget('syrMonitorResult'));

                                //Ext.getCmp('projectname7').setValue(projectName);
                                //Ext.getCmp('monitorstart7').setValue(monitorStart);
                                //Ext.getCmp('monitorend7').setValue(monitorEnd);
                                var  mystoreee=Ext.StoreMgr.get('syrProgress');//获取store对象
                                //在load时间中添加参数
                                mystoreee.load(
                                { params:{
                                    start:"0",
                                    limit:"15",
                                    projectname:projectName,
                                    monitorstart:monitorStart,
                                    monitorend:monitorEnd
                                }
                            });
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('failure', '修改内容失败'+Ext.getCmp('projectname').getValue());
                            win.close();
                        }
                    });
                    // }
                    //else {
                    //     Ext.Msg.alert('注意', '填写信息不能为空，请检查！');
                    //  }
                    return;
                },
                x: 260,
                y: 160,
                height: 40,
                text: '对比分析'
            }
            ]
        }]
        });


        Ext.getCmp('projectname').setValue(record.data.projectName);
        Ext.getCmp('town').setValue(record.data.involvedTown);
        win.show();
    }

});