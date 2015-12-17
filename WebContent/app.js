/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});


Ext.application({
    models: [
        'InfoArticleModel',
        'InfoChannelModel',
        'InfoVoteModel',
        'InfoCommentModel',
        'InfoVoteoptionModel',
        'InfoReportModel',
        'InfoLetterModel',
        'SampleModel',
        'syrSchemeShow',
        'dbBackupRecoveryModel',
        'syrMonitorData',
        'abnmWholeSupervisionModel',
        'abnmIndexModel',
        'abnmDkTransSupervisionModel',
        'infoAreaModel',
        'FkRegulatoryModle',
        'FkYanshouGongchengModle',
        'FkProjectDikuaiModel',
        'FkacceptApplyModel',
        'FkRwModel',
        'EvaluateReportModel',
        'db_users',
        'syrProgress',
        'TaishiPrice',
        'TaishiVolume_Pie',
        'TaishiFind',
        'TaishiAlarm_Pie',
        'TaishiNumber_Pie',
        'TaishiArea',
        'TaishiAlarmTable',
        'publicProjectModel',
        'pdaModel',
        'ShouyiStat_Nonghu',
        'ShouyiStat_Jianshe',
        'ShouyiCombox',
        'ShouyiFind_Zijin',
        'Shouyi_Find',
        'ShouyiAlarm_Pie',
        'ShouyiAlarmTable',
        'TaishiVolume_Column',
        'TaishiNumberTextField',
        'TaishiVolumeTextField',
        'TaishiPriceTextField',
        'uResourcesModel',
        'uRightInfoModel',
        'uRightListModel',
        'uRightResourcesModel',
        'uRoleInfoModel',
        'uRoleRightModel',
        'uUserInfoModel',
        'uUserRoleModel',
        'uDeptInfoModel',
        'map_fkSampleManagementModel',
        'yqprjmonitorInfoModel',
        'TaishiFormPanelEdit',
        'dbBlacklistModel',
        'uOptLogModel'
    ],
    stores: [
        'ArticlePubJYXCStore',
        'InfoChannelStore',
        'InfoVoteStore',
        'InfoVoteoptionStore',
        'InfoLetterStore',
        'InfoReportStore',
        'InfoCommentStore',
        'ArticleRecJYXCStore',
        'InfoReportClassStore',
        'pubNewDynamicStore',
        'SampleStore',
        'dbBackupRecoveryStore',
        'ArticleDraftJYXCStore',
        'ArticleRecWFJCStore',
        'ArticlePubWFJCStore',
        'ArticleDraftWFJCStore',
        'ArticleRecBSZNStore',
        'ArticlePubBSZNStore',
        'ArticleDraftBSZNStore',
        'ArticleRecYWJSStore',
        'ArticlePubYWJSStore',
        'ArticleDraftYWJSStore',
        'ArticleRecFLFGStore',
        'ArticlePubFLFGStore',
        'ArticleDraftFLFGStore',
        'ArticleRecZCJDStore',
        'ArticlePubZCJDStore',
        'ArticleDraftZCJDStore',
        'ArticleRecBZGFStore',
        'ArticlePubBZGFStore',
        'ArticleDraftBZGFStore',
        'ArticleRecCJWTStore',
        'ArticleDraftCJWTStore',
        'MyJsonStore22',
        'ArticlePubCJWTStore',
        'InfoVoteoptionUpdateStore',
        'syrSchemeShow3',
        'syrSchemeShow4',
        'syrMonitorData',
        'syrProgress',
        'abnmWholeSupervisionStore',
        'abnmIndexStore',
        'abnmDkTransSupervisionStore',
        'InfoVoteoptionAddStore',
        'ArticlePubFAGSStore',
        'ArticleDraftFAGSStore',
        'ArticleRecFAGSStore',
        'proviceStore',
        'cityStore',
        'countyStore',
        'syrSchemeShow1',
        'syrSchemeShow2',
        'comboStore',
        'FkRegulatoryStore',
        'FkProjectDikuaiStore',
        'FkYanshouGongchengStore',
        'FkacceptApplyStore',
        'abnmProvinceStore',
        'abnmCityStore',
        'abnmCountyStore',
        'FkRwStore',
        'EvaluateReportStore',
        'GongchengOpinionStore',
        'db_usersStore',
        'abnmWSRWstore',
        'TaishiPrice',
        'TaishiVolume_Pie',
        'TaishiFind',
        'TaishiAlarm_Pie',
        'TaishiNumber_Pie',
        'TaishiArea',
        'TaishiAlarmTable',
        'abnmXunChaStore',
        'publicProjectStore',
        'townStore',
        'projectNameIDStore',
        'ShouyiStat_Nonghu',
        'ShouyiStat_Jianshe',
        'ShouyiCombox',
        'ShouyiFind_Zijin',
        'ShouyiFind',
        'ShouyiAlarm_Pie',
        'ShouyiAlarmTable',
        'TaishiVolume_Column',
        'TaishiNumberCombox',
        'TaishiVolumeCombox',
        'TaishiPriceCombox',
        'auditResultsStore',
        'rwClassStore',
        'uRightListStore',
        'uUserRoleStore',
        'uUserInfoStore',
        'uRoleInfoStore',
        'uRightInfoStore',
        'uDeptInfoStore',
        'map_fkSampleManagementStore',
        'abnmPublicProjectStore',
        'FkacceptCheckStore',
        'abnmProjectDikuaiStore',
        'TaishiAlarmCombox',
        'ShouyiAlarmCombox',
        'yqprjmonitorInfoStore',
        'TaishiFormPanelEdit',
        'TaishiAreaCombox',
        'ApplyprojectStore',
        'ApplyIdStore',
        'FKJCResultDikuaiStore',
        'useMapResourceStore',
        'dbBlacklistStore',
        'uOptLogStore',
        
        'notice',
        'ggleixing',
        'showSuggestion',
        'replyGH',
        'treestoreProjPlan',
        'treestoreApplyRecl',
        'treestoreAnocSugt',
        'treestoreMontCtrl',
        'treestorePreWarn',
        'treestoreEfctEvlu',
        'treestoreMain',
        'point',
        'suggestion',
        'treestoreRecFile',
        'listFile',
        'Proj',
        'categoryRuleYJ',
        'ruleCQ',
        'result',
        'ruleZQ',
        'detailMont',
        'montBC',
        'montAZ',
        'montCQ',
        'applicationAuth',
        'treeReclProc',
        'storeUserControl',
        'storePermission',
        'reclProc',
        'recordReclProc'
    ],
    views: [
        'ManagAcceptApply',
        'infoArticleJYXCTab',
        'infoCommentTab',
        'infoChannelTab',
        'infoVoteTab',
        'infoVotePublishTab',
        'infoLetterTab',
        'infoLetterDetailTab',
        'infoReportDetailTab',
        'MyViewport',
        'pubNewDynamicTab',
        'EvaluateSelectProject',
        'sampleDataManage',
        'sampleDataAdd',
        'checkApply',
        'aceeptApplyfile',
        'manageProject',
        'addproject',
        'addFkdikuai',
        'gongchengdataAdd',
        'GongchengDataManage',
        'manageProjectDikuai',
        'updateFkdikuai',
        'UpdateGongchengdata',
        'acceptApply',
        'RegulatoryWarning',
        'EvaluateResult',
        'EvaluateReport',
        'EvaluateIndexPut',
        'EvaluateExpertOpnion',
        'Addtask',
        'taskTable',
        'syrContrastAnalysis',
        'syrSchemeShow',
        'syrDataManagement',
        'db_BackupRecoveryData',
        'db_SystemLogTab',
        'db_UserPrivilegeManagerTab',
        'infoArticleWFJCTab',
        'infoArticleBSZNTab',
        'infoArticleYWJSTab',
        'infoArticleFLFGTab',
        'infoArticleZCJDTab',
        'infoArticleBZGFTab',
        'infoArticleCJWTTab',
        'infoVoteoptionShowTab',
        'infoVoteUpdateTab',
        'syrOneProjectAllData',
        'syrMonitorResult',
        'abnmWholeSupervisionTab',
        'abnmDkTransSupervisionTab',
        'abnmDKTSAddTab',
        'abnmDKTSUpdateTab',
        'db_MapServerTab',
        'Mapserver',
        'infoReportTab',
        'abnmWholeSupRWTab',
        'EvaluateGongchengIndex',
        'sampleDataUpdate',
        'db_UserInfoEditTab',
        'db_UserInfoWindow',
        'yqprojectmonitorInfo',
        'abnmWSAddTab',
        'abnmWSRWAddTab',
        'abnmWSUpdateTab',
        'abnmWSRWUpdateTab',
        'TaishiPrice',
        'TaishiNumber',
        'TaishiVolume',
        'TaishiFind',
        'TaishiArea',
        'TaishiAlarm',
        'abnmDKTSmapTab',
        'abnmXunChaTab',
        'abnmXunChaAddTab',
        'abnmSupInfoTab',
        'pdataskTable',
        'ShouyiStat_Nonghu',
        'ShouyiStat_Jianshe',
        'ShouyiRegister',
        'ShouyiFind_Zijin',
        'ShouyiFind_Hetong',
        'ShouyiAlarm_Canshu',
        'ShouyiAlarm',
        'TaishiAlarm_Canshu',
        'db_RoleInfoAddWindow',
        'db_RightInfoAddWindow',
        'db_DeptInfoWindow',
        'db_DeptInfoAddWindow',
        'db_RightInfoWindow',
        'db_RoleInfoWindow',
        'db_UserInfoAddWindow',
        'db_UserRoleSettingWindow',
        'use_MonitoringSampling',
        'TaishiAlarm_Chart',
        'ShouyiAlarm_Chart',
        'FieldLhdPanel',
        'FieldWatchPanel',
        'FieldKxcPanel',
        'FieldFqdPanel',
        'TaishiFormPanelEdit',
        'use_SelectLayerWindow',
        'use_MonitorResult',
        'db_BlacklistTab',
        'db_BlacklistWindow',
        'db_RoleRightSettingWindow',
        
        'dh',
        'recFile',
        'preWarm',
        'MontCtrl',
        'efctEvlu',
        'notice',
        'proj',
        'main',
        'tpMain',
        'tpProjPlan',
        'tpApplyRecl',
        'tpAnocSugt',
        'tpMontCtrl',
        'tpPreWarm',
        'tpRecFile',
        'tpEfctEvlu',
        'application',
        'tpReclProc',
        'reclProc',
        
        'use_SelectLayerWindow',
        'use_MonitorResult',
        'db_BlacklistTab',
        'db_BlacklistWindow',
        'db_RoleRightSettingWindow'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.MyViewport');
    }

});
