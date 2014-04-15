Tasks = new Meteor.Collection('tasks');

Tasks.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Tasks.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'facility', 'description').length > 0);
  }
});

Meteor.methods({
  task: function(taskAttributes) {
    var user = Meteor.user();
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to submit new tasks");
    
    // ensure the task has a title
    if (!taskAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a task title');
    
    // pick out the whitelisted keys
    var task = _.extend(_.pick(taskAttributes, 'title', 'facility', 'description'), {
      userId: user._id,
      requester: user.username,
      submitted: new Date().getTime(),
      commentsCount: 0
    });
    
    var taskId = Tasks.insert(task);
    
    return taskId;
  }
});

