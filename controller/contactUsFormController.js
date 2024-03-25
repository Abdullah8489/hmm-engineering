const { default: mongoose } = require("mongoose");
const connectDB = require("../helperFiles/DBConnection");
const contactRecord = require("../models/contactUsSchema");

exports.addContactUsFormRecord = async (req, res) => {
    console.log(
        `${req.body.email} ${req.body.firstName}`
    );
    try {
        connectDB();
        const contactUsRecord = new contactRecord({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            contactNo: req.body.contactNo,
            description: req.body.description
        });
        const savedRecord = await user.save();
        res.status(200).json(savedRecord);
    }
    catch {
        console.log(err.message);
    }
}

exports.getAllContactUsFormRecords = async (req, res) => {
    try {
        contactRecord.find({}, 'firstName lastName email contactNo description isRead', (err, contactRecord) => {
            if (err) {
                console.error('Error fetching contact us form records:', err);
            } else {
                console.log('All records of contact us are:', contactRecord);
            }
        });
    }
    catch (err) {
        console.log(err.message);
    }
}

exports.updateIsReadFlag = async (req, res) => {
    try{
        connectDB();
        const objectId = mongoose.Types.ObjectId(req.body.recId);
        const updatedRecord = await contactRecord.updateOne({ _id: objectId}, {$set: {isRead:true}});
        if (updatedRecord.nModified > 0) {
            console.log(`isRead flag updated to true for document with ID: ${objectId}`);
        }
        else {
            console.log(`Document with ID ${objectId} not found or is already marked as read.`);
        }
    }
    catch(err)
    {
        console.log(err.message);
    }
}

exports.delRecordByObjId = async (req, res) => {
    try{
        connectDB();
        const objectId = mongoose.Types>ObjectId(req.body.recId);
        const result = await contactRecord.deleteOne({ _id: objectId});
        if(result.deletedCount>0){
            console.log(`Document with ID ${req.body.recId} deleted successfully`);
        }
        else{
            console.log(`Document with ID ${req.body.recId} not found`);
        }
    }
    catch(err){
        console.log(err.message);
    }
}
