import users from "../models/User.js";
import bcrypt from "bcrypt";
import checkUser from "../utils/Validators.js";
import createToken, { verifyToken } from "../utils/Token.js";

class UserController {
  static getUsers = (req, res) => {
    users.find((err, users) => {
      return res.status(200).json(users);
    });
  };

  static registerUser = async (req, res) => {
    let user = new users(req.body);
    try {
      user.pass = await bcrypt.hash(user.pass, 12);
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.status(201).send(user.toJSON());
        }
      });
    } catch (err) {
      res.status(500).send({ message: "Informe o usuario/senha" });
    }
  };

  static removeUser = (req, res) => {
    let user_id = req.params.id;
    users.findByIdAndDelete(user_id, {}, (err, user) => {
      if (err) {
        res.status(400).send({
          message: `O usuario de id (${user_id}) não foi encontrado no sistema.`,
        });
      } else {
        res.status(200).send({
          message: "Usuario deletado com sucesso!",
          usuario: {
            ...user._doc,
          },
        });
      }
    });
  };

  static checkPass = (req, res) => {
    let userr = new users(req.body);
    users.findOne({ user: userr?.user }, {}, async (err, user_db) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        try {
          await checkUser(user_db, userr.pass);
          res
            .status(200)
            .send({
              message: "Usuario autorizado!",
              token: createToken(user_db)
            });
        } catch (err) {
          res.status(401).send({ message: err.message });
        }
      }
    });
  };

  static checkToken = (req, res) => {
    let token = req.param("token");
    if (token) {
      try {
        verifyToken(token);
        res.status(200).send({valid: true});
      } catch (err) {
        res.status(400).send({ valid: false });
      }
    } else {
      res.status(400).send({ valid: false });
    }
  };
}

export default UserController;
