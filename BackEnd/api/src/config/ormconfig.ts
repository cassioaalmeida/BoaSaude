export const conf: any = {
    name: "default",
    type: "postgres", 
    host: "localhost", 
    port: 5432, 
    username: "postgres", 
    password: "1234", 
    database: "boasaude",
    synchronize: false,
    logging: false,
    options: {
      trustServerCertificate: true,
      encrypt: false
    },
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