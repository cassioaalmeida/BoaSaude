export const conf: any = {
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
        "../entity/**/*{.ts,.js}",
        "entity/**/*{.ts,.js}"
    ],
    migrations: [
        'src/migration/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migration',
    },
};