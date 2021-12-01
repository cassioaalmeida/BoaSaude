export = {
    name: "default",
    type: "postgres", 
    host: "localhost", 
    port: 5432, 
    username: "postgres", 
    password: "1234", 
    database: "boasaudelogin",
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