const mongoose=require('mongoose')

const PlayerSchema=new mongoose.Schema({
    playerNumber:{
        type: Number
    },
    life: Number,
    poisCounters: Number,
    bossUsed: Boolean,
    cardPlayed: String
})