export = {
    name: "default",
    type: "mssql", 
    host: "boasaude.database.windows.net", 
    port: 1433, 
    username: "cassio", 
    password: "@Zedumato12", 
    database: "boasaude",
    synchronize: false,
    logging: false,
    entities: [
        'src/**/**/*{.ts,.js}',
        'dist/**/**/*{.ts,.js}'
    ],
    migrations: [
        'src/migration/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migration',
    },
};