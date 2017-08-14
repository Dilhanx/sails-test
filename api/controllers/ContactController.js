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
    
    // var j =ContactDetails.find().exec(function (err){})
    // console.log(JSON.stringify(j)) {"name":1,"phoneNumber":1,"_id":0}

    ContactDetails.find({}).exec(function (err,records)
    {

      return res.json(records);
    });
    
  },


  /**
   * `ContactController.AddContact()`
   */
  AddContact: function (req, res) {
    console.log(req.param('name'))
    console.log(req.param('phoneNumber'))
    
    ContactDetails.create({
      name: req.param('name'),
      phoneNumber: req.param('phoneNumber')
    }).exec(function(name){
      return res.send('Inserted: '+req.param('name')+" "+req.param('phoneNumber'));
    });

   
  }
};

