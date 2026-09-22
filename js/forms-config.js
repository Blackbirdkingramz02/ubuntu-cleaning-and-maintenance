/**
 * SparkClean — Google Forms quote links
 * See setup instructions in previous EngineersHub form guide — same process,
 * use cleaning package names below in your form dropdown.
 */
var EngineersHubForms = {
  formBase: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',

  entries: {
    package: 'entry.0000000000',
    template: 'entry.0000000001'
  },

  packages: {
    homeBasic: 'Home Basic — from R450',
    officePro: 'Office Pro — from R850',
    deepClean: 'Deep Clean Plus — from R1,500',
    maintenance: 'Maintenance Plan — from R2,500/mo',
    help: 'Not sure — need recommendation'
  },

  whatsapp: '27711439716',

  isConfigured: function () {
    return this.formBase.indexOf('YOUR_FORM_ID') === -1 &&
      this.entries.package.indexOf('0000000000') === -1;
  },

  packageUrl: function (key) {
    var label = this.packages[key];
    if (!label) return this.formBase;
    return this.formBase + '?usp=pp_url&' + this.entries.package + '=' + encodeURIComponent(label);
  },

  templateUrl: function (name) {
    return this.packageUrl('help');
  },

  whatsappPackageUrl: function (key) {
    var label = this.packages[key] || key;
    return 'https://wa.me/' + this.whatsapp + '?text=' + encodeURIComponent("Hi! I'm interested in the " + label + ' package.');
  },

  whatsappTemplateUrl: function (name) {
    return 'https://wa.me/' + this.whatsapp + '?text=' + encodeURIComponent('Hi! I need a quote for: ' + name);
  }
};
