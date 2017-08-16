/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contact
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ContactController.GetAllContacts()`
   */
  GetAllContacts: function (req,res) {
    
    ContactService.GetAllContacts(function(err, records) {
    if (!err) {
      return res.json(records);
    }else{
      return res.notFound();
    }
    });
    
  },


  /**
   * `ContactController.AddContact()`
   */
  AddContact: function (req, res) {


    ContactService.AddContact({name: req.param('name'),phoneNumber:req.param('phoneNumber')},function(err,message) {
    if (!err) {
      return res.send(message);
    }else{
      return res.notFound();
    }
   });    


   
 }
};

