/*
 * File: app/store/ArticlePubWFJCStore.js
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

Ext.define('MyApp.store.ArticlePubWFJCStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.InfoArticleModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'MyApp.model.InfoArticleModel',
            storeId: 'ArticlePubWFJCStore',
            proxy: {
                type: 'ajax',
                extraParams: {
                    searchKeyword: '',
                    searchDate: ''
                },
                url: 'get_pubArticleList?channelId=12',
                reader: {
                    type: 'json',
                    root: 'root'
                }
            }
        }, cfg)]);
    }
});