window.onload=function(){
function ViewModel() {
	var self = this;
    self.amo_exec = ko.observableArray([]);
    self.amo_read = ko.observableArray([]);
    self.amo_write = ko.observableArray([]);

 			self.sum_amo_exec = ko.computed(function () {
 				return addcombine(self.amo_exec());
			});

			self.sum_amo_read = ko.computed(function () {
 				return addcombine(self.amo_read());
			});

			self.sum_amo_write = ko.computed(function () {
 				return addcombine(self.amo_write());
			});

			function addcombine($innerarray){
				$innerarray = $innerarray.map(function(item){return parseInt(item)});
				var count = 0;
				for(var i = 0; i < $innerarray.length; i++)
				{
				    count = count + $innerarray[i];
				}
				return count;
			}
}
function makeTable(){
$row_names=["read","write","exec"];
$vals=[4,2,1];
$bind_names=["amo_exec","amo_read","amo_write"];

$('#permissions_table').append("<tr><td>Permission</td><td>Owner</td><td>Group</td><td>other</td></tr>");

for (i = 0; i < $row_names.length; i++) {
    	$('#permissions_table').append('<tr></tr>');
    	    $("#permissions_table tr:last").append("<td>"+$row_names[i]+"</td>");
    	    for (j = 0; j < $bind_names.length; j++) {
	    	    $("#permissions_table tr:last").append("<td><input type='checkbox' value='"+$vals[i]+"' data-bind='checked: "+$bind_names[j]+"'/></td>");
	    	}
	}
$('#permissions_table').append("<tr><td></td><td data-bind='text: sum_amo_exec'></td><td data-bind='text: sum_amo_read'></td><td data-bind='text: sum_amo_write'></td></tr>");
}
makeTable();
ko.applyBindings(new ViewModel());
}//]]> 