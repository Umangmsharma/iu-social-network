import User from "../models/user";
import Events from "../models/events";

export const search = async (req, res) => {
    var i=0;
    var values=[]
	try {
		console.log("*****",req.body);
		const { name } = req.body;
        console.log("name====>",name);
        let val = await User.find({"name" :{$regex : name}}).exec()
        console.log("val----",val)
        for(i=0; i<val.length; i++){
            values.push(val[i].name)
        }
		console.log("User Successfully saved!!!",values);
		return res.json({ name:values });
	} catch (error) {
		console.log(error);
		return res.status(400).send("Error. Try Again!");
	}
};

