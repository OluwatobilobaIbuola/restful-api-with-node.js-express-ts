import mongoose from "mongoose"
import config from "config"
import logger from "./logger"

async function connect(){
    const dbUri = config.get<string>("dbUri");
    try{
        await mongoose.connect(dbUri);
        logger.info("DB connected");
    }
    catch (error){
        logger.error("could not connect to db");
        //exit with an error
        process.exit(1)
    };
};

export default connect;