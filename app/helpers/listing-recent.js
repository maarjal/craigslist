import Ember from 'ember';

export function listingRecent(params/*, hash*/) {
  var date = moment(params[0], 'D-M-YYYY').format('MMM DD');
  return date;
//   Ember.Handlebars.registerBoundHelper('currentDate', function() {
//   return moment().format('LL');
// });
}


export default Ember.Helper.helper(listingRecent);
