if (Tasks.find().count() === 0) {
  var now = new Date().getTime();

  Tasks.insert({
    title: 'First Task',
    requester: 'qing',
    submitted: now - 7 * 3600 * 1000
  });

  Tasks.insert({
    title: 'Second Task',
    requester: 'jeromy',
    submitted: now - 6 * 3600 * 1000
  });

  Tasks.insert({
    title: 'Third Task',
    requester: 'qing',
    submitted: now - 5 * 3600 * 1000
  });

}
