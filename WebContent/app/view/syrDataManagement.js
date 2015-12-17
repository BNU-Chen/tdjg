/*
 * File: app/view/syrDataManagement.js
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

Ext.define('MyApp.view.syrDataManagement', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.syrDataManagement',

    requires: [
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.button.Button',
        'Ext.grid.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.column.Boolean',
        'Ext.grid.View',
        'Ext.selection.CheckboxModel',
        'Ext.toolbar.Paging'
    ],

    autoShow: true,
    id: 'syrDataManagement',
    layout: 'fit',
    title: '动态监测',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    autoShow: true,
                    id: 'syrDataManagementForm',
                    fixed: true,
                    layout: 'fit',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'gridpanel',
                            autoShow: true,
                            frame: true,
                            height: 150,
                            id: 'datamanage',
                            title: '',
                            subGridXType: '',
                            columnLines: true,
                            forceFit: true,
                            store: 'syrSchemeShow3',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    fixed: true,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            id: 'projectid5',
                                            width: 171,
                                            fieldLabel: '项目编号',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'combobox',
                                            autoShow: true,
                                            id: 'province5',
                                            width: 75,
                                            fieldLabel: '',
                                            labelAlign: 'right',
                                            labelWidth: 20,
                                            name: 'province5',
                                            emptyText: '请选择省',
                                            editable: false,
                                            displayField: 'areaName',
                                            forceSelection: true,
                                            store: 'proviceStore',
                                            valueField: 'areaCode',
                                            listeners: {
                                                select: {
                                                    fn: me.onProvince5Select,
                                                    scope: me
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'combobox',
                                            autoShow: true,
                                            id: 'city5',
                                            width: 75,
                                            fieldLabel: '',
                                            labelAlign: 'right',
                                            labelWidth: 20,
                                            name: 'city5',
                                            emptyText: '请选择市',
                                            displayField: 'areaName',
                                            store: 'cityStore',
                                            valueField: 'areaCode',
                                            listeners: {
                                                select: {
                                                    fn: me.onCity5Select,
                                                    scope: me
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'combobox',
                                            autoShow: true,
                                            id: 'county5',
                                            width: 76,
                                            fieldLabel: '',
                                            labelAlign: 'right',
                                            labelWidth: 20,
                                            name: 'county5',
                                            emptyText: '请选择县',
                                            displayField: 'areaName',
                                            store: 'countyStore',
                                            valueField: 'areaCode',
                                            listeners: {
                                                select: {
                                                    fn: me.onCounty5Select,
                                                    scope: me
                                                }
                                            }
                                        },
                                        {
                                            xtype: 'combobox',
                                            id: 'town6',
                                            width: 112,
                                            fieldLabel: '',
                                            labelAlign: 'right',
                                            labelWidth: 20,
                                            name: 'town6',
                                            emptyText: '请选择乡镇街道',
                                            displayField: 'areaName',
                                            store: 'townStore',
                                            valueField: 'areaCode'
                                        },
                                        {
                                            xtype: 'datefield',
                                            id: 'contructstart5',
                                            width: 191,
                                            fieldLabel: '开始施工时间',
                                            labelAlign: 'right',
                                            labelWidth: 80
                                        },
                                        {
                                            xtype: 'datefield',
                                            id: 'contructend5',
                                            width: 140,
                                            fieldLabel: '——',
                                            labelAlign: 'right',
                                            labelSeparator: '—',
                                            labelWidth: 20
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var  mystore=Ext.StoreMgr.get('syrSchemeShow3');//获取store对象

                                                /*在load时间中添加参数
                                                mystore.load(
                                                { params:{
                                                start:"0",
                                                limit:"15",
                                                projectId:Ext.getCmp('projectid5').getValue(),//参数名称- 值
                                                province:Ext.getCmp('province5').getValue(),
                                                city:Ext.getCmp('city5').getValue(),
                                                county:Ext.getCmp('county5').getValue(),
                                                town:Ext.getCmp('town6').getValue(),
                                                contructstarttime:Ext.util.Format.date(Ext.getCmp('contructstart5').getValue(),'Y-m-d'),
                                                contructendtime:Ext.util.Format.date(Ext.getCmp('contructend5').getValue(),'Y-m-d')}
                                                }
                                                );
                                                */

                                                mystore.on('beforeload', function (store, options) {
                                                    var new_params = {projectId:Ext.getCmp('projectid5').getValue(),//参数名称- 值
                                                        province:Ext.getCmp('province5').getValue(),
                                                        city:Ext.getCmp('city5').getValue(),
                                                        county:Ext.getCmp('county5').getValue(),
                                                        town:Ext.getCmp('town6').getValue(),
                                                        contructstarttime:Ext.util.Format.date(Ext.getCmp('contructstart5').getValue(),'Y-m-d'),
                                                    contructendtime:Ext.util.Format.date(Ext.getCmp('contructend5').getValue(),'Y-m-d')};
                                                    Ext.apply(store.proxy.extraParams, new_params);
                                                });
                                                mystore.load({ params: { start: 0, limit: 15} });
                                            },
                                            width: 50,
                                            icon: 'images/file_view0.png',
                                            text: '搜索'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var grid = Ext.getCmp('datamanage');
                                                var record =grid.getSelectionModel().getSelection();//获取到表上的那一列
                                                if(record.length > 1){
                                                    Ext.MessageBox.show({
                                                        title:"提示",
                                                        msg:"只能选择一行数据",
                                                        icon: Ext.MessageBox.INFO,
                                                        buttons: Ext.Msg.OK
                                                    });
                                                    return;
                                                }

                                                else if (record.length===0) {
                                                    //Ext.Msg.alert('提示', '请先选择您要编辑的数据!');
                                                    //return;
                                                    var tabs1 = Ext.getCmp('myTabPanel');
                                                    tabs1.removeAll(true);
                                                    var newtab1 = tabs1.add(Ext.widget('yqprojectmonitorInfo'));
                                                    var mystore1 = Ext.StoreMgr.get('yqprjmonitorInfoStore'); //获得store对象
                                                    mystore1.load(
                                                    {
                                                        params: {
                                                            start: "0",
                                                            limit: "15",
                                                            projectName:'',
                                                            monitorstarttime:'',
                                                            monitorendtime:'',
                                                            accuracy:'0'
                                                        }
                                                    });
                                                }
                                                else {
                                                    var projectSelectedName =record[0].get("projectname");
                                                    var projectSelectedID =record[0].get("projectId");
                                                    var tabs = Ext.getCmp('myTabPanel');
                                                    tabs.removeAll(true);
                                                    var newtab = tabs.add(Ext.widget('yqprojectmonitorInfo'));
                                                    Ext.getCmp('projectids').setValue(projectSelectedID);
                                                    Ext.getCmp('projectnames').setValue(projectSelectedName);
                                                    Ext.getCmp('prjid').setValue(projectSelectedID);

                                                    var mystore = Ext.StoreMgr.get('yqprjmonitorInfoStore'); //获得store对象
                                                    mystore.load(
                                                    {
                                                        params: {
                                                            start: "0",
                                                            limit: "15",
                                                            projectId:projectSelectedID,
                                                            monitorstarttime:'',
                                                            monitorendtime:'',
                                                            accuracy:'1'
                                                        }
                                                    });
                                                }
                                            },
                                            width: 123,
                                            text: '监测任务计划表'
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var grid = Ext.getCmp('datamanage');
                                                var record =grid.getSelectionModel().getSelection();//获取到表上的那一列
                                                if(record.length > 1){
                                                    Ext.MessageBox.show({
                                                        title:"提示",
                                                        msg:"只能选择一行数据",
                                                        icon: Ext.MessageBox.INFO,
                                                        buttons: Ext.Msg.OK
                                                    });
                                                    return;
                                                }

                                                else if (record.length===0) {
                                                    //Ext.Msg.alert('提示', '请先选择您要编辑的数据!');
                                                    //return;
                                                    var tabs1 = Ext.getCmp('myTabPanel');
                                                    tabs1.removeAll(true);
                                                    var newtab1 = tabs1.add(Ext.widget('syrOneProjectAllData'));
                                                    var mystore1 = Ext.StoreMgr.get('syrMonitorData'); //获得store对象
                                                    mystore1.load(
                                                    {
                                                        params: {
                                                            start: "0",
                                                            limit: "15",
                                                            projectName:'',
                                                            monitorstarttime:'',
                                                            monitorendtime:'',
                                                            accuracy:'0'
                                                        }
                                                    });
                                                } else {
                                                    var projectSelectedName = record[0].get("projectname");
                                                    var tabs = Ext.getCmp('myTabPanel');
                                                    tabs.removeAll(true);
                                                    var newtab = tabs.add(Ext.widget('syrOneProjectAllData'));//打开tab
                                                    //把参数传递过去
                                                    Ext.getCmp('projectname6').setValue(projectSelectedName);
                                                    var  mystore=Ext.StoreMgr.get('syrMonitorData');//获取store对象
                                                    //在load时间中添加参数
                                                    mystore.load(
                                                    { params:{
                                                        start:"0",
                                                        limit:"15",
                                                        projectName:projectSelectedName,
                                                        monitorstarttime: "",
                                                        monitorendtime: "",
                                                        accuracy:"1"//参数名称- 值
                                                    }
                                                });
                                            }
                                            },
                                            width: 124,
                                            text: '现场调查数据'
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                var grid = Ext.getCmp('datamanage');
                                                var record =grid.getSelectionModel().getSelection();//获取到表上的那一列
                                                if(record.length > 1){
                                                    Ext.MessageBox.show({
                                                        title:"提示",
                                                        msg:"只能选择一行数据",
                                                        icon: Ext.MessageBox.INFO,
                                                        buttons: Ext.Msg.OK
                                                    });
                                                    return;
                                                }

                                                else if (record.length===0) {
                                                    Ext.Msg.alert('提示', '请先选择您要分析的项目!');
                                                    return;
                                                } else {
                                                    var projectSelectedName =record[0].get("projectname");//项目名称
                                                    var projectSelectedID =record[0].get("projectId");//项目ID
                                                    var tabs = Ext.getCmp('myTabPanel');
                                                    tabs.removeAll(true);
                                                    var newtab = tabs.add(Ext.widget('syrMonitorResult'));

                                                    Ext.getCmp('prjid_result').setText(projectSelectedID);

                                                    Ext.getCmp('prjnameresult').setText(projectSelectedName+'进度统计柱状图');
                                                    var mystore = Ext.StoreMgr.get('yqprjmonitorInfoStore'); //获得store对象
                                                    mystore.load(
                                                    {
                                                        params: {
                                                            start: "0",
                                                            limit: "15",
                                                            projectId:projectSelectedID,
                                                            monitorstarttime:'',
                                                            monitorendtime:'',
                                                            accuracy:'2'
                                                        }
                                                    });









                                                }
                                            },
                                            width: 121,
                                            text: '动态监测分析'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'pagingtoolbar',
                                    dock: 'bottom',
                                    autoShow: true,
                                    width: 360,
                                    fixed: true,
                                    displayInfo: true,
                                    displayMsg: '显示 {0} - {1} 条，共 计{2}条',
                                    emptyMsg: '没有数据',
                                    store: 'syrSchemeShow3'
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'recordId',
                                    text: '记录号'
                                },
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'projectId',
                                    text: '项目编号'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 300,
                                    dataIndex: 'projectname',
                                    text: '项目名称'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'rlocation',
                                    text: '行政区位'
                                },
                                {
                                    xtype: 'datecolumn',
                                    align: 'center',
                                    dataIndex: 'starttime',
                                    text: '施工时间',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'datecolumn',
                                    align: 'center',
                                    dataIndex: 'latelyMonitortime',
                                    text: '最新监测时间',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    align: 'center',
                                    dataIndex: 'ppercentPz',
                                    text: '平整工程进度(%)',
                                    format: '00'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    align: 'center',
                                    dataIndex: 'ppercentDl',
                                    text: '道路工程进度(%)',
                                    format: '00'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    align: 'center',
                                    dataIndex: 'ppercentSl',
                                    text: '水利工程进度(%)',
                                    format: '00'
                                },
                                {
                                    xtype: 'booleancolumn',
                                    align: 'center',
                                    dataIndex: 'isNormal',
                                    text: '是否正常',
                                    falseText: '否',
                                    trueText: '是'
                                }
                            ],
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            })
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onProvince5Select: function(combo, records, eOpts) {
        //清空查询条件
        var cityField=Ext.getCmp("city5");
        cityField.setValue('');
        var countyField=Ext.getCmp("county5");
        countyField.setValue('');
        var townField=Ext.getCmp("town6");
        townField.setValue('');
        var codeHead=records[0].get('areaCode');
        Ext.Ajax.request({
            url:'get_infoAreaCityList',
            params:{codeHead:codeHead},
            success:function(response){
                var mystore = Ext.StoreMgr.get('cityStore');
                mystore.load(
                {
                    params:{
                        codeHead: codeHead
                    }
                }
                );
            }
        });

        //var  cityStore=Ext.StoreMgr.get('cityStore');//获取store对象

        //cityStore.filter('areaCode',codeHead);
        //Ext.Msg.alert('提示',cityStore.areaCode);

        //新建一个SimpleStore，然后将过滤出来的记过添加到这个SimpleStore中
        //var newStore=new Ext.data.SimpleStore({fields:['areaCode','areaName']});
        //newStore.add(cityStore.getRange());
        //Ext.Msg.alert('提示',newStore.areaCode);
        //设置所在市下拉列表的新的Store
        //cityField.store=newStore;

        //设置所在市下拉菜单的列表项的新的Store
        //if(cityField.view)
        //cityField.view.setStore(cityStore);





    },

    onCity5Select: function(combo, records, eOpts) {
        var countyField=Ext.getCmp("county5");
        countyField.setValue('');
        var codeHead=records[0].get('areaCode');
        Ext.Ajax.request({
            url:'get_infoAreaCountyList',
            params:{codeHead:codeHead},
            success:function(response){
                var mystore = Ext.StoreMgr.get('countyStore');
                mystore.load(
                {
                    params:{
                        codeHead: codeHead
                    }
                }
                );
            }
        });
        var  countyStore=Ext.StoreMgr.get('countyStore');//获取store对象
        //设置所在县下拉菜单的列表项的新的Store
        if(countyField.view)
        countyField.view.setStore(countyStore);




    },

    onCounty5Select: function(combo, records, eOpts) {
        var townField=Ext.getCmp("town6");
        townField.setValue('');
        var codeHead=records[0].get('areaCode');
        Ext.Ajax.request({
            url:'get_infoAreaTownList',
            params:{codeHead:codeHead},
            success:function(response){
                var mystore = Ext.StoreMgr.get('townStore');
                mystore.load(
                {
                    params:{
                        codeHead: codeHead
                    }
                }
                );
            }
        });
        var  townStore=Ext.StoreMgr.get('townStore');//获取store对象
        //设置所在县下拉菜单的列表项的新的Store
        if(townField.view)
        townField.view.setStore(townStore);

    }

});