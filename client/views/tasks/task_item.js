Template.taskItem.helpers({
  submittedText: function() {
    return new Date(this.submitted).toString();
  },

  ownTask: function() {
    return this.userId == Meteor.userId();
  }

});
