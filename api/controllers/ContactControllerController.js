/**
 * ContactControllerController
 *
 * @description :: Server-side logic for managing Contactcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ContactControllerController.GetAllContacts()`
   */
  GetAllContacts: function (res) {
    
    // var j =ContactDetails.find().exec(function (err){})
    // console.log(JSON.stringify(j))
    console.log( ContactDetails.count().exec(function (err){}))
    return res.json({
        JSON: ContactDetails.find().exec(function (err){})
    });
  },


  /**
   * `ContactControllerController.AddContact()`
   */
  AddContact: function (req, res) {
    console.log(req.param('name'))
    console.log(req.param('phoneNumber'))
  
    ContactDetails.create({
      name: req.param('name'),
      phoneNumber: req.param('phoneNumber')
    }).exec(function(name){});

   return res.send('Inserted:'+req.param('name')+" "+req.param('phoneNumber'));
  }
};

