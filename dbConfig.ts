import { Tournaments } from "src/entities/tournaments.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const pgConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5499,
    username: 'gino',
    password: 'tombesi',
    database: 'nestjs',
    url: 'postgres://gino:tombesi@localhost:5499/nestjs',
    entities: [__dirname + '/**/*.entity{.js,.ts}'],
    synchronize: true,
}