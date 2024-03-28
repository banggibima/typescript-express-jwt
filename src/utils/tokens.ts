import jwt from "jsonwebtoken";

const generate = (user: any) => {
  const jwtSecret = process.env.SECRET_KEY;
  const expiresIn = process.env.EXPIRES_IN;

  return jwt.sign(
    {
      user: {
        id: user.id,
      },
    },
    jwtSecret!,
    { expiresIn: expiresIn }
  );
};

const tokens = {
  generate,
};

export default tokens;
