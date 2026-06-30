const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const userMiddleware = async (req, res, next) => {
const token = req.header("Authorization");

if (!token) {
return res.status(401).json({ message: "Accès refusé" });
}

try {
const decoded = jwt.verify(
token.replace("Bearer ", ""),
process.env.JWT_SECRET
);

```
// 🔥 récupérer l'utilisateur depuis Mongo
const user = await User.findById(decoded.id).select("-password");

if (!user) {
  return res.status(404).json({ message: "Utilisateur introuvable" });
}

req.user = user; // ✅ contient _id, nom, email
next();
```

} catch (err) {
res.status(400).json({ message: "Token invalide" });
}
};

module.exports = userMiddleware;
