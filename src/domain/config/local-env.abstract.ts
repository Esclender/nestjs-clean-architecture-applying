export abstract class ILocalEnviroment {
  abstract getPostgresDbUrl (): string
  abstract getJwtSecret (): string
  abstract getJwtExpiresIn (): string
}
