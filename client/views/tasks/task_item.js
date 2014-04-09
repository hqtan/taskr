Template.taskItem.helpers({
  submittedText: function() {
    return new Date(this.submitted).toString();
  }
});
