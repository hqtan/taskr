Meteor.publish('tasks', function() {
  return Tasks.find();
});

Meteor.publish('comments', function() {
    return Comments.find();
});
