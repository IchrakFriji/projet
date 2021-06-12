const SupportMessage = require('../Models/contactModel');
const auth = require('../VTOKEN');

const router = require('express').Router();

//send a message
router.post('/newMessage', auth, (req, res) => {
    let message = new SupportMessage({ ...req.body })
    message.save()
    res.send({ msg: "success", data: message })
})



//get all messages into my admin dashboard
router.get('/allMessage',auth, (req, res) => {
    if(req.user.IsAdmin==true){
        SupportMessage.find({}, (err, data) => {
            if (err) {
              res.send(err)
            }
            res.send(data)
          })
        
    }
else{
    res.send({message:"This is an administrator's secure route, verify your information and try again "})
}
   
  })



module.exports = router;
