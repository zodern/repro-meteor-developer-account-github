import { ServiceConfiguration } from 'meteor/service-configuration';
ServiceConfiguration.configurations.upsert({
  service: 'meteor-developer'
},
  {
    $set: {
      service: 'meteor-developer',
      clientId: Meteor.settings['meteor-developer-accounts'].clientId,
      secret: Meteor.settings['meteor-developer-accounts'].secret,
    }
  });
