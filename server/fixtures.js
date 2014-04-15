if (Tasks.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var qingId = Meteor.users.insert({
    profile: { name: 'Qing' }
  });
  var qing = Meteor.users.findOne(qingId);
  var jeromyId = Meteor.users.insert({
    profile: { name: 'Jeromy' }
  });
  var jeromy = Meteor.users.findOne(jeromyId);

  Tasks.insert({
    title: 'First Task',
    userId: qing._id,
    requester: qing.profile.name,
    facility: 'Area51',
    submitted: now - 7 * 3600 * 1000,
    description: 'Do something for first task'
  });

  Tasks.insert({
    title: 'Second Task',
    userId: jeromy._id,
    requester: jeromy.profile.name,
    facility: 'Bollywood',
    submitted: now - 6 * 3600 * 1000,
    description: 'Do something for second task'
  });

  Tasks.insert({
    title: 'Third Task',
    userId: qing._id,
    requester: qing.profile.name,
    facility: 'Area51',
    submitted: now - 5 * 3600 * 1000,
    description: 'Do something for third task'
  });

}
