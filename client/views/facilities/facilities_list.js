Template.facilitiesList.helpers({
  facilities: function() {
    var facs = Tasks.find({}, {fields: {facility: 1}}).fetch();
    return _.uniq(facs, false, function(d) {return d.facility});
    // ref: https://coderwall.com/p/o9np9q
  }
});
