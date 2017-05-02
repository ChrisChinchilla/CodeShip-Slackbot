/**
 * Created by chrisward on 01/05/2017.
 */
var Codeship = require('codeship-node');
var codeship = new Codeship({apiKey: 'd12aacc078aa0133c501623aed5d7603'});

module.exports = function(controller) {
  controller.hears('projects', 'direct_message,direct_mention', function (bot, message) {
    codeship.projects.list(function (err, projects) {
      if (err) {
        bot.reply(message, "I'm sorry, there was an error retrieving projects from CodeShip.");
      }
      for (var i in projects) {
        bot.reply(message, projects[i].repository_name + ' - https://app.codeship.com/projects/' + projects[i].id);
        console.log(message);
      }
    });
  });
};