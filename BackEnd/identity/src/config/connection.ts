import { getConnectionManager } from "typeorm";

export class Connection {
    
    public async connect () {
        const connectionManager = getConnectionManager();
        const connection = connectionManager.create({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "test",
            password: "test",
            database: "test",
        });
        await connection.connect();
    }
}