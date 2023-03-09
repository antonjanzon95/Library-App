import fs from "fs";
import path from "path";
import CryptoJS from "crypto-js";

const dataFilePath = path.join(process.cwd(), "data", "users.json");

const readData = () => {
  try {
    const fileContent = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading data file", error);
    return null;
  }
};

const writeData = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataFilePath, jsonData, "utf-8");
  } catch (error) {
    console.error("Error writing data file", error);
  }
};

export default function handler(req, res) {
  const { method, body } = req;

  const data = readData() || {};

  switch (req.query.path) {
    case "add-user":
      if (method === "POST") {
        const { username, password } = body;
        const encryptedPassword = CryptoJS.AES.encrypt(
          password,
          "test key"
        ).toString();
        const newUser = {
          username: username,
          password: encryptedPassword,
        };

        const checkUsername = data.users.find(
          (user) => user.username === newUser.username
        );

        if (checkUsername) {
          res
            .status(409)
            .json({ success: false, message: "Username already exists" });
        } else {
          data.users.push(newUser);
          writeData(data);
        }
        res.status(200).json({ success: true, message: "User added" });
      } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
      }
      break;

    case "get-users":
      if (method === "GET") {
        res.status(200).json(data.users);
      } else {
        res.status(405).json({ success: false, message: "Method not allowed" });
      }
      break;
    default:
      res.status(404).json({ success: false, message: "Endpoint not found" });
  }
}
