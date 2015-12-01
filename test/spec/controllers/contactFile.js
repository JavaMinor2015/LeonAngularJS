/**
 * Created by Leon Stam on 1-12-2015.
 */
describe('Filter: contactName', function() {
  var contactNameFilter;

  beforeEach(function() {
    module('angularJsApp.filters');
    inject(function($filter) {
      contactNameFilter = $filter('contactName');
    });
  });

  it('should format the name properly"', function() {
    var contact = { firstName: 'Frank', surname: 'de Boer' };
    expect(contactNameFilter(contact)).toBe('Frank de Boer');
  })

});
