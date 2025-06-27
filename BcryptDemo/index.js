const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(14);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashPassword);
  if (result) {
    console.log("Logged You In. Successfully MAtch");
  } else {
    console.log("Incorrect");
  }
};

//hashPassword("monkey");
