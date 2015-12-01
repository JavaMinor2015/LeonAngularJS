/**
 * Created by Leon Stam on 1-12-2015.
 */
describe('E2E: Contact form', function() {
  var showButton = function() {
    element(by.id('addNewContactBtn')).click();
  };

  beforeEach(function() {
    browser.get('http://localhost:9000');
  });

  it('shouldn\'t show the new contact form from the start', function() {
    var addButton = element(by.id('newContactSaveBtn'));
    expect(addButton.isDisplayed()).toBe(false);

    var newButton = element(by.id('addNewContactBtn'));
    newButton.click();
    expect(addButton.isDisplayed()).toBe(true);
  });

  it('should disable the submit button when the form is invalid', function() {
    showButton();
    var addButton = element(by.id('newContactSaveBtn'));
    expect(addButton.isEnabled()).toBe(false);
  });

  it('should enable the submit button when the form is valid', function() {
    showButton();
    element(by.model('newContact.firstName')).sendKeys('Frits');
    element(by.model('newContact.surname')).sendKeys('Spits');
    element(by.model('newContact.email')).sendKeys('frits@spits.nl');
    var addButton = element(by.id('newContactSaveBtn'));
    expect(addButton.isEnabled()).toBe(true);
  });

  it('should add a contact to the list when submitting the form', function() {
    showButton();
    element(by.model('newContact.firstName')).sendKeys('Frits');
    element(by.model('newContact.surname')).sendKeys('Spits');
    element(by.model('newContact.email')).sendKeys('frits@spits.nl');

    var contacts = by.repeater('contact in contacts');
    var addButton = element(by.id('newContactSaveBtn'));
    addButton.click();

    expect(element.all(contacts).count()).toBe(3);
    var email = contacts.row(2).column('email');
    expect(element(email).getText()).toBe('frits@spits.nl');
  });

});
