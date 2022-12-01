const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const AdminModel = require('../Model/Admin');

const UserModel = require('../models/User');

module.exports.createAdmin = async (AdminInfo) => {
  try {
    // hash the password
    let hashedPassword = await bcrypt.hash(AdminInfo.password, 12);

    // create and save the new user with the hashed password
    const newAdmin = new AdminModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.name,
      Address:req.body.Address,
      DOB:req.body.DOB,
      gender:req.body.gender
    });

    await newAdmin.save();
  } catch (err) {
    throw new Error('Error creating new user, please try again later.');
  }
};

module.exports.doesUserExist = async (username) => {
  const existingUser = await AdminModel.findOne({
    username: username
  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};

module.exports.checkCredentials = async (username, password) => {
  try {
    // find user that has the same username
    const Admin = await AdminModel.findOne({
      username: username
    });

    // compare the plaintext password with the user's hashed password in the db.
    let isCorrectPassword = bcrypt.compare(password, user.password);

    if (isCorrectPassword) {
      return Admin;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error logging in, please try again later.');
  }
};

module.exports.generateJWT = (Admin) => {
  const jwtPayload = {
    AdminId: Admin._id,
    username: Admin.username,
    
    // if different users have different roles, you could put the role here too.
  };

  const jwtSecret = process.env.JWT_SECRET;

  try {
    let token = JWT.sign(jwtPayload, jwtSecret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Failure to sign in, please try again later.');
  }
};

module.exports.auth = async (token) => {
  try {
    // verify the integrity of the token and extract its payload
    // it will throw an error by default if the token is invalid or had expired
    const tokenPayload = await JWT.verify(token, process.env.JWT_SECRET);
    // return the token payload as we might need it later in the controller
    return tokenPayload;
  } catch (error) {
    throw new Error('Unauthrozied.');
  }
};
