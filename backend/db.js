const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://codewithmrshubh:hello123@cluster0.sjkvbtv.mongodb.net/Db?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if(err) 
            console.log("---",err)
        else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items")
        fetched_data.find({}).toArray(async function(err,data){
            const foodCatgory =  await mongoose.connection.db.collection("foodCategory")
            foodCatgory.find({}).toArray(function (err, catData){
            if(err) console.log(err);
            else{
                global.food_items =data;
                global.foodCategory = catData;

            }
            })
        })
        }
    });
}
module.exports = mongoDB;
