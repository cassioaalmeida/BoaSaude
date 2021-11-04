export const conf: any = {
    name: "default",
    type: "mssql", 
    host: "boasaudetcc.database.windows.net", 
    port: 1433, 
    username: "cassio", 
    password: "@Zedumato12", 
    database: "boasaude",
    synchronize: false,
    logging: false,
    entities: [
        "src/entity/**/*{.ts,.js}",
        "../entity/**/*{.ts,.js}"
    ],
    migrations: [
        'src/migration/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migration',
    },
};