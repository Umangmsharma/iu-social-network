import express from "express";

import { register, login } from "../controllers/auth";
import { search } from "../controllers/search";
import { addFriend,deleteFriend,blockFriend,showAllFriends } from "../controllers/friend";

const router = express.Router();

const isWorking = async (req, res) => {
	return res.json("API is working!");
};

//check if api working
router.get("/isworking", isWorking);

//register user
router.put("/register", register);

//login
router.post("/login", login);

//search
router.post("/search", search);

//add a friend
router.post("/addfriend", addFriend);

//delete a friend
router.post("/deletefriend", deleteFriend);

//block a friend
router.post("/blockfriend", blockFriend);

//show all friends
router.post("/showallfriends", showAllFriends);

module.exports = router;
