Template.taskSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var task = {
      title: $(e.target).find('[name=title]').val(),
      facility: $(e.target).find('[name=facility]').val(),
      description: $(e.target).find('[name=description]').val()
    }
    
    Meteor.call('task', task, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        if (error.error === 302)
          Router.go('taskPage', {_id: error.details})
      } else {
        Router.go('taskPage', {_id: id});
      }
    });
  }
});

