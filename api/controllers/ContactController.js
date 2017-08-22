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
      return res.notFound(err);
    }
    });
    
  },


  /**
   * `ContactController.AddContact()`
   */
  AddContact: function (req, res) {

    if(req.param('name')!= undefined && req.param('phoneNumber')!= undefined){
        ContactService.AddContact({name: req.param('name'),phoneNumber:req.param('phoneNumber')},function(err,message) {
          if (!err) {
            return res.send(message);
          }else{
            return res.notFound();
          }
      });    
    }
    else{
      return res.badRequest("Invalid Parameters");
    }
  },
  DeleteContact: function (req, res) {
    
    if(req.param('name')!= undefined && req.param('phoneNumber')!= undefined){
        ContactService.DeleteContact({name: req.param('name'),phoneNumber:req.param('phoneNumber')},function(err,message) {
          if (!err) {
            return res.send(message);
          }else{
            return res.notFound();
          }
      });    
    }
    else{
      return res.badRequest("Invalid Parameters");
    }
   
 }
};

