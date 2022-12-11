import User from "../models/user";

export const addFriend = async (req, res) => {
	try {
        let val = await User.updateOne({"email":req.body.email}, {$push : {"friends":req.body.addfriend}})
        console.log("val----",val)
		return res.json({ ok:"success" });
	} catch (error) {
		console.log(error);
		return res.status(400).send("Error. Try Again!");
	}
};

export const deleteFriend = async (req, res) => {
	try {
        let val = await User.updateOne({"email":req.body.email}, {$pull : {"friends":req.body.deletefriend}})
        console.log("val----",val)
		return res.json({ ok:"success" });
	} catch (error) {
		console.log(error);
		return res.status(400).send("Error. Try Again!");
	}
};

export const blockFriend = async (req, res) => {
	try {
        let val = await User.updateOne({"email":req.body.email}, {$push : {"blocklist":req.body.blockfriend}})
        let val1 = await User.updateOne({"email":req.body.email}, {$pull : {"friends":req.body.deletefriend}})
        console.log("val----",val,val1)
		return res.json({ ok:"success" });
	} catch (error) {
		console.log(error);
		return res.status(400).send("Error. Try Again!");
	}
};

export const showAllFriends = async (req, res) => {
    let resp=[]
	try {
        let val = await User.find({"email":req.body.email}).exec();
        resp.push(val[0].friends)
        resp.push(val[0].blocklist)
        //Get values in UI--> console.log("val----",resp[0])
		return res.json({ resp:resp });
	} catch (error) {
		console.log(error);
		return res.status(400).send("Error. Try Again!");
	}
};
