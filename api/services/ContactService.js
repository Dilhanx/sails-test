// api/services/ContactService.js
module.exports = {

    GetAllContacts: function (callback) {
        try{
        ContactDetails.find({}).exec(function (err,records) {   
            return callback(err,records); 
        });
        }
        catch(err){
            return callback(err); 
        }
    
    },

    AddContact: function (details, callback) {
        ContactDetails.create({
        name: details.name,
        phoneNumber: details.phoneNumber
        }).exec(function(err,details){
        return callback(err,'Inserted: '+details.name+" "+details.phoneNumber); 
        });

    
    }
}