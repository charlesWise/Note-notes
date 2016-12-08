<select ng-model="xxx" ng-options="item.name for item in fishBreed track by item.fish_breed_id"></select>
ng-model里取出的就是你选中的对象， 双向绑定会通过item.fish_breed_id绑定值