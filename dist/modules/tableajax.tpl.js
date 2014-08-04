/**
 * adapt-strap
 * @version v0.2.0 - 2014-08-04
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/tableajax.tpl.html', '<div class="ad-table-ajax-container"><div class="ad-table-ajax-table-container"><table class="%=tableClasses%"><tr><th data-ng-repeat="definition in %=columnDefinition%" ng-click="%=tableName%.sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate == definition.sortKey"><i class="%=icon-sortAscending%" ng-hide="%=tableName%.localConfig.reverse"></i> <i class="%=icon-sortDescending%" ng-show="%=tableName%.localConfig.reverse"></i></div><div class="pull-right" ng-if="definition.sortKey && %=tableName%.localConfig.predicate != definition.sortKey"><i class="%=icon-sortable%"></i></div><div ng-if="definition.columnHeaderTemplate" ng-bind-html="definition.columnHeaderTemplate"></div><div ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div></th></tr><tr data-ng-repeat="item in %=tableName%.items.list"><td data-ng-repeat="definition in %=columnDefinition%"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="!definition.templateUrl">{{ %=tableName%.applyFilter(item[definition.displayProperty], definition.cellFilter) }}</div></td></tr></table><ad-loading-overlay loading="%=tableName%.localConfig.loadingData"></ad-loading-overlay></div><div class="row"><div class="col-md-8 col-sm-8"><div class="%=paginationBtnGroupClasses% pull-left"><button type="button" class="btn btn-default" ng-click="%=tableName%.loadPage(1)" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-firstPage%"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadPreviousPage()" ng-disabled="%=tableName%.items.paging.currentPage == 1"><i class="%=icon-previousPage%"></i></button> <button type="button" class="btn btn-default" ng-repeat="page in %=tableName%.localConfig.pagingArray" ng-class="{active: %=tableName%.items.paging.currentPage == page}" ng-click="%=tableName%.loadPage(page)">{{ page }}</button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadNextPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-nextPage%"></i></button> <button type="button" class="btn btn-default" ng-click="%=tableName%.loadLastPage()" ng-disabled="%=tableName%.items.paging.currentPage == %=tableName%.items.paging.totalPages"><i class="%=icon-lastPage%"></i></button></div></div><div class="col-md-4 col-sm-4"><div class="%=paginationBtnGroupClasses% pull-right"><button type="button" class="btn btn-default" ng-repeat="size in %=tableName%.items.paging.pageSizes" ng-class="{active: %=tableName%.items.paging.pageSize == size}" ng-click="%=tableName%.pageSizeChanged(size)">{{ size }}</button></div></div></div></div>');
  }
]);