describe('GridOptions factory', function () {
  var GridOptions;

  beforeEach(module('ui.grid'));

  beforeEach(inject(function (_GridOptions_) {
    GridOptions = _GridOptions_;
  }));


 describe('initialize', function() {
    it('defaults all options', function() {
      var options = {};
      expect( GridOptions.initialize(options) ).toEqual({
        onRegisterApi: undefined,
        data: [],
        columnDefs: [],
        excludeProperties: [ '$$hashKey' ],
        enableRowHashing: true,
        rowIdentity: jasmine.any(Function),
        getRowIdentity: jasmine.any(Function),
        flatEntityAccess: false,
        headerRowHeight: 30,
        rowHeight: 30,
        minRowsToShow: 10,
        showHeader: true,
        showGridFooter: false,
        showColumnFooter: false,
        columnFooterHeight: 30,
        gridFooterHeight: 30,
        columnWidth: 50,
        maxVisibleColumnCount: 200,
        virtualizationThreshold: 20,
        columnVirtualizationThreshold: 10,
        excessRows: 4,
        scrollThreshold: 4,
        excessColumns: 4,
        aggregationCalcThrottle: 500,
        wheelScrollThrottle: 70,
        scrollDebounce: 300,
        enableHiding: true,
        enableSorting: true,
        suppressMultiSort: false,
        enableFiltering: false,
        filterContainer: 'headerCell',
        enableColumnMenus: true,
        enableVerticalScrollbar: 1,
        enableHorizontalScrollbar: 1,
        enableMinHeightCheck: true,
        minimumColumnSize: 30,
        rowEquality: jasmine.any(Function),
        headerTemplate: null,
        footerTemplate: 'ui-grid/ui-grid-footer',
        gridFooterTemplate: 'ui-grid/ui-grid-grid-footer',
        rowTemplate: 'ui-grid/ui-grid-row',
        gridMenuTemplate: 'ui-grid/uiGridMenu',
        menuButtonTemplate: 'ui-grid/ui-grid-menu-button',
        menuItemTemplate: 'ui-grid/uiGridMenuItem',
        disableGridMenuHideOnScroll: false,
        appScopeProvider: null
      });
    });

    it('true and values', function() {
      var testFunction = function() {};
      var options = {
        onRegisterApi: testFunction,
        data: [ { name: 'x' } ],
        columnDefs: [ { name: 'y' }],
        excludeProperties: [ 'y' ],
        enableRowHashing: true,
        rowIdentity: testFunction,
        getRowIdentity: testFunction,
        flatEntityAccess: true,
        headerRowHeight: 40,
        rowHeight: 40,
        minRowsToShow: 15,
        showHeader: true,
        showGridFooter: true,
        showColumnFooter: true,
        columnFooterHeight: 50,
        gridFooterHeight: 50,
        columnWidth: 60,
        maxVisibleColumnCount: 25,
        virtualizationThreshold: 27,
        columnVirtualizationThreshold: 12,
        excessRows: 5,
        scrollThreshold: 6,
        excessColumns: 7,
        aggregationCalcThrottle: 1000,
        wheelScrollThrottle: 75,
        enableHiding: true,
        enableSorting: true,
        suppressMultiSort: true,
        enableFiltering: true,
        filterContainer: 'columnMenu',
        enableColumnMenus: true,
        enableVerticalScrollbar: 1,
        enableHorizontalScrollbar: 1,
        enableMinHeightCheck: true,
        minimumColumnSize: 20,
        rowEquality: testFunction,
        headerTemplate: 'testHeader',
        footerTemplate: 'testFooter',
        gridFooterTemplate: 'testGridFooter',
        rowTemplate: 'testRow',
        gridMenuTemplate: 'testGridMenu',
        menuButtonTemplate: 'testMenuButton',
        menuItemTemplate: 'testMenuItem',
        extraOption: 'testExtraOption',
        disableGridMenuHideOnScroll: true,
        appScopeProvider : 'anotherRef'
      };
      expect( GridOptions.initialize(options) ).toEqual({
        onRegisterApi: testFunction,
        data: [ { name: 'x' } ],
        columnDefs: [ { name: 'y' }],
        excludeProperties: [ 'y' ],
        enableRowHashing: true,
        rowIdentity: testFunction,
        getRowIdentity: testFunction,
        flatEntityAccess: true,
        headerRowHeight: 40,
        rowHeight: 40,
        minRowsToShow: 15,
        showHeader: true,
        showGridFooter: true,
        showColumnFooter: true,
        columnFooterHeight: 50,
        gridFooterHeight: 50,
        columnWidth: 60,
        maxVisibleColumnCount: 25,
        virtualizationThreshold: 27,
        columnVirtualizationThreshold: 12,
        excessRows: 5,
        scrollThreshold: 6,
        excessColumns: 7,
        aggregationCalcThrottle: 1000,
        wheelScrollThrottle: 75,
        scrollDebounce: 300,
        enableHiding: true,
        enableSorting: true,
        suppressMultiSort: true,
        enableFiltering: true,
        filterContainer: 'columnMenu',
        enableColumnMenus: true,
        enableVerticalScrollbar: 1,
        enableHorizontalScrollbar: 1,
        enableMinHeightCheck: true,
        minimumColumnSize: 20,
        rowEquality: testFunction,
        headerTemplate: 'testHeader',
        footerTemplate: 'testFooter',
        gridFooterTemplate: 'testGridFooter',
        rowTemplate: 'testRow',
        gridMenuTemplate: 'testGridMenu',
        menuButtonTemplate: 'testMenuButton',
        menuItemTemplate: 'testMenuItem',
        extraOption: 'testExtraOption',
        disableGridMenuHideOnScroll: true,
        appScopeProvider : 'anotherRef'
      });
    });

    it('false and values', function() {
      var testFunction = function() {};
      var options = {
        onRegisterApi: testFunction,
        data: [ { name: 'x' } ],
        columnDefs: [ { name: 'y' }],
        excludeProperties: [ 'y' ],
        enableRowHashing: false,
        rowIdentity: testFunction,
        getRowIdentity: testFunction,
        flatEntityAccess: false,
        headerRowHeight: 40,
        rowHeight: 40,
        minRowsToShow: 15,
        showHeader: false,
        showGridFooter: false,
        showColumnFooter: false,
        columnFooterHeight: 50,
        gridFooterHeight: 50,
        columnWidth: 60,
        maxVisibleColumnCount: 25,
        virtualizationThreshold: 27,
        columnVirtualizationThreshold: 12,
        excessRows: 5,
        scrollThreshold: 6,
        excessColumns: 7,
        aggregationCalcThrottle: 1000,
        wheelScrollThrottle: 75,
        enableFiltering: false,
        filterContainer: 'columnMenu',
        enableHiding: false,
        enableSorting: false,
        suppressMultiSort: false,
        enableColumnMenus: false,
        enableVerticalScrollbar: 0,
        enableHorizontalScrollbar: 0,
        enableMinHeightCheck: false,
        minimumColumnSize: 10,
        rowEquality: testFunction,
        headerTemplate: 'testHeader',
        footerTemplate: 'testFooter',
        gridFooterTemplate: 'testGridFooter',
        rowTemplate: 'testRow',
        gridMenuTemplate: 'testGridMenu',
        menuButtonTemplate: 'testMenuButton',
        menuItemTemplate: 'testMenuItem',
        disableGridMenuHideOnScroll: false,
        extraOption: 'testExtraOption'
      };
      expect( GridOptions.initialize(options) ).toEqual({
        onRegisterApi: testFunction,
        data: [ { name: 'x' } ],
        columnDefs: [ { name: 'y' }],
        excludeProperties: [ 'y' ],
        enableRowHashing: false,
        rowIdentity: testFunction,
        getRowIdentity: testFunction,
        flatEntityAccess: false,
        headerRowHeight: 0, // Because of showHeader: false
        rowHeight: 40,
        minRowsToShow: 15,
        showHeader: false,
        showGridFooter: false,
        showColumnFooter: false,
        columnFooterHeight: 50,
        gridFooterHeight: 50,
        columnWidth: 60,
        maxVisibleColumnCount: 25,
        virtualizationThreshold: 27,
        columnVirtualizationThreshold: 12,
        excessRows: 5,
        scrollThreshold: 6,
        excessColumns: 7,
        aggregationCalcThrottle: 1000,
        wheelScrollThrottle: 75,
        scrollDebounce: 300,
        enableHiding: false,
        enableSorting: false,
        suppressMultiSort: false,
        enableFiltering: false,
        filterContainer: 'columnMenu',
        enableColumnMenus: false,
        enableVerticalScrollbar: 0,
        enableHorizontalScrollbar: 0,
        enableMinHeightCheck: false,
        minimumColumnSize: 10,
        rowEquality: testFunction,
        headerTemplate: 'testHeader',
        footerTemplate: 'testFooter',
        gridFooterTemplate: 'testGridFooter',
        rowTemplate: 'testRow',
        gridMenuTemplate: 'testGridMenu',
        menuButtonTemplate: 'testMenuButton',
        menuItemTemplate: 'testMenuItem',
        extraOption: 'testExtraOption',
        disableGridMenuHideOnScroll: false,
        appScopeProvider : null
      });
    });
  });
});
