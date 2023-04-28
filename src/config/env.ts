//andi Adds dynamic selection configuration compilation

//Determine whether it is a data production environment. The production environment needs js compression, obfuscation, and remove the log and debugger
//TODO: When you add a new .env file, you need to modify this array
export const PROD_CONFIG: string[] = ["mobile", "production"];

export const isProdEnv = (): boolean => {
  const mode: string = process.env.REACT_APP_ENV as string;
  console.log(
    `-------------------------- mode : ${mode} ---------------------------------`
  );

  //Determine whether it is a data production environment. The production environment needs js compression, obfuscation, and remove the log and debugger
  const idProdConfig = PROD_CONFIG.includes(mode.toLowerCase());
  console.log(
    `---------------------------config select ${
      idProdConfig ? "prod" : "development"
    }-----------------------------`
  );

  return idProdConfig;
};
