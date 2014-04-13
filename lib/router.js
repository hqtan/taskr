Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('tasks'); }
});

Router.map(function() {
  this.route('tasksList', {path: '/'});

  this.route('taskPage', {
    path: '/tasks/:_id',
    data: function() { return Tasks.findOne(this.params._id);}
  });

  this.route('taskSubmit', {path: '/submit'});

  this.route('test', {
    path: '/test',
    layoutTemplate: ''
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'taskSubmit'});
