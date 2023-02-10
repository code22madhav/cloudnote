const mongoose=require('mongoose');

const NotesSchema= new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    teg:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const NotesModel=mongoose.model('Note',NotesSchema);

module.exports=NotesModel;