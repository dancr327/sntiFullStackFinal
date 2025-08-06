
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model auditoria
 * 
 */
export type auditoria = $Result.DefaultSelection<Prisma.$auditoriaPayload>
/**
 * Model cambiosadscripcion
 * 
 */
export type cambiosadscripcion = $Result.DefaultSelection<Prisma.$cambiosadscripcionPayload>
/**
 * Model cursos
 * 
 */
export type cursos = $Result.DefaultSelection<Prisma.$cursosPayload>
/**
 * Model documentos
 * 
 */
export type documentos = $Result.DefaultSelection<Prisma.$documentosPayload>
/**
 * Model hijos
 * 
 */
export type hijos = $Result.DefaultSelection<Prisma.$hijosPayload>
/**
 * Model permisos
 * 
 */
export type permisos = $Result.DefaultSelection<Prisma.$permisosPayload>
/**
 * Model sanciones
 * 
 */
export type sanciones = $Result.DefaultSelection<Prisma.$sancionesPayload>
/**
 * Model secciones
 * 
 */
export type secciones = $Result.DefaultSelection<Prisma.$seccionesPayload>
/**
 * Model trabajadores
 * 
 */
export type trabajadores = $Result.DefaultSelection<Prisma.$trabajadoresPayload>
/**
 * Model trabajadores_cursos
 * 
 */
export type trabajadores_cursos = $Result.DefaultSelection<Prisma.$trabajadores_cursosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const rol_usuario: {
  Administrador: 'Administrador',
  Recursos_Humanos: 'Recursos_Humanos',
  Empleado: 'Empleado'
};

export type rol_usuario = (typeof rol_usuario)[keyof typeof rol_usuario]

}

export type rol_usuario = $Enums.rol_usuario

export const rol_usuario: typeof $Enums.rol_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auditorias
 * const auditorias = await prisma.auditoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auditorias
   * const auditorias = await prisma.auditoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auditoria`: Exposes CRUD operations for the **auditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditorias
    * const auditorias = await prisma.auditoria.findMany()
    * ```
    */
  get auditoria(): Prisma.auditoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cambiosadscripcion`: Exposes CRUD operations for the **cambiosadscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cambiosadscripcions
    * const cambiosadscripcions = await prisma.cambiosadscripcion.findMany()
    * ```
    */
  get cambiosadscripcion(): Prisma.cambiosadscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.cursosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentos`: Exposes CRUD operations for the **documentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documentos.findMany()
    * ```
    */
  get documentos(): Prisma.documentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hijos`: Exposes CRUD operations for the **hijos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hijos
    * const hijos = await prisma.hijos.findMany()
    * ```
    */
  get hijos(): Prisma.hijosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permisos`: Exposes CRUD operations for the **permisos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permisos.findMany()
    * ```
    */
  get permisos(): Prisma.permisosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanciones`: Exposes CRUD operations for the **sanciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sanciones
    * const sanciones = await prisma.sanciones.findMany()
    * ```
    */
  get sanciones(): Prisma.sancionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secciones`: Exposes CRUD operations for the **secciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secciones
    * const secciones = await prisma.secciones.findMany()
    * ```
    */
  get secciones(): Prisma.seccionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabajadores`: Exposes CRUD operations for the **trabajadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trabajadores
    * const trabajadores = await prisma.trabajadores.findMany()
    * ```
    */
  get trabajadores(): Prisma.trabajadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trabajadores_cursos`: Exposes CRUD operations for the **trabajadores_cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trabajadores_cursos
    * const trabajadores_cursos = await prisma.trabajadores_cursos.findMany()
    * ```
    */
  get trabajadores_cursos(): Prisma.trabajadores_cursosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    auditoria: 'auditoria',
    cambiosadscripcion: 'cambiosadscripcion',
    cursos: 'cursos',
    documentos: 'documentos',
    hijos: 'hijos',
    permisos: 'permisos',
    sanciones: 'sanciones',
    secciones: 'secciones',
    trabajadores: 'trabajadores',
    trabajadores_cursos: 'trabajadores_cursos',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auditoria" | "cambiosadscripcion" | "cursos" | "documentos" | "hijos" | "permisos" | "sanciones" | "secciones" | "trabajadores" | "trabajadores_cursos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auditoria: {
        payload: Prisma.$auditoriaPayload<ExtArgs>
        fields: Prisma.auditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          findFirst: {
            args: Prisma.auditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          findMany: {
            args: Prisma.auditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          create: {
            args: Prisma.auditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          createMany: {
            args: Prisma.auditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          delete: {
            args: Prisma.auditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          update: {
            args: Prisma.auditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          deleteMany: {
            args: Prisma.auditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>[]
          }
          upsert: {
            args: Prisma.auditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditoriaPayload>
          }
          aggregate: {
            args: Prisma.AuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditoria>
          }
          groupBy: {
            args: Prisma.auditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AuditoriaCountAggregateOutputType> | number
          }
        }
      }
      cambiosadscripcion: {
        payload: Prisma.$cambiosadscripcionPayload<ExtArgs>
        fields: Prisma.cambiosadscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cambiosadscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cambiosadscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          findFirst: {
            args: Prisma.cambiosadscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cambiosadscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          findMany: {
            args: Prisma.cambiosadscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>[]
          }
          create: {
            args: Prisma.cambiosadscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          createMany: {
            args: Prisma.cambiosadscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cambiosadscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>[]
          }
          delete: {
            args: Prisma.cambiosadscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          update: {
            args: Prisma.cambiosadscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          deleteMany: {
            args: Prisma.cambiosadscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cambiosadscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cambiosadscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>[]
          }
          upsert: {
            args: Prisma.cambiosadscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cambiosadscripcionPayload>
          }
          aggregate: {
            args: Prisma.CambiosadscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCambiosadscripcion>
          }
          groupBy: {
            args: Prisma.cambiosadscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CambiosadscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.cambiosadscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<CambiosadscripcionCountAggregateOutputType> | number
          }
        }
      }
      cursos: {
        payload: Prisma.$cursosPayload<ExtArgs>
        fields: Prisma.cursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findFirst: {
            args: Prisma.cursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findMany: {
            args: Prisma.cursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          create: {
            args: Prisma.cursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          createMany: {
            args: Prisma.cursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cursosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          delete: {
            args: Prisma.cursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          update: {
            args: Prisma.cursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          deleteMany: {
            args: Prisma.cursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cursosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          upsert: {
            args: Prisma.cursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.cursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursosCountArgs<ExtArgs>
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      documentos: {
        payload: Prisma.$documentosPayload<ExtArgs>
        fields: Prisma.documentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          findFirst: {
            args: Prisma.documentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          findMany: {
            args: Prisma.documentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>[]
          }
          create: {
            args: Prisma.documentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          createMany: {
            args: Prisma.documentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>[]
          }
          delete: {
            args: Prisma.documentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          update: {
            args: Prisma.documentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          deleteMany: {
            args: Prisma.documentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>[]
          }
          upsert: {
            args: Prisma.documentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentosPayload>
          }
          aggregate: {
            args: Prisma.DocumentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentos>
          }
          groupBy: {
            args: Prisma.documentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentosCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentosCountAggregateOutputType> | number
          }
        }
      }
      hijos: {
        payload: Prisma.$hijosPayload<ExtArgs>
        fields: Prisma.hijosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hijosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hijosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          findFirst: {
            args: Prisma.hijosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hijosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          findMany: {
            args: Prisma.hijosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>[]
          }
          create: {
            args: Prisma.hijosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          createMany: {
            args: Prisma.hijosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hijosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>[]
          }
          delete: {
            args: Prisma.hijosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          update: {
            args: Prisma.hijosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          deleteMany: {
            args: Prisma.hijosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hijosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hijosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>[]
          }
          upsert: {
            args: Prisma.hijosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hijosPayload>
          }
          aggregate: {
            args: Prisma.HijosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHijos>
          }
          groupBy: {
            args: Prisma.hijosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HijosGroupByOutputType>[]
          }
          count: {
            args: Prisma.hijosCountArgs<ExtArgs>
            result: $Utils.Optional<HijosCountAggregateOutputType> | number
          }
        }
      }
      permisos: {
        payload: Prisma.$permisosPayload<ExtArgs>
        fields: Prisma.permisosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permisosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permisosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          findFirst: {
            args: Prisma.permisosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permisosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          findMany: {
            args: Prisma.permisosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>[]
          }
          create: {
            args: Prisma.permisosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          createMany: {
            args: Prisma.permisosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.permisosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>[]
          }
          delete: {
            args: Prisma.permisosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          update: {
            args: Prisma.permisosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          deleteMany: {
            args: Prisma.permisosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permisosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.permisosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>[]
          }
          upsert: {
            args: Prisma.permisosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permisosPayload>
          }
          aggregate: {
            args: Prisma.PermisosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermisos>
          }
          groupBy: {
            args: Prisma.permisosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisosGroupByOutputType>[]
          }
          count: {
            args: Prisma.permisosCountArgs<ExtArgs>
            result: $Utils.Optional<PermisosCountAggregateOutputType> | number
          }
        }
      }
      sanciones: {
        payload: Prisma.$sancionesPayload<ExtArgs>
        fields: Prisma.sancionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sancionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sancionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          findFirst: {
            args: Prisma.sancionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sancionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          findMany: {
            args: Prisma.sancionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>[]
          }
          create: {
            args: Prisma.sancionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          createMany: {
            args: Prisma.sancionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sancionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>[]
          }
          delete: {
            args: Prisma.sancionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          update: {
            args: Prisma.sancionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          deleteMany: {
            args: Prisma.sancionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sancionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sancionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>[]
          }
          upsert: {
            args: Prisma.sancionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sancionesPayload>
          }
          aggregate: {
            args: Prisma.SancionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanciones>
          }
          groupBy: {
            args: Prisma.sancionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SancionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sancionesCountArgs<ExtArgs>
            result: $Utils.Optional<SancionesCountAggregateOutputType> | number
          }
        }
      }
      secciones: {
        payload: Prisma.$seccionesPayload<ExtArgs>
        fields: Prisma.seccionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seccionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seccionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          findFirst: {
            args: Prisma.seccionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seccionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          findMany: {
            args: Prisma.seccionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>[]
          }
          create: {
            args: Prisma.seccionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          createMany: {
            args: Prisma.seccionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seccionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>[]
          }
          delete: {
            args: Prisma.seccionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          update: {
            args: Prisma.seccionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          deleteMany: {
            args: Prisma.seccionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seccionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seccionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>[]
          }
          upsert: {
            args: Prisma.seccionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seccionesPayload>
          }
          aggregate: {
            args: Prisma.SeccionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecciones>
          }
          groupBy: {
            args: Prisma.seccionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.seccionesCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionesCountAggregateOutputType> | number
          }
        }
      }
      trabajadores: {
        payload: Prisma.$trabajadoresPayload<ExtArgs>
        fields: Prisma.trabajadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trabajadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trabajadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          findFirst: {
            args: Prisma.trabajadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trabajadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          findMany: {
            args: Prisma.trabajadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>[]
          }
          create: {
            args: Prisma.trabajadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          createMany: {
            args: Prisma.trabajadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trabajadoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>[]
          }
          delete: {
            args: Prisma.trabajadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          update: {
            args: Prisma.trabajadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          deleteMany: {
            args: Prisma.trabajadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trabajadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.trabajadoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>[]
          }
          upsert: {
            args: Prisma.trabajadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadoresPayload>
          }
          aggregate: {
            args: Prisma.TrabajadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabajadores>
          }
          groupBy: {
            args: Prisma.trabajadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrabajadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.trabajadoresCountArgs<ExtArgs>
            result: $Utils.Optional<TrabajadoresCountAggregateOutputType> | number
          }
        }
      }
      trabajadores_cursos: {
        payload: Prisma.$trabajadores_cursosPayload<ExtArgs>
        fields: Prisma.trabajadores_cursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trabajadores_cursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trabajadores_cursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          findFirst: {
            args: Prisma.trabajadores_cursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trabajadores_cursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          findMany: {
            args: Prisma.trabajadores_cursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>[]
          }
          create: {
            args: Prisma.trabajadores_cursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          createMany: {
            args: Prisma.trabajadores_cursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trabajadores_cursosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>[]
          }
          delete: {
            args: Prisma.trabajadores_cursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          update: {
            args: Prisma.trabajadores_cursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          deleteMany: {
            args: Prisma.trabajadores_cursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trabajadores_cursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.trabajadores_cursosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>[]
          }
          upsert: {
            args: Prisma.trabajadores_cursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trabajadores_cursosPayload>
          }
          aggregate: {
            args: Prisma.Trabajadores_cursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrabajadores_cursos>
          }
          groupBy: {
            args: Prisma.trabajadores_cursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trabajadores_cursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.trabajadores_cursosCountArgs<ExtArgs>
            result: $Utils.Optional<Trabajadores_cursosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auditoria?: auditoriaOmit
    cambiosadscripcion?: cambiosadscripcionOmit
    cursos?: cursosOmit
    documentos?: documentosOmit
    hijos?: hijosOmit
    permisos?: permisosOmit
    sanciones?: sancionesOmit
    secciones?: seccionesOmit
    trabajadores?: trabajadoresOmit
    trabajadores_cursos?: trabajadores_cursosOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CursosCountOutputType
   */

  export type CursosCountOutputType = {
    trabajadores_cursos: number
  }

  export type CursosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores_cursos?: boolean | CursosCountOutputTypeCountTrabajadores_cursosArgs
  }

  // Custom InputTypes
  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     */
    select?: CursosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountTrabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadores_cursosWhereInput
  }


  /**
   * Count Type DocumentosCountOutputType
   */

  export type DocumentosCountOutputType = {
    cambiosadscripcion: number
    hijos: number
    permisos: number
    trabajadores_cursos: number
  }

  export type DocumentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cambiosadscripcion?: boolean | DocumentosCountOutputTypeCountCambiosadscripcionArgs
    hijos?: boolean | DocumentosCountOutputTypeCountHijosArgs
    permisos?: boolean | DocumentosCountOutputTypeCountPermisosArgs
    trabajadores_cursos?: boolean | DocumentosCountOutputTypeCountTrabajadores_cursosArgs
  }

  // Custom InputTypes
  /**
   * DocumentosCountOutputType without action
   */
  export type DocumentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentosCountOutputType
     */
    select?: DocumentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentosCountOutputType without action
   */
  export type DocumentosCountOutputTypeCountCambiosadscripcionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cambiosadscripcionWhereInput
  }

  /**
   * DocumentosCountOutputType without action
   */
  export type DocumentosCountOutputTypeCountHijosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hijosWhereInput
  }

  /**
   * DocumentosCountOutputType without action
   */
  export type DocumentosCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permisosWhereInput
  }

  /**
   * DocumentosCountOutputType without action
   */
  export type DocumentosCountOutputTypeCountTrabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadores_cursosWhereInput
  }


  /**
   * Count Type SeccionesCountOutputType
   */

  export type SeccionesCountOutputType = {
    trabajadores: number
  }

  export type SeccionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores?: boolean | SeccionesCountOutputTypeCountTrabajadoresArgs
  }

  // Custom InputTypes
  /**
   * SeccionesCountOutputType without action
   */
  export type SeccionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionesCountOutputType
     */
    select?: SeccionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeccionesCountOutputType without action
   */
  export type SeccionesCountOutputTypeCountTrabajadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadoresWhereInput
  }


  /**
   * Count Type TrabajadoresCountOutputType
   */

  export type TrabajadoresCountOutputType = {
    sanciones: number
    trabajadores_cursos: number
  }

  export type TrabajadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanciones?: boolean | TrabajadoresCountOutputTypeCountSancionesArgs
    trabajadores_cursos?: boolean | TrabajadoresCountOutputTypeCountTrabajadores_cursosArgs
  }

  // Custom InputTypes
  /**
   * TrabajadoresCountOutputType without action
   */
  export type TrabajadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajadoresCountOutputType
     */
    select?: TrabajadoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrabajadoresCountOutputType without action
   */
  export type TrabajadoresCountOutputTypeCountSancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sancionesWhereInput
  }

  /**
   * TrabajadoresCountOutputType without action
   */
  export type TrabajadoresCountOutputTypeCountTrabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadores_cursosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model auditoria
   */

  export type AggregateAuditoria = {
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  export type AuditoriaAvgAggregateOutputType = {
    id_auditoria: number | null
    id_registro: number | null
  }

  export type AuditoriaSumAggregateOutputType = {
    id_auditoria: number | null
    id_registro: number | null
  }

  export type AuditoriaMinAggregateOutputType = {
    id_auditoria: number | null
    tabla_afectada: string | null
    id_registro: number | null
    accion: string | null
    usuario: string | null
    fecha_registro: Date | null
  }

  export type AuditoriaMaxAggregateOutputType = {
    id_auditoria: number | null
    tabla_afectada: string | null
    id_registro: number | null
    accion: string | null
    usuario: string | null
    fecha_registro: Date | null
  }

  export type AuditoriaCountAggregateOutputType = {
    id_auditoria: number
    tabla_afectada: number
    id_registro: number
    accion: number
    datos_anteriores: number
    datos_nuevos: number
    usuario: number
    fecha_registro: number
    _all: number
  }


  export type AuditoriaAvgAggregateInputType = {
    id_auditoria?: true
    id_registro?: true
  }

  export type AuditoriaSumAggregateInputType = {
    id_auditoria?: true
    id_registro?: true
  }

  export type AuditoriaMinAggregateInputType = {
    id_auditoria?: true
    tabla_afectada?: true
    id_registro?: true
    accion?: true
    usuario?: true
    fecha_registro?: true
  }

  export type AuditoriaMaxAggregateInputType = {
    id_auditoria?: true
    tabla_afectada?: true
    id_registro?: true
    accion?: true
    usuario?: true
    fecha_registro?: true
  }

  export type AuditoriaCountAggregateInputType = {
    id_auditoria?: true
    tabla_afectada?: true
    id_registro?: true
    accion?: true
    datos_anteriores?: true
    datos_nuevos?: true
    usuario?: true
    fecha_registro?: true
    _all?: true
  }

  export type AuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditoria to aggregate.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auditorias
    **/
    _count?: true | AuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditoriaMaxAggregateInputType
  }

  export type GetAuditoriaAggregateType<T extends AuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditoria[P]>
      : GetScalarType<T[P], AggregateAuditoria[P]>
  }




  export type auditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditoriaWhereInput
    orderBy?: auditoriaOrderByWithAggregationInput | auditoriaOrderByWithAggregationInput[]
    by: AuditoriaScalarFieldEnum[] | AuditoriaScalarFieldEnum
    having?: auditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditoriaCountAggregateInputType | true
    _avg?: AuditoriaAvgAggregateInputType
    _sum?: AuditoriaSumAggregateInputType
    _min?: AuditoriaMinAggregateInputType
    _max?: AuditoriaMaxAggregateInputType
  }

  export type AuditoriaGroupByOutputType = {
    id_auditoria: number
    tabla_afectada: string
    id_registro: number
    accion: string
    datos_anteriores: JsonValue | null
    datos_nuevos: JsonValue | null
    usuario: string
    fecha_registro: Date | null
    _count: AuditoriaCountAggregateOutputType | null
    _avg: AuditoriaAvgAggregateOutputType | null
    _sum: AuditoriaSumAggregateOutputType | null
    _min: AuditoriaMinAggregateOutputType | null
    _max: AuditoriaMaxAggregateOutputType | null
  }

  type GetAuditoriaGroupByPayload<T extends auditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type auditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    tabla_afectada?: boolean
    id_registro?: boolean
    accion?: boolean
    datos_anteriores?: boolean
    datos_nuevos?: boolean
    usuario?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    tabla_afectada?: boolean
    id_registro?: boolean
    accion?: boolean
    datos_anteriores?: boolean
    datos_nuevos?: boolean
    usuario?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_auditoria?: boolean
    tabla_afectada?: boolean
    id_registro?: boolean
    accion?: boolean
    datos_anteriores?: boolean
    datos_nuevos?: boolean
    usuario?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["auditoria"]>

  export type auditoriaSelectScalar = {
    id_auditoria?: boolean
    tabla_afectada?: boolean
    id_registro?: boolean
    accion?: boolean
    datos_anteriores?: boolean
    datos_nuevos?: boolean
    usuario?: boolean
    fecha_registro?: boolean
  }

  export type auditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_auditoria" | "tabla_afectada" | "id_registro" | "accion" | "datos_anteriores" | "datos_nuevos" | "usuario" | "fecha_registro", ExtArgs["result"]["auditoria"]>

  export type $auditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auditoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_auditoria: number
      tabla_afectada: string
      id_registro: number
      accion: string
      datos_anteriores: Prisma.JsonValue | null
      datos_nuevos: Prisma.JsonValue | null
      usuario: string
      fecha_registro: Date | null
    }, ExtArgs["result"]["auditoria"]>
    composites: {}
  }

  type auditoriaGetPayload<S extends boolean | null | undefined | auditoriaDefaultArgs> = $Result.GetResult<Prisma.$auditoriaPayload, S>

  type auditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditoriaCountAggregateInputType | true
    }

  export interface auditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auditoria'], meta: { name: 'auditoria' } }
    /**
     * Find zero or one Auditoria that matches the filter.
     * @param {auditoriaFindUniqueArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditoriaFindUniqueArgs>(args: SelectSubset<T, auditoriaFindUniqueArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditoriaFindUniqueOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, auditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindFirstArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditoriaFindFirstArgs>(args?: SelectSubset<T, auditoriaFindFirstArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindFirstOrThrowArgs} args - Arguments to find a Auditoria
     * @example
     * // Get one Auditoria
     * const auditoria = await prisma.auditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, auditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditorias
     * const auditorias = await prisma.auditoria.findMany()
     * 
     * // Get first 10 Auditorias
     * const auditorias = await prisma.auditoria.findMany({ take: 10 })
     * 
     * // Only select the `id_auditoria`
     * const auditoriaWithId_auditoriaOnly = await prisma.auditoria.findMany({ select: { id_auditoria: true } })
     * 
     */
    findMany<T extends auditoriaFindManyArgs>(args?: SelectSubset<T, auditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditoria.
     * @param {auditoriaCreateArgs} args - Arguments to create a Auditoria.
     * @example
     * // Create one Auditoria
     * const Auditoria = await prisma.auditoria.create({
     *   data: {
     *     // ... data to create a Auditoria
     *   }
     * })
     * 
     */
    create<T extends auditoriaCreateArgs>(args: SelectSubset<T, auditoriaCreateArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditorias.
     * @param {auditoriaCreateManyArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditoriaCreateManyArgs>(args?: SelectSubset<T, auditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditorias and returns the data saved in the database.
     * @param {auditoriaCreateManyAndReturnArgs} args - Arguments to create many Auditorias.
     * @example
     * // Create many Auditorias
     * const auditoria = await prisma.auditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditorias and only return the `id_auditoria`
     * const auditoriaWithId_auditoriaOnly = await prisma.auditoria.createManyAndReturn({
     *   select: { id_auditoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, auditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auditoria.
     * @param {auditoriaDeleteArgs} args - Arguments to delete one Auditoria.
     * @example
     * // Delete one Auditoria
     * const Auditoria = await prisma.auditoria.delete({
     *   where: {
     *     // ... filter to delete one Auditoria
     *   }
     * })
     * 
     */
    delete<T extends auditoriaDeleteArgs>(args: SelectSubset<T, auditoriaDeleteArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditoria.
     * @param {auditoriaUpdateArgs} args - Arguments to update one Auditoria.
     * @example
     * // Update one Auditoria
     * const auditoria = await prisma.auditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditoriaUpdateArgs>(args: SelectSubset<T, auditoriaUpdateArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditorias.
     * @param {auditoriaDeleteManyArgs} args - Arguments to filter Auditorias to delete.
     * @example
     * // Delete a few Auditorias
     * const { count } = await prisma.auditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditoriaDeleteManyArgs>(args?: SelectSubset<T, auditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditoriaUpdateManyArgs>(args: SelectSubset<T, auditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditorias and returns the data updated in the database.
     * @param {auditoriaUpdateManyAndReturnArgs} args - Arguments to update many Auditorias.
     * @example
     * // Update many Auditorias
     * const auditoria = await prisma.auditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditorias and only return the `id_auditoria`
     * const auditoriaWithId_auditoriaOnly = await prisma.auditoria.updateManyAndReturn({
     *   select: { id_auditoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, auditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auditoria.
     * @param {auditoriaUpsertArgs} args - Arguments to update or create a Auditoria.
     * @example
     * // Update or create a Auditoria
     * const auditoria = await prisma.auditoria.upsert({
     *   create: {
     *     // ... data to create a Auditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditoria we want to update
     *   }
     * })
     */
    upsert<T extends auditoriaUpsertArgs>(args: SelectSubset<T, auditoriaUpsertArgs<ExtArgs>>): Prisma__auditoriaClient<$Result.GetResult<Prisma.$auditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaCountArgs} args - Arguments to filter Auditorias to count.
     * @example
     * // Count the number of Auditorias
     * const count = await prisma.auditoria.count({
     *   where: {
     *     // ... the filter for the Auditorias we want to count
     *   }
     * })
    **/
    count<T extends auditoriaCountArgs>(
      args?: Subset<T, auditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditoriaAggregateArgs>(args: Subset<T, AuditoriaAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaAggregateType<T>>

    /**
     * Group by Auditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditoriaGroupByArgs['orderBy'] }
        : { orderBy?: auditoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auditoria model
   */
  readonly fields: auditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auditoria model
   */
  interface auditoriaFieldRefs {
    readonly id_auditoria: FieldRef<"auditoria", 'Int'>
    readonly tabla_afectada: FieldRef<"auditoria", 'String'>
    readonly id_registro: FieldRef<"auditoria", 'Int'>
    readonly accion: FieldRef<"auditoria", 'String'>
    readonly datos_anteriores: FieldRef<"auditoria", 'Json'>
    readonly datos_nuevos: FieldRef<"auditoria", 'Json'>
    readonly usuario: FieldRef<"auditoria", 'String'>
    readonly fecha_registro: FieldRef<"auditoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auditoria findUnique
   */
  export type auditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria findUniqueOrThrow
   */
  export type auditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria findFirst
   */
  export type auditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria findFirstOrThrow
   */
  export type auditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter, which auditoria to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditorias.
     */
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria findMany
   */
  export type auditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter, which auditorias to fetch.
     */
    where?: auditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditorias to fetch.
     */
    orderBy?: auditoriaOrderByWithRelationInput | auditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auditorias.
     */
    cursor?: auditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditorias.
     */
    skip?: number
    distinct?: AuditoriaScalarFieldEnum | AuditoriaScalarFieldEnum[]
  }

  /**
   * auditoria create
   */
  export type auditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a auditoria.
     */
    data: XOR<auditoriaCreateInput, auditoriaUncheckedCreateInput>
  }

  /**
   * auditoria createMany
   */
  export type auditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auditorias.
     */
    data: auditoriaCreateManyInput | auditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auditoria createManyAndReturn
   */
  export type auditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many auditorias.
     */
    data: auditoriaCreateManyInput | auditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auditoria update
   */
  export type auditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a auditoria.
     */
    data: XOR<auditoriaUpdateInput, auditoriaUncheckedUpdateInput>
    /**
     * Choose, which auditoria to update.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria updateMany
   */
  export type auditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auditorias.
     */
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyInput>
    /**
     * Filter which auditorias to update
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to update.
     */
    limit?: number
  }

  /**
   * auditoria updateManyAndReturn
   */
  export type auditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The data used to update auditorias.
     */
    data: XOR<auditoriaUpdateManyMutationInput, auditoriaUncheckedUpdateManyInput>
    /**
     * Filter which auditorias to update
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to update.
     */
    limit?: number
  }

  /**
   * auditoria upsert
   */
  export type auditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the auditoria to update in case it exists.
     */
    where: auditoriaWhereUniqueInput
    /**
     * In case the auditoria found by the `where` argument doesn't exist, create a new auditoria with this data.
     */
    create: XOR<auditoriaCreateInput, auditoriaUncheckedCreateInput>
    /**
     * In case the auditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditoriaUpdateInput, auditoriaUncheckedUpdateInput>
  }

  /**
   * auditoria delete
   */
  export type auditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
    /**
     * Filter which auditoria to delete.
     */
    where: auditoriaWhereUniqueInput
  }

  /**
   * auditoria deleteMany
   */
  export type auditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditorias to delete
     */
    where?: auditoriaWhereInput
    /**
     * Limit how many auditorias to delete.
     */
    limit?: number
  }

  /**
   * auditoria without action
   */
  export type auditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditoria
     */
    select?: auditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditoria
     */
    omit?: auditoriaOmit<ExtArgs> | null
  }


  /**
   * Model cambiosadscripcion
   */

  export type AggregateCambiosadscripcion = {
    _count: CambiosadscripcionCountAggregateOutputType | null
    _avg: CambiosadscripcionAvgAggregateOutputType | null
    _sum: CambiosadscripcionSumAggregateOutputType | null
    _min: CambiosadscripcionMinAggregateOutputType | null
    _max: CambiosadscripcionMaxAggregateOutputType | null
  }

  export type CambiosadscripcionAvgAggregateOutputType = {
    id_cambio: number | null
    id_trabajador: number | null
    documento_respaldo_id: number | null
  }

  export type CambiosadscripcionSumAggregateOutputType = {
    id_cambio: number | null
    id_trabajador: number | null
    documento_respaldo_id: number | null
  }

  export type CambiosadscripcionMinAggregateOutputType = {
    id_cambio: number | null
    id_trabajador: number | null
    adscripcion_anterior: string | null
    adscripcion_nueva: string | null
    fecha_cambio: Date | null
    motivo: string | null
    documento_respaldo_id: number | null
    usuario_registro: string | null
    fecha_registro: Date | null
  }

  export type CambiosadscripcionMaxAggregateOutputType = {
    id_cambio: number | null
    id_trabajador: number | null
    adscripcion_anterior: string | null
    adscripcion_nueva: string | null
    fecha_cambio: Date | null
    motivo: string | null
    documento_respaldo_id: number | null
    usuario_registro: string | null
    fecha_registro: Date | null
  }

  export type CambiosadscripcionCountAggregateOutputType = {
    id_cambio: number
    id_trabajador: number
    adscripcion_anterior: number
    adscripcion_nueva: number
    fecha_cambio: number
    motivo: number
    documento_respaldo_id: number
    usuario_registro: number
    fecha_registro: number
    _all: number
  }


  export type CambiosadscripcionAvgAggregateInputType = {
    id_cambio?: true
    id_trabajador?: true
    documento_respaldo_id?: true
  }

  export type CambiosadscripcionSumAggregateInputType = {
    id_cambio?: true
    id_trabajador?: true
    documento_respaldo_id?: true
  }

  export type CambiosadscripcionMinAggregateInputType = {
    id_cambio?: true
    id_trabajador?: true
    adscripcion_anterior?: true
    adscripcion_nueva?: true
    fecha_cambio?: true
    motivo?: true
    documento_respaldo_id?: true
    usuario_registro?: true
    fecha_registro?: true
  }

  export type CambiosadscripcionMaxAggregateInputType = {
    id_cambio?: true
    id_trabajador?: true
    adscripcion_anterior?: true
    adscripcion_nueva?: true
    fecha_cambio?: true
    motivo?: true
    documento_respaldo_id?: true
    usuario_registro?: true
    fecha_registro?: true
  }

  export type CambiosadscripcionCountAggregateInputType = {
    id_cambio?: true
    id_trabajador?: true
    adscripcion_anterior?: true
    adscripcion_nueva?: true
    fecha_cambio?: true
    motivo?: true
    documento_respaldo_id?: true
    usuario_registro?: true
    fecha_registro?: true
    _all?: true
  }

  export type CambiosadscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cambiosadscripcion to aggregate.
     */
    where?: cambiosadscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cambiosadscripcions to fetch.
     */
    orderBy?: cambiosadscripcionOrderByWithRelationInput | cambiosadscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cambiosadscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cambiosadscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cambiosadscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cambiosadscripcions
    **/
    _count?: true | CambiosadscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CambiosadscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CambiosadscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CambiosadscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CambiosadscripcionMaxAggregateInputType
  }

  export type GetCambiosadscripcionAggregateType<T extends CambiosadscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateCambiosadscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCambiosadscripcion[P]>
      : GetScalarType<T[P], AggregateCambiosadscripcion[P]>
  }




  export type cambiosadscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cambiosadscripcionWhereInput
    orderBy?: cambiosadscripcionOrderByWithAggregationInput | cambiosadscripcionOrderByWithAggregationInput[]
    by: CambiosadscripcionScalarFieldEnum[] | CambiosadscripcionScalarFieldEnum
    having?: cambiosadscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CambiosadscripcionCountAggregateInputType | true
    _avg?: CambiosadscripcionAvgAggregateInputType
    _sum?: CambiosadscripcionSumAggregateInputType
    _min?: CambiosadscripcionMinAggregateInputType
    _max?: CambiosadscripcionMaxAggregateInputType
  }

  export type CambiosadscripcionGroupByOutputType = {
    id_cambio: number
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date
    motivo: string
    documento_respaldo_id: number | null
    usuario_registro: string | null
    fecha_registro: Date | null
    _count: CambiosadscripcionCountAggregateOutputType | null
    _avg: CambiosadscripcionAvgAggregateOutputType | null
    _sum: CambiosadscripcionSumAggregateOutputType | null
    _min: CambiosadscripcionMinAggregateOutputType | null
    _max: CambiosadscripcionMaxAggregateOutputType | null
  }

  type GetCambiosadscripcionGroupByPayload<T extends cambiosadscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CambiosadscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CambiosadscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CambiosadscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], CambiosadscripcionGroupByOutputType[P]>
        }
      >
    >


  export type cambiosadscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cambio?: boolean
    id_trabajador?: boolean
    adscripcion_anterior?: boolean
    adscripcion_nueva?: boolean
    fecha_cambio?: boolean
    motivo?: boolean
    documento_respaldo_id?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["cambiosadscripcion"]>

  export type cambiosadscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cambio?: boolean
    id_trabajador?: boolean
    adscripcion_anterior?: boolean
    adscripcion_nueva?: boolean
    fecha_cambio?: boolean
    motivo?: boolean
    documento_respaldo_id?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["cambiosadscripcion"]>

  export type cambiosadscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cambio?: boolean
    id_trabajador?: boolean
    adscripcion_anterior?: boolean
    adscripcion_nueva?: boolean
    fecha_cambio?: boolean
    motivo?: boolean
    documento_respaldo_id?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["cambiosadscripcion"]>

  export type cambiosadscripcionSelectScalar = {
    id_cambio?: boolean
    id_trabajador?: boolean
    adscripcion_anterior?: boolean
    adscripcion_nueva?: boolean
    fecha_cambio?: boolean
    motivo?: boolean
    documento_respaldo_id?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
  }

  export type cambiosadscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cambio" | "id_trabajador" | "adscripcion_anterior" | "adscripcion_nueva" | "fecha_cambio" | "motivo" | "documento_respaldo_id" | "usuario_registro" | "fecha_registro", ExtArgs["result"]["cambiosadscripcion"]>
  export type cambiosadscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }
  export type cambiosadscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }
  export type cambiosadscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | cambiosadscripcion$documentosArgs<ExtArgs>
  }

  export type $cambiosadscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cambiosadscripcion"
    objects: {
      documentos: Prisma.$documentosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cambio: number
      id_trabajador: number
      adscripcion_anterior: string
      adscripcion_nueva: string
      fecha_cambio: Date
      motivo: string
      documento_respaldo_id: number | null
      usuario_registro: string | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["cambiosadscripcion"]>
    composites: {}
  }

  type cambiosadscripcionGetPayload<S extends boolean | null | undefined | cambiosadscripcionDefaultArgs> = $Result.GetResult<Prisma.$cambiosadscripcionPayload, S>

  type cambiosadscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cambiosadscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CambiosadscripcionCountAggregateInputType | true
    }

  export interface cambiosadscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cambiosadscripcion'], meta: { name: 'cambiosadscripcion' } }
    /**
     * Find zero or one Cambiosadscripcion that matches the filter.
     * @param {cambiosadscripcionFindUniqueArgs} args - Arguments to find a Cambiosadscripcion
     * @example
     * // Get one Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cambiosadscripcionFindUniqueArgs>(args: SelectSubset<T, cambiosadscripcionFindUniqueArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cambiosadscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cambiosadscripcionFindUniqueOrThrowArgs} args - Arguments to find a Cambiosadscripcion
     * @example
     * // Get one Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cambiosadscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, cambiosadscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cambiosadscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionFindFirstArgs} args - Arguments to find a Cambiosadscripcion
     * @example
     * // Get one Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cambiosadscripcionFindFirstArgs>(args?: SelectSubset<T, cambiosadscripcionFindFirstArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cambiosadscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionFindFirstOrThrowArgs} args - Arguments to find a Cambiosadscripcion
     * @example
     * // Get one Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cambiosadscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, cambiosadscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cambiosadscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cambiosadscripcions
     * const cambiosadscripcions = await prisma.cambiosadscripcion.findMany()
     * 
     * // Get first 10 Cambiosadscripcions
     * const cambiosadscripcions = await prisma.cambiosadscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id_cambio`
     * const cambiosadscripcionWithId_cambioOnly = await prisma.cambiosadscripcion.findMany({ select: { id_cambio: true } })
     * 
     */
    findMany<T extends cambiosadscripcionFindManyArgs>(args?: SelectSubset<T, cambiosadscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cambiosadscripcion.
     * @param {cambiosadscripcionCreateArgs} args - Arguments to create a Cambiosadscripcion.
     * @example
     * // Create one Cambiosadscripcion
     * const Cambiosadscripcion = await prisma.cambiosadscripcion.create({
     *   data: {
     *     // ... data to create a Cambiosadscripcion
     *   }
     * })
     * 
     */
    create<T extends cambiosadscripcionCreateArgs>(args: SelectSubset<T, cambiosadscripcionCreateArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cambiosadscripcions.
     * @param {cambiosadscripcionCreateManyArgs} args - Arguments to create many Cambiosadscripcions.
     * @example
     * // Create many Cambiosadscripcions
     * const cambiosadscripcion = await prisma.cambiosadscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cambiosadscripcionCreateManyArgs>(args?: SelectSubset<T, cambiosadscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cambiosadscripcions and returns the data saved in the database.
     * @param {cambiosadscripcionCreateManyAndReturnArgs} args - Arguments to create many Cambiosadscripcions.
     * @example
     * // Create many Cambiosadscripcions
     * const cambiosadscripcion = await prisma.cambiosadscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cambiosadscripcions and only return the `id_cambio`
     * const cambiosadscripcionWithId_cambioOnly = await prisma.cambiosadscripcion.createManyAndReturn({
     *   select: { id_cambio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cambiosadscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, cambiosadscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cambiosadscripcion.
     * @param {cambiosadscripcionDeleteArgs} args - Arguments to delete one Cambiosadscripcion.
     * @example
     * // Delete one Cambiosadscripcion
     * const Cambiosadscripcion = await prisma.cambiosadscripcion.delete({
     *   where: {
     *     // ... filter to delete one Cambiosadscripcion
     *   }
     * })
     * 
     */
    delete<T extends cambiosadscripcionDeleteArgs>(args: SelectSubset<T, cambiosadscripcionDeleteArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cambiosadscripcion.
     * @param {cambiosadscripcionUpdateArgs} args - Arguments to update one Cambiosadscripcion.
     * @example
     * // Update one Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cambiosadscripcionUpdateArgs>(args: SelectSubset<T, cambiosadscripcionUpdateArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cambiosadscripcions.
     * @param {cambiosadscripcionDeleteManyArgs} args - Arguments to filter Cambiosadscripcions to delete.
     * @example
     * // Delete a few Cambiosadscripcions
     * const { count } = await prisma.cambiosadscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cambiosadscripcionDeleteManyArgs>(args?: SelectSubset<T, cambiosadscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cambiosadscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cambiosadscripcions
     * const cambiosadscripcion = await prisma.cambiosadscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cambiosadscripcionUpdateManyArgs>(args: SelectSubset<T, cambiosadscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cambiosadscripcions and returns the data updated in the database.
     * @param {cambiosadscripcionUpdateManyAndReturnArgs} args - Arguments to update many Cambiosadscripcions.
     * @example
     * // Update many Cambiosadscripcions
     * const cambiosadscripcion = await prisma.cambiosadscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cambiosadscripcions and only return the `id_cambio`
     * const cambiosadscripcionWithId_cambioOnly = await prisma.cambiosadscripcion.updateManyAndReturn({
     *   select: { id_cambio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cambiosadscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, cambiosadscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cambiosadscripcion.
     * @param {cambiosadscripcionUpsertArgs} args - Arguments to update or create a Cambiosadscripcion.
     * @example
     * // Update or create a Cambiosadscripcion
     * const cambiosadscripcion = await prisma.cambiosadscripcion.upsert({
     *   create: {
     *     // ... data to create a Cambiosadscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cambiosadscripcion we want to update
     *   }
     * })
     */
    upsert<T extends cambiosadscripcionUpsertArgs>(args: SelectSubset<T, cambiosadscripcionUpsertArgs<ExtArgs>>): Prisma__cambiosadscripcionClient<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cambiosadscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionCountArgs} args - Arguments to filter Cambiosadscripcions to count.
     * @example
     * // Count the number of Cambiosadscripcions
     * const count = await prisma.cambiosadscripcion.count({
     *   where: {
     *     // ... the filter for the Cambiosadscripcions we want to count
     *   }
     * })
    **/
    count<T extends cambiosadscripcionCountArgs>(
      args?: Subset<T, cambiosadscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CambiosadscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cambiosadscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosadscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CambiosadscripcionAggregateArgs>(args: Subset<T, CambiosadscripcionAggregateArgs>): Prisma.PrismaPromise<GetCambiosadscripcionAggregateType<T>>

    /**
     * Group by Cambiosadscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cambiosadscripcionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cambiosadscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cambiosadscripcionGroupByArgs['orderBy'] }
        : { orderBy?: cambiosadscripcionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cambiosadscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCambiosadscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cambiosadscripcion model
   */
  readonly fields: cambiosadscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cambiosadscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cambiosadscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends cambiosadscripcion$documentosArgs<ExtArgs> = {}>(args?: Subset<T, cambiosadscripcion$documentosArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cambiosadscripcion model
   */
  interface cambiosadscripcionFieldRefs {
    readonly id_cambio: FieldRef<"cambiosadscripcion", 'Int'>
    readonly id_trabajador: FieldRef<"cambiosadscripcion", 'Int'>
    readonly adscripcion_anterior: FieldRef<"cambiosadscripcion", 'String'>
    readonly adscripcion_nueva: FieldRef<"cambiosadscripcion", 'String'>
    readonly fecha_cambio: FieldRef<"cambiosadscripcion", 'DateTime'>
    readonly motivo: FieldRef<"cambiosadscripcion", 'String'>
    readonly documento_respaldo_id: FieldRef<"cambiosadscripcion", 'Int'>
    readonly usuario_registro: FieldRef<"cambiosadscripcion", 'String'>
    readonly fecha_registro: FieldRef<"cambiosadscripcion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cambiosadscripcion findUnique
   */
  export type cambiosadscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter, which cambiosadscripcion to fetch.
     */
    where: cambiosadscripcionWhereUniqueInput
  }

  /**
   * cambiosadscripcion findUniqueOrThrow
   */
  export type cambiosadscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter, which cambiosadscripcion to fetch.
     */
    where: cambiosadscripcionWhereUniqueInput
  }

  /**
   * cambiosadscripcion findFirst
   */
  export type cambiosadscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter, which cambiosadscripcion to fetch.
     */
    where?: cambiosadscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cambiosadscripcions to fetch.
     */
    orderBy?: cambiosadscripcionOrderByWithRelationInput | cambiosadscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cambiosadscripcions.
     */
    cursor?: cambiosadscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cambiosadscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cambiosadscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cambiosadscripcions.
     */
    distinct?: CambiosadscripcionScalarFieldEnum | CambiosadscripcionScalarFieldEnum[]
  }

  /**
   * cambiosadscripcion findFirstOrThrow
   */
  export type cambiosadscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter, which cambiosadscripcion to fetch.
     */
    where?: cambiosadscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cambiosadscripcions to fetch.
     */
    orderBy?: cambiosadscripcionOrderByWithRelationInput | cambiosadscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cambiosadscripcions.
     */
    cursor?: cambiosadscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cambiosadscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cambiosadscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cambiosadscripcions.
     */
    distinct?: CambiosadscripcionScalarFieldEnum | CambiosadscripcionScalarFieldEnum[]
  }

  /**
   * cambiosadscripcion findMany
   */
  export type cambiosadscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter, which cambiosadscripcions to fetch.
     */
    where?: cambiosadscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cambiosadscripcions to fetch.
     */
    orderBy?: cambiosadscripcionOrderByWithRelationInput | cambiosadscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cambiosadscripcions.
     */
    cursor?: cambiosadscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cambiosadscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cambiosadscripcions.
     */
    skip?: number
    distinct?: CambiosadscripcionScalarFieldEnum | CambiosadscripcionScalarFieldEnum[]
  }

  /**
   * cambiosadscripcion create
   */
  export type cambiosadscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a cambiosadscripcion.
     */
    data: XOR<cambiosadscripcionCreateInput, cambiosadscripcionUncheckedCreateInput>
  }

  /**
   * cambiosadscripcion createMany
   */
  export type cambiosadscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cambiosadscripcions.
     */
    data: cambiosadscripcionCreateManyInput | cambiosadscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cambiosadscripcion createManyAndReturn
   */
  export type cambiosadscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many cambiosadscripcions.
     */
    data: cambiosadscripcionCreateManyInput | cambiosadscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cambiosadscripcion update
   */
  export type cambiosadscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a cambiosadscripcion.
     */
    data: XOR<cambiosadscripcionUpdateInput, cambiosadscripcionUncheckedUpdateInput>
    /**
     * Choose, which cambiosadscripcion to update.
     */
    where: cambiosadscripcionWhereUniqueInput
  }

  /**
   * cambiosadscripcion updateMany
   */
  export type cambiosadscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cambiosadscripcions.
     */
    data: XOR<cambiosadscripcionUpdateManyMutationInput, cambiosadscripcionUncheckedUpdateManyInput>
    /**
     * Filter which cambiosadscripcions to update
     */
    where?: cambiosadscripcionWhereInput
    /**
     * Limit how many cambiosadscripcions to update.
     */
    limit?: number
  }

  /**
   * cambiosadscripcion updateManyAndReturn
   */
  export type cambiosadscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * The data used to update cambiosadscripcions.
     */
    data: XOR<cambiosadscripcionUpdateManyMutationInput, cambiosadscripcionUncheckedUpdateManyInput>
    /**
     * Filter which cambiosadscripcions to update
     */
    where?: cambiosadscripcionWhereInput
    /**
     * Limit how many cambiosadscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cambiosadscripcion upsert
   */
  export type cambiosadscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the cambiosadscripcion to update in case it exists.
     */
    where: cambiosadscripcionWhereUniqueInput
    /**
     * In case the cambiosadscripcion found by the `where` argument doesn't exist, create a new cambiosadscripcion with this data.
     */
    create: XOR<cambiosadscripcionCreateInput, cambiosadscripcionUncheckedCreateInput>
    /**
     * In case the cambiosadscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cambiosadscripcionUpdateInput, cambiosadscripcionUncheckedUpdateInput>
  }

  /**
   * cambiosadscripcion delete
   */
  export type cambiosadscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    /**
     * Filter which cambiosadscripcion to delete.
     */
    where: cambiosadscripcionWhereUniqueInput
  }

  /**
   * cambiosadscripcion deleteMany
   */
  export type cambiosadscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cambiosadscripcions to delete
     */
    where?: cambiosadscripcionWhereInput
    /**
     * Limit how many cambiosadscripcions to delete.
     */
    limit?: number
  }

  /**
   * cambiosadscripcion.documentos
   */
  export type cambiosadscripcion$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    where?: documentosWhereInput
  }

  /**
   * cambiosadscripcion without action
   */
  export type cambiosadscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
  }


  /**
   * Model cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    id_curso: number | null
    horas_duracion: number | null
  }

  export type CursosSumAggregateOutputType = {
    id_curso: number | null
    horas_duracion: number | null
  }

  export type CursosMinAggregateOutputType = {
    id_curso: number | null
    codigo_curso: string | null
    nombre_curso: string | null
    horas_duracion: number | null
    estatus: string | null
  }

  export type CursosMaxAggregateOutputType = {
    id_curso: number | null
    codigo_curso: string | null
    nombre_curso: string | null
    horas_duracion: number | null
    estatus: string | null
  }

  export type CursosCountAggregateOutputType = {
    id_curso: number
    codigo_curso: number
    nombre_curso: number
    horas_duracion: number
    estatus: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    id_curso?: true
    horas_duracion?: true
  }

  export type CursosSumAggregateInputType = {
    id_curso?: true
    horas_duracion?: true
  }

  export type CursosMinAggregateInputType = {
    id_curso?: true
    codigo_curso?: true
    nombre_curso?: true
    horas_duracion?: true
    estatus?: true
  }

  export type CursosMaxAggregateInputType = {
    id_curso?: true
    codigo_curso?: true
    nombre_curso?: true
    horas_duracion?: true
    estatus?: true
  }

  export type CursosCountAggregateInputType = {
    id_curso?: true
    codigo_curso?: true
    nombre_curso?: true
    horas_duracion?: true
    estatus?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to aggregate.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type cursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursosWhereInput
    orderBy?: cursosOrderByWithAggregationInput | cursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id_curso: number
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus: string | null
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends cursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type cursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    codigo_curso?: boolean
    nombre_curso?: boolean
    horas_duracion?: boolean
    estatus?: boolean
    trabajadores_cursos?: boolean | cursos$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursos"]>

  export type cursosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    codigo_curso?: boolean
    nombre_curso?: boolean
    horas_duracion?: boolean
    estatus?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type cursosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    codigo_curso?: boolean
    nombre_curso?: boolean
    horas_duracion?: boolean
    estatus?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type cursosSelectScalar = {
    id_curso?: boolean
    codigo_curso?: boolean
    nombre_curso?: boolean
    horas_duracion?: boolean
    estatus?: boolean
  }

  export type cursosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_curso" | "codigo_curso" | "nombre_curso" | "horas_duracion" | "estatus", ExtArgs["result"]["cursos"]>
  export type cursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores_cursos?: boolean | cursos$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cursosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cursosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cursos"
    objects: {
      trabajadores_cursos: Prisma.$trabajadores_cursosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_curso: number
      codigo_curso: string
      nombre_curso: string
      horas_duracion: number
      estatus: string | null
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }

  type cursosGetPayload<S extends boolean | null | undefined | cursosDefaultArgs> = $Result.GetResult<Prisma.$cursosPayload, S>

  type cursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface cursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cursos'], meta: { name: 'cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {cursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursosFindUniqueArgs>(args: SelectSubset<T, cursosFindUniqueArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursosFindUniqueOrThrowArgs>(args: SelectSubset<T, cursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursosFindFirstArgs>(args?: SelectSubset<T, cursosFindFirstArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursosFindFirstOrThrowArgs>(args?: SelectSubset<T, cursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id_curso`
     * const cursosWithId_cursoOnly = await prisma.cursos.findMany({ select: { id_curso: true } })
     * 
     */
    findMany<T extends cursosFindManyArgs>(args?: SelectSubset<T, cursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursos.
     * @param {cursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
     */
    create<T extends cursosCreateArgs>(args: SelectSubset<T, cursosCreateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursosCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursosCreateManyArgs>(args?: SelectSubset<T, cursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {cursosCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id_curso`
     * const cursosWithId_cursoOnly = await prisma.cursos.createManyAndReturn({
     *   select: { id_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cursosCreateManyAndReturnArgs>(args?: SelectSubset<T, cursosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cursos.
     * @param {cursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
     */
    delete<T extends cursosDeleteArgs>(args: SelectSubset<T, cursosDeleteArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursos.
     * @param {cursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursosUpdateArgs>(args: SelectSubset<T, cursosUpdateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursosDeleteManyArgs>(args?: SelectSubset<T, cursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursosUpdateManyArgs>(args: SelectSubset<T, cursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {cursosUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id_curso`
     * const cursosWithId_cursoOnly = await prisma.cursos.updateManyAndReturn({
     *   select: { id_curso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cursosUpdateManyAndReturnArgs>(args: SelectSubset<T, cursosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cursos.
     * @param {cursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
     */
    upsert<T extends cursosUpsertArgs>(args: SelectSubset<T, cursosUpsertArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursosCountArgs>(
      args?: Subset<T, cursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursosGroupByArgs['orderBy'] }
        : { orderBy?: cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cursos model
   */
  readonly fields: cursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trabajadores_cursos<T extends cursos$trabajadores_cursosArgs<ExtArgs> = {}>(args?: Subset<T, cursos$trabajadores_cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cursos model
   */
  interface cursosFieldRefs {
    readonly id_curso: FieldRef<"cursos", 'Int'>
    readonly codigo_curso: FieldRef<"cursos", 'String'>
    readonly nombre_curso: FieldRef<"cursos", 'String'>
    readonly horas_duracion: FieldRef<"cursos", 'Int'>
    readonly estatus: FieldRef<"cursos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cursos findUnique
   */
  export type cursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findUniqueOrThrow
   */
  export type cursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findFirst
   */
  export type cursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findFirstOrThrow
   */
  export type cursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findMany
   */
  export type cursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos create
   */
  export type cursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to create a cursos.
     */
    data: XOR<cursosCreateInput, cursosUncheckedCreateInput>
  }

  /**
   * cursos createMany
   */
  export type cursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursosCreateManyInput | cursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cursos createManyAndReturn
   */
  export type cursosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * The data used to create many cursos.
     */
    data: cursosCreateManyInput | cursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cursos update
   */
  export type cursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to update a cursos.
     */
    data: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
    /**
     * Choose, which cursos to update.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos updateMany
   */
  export type cursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * cursos updateManyAndReturn
   */
  export type cursosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * The data used to update cursos.
     */
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * cursos upsert
   */
  export type cursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The filter to search for the cursos to update in case it exists.
     */
    where: cursosWhereUniqueInput
    /**
     * In case the cursos found by the `where` argument doesn't exist, create a new cursos with this data.
     */
    create: XOR<cursosCreateInput, cursosUncheckedCreateInput>
    /**
     * In case the cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
  }

  /**
   * cursos delete
   */
  export type cursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter which cursos to delete.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos deleteMany
   */
  export type cursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * cursos.trabajadores_cursos
   */
  export type cursos$trabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    where?: trabajadores_cursosWhereInput
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    cursor?: trabajadores_cursosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * cursos without action
   */
  export type cursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
  }


  /**
   * Model documentos
   */

  export type AggregateDocumentos = {
    _count: DocumentosCountAggregateOutputType | null
    _avg: DocumentosAvgAggregateOutputType | null
    _sum: DocumentosSumAggregateOutputType | null
    _min: DocumentosMinAggregateOutputType | null
    _max: DocumentosMaxAggregateOutputType | null
  }

  export type DocumentosAvgAggregateOutputType = {
    id_documento: number | null
    id_trabajador: number | null
    tamano_bytes: number | null
  }

  export type DocumentosSumAggregateOutputType = {
    id_documento: number | null
    id_trabajador: number | null
    tamano_bytes: bigint | null
  }

  export type DocumentosMinAggregateOutputType = {
    id_documento: number | null
    id_trabajador: number | null
    tipo_documento: string | null
    hash_archivo: string | null
    nombre_archivo: string | null
    descripcion: string | null
    tipo_archivo: string | null
    ruta_almacenamiento: string | null
    fecha_subida: Date | null
    tamano_bytes: bigint | null
    es_publico: boolean | null
  }

  export type DocumentosMaxAggregateOutputType = {
    id_documento: number | null
    id_trabajador: number | null
    tipo_documento: string | null
    hash_archivo: string | null
    nombre_archivo: string | null
    descripcion: string | null
    tipo_archivo: string | null
    ruta_almacenamiento: string | null
    fecha_subida: Date | null
    tamano_bytes: bigint | null
    es_publico: boolean | null
  }

  export type DocumentosCountAggregateOutputType = {
    id_documento: number
    id_trabajador: number
    tipo_documento: number
    metadata: number
    hash_archivo: number
    nombre_archivo: number
    descripcion: number
    tipo_archivo: number
    ruta_almacenamiento: number
    fecha_subida: number
    tamano_bytes: number
    es_publico: number
    _all: number
  }


  export type DocumentosAvgAggregateInputType = {
    id_documento?: true
    id_trabajador?: true
    tamano_bytes?: true
  }

  export type DocumentosSumAggregateInputType = {
    id_documento?: true
    id_trabajador?: true
    tamano_bytes?: true
  }

  export type DocumentosMinAggregateInputType = {
    id_documento?: true
    id_trabajador?: true
    tipo_documento?: true
    hash_archivo?: true
    nombre_archivo?: true
    descripcion?: true
    tipo_archivo?: true
    ruta_almacenamiento?: true
    fecha_subida?: true
    tamano_bytes?: true
    es_publico?: true
  }

  export type DocumentosMaxAggregateInputType = {
    id_documento?: true
    id_trabajador?: true
    tipo_documento?: true
    hash_archivo?: true
    nombre_archivo?: true
    descripcion?: true
    tipo_archivo?: true
    ruta_almacenamiento?: true
    fecha_subida?: true
    tamano_bytes?: true
    es_publico?: true
  }

  export type DocumentosCountAggregateInputType = {
    id_documento?: true
    id_trabajador?: true
    tipo_documento?: true
    metadata?: true
    hash_archivo?: true
    nombre_archivo?: true
    descripcion?: true
    tipo_archivo?: true
    ruta_almacenamiento?: true
    fecha_subida?: true
    tamano_bytes?: true
    es_publico?: true
    _all?: true
  }

  export type DocumentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentos to aggregate.
     */
    where?: documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentosOrderByWithRelationInput | documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documentos
    **/
    _count?: true | DocumentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentosMaxAggregateInputType
  }

  export type GetDocumentosAggregateType<T extends DocumentosAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentos[P]>
      : GetScalarType<T[P], AggregateDocumentos[P]>
  }




  export type documentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentosWhereInput
    orderBy?: documentosOrderByWithAggregationInput | documentosOrderByWithAggregationInput[]
    by: DocumentosScalarFieldEnum[] | DocumentosScalarFieldEnum
    having?: documentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentosCountAggregateInputType | true
    _avg?: DocumentosAvgAggregateInputType
    _sum?: DocumentosSumAggregateInputType
    _min?: DocumentosMinAggregateInputType
    _max?: DocumentosMaxAggregateInputType
  }

  export type DocumentosGroupByOutputType = {
    id_documento: number
    id_trabajador: number
    tipo_documento: string
    metadata: JsonValue | null
    hash_archivo: string
    nombre_archivo: string
    descripcion: string | null
    tipo_archivo: string | null
    ruta_almacenamiento: string
    fecha_subida: Date | null
    tamano_bytes: bigint
    es_publico: boolean | null
    _count: DocumentosCountAggregateOutputType | null
    _avg: DocumentosAvgAggregateOutputType | null
    _sum: DocumentosSumAggregateOutputType | null
    _min: DocumentosMinAggregateOutputType | null
    _max: DocumentosMaxAggregateOutputType | null
  }

  type GetDocumentosGroupByPayload<T extends documentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentosGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentosGroupByOutputType[P]>
        }
      >
    >


  export type documentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_documento?: boolean
    id_trabajador?: boolean
    tipo_documento?: boolean
    metadata?: boolean
    hash_archivo?: boolean
    nombre_archivo?: boolean
    descripcion?: boolean
    tipo_archivo?: boolean
    ruta_almacenamiento?: boolean
    fecha_subida?: boolean
    tamano_bytes?: boolean
    es_publico?: boolean
    cambiosadscripcion?: boolean | documentos$cambiosadscripcionArgs<ExtArgs>
    hijos?: boolean | documentos$hijosArgs<ExtArgs>
    permisos?: boolean | documentos$permisosArgs<ExtArgs>
    trabajadores_cursos?: boolean | documentos$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | DocumentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentos"]>

  export type documentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_documento?: boolean
    id_trabajador?: boolean
    tipo_documento?: boolean
    metadata?: boolean
    hash_archivo?: boolean
    nombre_archivo?: boolean
    descripcion?: boolean
    tipo_archivo?: boolean
    ruta_almacenamiento?: boolean
    fecha_subida?: boolean
    tamano_bytes?: boolean
    es_publico?: boolean
  }, ExtArgs["result"]["documentos"]>

  export type documentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_documento?: boolean
    id_trabajador?: boolean
    tipo_documento?: boolean
    metadata?: boolean
    hash_archivo?: boolean
    nombre_archivo?: boolean
    descripcion?: boolean
    tipo_archivo?: boolean
    ruta_almacenamiento?: boolean
    fecha_subida?: boolean
    tamano_bytes?: boolean
    es_publico?: boolean
  }, ExtArgs["result"]["documentos"]>

  export type documentosSelectScalar = {
    id_documento?: boolean
    id_trabajador?: boolean
    tipo_documento?: boolean
    metadata?: boolean
    hash_archivo?: boolean
    nombre_archivo?: boolean
    descripcion?: boolean
    tipo_archivo?: boolean
    ruta_almacenamiento?: boolean
    fecha_subida?: boolean
    tamano_bytes?: boolean
    es_publico?: boolean
  }

  export type documentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_documento" | "id_trabajador" | "tipo_documento" | "metadata" | "hash_archivo" | "nombre_archivo" | "descripcion" | "tipo_archivo" | "ruta_almacenamiento" | "fecha_subida" | "tamano_bytes" | "es_publico", ExtArgs["result"]["documentos"]>
  export type documentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cambiosadscripcion?: boolean | documentos$cambiosadscripcionArgs<ExtArgs>
    hijos?: boolean | documentos$hijosArgs<ExtArgs>
    permisos?: boolean | documentos$permisosArgs<ExtArgs>
    trabajadores_cursos?: boolean | documentos$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | DocumentosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type documentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type documentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $documentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documentos"
    objects: {
      cambiosadscripcion: Prisma.$cambiosadscripcionPayload<ExtArgs>[]
      hijos: Prisma.$hijosPayload<ExtArgs>[]
      permisos: Prisma.$permisosPayload<ExtArgs>[]
      trabajadores_cursos: Prisma.$trabajadores_cursosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_documento: number
      id_trabajador: number
      tipo_documento: string
      metadata: Prisma.JsonValue | null
      hash_archivo: string
      nombre_archivo: string
      descripcion: string | null
      tipo_archivo: string | null
      ruta_almacenamiento: string
      fecha_subida: Date | null
      tamano_bytes: bigint
      es_publico: boolean | null
    }, ExtArgs["result"]["documentos"]>
    composites: {}
  }

  type documentosGetPayload<S extends boolean | null | undefined | documentosDefaultArgs> = $Result.GetResult<Prisma.$documentosPayload, S>

  type documentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentosCountAggregateInputType | true
    }

  export interface documentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documentos'], meta: { name: 'documentos' } }
    /**
     * Find zero or one Documentos that matches the filter.
     * @param {documentosFindUniqueArgs} args - Arguments to find a Documentos
     * @example
     * // Get one Documentos
     * const documentos = await prisma.documentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentosFindUniqueArgs>(args: SelectSubset<T, documentosFindUniqueArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentosFindUniqueOrThrowArgs} args - Arguments to find a Documentos
     * @example
     * // Get one Documentos
     * const documentos = await prisma.documentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentosFindUniqueOrThrowArgs>(args: SelectSubset<T, documentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosFindFirstArgs} args - Arguments to find a Documentos
     * @example
     * // Get one Documentos
     * const documentos = await prisma.documentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentosFindFirstArgs>(args?: SelectSubset<T, documentosFindFirstArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosFindFirstOrThrowArgs} args - Arguments to find a Documentos
     * @example
     * // Get one Documentos
     * const documentos = await prisma.documentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentosFindFirstOrThrowArgs>(args?: SelectSubset<T, documentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documentos.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documentos.findMany({ take: 10 })
     * 
     * // Only select the `id_documento`
     * const documentosWithId_documentoOnly = await prisma.documentos.findMany({ select: { id_documento: true } })
     * 
     */
    findMany<T extends documentosFindManyArgs>(args?: SelectSubset<T, documentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documentos.
     * @param {documentosCreateArgs} args - Arguments to create a Documentos.
     * @example
     * // Create one Documentos
     * const Documentos = await prisma.documentos.create({
     *   data: {
     *     // ... data to create a Documentos
     *   }
     * })
     * 
     */
    create<T extends documentosCreateArgs>(args: SelectSubset<T, documentosCreateArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {documentosCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documentos = await prisma.documentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentosCreateManyArgs>(args?: SelectSubset<T, documentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {documentosCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documentos = await prisma.documentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `id_documento`
     * const documentosWithId_documentoOnly = await prisma.documentos.createManyAndReturn({
     *   select: { id_documento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documentosCreateManyAndReturnArgs>(args?: SelectSubset<T, documentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documentos.
     * @param {documentosDeleteArgs} args - Arguments to delete one Documentos.
     * @example
     * // Delete one Documentos
     * const Documentos = await prisma.documentos.delete({
     *   where: {
     *     // ... filter to delete one Documentos
     *   }
     * })
     * 
     */
    delete<T extends documentosDeleteArgs>(args: SelectSubset<T, documentosDeleteArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documentos.
     * @param {documentosUpdateArgs} args - Arguments to update one Documentos.
     * @example
     * // Update one Documentos
     * const documentos = await prisma.documentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentosUpdateArgs>(args: SelectSubset<T, documentosUpdateArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {documentosDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentosDeleteManyArgs>(args?: SelectSubset<T, documentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documentos = await prisma.documentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentosUpdateManyArgs>(args: SelectSubset<T, documentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {documentosUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documentos = await prisma.documentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `id_documento`
     * const documentosWithId_documentoOnly = await prisma.documentos.updateManyAndReturn({
     *   select: { id_documento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends documentosUpdateManyAndReturnArgs>(args: SelectSubset<T, documentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documentos.
     * @param {documentosUpsertArgs} args - Arguments to update or create a Documentos.
     * @example
     * // Update or create a Documentos
     * const documentos = await prisma.documentos.upsert({
     *   create: {
     *     // ... data to create a Documentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documentos we want to update
     *   }
     * })
     */
    upsert<T extends documentosUpsertArgs>(args: SelectSubset<T, documentosUpsertArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documentos.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends documentosCountArgs>(
      args?: Subset<T, documentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentosAggregateArgs>(args: Subset<T, DocumentosAggregateArgs>): Prisma.PrismaPromise<GetDocumentosAggregateType<T>>

    /**
     * Group by Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentosGroupByArgs['orderBy'] }
        : { orderBy?: documentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documentos model
   */
  readonly fields: documentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cambiosadscripcion<T extends documentos$cambiosadscripcionArgs<ExtArgs> = {}>(args?: Subset<T, documentos$cambiosadscripcionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cambiosadscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hijos<T extends documentos$hijosArgs<ExtArgs> = {}>(args?: Subset<T, documentos$hijosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permisos<T extends documentos$permisosArgs<ExtArgs> = {}>(args?: Subset<T, documentos$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trabajadores_cursos<T extends documentos$trabajadores_cursosArgs<ExtArgs> = {}>(args?: Subset<T, documentos$trabajadores_cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documentos model
   */
  interface documentosFieldRefs {
    readonly id_documento: FieldRef<"documentos", 'Int'>
    readonly id_trabajador: FieldRef<"documentos", 'Int'>
    readonly tipo_documento: FieldRef<"documentos", 'String'>
    readonly metadata: FieldRef<"documentos", 'Json'>
    readonly hash_archivo: FieldRef<"documentos", 'String'>
    readonly nombre_archivo: FieldRef<"documentos", 'String'>
    readonly descripcion: FieldRef<"documentos", 'String'>
    readonly tipo_archivo: FieldRef<"documentos", 'String'>
    readonly ruta_almacenamiento: FieldRef<"documentos", 'String'>
    readonly fecha_subida: FieldRef<"documentos", 'DateTime'>
    readonly tamano_bytes: FieldRef<"documentos", 'BigInt'>
    readonly es_publico: FieldRef<"documentos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * documentos findUnique
   */
  export type documentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where: documentosWhereUniqueInput
  }

  /**
   * documentos findUniqueOrThrow
   */
  export type documentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where: documentosWhereUniqueInput
  }

  /**
   * documentos findFirst
   */
  export type documentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where?: documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentosOrderByWithRelationInput | documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentosScalarFieldEnum | DocumentosScalarFieldEnum[]
  }

  /**
   * documentos findFirstOrThrow
   */
  export type documentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where?: documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentosOrderByWithRelationInput | documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentos.
     */
    cursor?: documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentos.
     */
    distinct?: DocumentosScalarFieldEnum | DocumentosScalarFieldEnum[]
  }

  /**
   * documentos findMany
   */
  export type documentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter, which documentos to fetch.
     */
    where?: documentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentos to fetch.
     */
    orderBy?: documentosOrderByWithRelationInput | documentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documentos.
     */
    cursor?: documentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentos.
     */
    skip?: number
    distinct?: DocumentosScalarFieldEnum | DocumentosScalarFieldEnum[]
  }

  /**
   * documentos create
   */
  export type documentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * The data needed to create a documentos.
     */
    data: XOR<documentosCreateInput, documentosUncheckedCreateInput>
  }

  /**
   * documentos createMany
   */
  export type documentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentos.
     */
    data: documentosCreateManyInput | documentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documentos createManyAndReturn
   */
  export type documentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * The data used to create many documentos.
     */
    data: documentosCreateManyInput | documentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documentos update
   */
  export type documentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * The data needed to update a documentos.
     */
    data: XOR<documentosUpdateInput, documentosUncheckedUpdateInput>
    /**
     * Choose, which documentos to update.
     */
    where: documentosWhereUniqueInput
  }

  /**
   * documentos updateMany
   */
  export type documentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentos.
     */
    data: XOR<documentosUpdateManyMutationInput, documentosUncheckedUpdateManyInput>
    /**
     * Filter which documentos to update
     */
    where?: documentosWhereInput
    /**
     * Limit how many documentos to update.
     */
    limit?: number
  }

  /**
   * documentos updateManyAndReturn
   */
  export type documentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * The data used to update documentos.
     */
    data: XOR<documentosUpdateManyMutationInput, documentosUncheckedUpdateManyInput>
    /**
     * Filter which documentos to update
     */
    where?: documentosWhereInput
    /**
     * Limit how many documentos to update.
     */
    limit?: number
  }

  /**
   * documentos upsert
   */
  export type documentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * The filter to search for the documentos to update in case it exists.
     */
    where: documentosWhereUniqueInput
    /**
     * In case the documentos found by the `where` argument doesn't exist, create a new documentos with this data.
     */
    create: XOR<documentosCreateInput, documentosUncheckedCreateInput>
    /**
     * In case the documentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentosUpdateInput, documentosUncheckedUpdateInput>
  }

  /**
   * documentos delete
   */
  export type documentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    /**
     * Filter which documentos to delete.
     */
    where: documentosWhereUniqueInput
  }

  /**
   * documentos deleteMany
   */
  export type documentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentos to delete
     */
    where?: documentosWhereInput
    /**
     * Limit how many documentos to delete.
     */
    limit?: number
  }

  /**
   * documentos.cambiosadscripcion
   */
  export type documentos$cambiosadscripcionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cambiosadscripcion
     */
    select?: cambiosadscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cambiosadscripcion
     */
    omit?: cambiosadscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cambiosadscripcionInclude<ExtArgs> | null
    where?: cambiosadscripcionWhereInput
    orderBy?: cambiosadscripcionOrderByWithRelationInput | cambiosadscripcionOrderByWithRelationInput[]
    cursor?: cambiosadscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CambiosadscripcionScalarFieldEnum | CambiosadscripcionScalarFieldEnum[]
  }

  /**
   * documentos.hijos
   */
  export type documentos$hijosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    where?: hijosWhereInput
    orderBy?: hijosOrderByWithRelationInput | hijosOrderByWithRelationInput[]
    cursor?: hijosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HijosScalarFieldEnum | HijosScalarFieldEnum[]
  }

  /**
   * documentos.permisos
   */
  export type documentos$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    where?: permisosWhereInput
    orderBy?: permisosOrderByWithRelationInput | permisosOrderByWithRelationInput[]
    cursor?: permisosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * documentos.trabajadores_cursos
   */
  export type documentos$trabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    where?: trabajadores_cursosWhereInput
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    cursor?: trabajadores_cursosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * documentos without action
   */
  export type documentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
  }


  /**
   * Model hijos
   */

  export type AggregateHijos = {
    _count: HijosCountAggregateOutputType | null
    _avg: HijosAvgAggregateOutputType | null
    _sum: HijosSumAggregateOutputType | null
    _min: HijosMinAggregateOutputType | null
    _max: HijosMaxAggregateOutputType | null
  }

  export type HijosAvgAggregateOutputType = {
    id_hijo: number | null
    id_trabajador: number | null
    acta_nacimiento_id: number | null
  }

  export type HijosSumAggregateOutputType = {
    id_hijo: number | null
    id_trabajador: number | null
    acta_nacimiento_id: number | null
  }

  export type HijosMinAggregateOutputType = {
    id_hijo: number | null
    id_trabajador: number | null
    nombre_completo: string | null
    fecha_nacimiento: Date | null
    acta_nacimiento_id: number | null
    vigente: boolean | null
  }

  export type HijosMaxAggregateOutputType = {
    id_hijo: number | null
    id_trabajador: number | null
    nombre_completo: string | null
    fecha_nacimiento: Date | null
    acta_nacimiento_id: number | null
    vigente: boolean | null
  }

  export type HijosCountAggregateOutputType = {
    id_hijo: number
    id_trabajador: number
    nombre_completo: number
    fecha_nacimiento: number
    acta_nacimiento_id: number
    vigente: number
    _all: number
  }


  export type HijosAvgAggregateInputType = {
    id_hijo?: true
    id_trabajador?: true
    acta_nacimiento_id?: true
  }

  export type HijosSumAggregateInputType = {
    id_hijo?: true
    id_trabajador?: true
    acta_nacimiento_id?: true
  }

  export type HijosMinAggregateInputType = {
    id_hijo?: true
    id_trabajador?: true
    nombre_completo?: true
    fecha_nacimiento?: true
    acta_nacimiento_id?: true
    vigente?: true
  }

  export type HijosMaxAggregateInputType = {
    id_hijo?: true
    id_trabajador?: true
    nombre_completo?: true
    fecha_nacimiento?: true
    acta_nacimiento_id?: true
    vigente?: true
  }

  export type HijosCountAggregateInputType = {
    id_hijo?: true
    id_trabajador?: true
    nombre_completo?: true
    fecha_nacimiento?: true
    acta_nacimiento_id?: true
    vigente?: true
    _all?: true
  }

  export type HijosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hijos to aggregate.
     */
    where?: hijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hijos to fetch.
     */
    orderBy?: hijosOrderByWithRelationInput | hijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hijos
    **/
    _count?: true | HijosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HijosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HijosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HijosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HijosMaxAggregateInputType
  }

  export type GetHijosAggregateType<T extends HijosAggregateArgs> = {
        [P in keyof T & keyof AggregateHijos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHijos[P]>
      : GetScalarType<T[P], AggregateHijos[P]>
  }




  export type hijosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hijosWhereInput
    orderBy?: hijosOrderByWithAggregationInput | hijosOrderByWithAggregationInput[]
    by: HijosScalarFieldEnum[] | HijosScalarFieldEnum
    having?: hijosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HijosCountAggregateInputType | true
    _avg?: HijosAvgAggregateInputType
    _sum?: HijosSumAggregateInputType
    _min?: HijosMinAggregateInputType
    _max?: HijosMaxAggregateInputType
  }

  export type HijosGroupByOutputType = {
    id_hijo: number
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date
    acta_nacimiento_id: number | null
    vigente: boolean | null
    _count: HijosCountAggregateOutputType | null
    _avg: HijosAvgAggregateOutputType | null
    _sum: HijosSumAggregateOutputType | null
    _min: HijosMinAggregateOutputType | null
    _max: HijosMaxAggregateOutputType | null
  }

  type GetHijosGroupByPayload<T extends hijosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HijosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HijosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HijosGroupByOutputType[P]>
            : GetScalarType<T[P], HijosGroupByOutputType[P]>
        }
      >
    >


  export type hijosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hijo?: boolean
    id_trabajador?: boolean
    nombre_completo?: boolean
    fecha_nacimiento?: boolean
    acta_nacimiento_id?: boolean
    vigente?: boolean
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["hijos"]>

  export type hijosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hijo?: boolean
    id_trabajador?: boolean
    nombre_completo?: boolean
    fecha_nacimiento?: boolean
    acta_nacimiento_id?: boolean
    vigente?: boolean
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["hijos"]>

  export type hijosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hijo?: boolean
    id_trabajador?: boolean
    nombre_completo?: boolean
    fecha_nacimiento?: boolean
    acta_nacimiento_id?: boolean
    vigente?: boolean
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["hijos"]>

  export type hijosSelectScalar = {
    id_hijo?: boolean
    id_trabajador?: boolean
    nombre_completo?: boolean
    fecha_nacimiento?: boolean
    acta_nacimiento_id?: boolean
    vigente?: boolean
  }

  export type hijosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_hijo" | "id_trabajador" | "nombre_completo" | "fecha_nacimiento" | "acta_nacimiento_id" | "vigente", ExtArgs["result"]["hijos"]>
  export type hijosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }
  export type hijosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }
  export type hijosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | hijos$documentosArgs<ExtArgs>
  }

  export type $hijosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hijos"
    objects: {
      documentos: Prisma.$documentosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_hijo: number
      id_trabajador: number
      nombre_completo: string
      fecha_nacimiento: Date
      acta_nacimiento_id: number | null
      vigente: boolean | null
    }, ExtArgs["result"]["hijos"]>
    composites: {}
  }

  type hijosGetPayload<S extends boolean | null | undefined | hijosDefaultArgs> = $Result.GetResult<Prisma.$hijosPayload, S>

  type hijosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hijosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HijosCountAggregateInputType | true
    }

  export interface hijosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hijos'], meta: { name: 'hijos' } }
    /**
     * Find zero or one Hijos that matches the filter.
     * @param {hijosFindUniqueArgs} args - Arguments to find a Hijos
     * @example
     * // Get one Hijos
     * const hijos = await prisma.hijos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hijosFindUniqueArgs>(args: SelectSubset<T, hijosFindUniqueArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hijos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hijosFindUniqueOrThrowArgs} args - Arguments to find a Hijos
     * @example
     * // Get one Hijos
     * const hijos = await prisma.hijos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hijosFindUniqueOrThrowArgs>(args: SelectSubset<T, hijosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hijos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosFindFirstArgs} args - Arguments to find a Hijos
     * @example
     * // Get one Hijos
     * const hijos = await prisma.hijos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hijosFindFirstArgs>(args?: SelectSubset<T, hijosFindFirstArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hijos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosFindFirstOrThrowArgs} args - Arguments to find a Hijos
     * @example
     * // Get one Hijos
     * const hijos = await prisma.hijos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hijosFindFirstOrThrowArgs>(args?: SelectSubset<T, hijosFindFirstOrThrowArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hijos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hijos
     * const hijos = await prisma.hijos.findMany()
     * 
     * // Get first 10 Hijos
     * const hijos = await prisma.hijos.findMany({ take: 10 })
     * 
     * // Only select the `id_hijo`
     * const hijosWithId_hijoOnly = await prisma.hijos.findMany({ select: { id_hijo: true } })
     * 
     */
    findMany<T extends hijosFindManyArgs>(args?: SelectSubset<T, hijosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hijos.
     * @param {hijosCreateArgs} args - Arguments to create a Hijos.
     * @example
     * // Create one Hijos
     * const Hijos = await prisma.hijos.create({
     *   data: {
     *     // ... data to create a Hijos
     *   }
     * })
     * 
     */
    create<T extends hijosCreateArgs>(args: SelectSubset<T, hijosCreateArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hijos.
     * @param {hijosCreateManyArgs} args - Arguments to create many Hijos.
     * @example
     * // Create many Hijos
     * const hijos = await prisma.hijos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hijosCreateManyArgs>(args?: SelectSubset<T, hijosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hijos and returns the data saved in the database.
     * @param {hijosCreateManyAndReturnArgs} args - Arguments to create many Hijos.
     * @example
     * // Create many Hijos
     * const hijos = await prisma.hijos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hijos and only return the `id_hijo`
     * const hijosWithId_hijoOnly = await prisma.hijos.createManyAndReturn({
     *   select: { id_hijo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hijosCreateManyAndReturnArgs>(args?: SelectSubset<T, hijosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hijos.
     * @param {hijosDeleteArgs} args - Arguments to delete one Hijos.
     * @example
     * // Delete one Hijos
     * const Hijos = await prisma.hijos.delete({
     *   where: {
     *     // ... filter to delete one Hijos
     *   }
     * })
     * 
     */
    delete<T extends hijosDeleteArgs>(args: SelectSubset<T, hijosDeleteArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hijos.
     * @param {hijosUpdateArgs} args - Arguments to update one Hijos.
     * @example
     * // Update one Hijos
     * const hijos = await prisma.hijos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hijosUpdateArgs>(args: SelectSubset<T, hijosUpdateArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hijos.
     * @param {hijosDeleteManyArgs} args - Arguments to filter Hijos to delete.
     * @example
     * // Delete a few Hijos
     * const { count } = await prisma.hijos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hijosDeleteManyArgs>(args?: SelectSubset<T, hijosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hijos
     * const hijos = await prisma.hijos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hijosUpdateManyArgs>(args: SelectSubset<T, hijosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hijos and returns the data updated in the database.
     * @param {hijosUpdateManyAndReturnArgs} args - Arguments to update many Hijos.
     * @example
     * // Update many Hijos
     * const hijos = await prisma.hijos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hijos and only return the `id_hijo`
     * const hijosWithId_hijoOnly = await prisma.hijos.updateManyAndReturn({
     *   select: { id_hijo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends hijosUpdateManyAndReturnArgs>(args: SelectSubset<T, hijosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hijos.
     * @param {hijosUpsertArgs} args - Arguments to update or create a Hijos.
     * @example
     * // Update or create a Hijos
     * const hijos = await prisma.hijos.upsert({
     *   create: {
     *     // ... data to create a Hijos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hijos we want to update
     *   }
     * })
     */
    upsert<T extends hijosUpsertArgs>(args: SelectSubset<T, hijosUpsertArgs<ExtArgs>>): Prisma__hijosClient<$Result.GetResult<Prisma.$hijosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosCountArgs} args - Arguments to filter Hijos to count.
     * @example
     * // Count the number of Hijos
     * const count = await prisma.hijos.count({
     *   where: {
     *     // ... the filter for the Hijos we want to count
     *   }
     * })
    **/
    count<T extends hijosCountArgs>(
      args?: Subset<T, hijosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HijosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HijosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HijosAggregateArgs>(args: Subset<T, HijosAggregateArgs>): Prisma.PrismaPromise<GetHijosAggregateType<T>>

    /**
     * Group by Hijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hijosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hijosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hijosGroupByArgs['orderBy'] }
        : { orderBy?: hijosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hijosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHijosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hijos model
   */
  readonly fields: hijosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hijos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hijosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends hijos$documentosArgs<ExtArgs> = {}>(args?: Subset<T, hijos$documentosArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hijos model
   */
  interface hijosFieldRefs {
    readonly id_hijo: FieldRef<"hijos", 'Int'>
    readonly id_trabajador: FieldRef<"hijos", 'Int'>
    readonly nombre_completo: FieldRef<"hijos", 'String'>
    readonly fecha_nacimiento: FieldRef<"hijos", 'DateTime'>
    readonly acta_nacimiento_id: FieldRef<"hijos", 'Int'>
    readonly vigente: FieldRef<"hijos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * hijos findUnique
   */
  export type hijosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter, which hijos to fetch.
     */
    where: hijosWhereUniqueInput
  }

  /**
   * hijos findUniqueOrThrow
   */
  export type hijosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter, which hijos to fetch.
     */
    where: hijosWhereUniqueInput
  }

  /**
   * hijos findFirst
   */
  export type hijosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter, which hijos to fetch.
     */
    where?: hijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hijos to fetch.
     */
    orderBy?: hijosOrderByWithRelationInput | hijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hijos.
     */
    cursor?: hijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hijos.
     */
    distinct?: HijosScalarFieldEnum | HijosScalarFieldEnum[]
  }

  /**
   * hijos findFirstOrThrow
   */
  export type hijosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter, which hijos to fetch.
     */
    where?: hijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hijos to fetch.
     */
    orderBy?: hijosOrderByWithRelationInput | hijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hijos.
     */
    cursor?: hijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hijos.
     */
    distinct?: HijosScalarFieldEnum | HijosScalarFieldEnum[]
  }

  /**
   * hijos findMany
   */
  export type hijosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter, which hijos to fetch.
     */
    where?: hijosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hijos to fetch.
     */
    orderBy?: hijosOrderByWithRelationInput | hijosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hijos.
     */
    cursor?: hijosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hijos.
     */
    skip?: number
    distinct?: HijosScalarFieldEnum | HijosScalarFieldEnum[]
  }

  /**
   * hijos create
   */
  export type hijosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * The data needed to create a hijos.
     */
    data: XOR<hijosCreateInput, hijosUncheckedCreateInput>
  }

  /**
   * hijos createMany
   */
  export type hijosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hijos.
     */
    data: hijosCreateManyInput | hijosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hijos createManyAndReturn
   */
  export type hijosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * The data used to create many hijos.
     */
    data: hijosCreateManyInput | hijosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hijos update
   */
  export type hijosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * The data needed to update a hijos.
     */
    data: XOR<hijosUpdateInput, hijosUncheckedUpdateInput>
    /**
     * Choose, which hijos to update.
     */
    where: hijosWhereUniqueInput
  }

  /**
   * hijos updateMany
   */
  export type hijosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hijos.
     */
    data: XOR<hijosUpdateManyMutationInput, hijosUncheckedUpdateManyInput>
    /**
     * Filter which hijos to update
     */
    where?: hijosWhereInput
    /**
     * Limit how many hijos to update.
     */
    limit?: number
  }

  /**
   * hijos updateManyAndReturn
   */
  export type hijosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * The data used to update hijos.
     */
    data: XOR<hijosUpdateManyMutationInput, hijosUncheckedUpdateManyInput>
    /**
     * Filter which hijos to update
     */
    where?: hijosWhereInput
    /**
     * Limit how many hijos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hijos upsert
   */
  export type hijosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * The filter to search for the hijos to update in case it exists.
     */
    where: hijosWhereUniqueInput
    /**
     * In case the hijos found by the `where` argument doesn't exist, create a new hijos with this data.
     */
    create: XOR<hijosCreateInput, hijosUncheckedCreateInput>
    /**
     * In case the hijos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hijosUpdateInput, hijosUncheckedUpdateInput>
  }

  /**
   * hijos delete
   */
  export type hijosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
    /**
     * Filter which hijos to delete.
     */
    where: hijosWhereUniqueInput
  }

  /**
   * hijos deleteMany
   */
  export type hijosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hijos to delete
     */
    where?: hijosWhereInput
    /**
     * Limit how many hijos to delete.
     */
    limit?: number
  }

  /**
   * hijos.documentos
   */
  export type hijos$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    where?: documentosWhereInput
  }

  /**
   * hijos without action
   */
  export type hijosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hijos
     */
    select?: hijosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hijos
     */
    omit?: hijosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hijosInclude<ExtArgs> | null
  }


  /**
   * Model permisos
   */

  export type AggregatePermisos = {
    _count: PermisosCountAggregateOutputType | null
    _avg: PermisosAvgAggregateOutputType | null
    _sum: PermisosSumAggregateOutputType | null
    _min: PermisosMinAggregateOutputType | null
    _max: PermisosMaxAggregateOutputType | null
  }

  export type PermisosAvgAggregateOutputType = {
    id_permiso: number | null
    id_trabajador: number | null
    documento_aprobacion_id: number | null
  }

  export type PermisosSumAggregateOutputType = {
    id_permiso: number | null
    id_trabajador: number | null
    documento_aprobacion_id: number | null
  }

  export type PermisosMinAggregateOutputType = {
    id_permiso: number | null
    id_trabajador: number | null
    tipo_permiso: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    motivo: string | null
    estatus: string | null
    documento_aprobacion_id: number | null
    fecha_registro: Date | null
  }

  export type PermisosMaxAggregateOutputType = {
    id_permiso: number | null
    id_trabajador: number | null
    tipo_permiso: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    motivo: string | null
    estatus: string | null
    documento_aprobacion_id: number | null
    fecha_registro: Date | null
  }

  export type PermisosCountAggregateOutputType = {
    id_permiso: number
    id_trabajador: number
    tipo_permiso: number
    fecha_inicio: number
    fecha_fin: number
    motivo: number
    estatus: number
    documento_aprobacion_id: number
    fecha_registro: number
    _all: number
  }


  export type PermisosAvgAggregateInputType = {
    id_permiso?: true
    id_trabajador?: true
    documento_aprobacion_id?: true
  }

  export type PermisosSumAggregateInputType = {
    id_permiso?: true
    id_trabajador?: true
    documento_aprobacion_id?: true
  }

  export type PermisosMinAggregateInputType = {
    id_permiso?: true
    id_trabajador?: true
    tipo_permiso?: true
    fecha_inicio?: true
    fecha_fin?: true
    motivo?: true
    estatus?: true
    documento_aprobacion_id?: true
    fecha_registro?: true
  }

  export type PermisosMaxAggregateInputType = {
    id_permiso?: true
    id_trabajador?: true
    tipo_permiso?: true
    fecha_inicio?: true
    fecha_fin?: true
    motivo?: true
    estatus?: true
    documento_aprobacion_id?: true
    fecha_registro?: true
  }

  export type PermisosCountAggregateInputType = {
    id_permiso?: true
    id_trabajador?: true
    tipo_permiso?: true
    fecha_inicio?: true
    fecha_fin?: true
    motivo?: true
    estatus?: true
    documento_aprobacion_id?: true
    fecha_registro?: true
    _all?: true
  }

  export type PermisosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permisos to aggregate.
     */
    where?: permisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permisos to fetch.
     */
    orderBy?: permisosOrderByWithRelationInput | permisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permisos
    **/
    _count?: true | PermisosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisosMaxAggregateInputType
  }

  export type GetPermisosAggregateType<T extends PermisosAggregateArgs> = {
        [P in keyof T & keyof AggregatePermisos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermisos[P]>
      : GetScalarType<T[P], AggregatePermisos[P]>
  }




  export type permisosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permisosWhereInput
    orderBy?: permisosOrderByWithAggregationInput | permisosOrderByWithAggregationInput[]
    by: PermisosScalarFieldEnum[] | PermisosScalarFieldEnum
    having?: permisosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisosCountAggregateInputType | true
    _avg?: PermisosAvgAggregateInputType
    _sum?: PermisosSumAggregateInputType
    _min?: PermisosMinAggregateInputType
    _max?: PermisosMaxAggregateInputType
  }

  export type PermisosGroupByOutputType = {
    id_permiso: number
    id_trabajador: number
    tipo_permiso: string | null
    fecha_inicio: Date
    fecha_fin: Date
    motivo: string
    estatus: string | null
    documento_aprobacion_id: number | null
    fecha_registro: Date | null
    _count: PermisosCountAggregateOutputType | null
    _avg: PermisosAvgAggregateOutputType | null
    _sum: PermisosSumAggregateOutputType | null
    _min: PermisosMinAggregateOutputType | null
    _max: PermisosMaxAggregateOutputType | null
  }

  type GetPermisosGroupByPayload<T extends permisosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisosGroupByOutputType[P]>
            : GetScalarType<T[P], PermisosGroupByOutputType[P]>
        }
      >
    >


  export type permisosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    id_trabajador?: boolean
    tipo_permiso?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    motivo?: boolean
    estatus?: boolean
    documento_aprobacion_id?: boolean
    fecha_registro?: boolean
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type permisosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    id_trabajador?: boolean
    tipo_permiso?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    motivo?: boolean
    estatus?: boolean
    documento_aprobacion_id?: boolean
    fecha_registro?: boolean
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type permisosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_permiso?: boolean
    id_trabajador?: boolean
    tipo_permiso?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    motivo?: boolean
    estatus?: boolean
    documento_aprobacion_id?: boolean
    fecha_registro?: boolean
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type permisosSelectScalar = {
    id_permiso?: boolean
    id_trabajador?: boolean
    tipo_permiso?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    motivo?: boolean
    estatus?: boolean
    documento_aprobacion_id?: boolean
    fecha_registro?: boolean
  }

  export type permisosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_permiso" | "id_trabajador" | "tipo_permiso" | "fecha_inicio" | "fecha_fin" | "motivo" | "estatus" | "documento_aprobacion_id" | "fecha_registro", ExtArgs["result"]["permisos"]>
  export type permisosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }
  export type permisosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }
  export type permisosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | permisos$documentosArgs<ExtArgs>
  }

  export type $permisosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permisos"
    objects: {
      documentos: Prisma.$documentosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_permiso: number
      id_trabajador: number
      tipo_permiso: string | null
      fecha_inicio: Date
      fecha_fin: Date
      motivo: string
      estatus: string | null
      documento_aprobacion_id: number | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["permisos"]>
    composites: {}
  }

  type permisosGetPayload<S extends boolean | null | undefined | permisosDefaultArgs> = $Result.GetResult<Prisma.$permisosPayload, S>

  type permisosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permisosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisosCountAggregateInputType | true
    }

  export interface permisosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permisos'], meta: { name: 'permisos' } }
    /**
     * Find zero or one Permisos that matches the filter.
     * @param {permisosFindUniqueArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permisosFindUniqueArgs>(args: SelectSubset<T, permisosFindUniqueArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permisos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permisosFindUniqueOrThrowArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permisosFindUniqueOrThrowArgs>(args: SelectSubset<T, permisosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosFindFirstArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permisosFindFirstArgs>(args?: SelectSubset<T, permisosFindFirstArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permisos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosFindFirstOrThrowArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permisosFindFirstOrThrowArgs>(args?: SelectSubset<T, permisosFindFirstOrThrowArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permisos.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permisos.findMany({ take: 10 })
     * 
     * // Only select the `id_permiso`
     * const permisosWithId_permisoOnly = await prisma.permisos.findMany({ select: { id_permiso: true } })
     * 
     */
    findMany<T extends permisosFindManyArgs>(args?: SelectSubset<T, permisosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permisos.
     * @param {permisosCreateArgs} args - Arguments to create a Permisos.
     * @example
     * // Create one Permisos
     * const Permisos = await prisma.permisos.create({
     *   data: {
     *     // ... data to create a Permisos
     *   }
     * })
     * 
     */
    create<T extends permisosCreateArgs>(args: SelectSubset<T, permisosCreateArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {permisosCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permisos = await prisma.permisos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permisosCreateManyArgs>(args?: SelectSubset<T, permisosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {permisosCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permisos = await prisma.permisos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id_permiso`
     * const permisosWithId_permisoOnly = await prisma.permisos.createManyAndReturn({
     *   select: { id_permiso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends permisosCreateManyAndReturnArgs>(args?: SelectSubset<T, permisosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permisos.
     * @param {permisosDeleteArgs} args - Arguments to delete one Permisos.
     * @example
     * // Delete one Permisos
     * const Permisos = await prisma.permisos.delete({
     *   where: {
     *     // ... filter to delete one Permisos
     *   }
     * })
     * 
     */
    delete<T extends permisosDeleteArgs>(args: SelectSubset<T, permisosDeleteArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permisos.
     * @param {permisosUpdateArgs} args - Arguments to update one Permisos.
     * @example
     * // Update one Permisos
     * const permisos = await prisma.permisos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permisosUpdateArgs>(args: SelectSubset<T, permisosUpdateArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {permisosDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permisos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permisosDeleteManyArgs>(args?: SelectSubset<T, permisosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permisos = await prisma.permisos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permisosUpdateManyArgs>(args: SelectSubset<T, permisosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {permisosUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permisos = await prisma.permisos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id_permiso`
     * const permisosWithId_permisoOnly = await prisma.permisos.updateManyAndReturn({
     *   select: { id_permiso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends permisosUpdateManyAndReturnArgs>(args: SelectSubset<T, permisosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permisos.
     * @param {permisosUpsertArgs} args - Arguments to update or create a Permisos.
     * @example
     * // Update or create a Permisos
     * const permisos = await prisma.permisos.upsert({
     *   create: {
     *     // ... data to create a Permisos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permisos we want to update
     *   }
     * })
     */
    upsert<T extends permisosUpsertArgs>(args: SelectSubset<T, permisosUpsertArgs<ExtArgs>>): Prisma__permisosClient<$Result.GetResult<Prisma.$permisosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permisos.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends permisosCountArgs>(
      args?: Subset<T, permisosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermisosAggregateArgs>(args: Subset<T, PermisosAggregateArgs>): Prisma.PrismaPromise<GetPermisosAggregateType<T>>

    /**
     * Group by Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permisosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permisosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permisosGroupByArgs['orderBy'] }
        : { orderBy?: permisosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permisosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permisos model
   */
  readonly fields: permisosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permisos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permisosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends permisos$documentosArgs<ExtArgs> = {}>(args?: Subset<T, permisos$documentosArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permisos model
   */
  interface permisosFieldRefs {
    readonly id_permiso: FieldRef<"permisos", 'Int'>
    readonly id_trabajador: FieldRef<"permisos", 'Int'>
    readonly tipo_permiso: FieldRef<"permisos", 'String'>
    readonly fecha_inicio: FieldRef<"permisos", 'DateTime'>
    readonly fecha_fin: FieldRef<"permisos", 'DateTime'>
    readonly motivo: FieldRef<"permisos", 'String'>
    readonly estatus: FieldRef<"permisos", 'String'>
    readonly documento_aprobacion_id: FieldRef<"permisos", 'Int'>
    readonly fecha_registro: FieldRef<"permisos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permisos findUnique
   */
  export type permisosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter, which permisos to fetch.
     */
    where: permisosWhereUniqueInput
  }

  /**
   * permisos findUniqueOrThrow
   */
  export type permisosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter, which permisos to fetch.
     */
    where: permisosWhereUniqueInput
  }

  /**
   * permisos findFirst
   */
  export type permisosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter, which permisos to fetch.
     */
    where?: permisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permisos to fetch.
     */
    orderBy?: permisosOrderByWithRelationInput | permisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permisos.
     */
    cursor?: permisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permisos.
     */
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * permisos findFirstOrThrow
   */
  export type permisosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter, which permisos to fetch.
     */
    where?: permisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permisos to fetch.
     */
    orderBy?: permisosOrderByWithRelationInput | permisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permisos.
     */
    cursor?: permisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permisos.
     */
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * permisos findMany
   */
  export type permisosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter, which permisos to fetch.
     */
    where?: permisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permisos to fetch.
     */
    orderBy?: permisosOrderByWithRelationInput | permisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permisos.
     */
    cursor?: permisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permisos.
     */
    skip?: number
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * permisos create
   */
  export type permisosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * The data needed to create a permisos.
     */
    data: XOR<permisosCreateInput, permisosUncheckedCreateInput>
  }

  /**
   * permisos createMany
   */
  export type permisosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permisos.
     */
    data: permisosCreateManyInput | permisosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permisos createManyAndReturn
   */
  export type permisosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * The data used to create many permisos.
     */
    data: permisosCreateManyInput | permisosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * permisos update
   */
  export type permisosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * The data needed to update a permisos.
     */
    data: XOR<permisosUpdateInput, permisosUncheckedUpdateInput>
    /**
     * Choose, which permisos to update.
     */
    where: permisosWhereUniqueInput
  }

  /**
   * permisos updateMany
   */
  export type permisosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permisos.
     */
    data: XOR<permisosUpdateManyMutationInput, permisosUncheckedUpdateManyInput>
    /**
     * Filter which permisos to update
     */
    where?: permisosWhereInput
    /**
     * Limit how many permisos to update.
     */
    limit?: number
  }

  /**
   * permisos updateManyAndReturn
   */
  export type permisosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * The data used to update permisos.
     */
    data: XOR<permisosUpdateManyMutationInput, permisosUncheckedUpdateManyInput>
    /**
     * Filter which permisos to update
     */
    where?: permisosWhereInput
    /**
     * Limit how many permisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * permisos upsert
   */
  export type permisosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * The filter to search for the permisos to update in case it exists.
     */
    where: permisosWhereUniqueInput
    /**
     * In case the permisos found by the `where` argument doesn't exist, create a new permisos with this data.
     */
    create: XOR<permisosCreateInput, permisosUncheckedCreateInput>
    /**
     * In case the permisos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permisosUpdateInput, permisosUncheckedUpdateInput>
  }

  /**
   * permisos delete
   */
  export type permisosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
    /**
     * Filter which permisos to delete.
     */
    where: permisosWhereUniqueInput
  }

  /**
   * permisos deleteMany
   */
  export type permisosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permisos to delete
     */
    where?: permisosWhereInput
    /**
     * Limit how many permisos to delete.
     */
    limit?: number
  }

  /**
   * permisos.documentos
   */
  export type permisos$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    where?: documentosWhereInput
  }

  /**
   * permisos without action
   */
  export type permisosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permisos
     */
    select?: permisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permisos
     */
    omit?: permisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permisosInclude<ExtArgs> | null
  }


  /**
   * Model sanciones
   */

  export type AggregateSanciones = {
    _count: SancionesCountAggregateOutputType | null
    _avg: SancionesAvgAggregateOutputType | null
    _sum: SancionesSumAggregateOutputType | null
    _min: SancionesMinAggregateOutputType | null
    _max: SancionesMaxAggregateOutputType | null
  }

  export type SancionesAvgAggregateOutputType = {
    id_sancion: number | null
    id_trabajador: number | null
  }

  export type SancionesSumAggregateOutputType = {
    id_sancion: number | null
    id_trabajador: number | null
  }

  export type SancionesMinAggregateOutputType = {
    id_sancion: number | null
    id_trabajador: number | null
    tipo_sancion: string | null
    descripcion: string | null
    fecha_aplicacion: Date | null
    fecha_fin: Date | null
    estatus: string | null
    usuario_registro: string | null
    fecha_registro: Date | null
  }

  export type SancionesMaxAggregateOutputType = {
    id_sancion: number | null
    id_trabajador: number | null
    tipo_sancion: string | null
    descripcion: string | null
    fecha_aplicacion: Date | null
    fecha_fin: Date | null
    estatus: string | null
    usuario_registro: string | null
    fecha_registro: Date | null
  }

  export type SancionesCountAggregateOutputType = {
    id_sancion: number
    id_trabajador: number
    tipo_sancion: number
    descripcion: number
    fecha_aplicacion: number
    fecha_fin: number
    estatus: number
    usuario_registro: number
    fecha_registro: number
    _all: number
  }


  export type SancionesAvgAggregateInputType = {
    id_sancion?: true
    id_trabajador?: true
  }

  export type SancionesSumAggregateInputType = {
    id_sancion?: true
    id_trabajador?: true
  }

  export type SancionesMinAggregateInputType = {
    id_sancion?: true
    id_trabajador?: true
    tipo_sancion?: true
    descripcion?: true
    fecha_aplicacion?: true
    fecha_fin?: true
    estatus?: true
    usuario_registro?: true
    fecha_registro?: true
  }

  export type SancionesMaxAggregateInputType = {
    id_sancion?: true
    id_trabajador?: true
    tipo_sancion?: true
    descripcion?: true
    fecha_aplicacion?: true
    fecha_fin?: true
    estatus?: true
    usuario_registro?: true
    fecha_registro?: true
  }

  export type SancionesCountAggregateInputType = {
    id_sancion?: true
    id_trabajador?: true
    tipo_sancion?: true
    descripcion?: true
    fecha_aplicacion?: true
    fecha_fin?: true
    estatus?: true
    usuario_registro?: true
    fecha_registro?: true
    _all?: true
  }

  export type SancionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sanciones to aggregate.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sanciones
    **/
    _count?: true | SancionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SancionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SancionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SancionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SancionesMaxAggregateInputType
  }

  export type GetSancionesAggregateType<T extends SancionesAggregateArgs> = {
        [P in keyof T & keyof AggregateSanciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanciones[P]>
      : GetScalarType<T[P], AggregateSanciones[P]>
  }




  export type sancionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sancionesWhereInput
    orderBy?: sancionesOrderByWithAggregationInput | sancionesOrderByWithAggregationInput[]
    by: SancionesScalarFieldEnum[] | SancionesScalarFieldEnum
    having?: sancionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SancionesCountAggregateInputType | true
    _avg?: SancionesAvgAggregateInputType
    _sum?: SancionesSumAggregateInputType
    _min?: SancionesMinAggregateInputType
    _max?: SancionesMaxAggregateInputType
  }

  export type SancionesGroupByOutputType = {
    id_sancion: number
    id_trabajador: number
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date
    fecha_fin: Date | null
    estatus: string | null
    usuario_registro: string | null
    fecha_registro: Date | null
    _count: SancionesCountAggregateOutputType | null
    _avg: SancionesAvgAggregateOutputType | null
    _sum: SancionesSumAggregateOutputType | null
    _min: SancionesMinAggregateOutputType | null
    _max: SancionesMaxAggregateOutputType | null
  }

  type GetSancionesGroupByPayload<T extends sancionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SancionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SancionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SancionesGroupByOutputType[P]>
            : GetScalarType<T[P], SancionesGroupByOutputType[P]>
        }
      >
    >


  export type sancionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sancion?: boolean
    id_trabajador?: boolean
    tipo_sancion?: boolean
    descripcion?: boolean
    fecha_aplicacion?: boolean
    fecha_fin?: boolean
    estatus?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanciones"]>

  export type sancionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sancion?: boolean
    id_trabajador?: boolean
    tipo_sancion?: boolean
    descripcion?: boolean
    fecha_aplicacion?: boolean
    fecha_fin?: boolean
    estatus?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanciones"]>

  export type sancionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sancion?: boolean
    id_trabajador?: boolean
    tipo_sancion?: boolean
    descripcion?: boolean
    fecha_aplicacion?: boolean
    fecha_fin?: boolean
    estatus?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanciones"]>

  export type sancionesSelectScalar = {
    id_sancion?: boolean
    id_trabajador?: boolean
    tipo_sancion?: boolean
    descripcion?: boolean
    fecha_aplicacion?: boolean
    fecha_fin?: boolean
    estatus?: boolean
    usuario_registro?: boolean
    fecha_registro?: boolean
  }

  export type sancionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_sancion" | "id_trabajador" | "tipo_sancion" | "descripcion" | "fecha_aplicacion" | "fecha_fin" | "estatus" | "usuario_registro" | "fecha_registro", ExtArgs["result"]["sanciones"]>
  export type sancionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }
  export type sancionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }
  export type sancionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }

  export type $sancionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sanciones"
    objects: {
      trabajadores: Prisma.$trabajadoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sancion: number
      id_trabajador: number
      tipo_sancion: string
      descripcion: string
      fecha_aplicacion: Date
      fecha_fin: Date | null
      estatus: string | null
      usuario_registro: string | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["sanciones"]>
    composites: {}
  }

  type sancionesGetPayload<S extends boolean | null | undefined | sancionesDefaultArgs> = $Result.GetResult<Prisma.$sancionesPayload, S>

  type sancionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sancionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SancionesCountAggregateInputType | true
    }

  export interface sancionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sanciones'], meta: { name: 'sanciones' } }
    /**
     * Find zero or one Sanciones that matches the filter.
     * @param {sancionesFindUniqueArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sancionesFindUniqueArgs>(args: SelectSubset<T, sancionesFindUniqueArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sanciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sancionesFindUniqueOrThrowArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sancionesFindUniqueOrThrowArgs>(args: SelectSubset<T, sancionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindFirstArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sancionesFindFirstArgs>(args?: SelectSubset<T, sancionesFindFirstArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindFirstOrThrowArgs} args - Arguments to find a Sanciones
     * @example
     * // Get one Sanciones
     * const sanciones = await prisma.sanciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sancionesFindFirstOrThrowArgs>(args?: SelectSubset<T, sancionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sanciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sanciones
     * const sanciones = await prisma.sanciones.findMany()
     * 
     * // Get first 10 Sanciones
     * const sanciones = await prisma.sanciones.findMany({ take: 10 })
     * 
     * // Only select the `id_sancion`
     * const sancionesWithId_sancionOnly = await prisma.sanciones.findMany({ select: { id_sancion: true } })
     * 
     */
    findMany<T extends sancionesFindManyArgs>(args?: SelectSubset<T, sancionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sanciones.
     * @param {sancionesCreateArgs} args - Arguments to create a Sanciones.
     * @example
     * // Create one Sanciones
     * const Sanciones = await prisma.sanciones.create({
     *   data: {
     *     // ... data to create a Sanciones
     *   }
     * })
     * 
     */
    create<T extends sancionesCreateArgs>(args: SelectSubset<T, sancionesCreateArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sanciones.
     * @param {sancionesCreateManyArgs} args - Arguments to create many Sanciones.
     * @example
     * // Create many Sanciones
     * const sanciones = await prisma.sanciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sancionesCreateManyArgs>(args?: SelectSubset<T, sancionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sanciones and returns the data saved in the database.
     * @param {sancionesCreateManyAndReturnArgs} args - Arguments to create many Sanciones.
     * @example
     * // Create many Sanciones
     * const sanciones = await prisma.sanciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sanciones and only return the `id_sancion`
     * const sancionesWithId_sancionOnly = await prisma.sanciones.createManyAndReturn({
     *   select: { id_sancion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sancionesCreateManyAndReturnArgs>(args?: SelectSubset<T, sancionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sanciones.
     * @param {sancionesDeleteArgs} args - Arguments to delete one Sanciones.
     * @example
     * // Delete one Sanciones
     * const Sanciones = await prisma.sanciones.delete({
     *   where: {
     *     // ... filter to delete one Sanciones
     *   }
     * })
     * 
     */
    delete<T extends sancionesDeleteArgs>(args: SelectSubset<T, sancionesDeleteArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sanciones.
     * @param {sancionesUpdateArgs} args - Arguments to update one Sanciones.
     * @example
     * // Update one Sanciones
     * const sanciones = await prisma.sanciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sancionesUpdateArgs>(args: SelectSubset<T, sancionesUpdateArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sanciones.
     * @param {sancionesDeleteManyArgs} args - Arguments to filter Sanciones to delete.
     * @example
     * // Delete a few Sanciones
     * const { count } = await prisma.sanciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sancionesDeleteManyArgs>(args?: SelectSubset<T, sancionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sanciones
     * const sanciones = await prisma.sanciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sancionesUpdateManyArgs>(args: SelectSubset<T, sancionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanciones and returns the data updated in the database.
     * @param {sancionesUpdateManyAndReturnArgs} args - Arguments to update many Sanciones.
     * @example
     * // Update many Sanciones
     * const sanciones = await prisma.sanciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sanciones and only return the `id_sancion`
     * const sancionesWithId_sancionOnly = await prisma.sanciones.updateManyAndReturn({
     *   select: { id_sancion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sancionesUpdateManyAndReturnArgs>(args: SelectSubset<T, sancionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sanciones.
     * @param {sancionesUpsertArgs} args - Arguments to update or create a Sanciones.
     * @example
     * // Update or create a Sanciones
     * const sanciones = await prisma.sanciones.upsert({
     *   create: {
     *     // ... data to create a Sanciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sanciones we want to update
     *   }
     * })
     */
    upsert<T extends sancionesUpsertArgs>(args: SelectSubset<T, sancionesUpsertArgs<ExtArgs>>): Prisma__sancionesClient<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesCountArgs} args - Arguments to filter Sanciones to count.
     * @example
     * // Count the number of Sanciones
     * const count = await prisma.sanciones.count({
     *   where: {
     *     // ... the filter for the Sanciones we want to count
     *   }
     * })
    **/
    count<T extends sancionesCountArgs>(
      args?: Subset<T, sancionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SancionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SancionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SancionesAggregateArgs>(args: Subset<T, SancionesAggregateArgs>): Prisma.PrismaPromise<GetSancionesAggregateType<T>>

    /**
     * Group by Sanciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sancionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sancionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sancionesGroupByArgs['orderBy'] }
        : { orderBy?: sancionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sancionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSancionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sanciones model
   */
  readonly fields: sancionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sanciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sancionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trabajadores<T extends trabajadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trabajadoresDefaultArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sanciones model
   */
  interface sancionesFieldRefs {
    readonly id_sancion: FieldRef<"sanciones", 'Int'>
    readonly id_trabajador: FieldRef<"sanciones", 'Int'>
    readonly tipo_sancion: FieldRef<"sanciones", 'String'>
    readonly descripcion: FieldRef<"sanciones", 'String'>
    readonly fecha_aplicacion: FieldRef<"sanciones", 'DateTime'>
    readonly fecha_fin: FieldRef<"sanciones", 'DateTime'>
    readonly estatus: FieldRef<"sanciones", 'String'>
    readonly usuario_registro: FieldRef<"sanciones", 'String'>
    readonly fecha_registro: FieldRef<"sanciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sanciones findUnique
   */
  export type sancionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones findUniqueOrThrow
   */
  export type sancionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones findFirst
   */
  export type sancionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sanciones.
     */
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones findFirstOrThrow
   */
  export type sancionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sanciones.
     */
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones findMany
   */
  export type sancionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter, which sanciones to fetch.
     */
    where?: sancionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sanciones to fetch.
     */
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sanciones.
     */
    cursor?: sancionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sanciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sanciones.
     */
    skip?: number
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * sanciones create
   */
  export type sancionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The data needed to create a sanciones.
     */
    data: XOR<sancionesCreateInput, sancionesUncheckedCreateInput>
  }

  /**
   * sanciones createMany
   */
  export type sancionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sanciones.
     */
    data: sancionesCreateManyInput | sancionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sanciones createManyAndReturn
   */
  export type sancionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * The data used to create many sanciones.
     */
    data: sancionesCreateManyInput | sancionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sanciones update
   */
  export type sancionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The data needed to update a sanciones.
     */
    data: XOR<sancionesUpdateInput, sancionesUncheckedUpdateInput>
    /**
     * Choose, which sanciones to update.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones updateMany
   */
  export type sancionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sanciones.
     */
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyInput>
    /**
     * Filter which sanciones to update
     */
    where?: sancionesWhereInput
    /**
     * Limit how many sanciones to update.
     */
    limit?: number
  }

  /**
   * sanciones updateManyAndReturn
   */
  export type sancionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * The data used to update sanciones.
     */
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyInput>
    /**
     * Filter which sanciones to update
     */
    where?: sancionesWhereInput
    /**
     * Limit how many sanciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sanciones upsert
   */
  export type sancionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * The filter to search for the sanciones to update in case it exists.
     */
    where: sancionesWhereUniqueInput
    /**
     * In case the sanciones found by the `where` argument doesn't exist, create a new sanciones with this data.
     */
    create: XOR<sancionesCreateInput, sancionesUncheckedCreateInput>
    /**
     * In case the sanciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sancionesUpdateInput, sancionesUncheckedUpdateInput>
  }

  /**
   * sanciones delete
   */
  export type sancionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    /**
     * Filter which sanciones to delete.
     */
    where: sancionesWhereUniqueInput
  }

  /**
   * sanciones deleteMany
   */
  export type sancionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sanciones to delete
     */
    where?: sancionesWhereInput
    /**
     * Limit how many sanciones to delete.
     */
    limit?: number
  }

  /**
   * sanciones without action
   */
  export type sancionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
  }


  /**
   * Model secciones
   */

  export type AggregateSecciones = {
    _count: SeccionesCountAggregateOutputType | null
    _avg: SeccionesAvgAggregateOutputType | null
    _sum: SeccionesSumAggregateOutputType | null
    _min: SeccionesMinAggregateOutputType | null
    _max: SeccionesMaxAggregateOutputType | null
  }

  export type SeccionesAvgAggregateOutputType = {
    id_seccion: number | null
  }

  export type SeccionesSumAggregateOutputType = {
    id_seccion: number | null
  }

  export type SeccionesMinAggregateOutputType = {
    id_seccion: number | null
    nombre_seccion: string | null
    descripcion: string | null
  }

  export type SeccionesMaxAggregateOutputType = {
    id_seccion: number | null
    nombre_seccion: string | null
    descripcion: string | null
  }

  export type SeccionesCountAggregateOutputType = {
    id_seccion: number
    nombre_seccion: number
    descripcion: number
    _all: number
  }


  export type SeccionesAvgAggregateInputType = {
    id_seccion?: true
  }

  export type SeccionesSumAggregateInputType = {
    id_seccion?: true
  }

  export type SeccionesMinAggregateInputType = {
    id_seccion?: true
    nombre_seccion?: true
    descripcion?: true
  }

  export type SeccionesMaxAggregateInputType = {
    id_seccion?: true
    nombre_seccion?: true
    descripcion?: true
  }

  export type SeccionesCountAggregateInputType = {
    id_seccion?: true
    nombre_seccion?: true
    descripcion?: true
    _all?: true
  }

  export type SeccionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secciones to aggregate.
     */
    where?: seccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secciones to fetch.
     */
    orderBy?: seccionesOrderByWithRelationInput | seccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned secciones
    **/
    _count?: true | SeccionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionesMaxAggregateInputType
  }

  export type GetSeccionesAggregateType<T extends SeccionesAggregateArgs> = {
        [P in keyof T & keyof AggregateSecciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecciones[P]>
      : GetScalarType<T[P], AggregateSecciones[P]>
  }




  export type seccionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seccionesWhereInput
    orderBy?: seccionesOrderByWithAggregationInput | seccionesOrderByWithAggregationInput[]
    by: SeccionesScalarFieldEnum[] | SeccionesScalarFieldEnum
    having?: seccionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionesCountAggregateInputType | true
    _avg?: SeccionesAvgAggregateInputType
    _sum?: SeccionesSumAggregateInputType
    _min?: SeccionesMinAggregateInputType
    _max?: SeccionesMaxAggregateInputType
  }

  export type SeccionesGroupByOutputType = {
    id_seccion: number
    nombre_seccion: string
    descripcion: string | null
    _count: SeccionesCountAggregateOutputType | null
    _avg: SeccionesAvgAggregateOutputType | null
    _sum: SeccionesSumAggregateOutputType | null
    _min: SeccionesMinAggregateOutputType | null
    _max: SeccionesMaxAggregateOutputType | null
  }

  type GetSeccionesGroupByPayload<T extends seccionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionesGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionesGroupByOutputType[P]>
        }
      >
    >


  export type seccionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seccion?: boolean
    nombre_seccion?: boolean
    descripcion?: boolean
    trabajadores?: boolean | secciones$trabajadoresArgs<ExtArgs>
    _count?: boolean | SeccionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secciones"]>

  export type seccionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seccion?: boolean
    nombre_seccion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["secciones"]>

  export type seccionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_seccion?: boolean
    nombre_seccion?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["secciones"]>

  export type seccionesSelectScalar = {
    id_seccion?: boolean
    nombre_seccion?: boolean
    descripcion?: boolean
  }

  export type seccionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_seccion" | "nombre_seccion" | "descripcion", ExtArgs["result"]["secciones"]>
  export type seccionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trabajadores?: boolean | secciones$trabajadoresArgs<ExtArgs>
    _count?: boolean | SeccionesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type seccionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type seccionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $seccionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "secciones"
    objects: {
      trabajadores: Prisma.$trabajadoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_seccion: number
      nombre_seccion: string
      descripcion: string | null
    }, ExtArgs["result"]["secciones"]>
    composites: {}
  }

  type seccionesGetPayload<S extends boolean | null | undefined | seccionesDefaultArgs> = $Result.GetResult<Prisma.$seccionesPayload, S>

  type seccionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seccionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionesCountAggregateInputType | true
    }

  export interface seccionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['secciones'], meta: { name: 'secciones' } }
    /**
     * Find zero or one Secciones that matches the filter.
     * @param {seccionesFindUniqueArgs} args - Arguments to find a Secciones
     * @example
     * // Get one Secciones
     * const secciones = await prisma.secciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seccionesFindUniqueArgs>(args: SelectSubset<T, seccionesFindUniqueArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seccionesFindUniqueOrThrowArgs} args - Arguments to find a Secciones
     * @example
     * // Get one Secciones
     * const secciones = await prisma.secciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seccionesFindUniqueOrThrowArgs>(args: SelectSubset<T, seccionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesFindFirstArgs} args - Arguments to find a Secciones
     * @example
     * // Get one Secciones
     * const secciones = await prisma.secciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seccionesFindFirstArgs>(args?: SelectSubset<T, seccionesFindFirstArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesFindFirstOrThrowArgs} args - Arguments to find a Secciones
     * @example
     * // Get one Secciones
     * const secciones = await prisma.secciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seccionesFindFirstOrThrowArgs>(args?: SelectSubset<T, seccionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secciones
     * const secciones = await prisma.secciones.findMany()
     * 
     * // Get first 10 Secciones
     * const secciones = await prisma.secciones.findMany({ take: 10 })
     * 
     * // Only select the `id_seccion`
     * const seccionesWithId_seccionOnly = await prisma.secciones.findMany({ select: { id_seccion: true } })
     * 
     */
    findMany<T extends seccionesFindManyArgs>(args?: SelectSubset<T, seccionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secciones.
     * @param {seccionesCreateArgs} args - Arguments to create a Secciones.
     * @example
     * // Create one Secciones
     * const Secciones = await prisma.secciones.create({
     *   data: {
     *     // ... data to create a Secciones
     *   }
     * })
     * 
     */
    create<T extends seccionesCreateArgs>(args: SelectSubset<T, seccionesCreateArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secciones.
     * @param {seccionesCreateManyArgs} args - Arguments to create many Secciones.
     * @example
     * // Create many Secciones
     * const secciones = await prisma.secciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seccionesCreateManyArgs>(args?: SelectSubset<T, seccionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secciones and returns the data saved in the database.
     * @param {seccionesCreateManyAndReturnArgs} args - Arguments to create many Secciones.
     * @example
     * // Create many Secciones
     * const secciones = await prisma.secciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secciones and only return the `id_seccion`
     * const seccionesWithId_seccionOnly = await prisma.secciones.createManyAndReturn({
     *   select: { id_seccion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seccionesCreateManyAndReturnArgs>(args?: SelectSubset<T, seccionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secciones.
     * @param {seccionesDeleteArgs} args - Arguments to delete one Secciones.
     * @example
     * // Delete one Secciones
     * const Secciones = await prisma.secciones.delete({
     *   where: {
     *     // ... filter to delete one Secciones
     *   }
     * })
     * 
     */
    delete<T extends seccionesDeleteArgs>(args: SelectSubset<T, seccionesDeleteArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secciones.
     * @param {seccionesUpdateArgs} args - Arguments to update one Secciones.
     * @example
     * // Update one Secciones
     * const secciones = await prisma.secciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seccionesUpdateArgs>(args: SelectSubset<T, seccionesUpdateArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secciones.
     * @param {seccionesDeleteManyArgs} args - Arguments to filter Secciones to delete.
     * @example
     * // Delete a few Secciones
     * const { count } = await prisma.secciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seccionesDeleteManyArgs>(args?: SelectSubset<T, seccionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secciones
     * const secciones = await prisma.secciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seccionesUpdateManyArgs>(args: SelectSubset<T, seccionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secciones and returns the data updated in the database.
     * @param {seccionesUpdateManyAndReturnArgs} args - Arguments to update many Secciones.
     * @example
     * // Update many Secciones
     * const secciones = await prisma.secciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secciones and only return the `id_seccion`
     * const seccionesWithId_seccionOnly = await prisma.secciones.updateManyAndReturn({
     *   select: { id_seccion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends seccionesUpdateManyAndReturnArgs>(args: SelectSubset<T, seccionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secciones.
     * @param {seccionesUpsertArgs} args - Arguments to update or create a Secciones.
     * @example
     * // Update or create a Secciones
     * const secciones = await prisma.secciones.upsert({
     *   create: {
     *     // ... data to create a Secciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secciones we want to update
     *   }
     * })
     */
    upsert<T extends seccionesUpsertArgs>(args: SelectSubset<T, seccionesUpsertArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesCountArgs} args - Arguments to filter Secciones to count.
     * @example
     * // Count the number of Secciones
     * const count = await prisma.secciones.count({
     *   where: {
     *     // ... the filter for the Secciones we want to count
     *   }
     * })
    **/
    count<T extends seccionesCountArgs>(
      args?: Subset<T, seccionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeccionesAggregateArgs>(args: Subset<T, SeccionesAggregateArgs>): Prisma.PrismaPromise<GetSeccionesAggregateType<T>>

    /**
     * Group by Secciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seccionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seccionesGroupByArgs['orderBy'] }
        : { orderBy?: seccionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seccionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the secciones model
   */
  readonly fields: seccionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for secciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seccionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trabajadores<T extends secciones$trabajadoresArgs<ExtArgs> = {}>(args?: Subset<T, secciones$trabajadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the secciones model
   */
  interface seccionesFieldRefs {
    readonly id_seccion: FieldRef<"secciones", 'Int'>
    readonly nombre_seccion: FieldRef<"secciones", 'String'>
    readonly descripcion: FieldRef<"secciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * secciones findUnique
   */
  export type seccionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter, which secciones to fetch.
     */
    where: seccionesWhereUniqueInput
  }

  /**
   * secciones findUniqueOrThrow
   */
  export type seccionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter, which secciones to fetch.
     */
    where: seccionesWhereUniqueInput
  }

  /**
   * secciones findFirst
   */
  export type seccionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter, which secciones to fetch.
     */
    where?: seccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secciones to fetch.
     */
    orderBy?: seccionesOrderByWithRelationInput | seccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secciones.
     */
    cursor?: seccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secciones.
     */
    distinct?: SeccionesScalarFieldEnum | SeccionesScalarFieldEnum[]
  }

  /**
   * secciones findFirstOrThrow
   */
  export type seccionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter, which secciones to fetch.
     */
    where?: seccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secciones to fetch.
     */
    orderBy?: seccionesOrderByWithRelationInput | seccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for secciones.
     */
    cursor?: seccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of secciones.
     */
    distinct?: SeccionesScalarFieldEnum | SeccionesScalarFieldEnum[]
  }

  /**
   * secciones findMany
   */
  export type seccionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter, which secciones to fetch.
     */
    where?: seccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of secciones to fetch.
     */
    orderBy?: seccionesOrderByWithRelationInput | seccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing secciones.
     */
    cursor?: seccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` secciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` secciones.
     */
    skip?: number
    distinct?: SeccionesScalarFieldEnum | SeccionesScalarFieldEnum[]
  }

  /**
   * secciones create
   */
  export type seccionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * The data needed to create a secciones.
     */
    data: XOR<seccionesCreateInput, seccionesUncheckedCreateInput>
  }

  /**
   * secciones createMany
   */
  export type seccionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many secciones.
     */
    data: seccionesCreateManyInput | seccionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * secciones createManyAndReturn
   */
  export type seccionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * The data used to create many secciones.
     */
    data: seccionesCreateManyInput | seccionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * secciones update
   */
  export type seccionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * The data needed to update a secciones.
     */
    data: XOR<seccionesUpdateInput, seccionesUncheckedUpdateInput>
    /**
     * Choose, which secciones to update.
     */
    where: seccionesWhereUniqueInput
  }

  /**
   * secciones updateMany
   */
  export type seccionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update secciones.
     */
    data: XOR<seccionesUpdateManyMutationInput, seccionesUncheckedUpdateManyInput>
    /**
     * Filter which secciones to update
     */
    where?: seccionesWhereInput
    /**
     * Limit how many secciones to update.
     */
    limit?: number
  }

  /**
   * secciones updateManyAndReturn
   */
  export type seccionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * The data used to update secciones.
     */
    data: XOR<seccionesUpdateManyMutationInput, seccionesUncheckedUpdateManyInput>
    /**
     * Filter which secciones to update
     */
    where?: seccionesWhereInput
    /**
     * Limit how many secciones to update.
     */
    limit?: number
  }

  /**
   * secciones upsert
   */
  export type seccionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * The filter to search for the secciones to update in case it exists.
     */
    where: seccionesWhereUniqueInput
    /**
     * In case the secciones found by the `where` argument doesn't exist, create a new secciones with this data.
     */
    create: XOR<seccionesCreateInput, seccionesUncheckedCreateInput>
    /**
     * In case the secciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seccionesUpdateInput, seccionesUncheckedUpdateInput>
  }

  /**
   * secciones delete
   */
  export type seccionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
    /**
     * Filter which secciones to delete.
     */
    where: seccionesWhereUniqueInput
  }

  /**
   * secciones deleteMany
   */
  export type seccionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which secciones to delete
     */
    where?: seccionesWhereInput
    /**
     * Limit how many secciones to delete.
     */
    limit?: number
  }

  /**
   * secciones.trabajadores
   */
  export type secciones$trabajadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    where?: trabajadoresWhereInput
    orderBy?: trabajadoresOrderByWithRelationInput | trabajadoresOrderByWithRelationInput[]
    cursor?: trabajadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrabajadoresScalarFieldEnum | TrabajadoresScalarFieldEnum[]
  }

  /**
   * secciones without action
   */
  export type seccionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the secciones
     */
    select?: seccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the secciones
     */
    omit?: seccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seccionesInclude<ExtArgs> | null
  }


  /**
   * Model trabajadores
   */

  export type AggregateTrabajadores = {
    _count: TrabajadoresCountAggregateOutputType | null
    _avg: TrabajadoresAvgAggregateOutputType | null
    _sum: TrabajadoresSumAggregateOutputType | null
    _min: TrabajadoresMinAggregateOutputType | null
    _max: TrabajadoresMaxAggregateOutputType | null
  }

  export type TrabajadoresAvgAggregateOutputType = {
    id_trabajador: number | null
    numero_hijos: number | null
    id_seccion: number | null
  }

  export type TrabajadoresSumAggregateOutputType = {
    id_trabajador: number | null
    numero_hijos: number | null
    id_seccion: number | null
  }

  export type TrabajadoresMinAggregateOutputType = {
    id_trabajador: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    fecha_nacimiento: Date | null
    sexo: string | null
    curp: string | null
    rfc: string | null
    email: string | null
    situacion_sentimental: string | null
    numero_hijos: number | null
    numero_empleado: string | null
    numero_plaza: string | null
    fecha_ingreso: Date | null
    fecha_ingreso_gobierno: Date | null
    nivel_puesto: string | null
    nombre_puesto: string | null
    puesto_inpi: string | null
    adscripcion: string | null
    id_seccion: number | null
    nivel_estudios: string | null
    institucion_estudios: string | null
    certificado_estudios: boolean | null
    plaza_base: string | null
    fecha_actualizacion: Date | null
  }

  export type TrabajadoresMaxAggregateOutputType = {
    id_trabajador: number | null
    nombre: string | null
    apellido_paterno: string | null
    apellido_materno: string | null
    fecha_nacimiento: Date | null
    sexo: string | null
    curp: string | null
    rfc: string | null
    email: string | null
    situacion_sentimental: string | null
    numero_hijos: number | null
    numero_empleado: string | null
    numero_plaza: string | null
    fecha_ingreso: Date | null
    fecha_ingreso_gobierno: Date | null
    nivel_puesto: string | null
    nombre_puesto: string | null
    puesto_inpi: string | null
    adscripcion: string | null
    id_seccion: number | null
    nivel_estudios: string | null
    institucion_estudios: string | null
    certificado_estudios: boolean | null
    plaza_base: string | null
    fecha_actualizacion: Date | null
  }

  export type TrabajadoresCountAggregateOutputType = {
    id_trabajador: number
    nombre: number
    apellido_paterno: number
    apellido_materno: number
    fecha_nacimiento: number
    sexo: number
    curp: number
    rfc: number
    email: number
    situacion_sentimental: number
    numero_hijos: number
    numero_empleado: number
    numero_plaza: number
    fecha_ingreso: number
    fecha_ingreso_gobierno: number
    nivel_puesto: number
    nombre_puesto: number
    puesto_inpi: number
    adscripcion: number
    id_seccion: number
    nivel_estudios: number
    institucion_estudios: number
    certificado_estudios: number
    plaza_base: number
    fecha_actualizacion: number
    _all: number
  }


  export type TrabajadoresAvgAggregateInputType = {
    id_trabajador?: true
    numero_hijos?: true
    id_seccion?: true
  }

  export type TrabajadoresSumAggregateInputType = {
    id_trabajador?: true
    numero_hijos?: true
    id_seccion?: true
  }

  export type TrabajadoresMinAggregateInputType = {
    id_trabajador?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    fecha_nacimiento?: true
    sexo?: true
    curp?: true
    rfc?: true
    email?: true
    situacion_sentimental?: true
    numero_hijos?: true
    numero_empleado?: true
    numero_plaza?: true
    fecha_ingreso?: true
    fecha_ingreso_gobierno?: true
    nivel_puesto?: true
    nombre_puesto?: true
    puesto_inpi?: true
    adscripcion?: true
    id_seccion?: true
    nivel_estudios?: true
    institucion_estudios?: true
    certificado_estudios?: true
    plaza_base?: true
    fecha_actualizacion?: true
  }

  export type TrabajadoresMaxAggregateInputType = {
    id_trabajador?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    fecha_nacimiento?: true
    sexo?: true
    curp?: true
    rfc?: true
    email?: true
    situacion_sentimental?: true
    numero_hijos?: true
    numero_empleado?: true
    numero_plaza?: true
    fecha_ingreso?: true
    fecha_ingreso_gobierno?: true
    nivel_puesto?: true
    nombre_puesto?: true
    puesto_inpi?: true
    adscripcion?: true
    id_seccion?: true
    nivel_estudios?: true
    institucion_estudios?: true
    certificado_estudios?: true
    plaza_base?: true
    fecha_actualizacion?: true
  }

  export type TrabajadoresCountAggregateInputType = {
    id_trabajador?: true
    nombre?: true
    apellido_paterno?: true
    apellido_materno?: true
    fecha_nacimiento?: true
    sexo?: true
    curp?: true
    rfc?: true
    email?: true
    situacion_sentimental?: true
    numero_hijos?: true
    numero_empleado?: true
    numero_plaza?: true
    fecha_ingreso?: true
    fecha_ingreso_gobierno?: true
    nivel_puesto?: true
    nombre_puesto?: true
    puesto_inpi?: true
    adscripcion?: true
    id_seccion?: true
    nivel_estudios?: true
    institucion_estudios?: true
    certificado_estudios?: true
    plaza_base?: true
    fecha_actualizacion?: true
    _all?: true
  }

  export type TrabajadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trabajadores to aggregate.
     */
    where?: trabajadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores to fetch.
     */
    orderBy?: trabajadoresOrderByWithRelationInput | trabajadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trabajadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trabajadores
    **/
    _count?: true | TrabajadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrabajadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrabajadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrabajadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrabajadoresMaxAggregateInputType
  }

  export type GetTrabajadoresAggregateType<T extends TrabajadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabajadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabajadores[P]>
      : GetScalarType<T[P], AggregateTrabajadores[P]>
  }




  export type trabajadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadoresWhereInput
    orderBy?: trabajadoresOrderByWithAggregationInput | trabajadoresOrderByWithAggregationInput[]
    by: TrabajadoresScalarFieldEnum[] | TrabajadoresScalarFieldEnum
    having?: trabajadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrabajadoresCountAggregateInputType | true
    _avg?: TrabajadoresAvgAggregateInputType
    _sum?: TrabajadoresSumAggregateInputType
    _min?: TrabajadoresMinAggregateInputType
    _max?: TrabajadoresMaxAggregateInputType
  }

  export type TrabajadoresGroupByOutputType = {
    id_trabajador: number
    nombre: string
    apellido_paterno: string
    apellido_materno: string | null
    fecha_nacimiento: Date
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental: string | null
    numero_hijos: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date
    fecha_ingreso_gobierno: Date
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi: string | null
    adscripcion: string
    id_seccion: number
    nivel_estudios: string | null
    institucion_estudios: string | null
    certificado_estudios: boolean | null
    plaza_base: string | null
    fecha_actualizacion: Date | null
    _count: TrabajadoresCountAggregateOutputType | null
    _avg: TrabajadoresAvgAggregateOutputType | null
    _sum: TrabajadoresSumAggregateOutputType | null
    _min: TrabajadoresMinAggregateOutputType | null
    _max: TrabajadoresMaxAggregateOutputType | null
  }

  type GetTrabajadoresGroupByPayload<T extends trabajadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrabajadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrabajadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrabajadoresGroupByOutputType[P]>
            : GetScalarType<T[P], TrabajadoresGroupByOutputType[P]>
        }
      >
    >


  export type trabajadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    fecha_nacimiento?: boolean
    sexo?: boolean
    curp?: boolean
    rfc?: boolean
    email?: boolean
    situacion_sentimental?: boolean
    numero_hijos?: boolean
    numero_empleado?: boolean
    numero_plaza?: boolean
    fecha_ingreso?: boolean
    fecha_ingreso_gobierno?: boolean
    nivel_puesto?: boolean
    nombre_puesto?: boolean
    puesto_inpi?: boolean
    adscripcion?: boolean
    id_seccion?: boolean
    nivel_estudios?: boolean
    institucion_estudios?: boolean
    certificado_estudios?: boolean
    plaza_base?: boolean
    fecha_actualizacion?: boolean
    sanciones?: boolean | trabajadores$sancionesArgs<ExtArgs>
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
    trabajadores_cursos?: boolean | trabajadores$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | TrabajadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores"]>

  export type trabajadoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    fecha_nacimiento?: boolean
    sexo?: boolean
    curp?: boolean
    rfc?: boolean
    email?: boolean
    situacion_sentimental?: boolean
    numero_hijos?: boolean
    numero_empleado?: boolean
    numero_plaza?: boolean
    fecha_ingreso?: boolean
    fecha_ingreso_gobierno?: boolean
    nivel_puesto?: boolean
    nombre_puesto?: boolean
    puesto_inpi?: boolean
    adscripcion?: boolean
    id_seccion?: boolean
    nivel_estudios?: boolean
    institucion_estudios?: boolean
    certificado_estudios?: boolean
    plaza_base?: boolean
    fecha_actualizacion?: boolean
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores"]>

  export type trabajadoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    fecha_nacimiento?: boolean
    sexo?: boolean
    curp?: boolean
    rfc?: boolean
    email?: boolean
    situacion_sentimental?: boolean
    numero_hijos?: boolean
    numero_empleado?: boolean
    numero_plaza?: boolean
    fecha_ingreso?: boolean
    fecha_ingreso_gobierno?: boolean
    nivel_puesto?: boolean
    nombre_puesto?: boolean
    puesto_inpi?: boolean
    adscripcion?: boolean
    id_seccion?: boolean
    nivel_estudios?: boolean
    institucion_estudios?: boolean
    certificado_estudios?: boolean
    plaza_base?: boolean
    fecha_actualizacion?: boolean
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores"]>

  export type trabajadoresSelectScalar = {
    id_trabajador?: boolean
    nombre?: boolean
    apellido_paterno?: boolean
    apellido_materno?: boolean
    fecha_nacimiento?: boolean
    sexo?: boolean
    curp?: boolean
    rfc?: boolean
    email?: boolean
    situacion_sentimental?: boolean
    numero_hijos?: boolean
    numero_empleado?: boolean
    numero_plaza?: boolean
    fecha_ingreso?: boolean
    fecha_ingreso_gobierno?: boolean
    nivel_puesto?: boolean
    nombre_puesto?: boolean
    puesto_inpi?: boolean
    adscripcion?: boolean
    id_seccion?: boolean
    nivel_estudios?: boolean
    institucion_estudios?: boolean
    certificado_estudios?: boolean
    plaza_base?: boolean
    fecha_actualizacion?: boolean
  }

  export type trabajadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_trabajador" | "nombre" | "apellido_paterno" | "apellido_materno" | "fecha_nacimiento" | "sexo" | "curp" | "rfc" | "email" | "situacion_sentimental" | "numero_hijos" | "numero_empleado" | "numero_plaza" | "fecha_ingreso" | "fecha_ingreso_gobierno" | "nivel_puesto" | "nombre_puesto" | "puesto_inpi" | "adscripcion" | "id_seccion" | "nivel_estudios" | "institucion_estudios" | "certificado_estudios" | "plaza_base" | "fecha_actualizacion", ExtArgs["result"]["trabajadores"]>
  export type trabajadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanciones?: boolean | trabajadores$sancionesArgs<ExtArgs>
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
    trabajadores_cursos?: boolean | trabajadores$trabajadores_cursosArgs<ExtArgs>
    _count?: boolean | TrabajadoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type trabajadoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
  }
  export type trabajadoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | seccionesDefaultArgs<ExtArgs>
  }

  export type $trabajadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trabajadores"
    objects: {
      sanciones: Prisma.$sancionesPayload<ExtArgs>[]
      seccion: Prisma.$seccionesPayload<ExtArgs>
      trabajadores_cursos: Prisma.$trabajadores_cursosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_trabajador: number
      nombre: string
      apellido_paterno: string
      apellido_materno: string | null
      fecha_nacimiento: Date
      sexo: string
      curp: string
      rfc: string
      email: string
      situacion_sentimental: string | null
      numero_hijos: number
      numero_empleado: string
      numero_plaza: string
      fecha_ingreso: Date
      fecha_ingreso_gobierno: Date
      nivel_puesto: string
      nombre_puesto: string
      puesto_inpi: string | null
      adscripcion: string
      id_seccion: number
      nivel_estudios: string | null
      institucion_estudios: string | null
      certificado_estudios: boolean | null
      plaza_base: string | null
      fecha_actualizacion: Date | null
    }, ExtArgs["result"]["trabajadores"]>
    composites: {}
  }

  type trabajadoresGetPayload<S extends boolean | null | undefined | trabajadoresDefaultArgs> = $Result.GetResult<Prisma.$trabajadoresPayload, S>

  type trabajadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trabajadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrabajadoresCountAggregateInputType | true
    }

  export interface trabajadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trabajadores'], meta: { name: 'trabajadores' } }
    /**
     * Find zero or one Trabajadores that matches the filter.
     * @param {trabajadoresFindUniqueArgs} args - Arguments to find a Trabajadores
     * @example
     * // Get one Trabajadores
     * const trabajadores = await prisma.trabajadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trabajadoresFindUniqueArgs>(args: SelectSubset<T, trabajadoresFindUniqueArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trabajadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trabajadoresFindUniqueOrThrowArgs} args - Arguments to find a Trabajadores
     * @example
     * // Get one Trabajadores
     * const trabajadores = await prisma.trabajadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trabajadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, trabajadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresFindFirstArgs} args - Arguments to find a Trabajadores
     * @example
     * // Get one Trabajadores
     * const trabajadores = await prisma.trabajadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trabajadoresFindFirstArgs>(args?: SelectSubset<T, trabajadoresFindFirstArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresFindFirstOrThrowArgs} args - Arguments to find a Trabajadores
     * @example
     * // Get one Trabajadores
     * const trabajadores = await prisma.trabajadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trabajadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, trabajadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trabajadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trabajadores
     * const trabajadores = await prisma.trabajadores.findMany()
     * 
     * // Get first 10 Trabajadores
     * const trabajadores = await prisma.trabajadores.findMany({ take: 10 })
     * 
     * // Only select the `id_trabajador`
     * const trabajadoresWithId_trabajadorOnly = await prisma.trabajadores.findMany({ select: { id_trabajador: true } })
     * 
     */
    findMany<T extends trabajadoresFindManyArgs>(args?: SelectSubset<T, trabajadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trabajadores.
     * @param {trabajadoresCreateArgs} args - Arguments to create a Trabajadores.
     * @example
     * // Create one Trabajadores
     * const Trabajadores = await prisma.trabajadores.create({
     *   data: {
     *     // ... data to create a Trabajadores
     *   }
     * })
     * 
     */
    create<T extends trabajadoresCreateArgs>(args: SelectSubset<T, trabajadoresCreateArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trabajadores.
     * @param {trabajadoresCreateManyArgs} args - Arguments to create many Trabajadores.
     * @example
     * // Create many Trabajadores
     * const trabajadores = await prisma.trabajadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trabajadoresCreateManyArgs>(args?: SelectSubset<T, trabajadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trabajadores and returns the data saved in the database.
     * @param {trabajadoresCreateManyAndReturnArgs} args - Arguments to create many Trabajadores.
     * @example
     * // Create many Trabajadores
     * const trabajadores = await prisma.trabajadores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trabajadores and only return the `id_trabajador`
     * const trabajadoresWithId_trabajadorOnly = await prisma.trabajadores.createManyAndReturn({
     *   select: { id_trabajador: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trabajadoresCreateManyAndReturnArgs>(args?: SelectSubset<T, trabajadoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trabajadores.
     * @param {trabajadoresDeleteArgs} args - Arguments to delete one Trabajadores.
     * @example
     * // Delete one Trabajadores
     * const Trabajadores = await prisma.trabajadores.delete({
     *   where: {
     *     // ... filter to delete one Trabajadores
     *   }
     * })
     * 
     */
    delete<T extends trabajadoresDeleteArgs>(args: SelectSubset<T, trabajadoresDeleteArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trabajadores.
     * @param {trabajadoresUpdateArgs} args - Arguments to update one Trabajadores.
     * @example
     * // Update one Trabajadores
     * const trabajadores = await prisma.trabajadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trabajadoresUpdateArgs>(args: SelectSubset<T, trabajadoresUpdateArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trabajadores.
     * @param {trabajadoresDeleteManyArgs} args - Arguments to filter Trabajadores to delete.
     * @example
     * // Delete a few Trabajadores
     * const { count } = await prisma.trabajadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trabajadoresDeleteManyArgs>(args?: SelectSubset<T, trabajadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trabajadores
     * const trabajadores = await prisma.trabajadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trabajadoresUpdateManyArgs>(args: SelectSubset<T, trabajadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajadores and returns the data updated in the database.
     * @param {trabajadoresUpdateManyAndReturnArgs} args - Arguments to update many Trabajadores.
     * @example
     * // Update many Trabajadores
     * const trabajadores = await prisma.trabajadores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trabajadores and only return the `id_trabajador`
     * const trabajadoresWithId_trabajadorOnly = await prisma.trabajadores.updateManyAndReturn({
     *   select: { id_trabajador: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends trabajadoresUpdateManyAndReturnArgs>(args: SelectSubset<T, trabajadoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trabajadores.
     * @param {trabajadoresUpsertArgs} args - Arguments to update or create a Trabajadores.
     * @example
     * // Update or create a Trabajadores
     * const trabajadores = await prisma.trabajadores.upsert({
     *   create: {
     *     // ... data to create a Trabajadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trabajadores we want to update
     *   }
     * })
     */
    upsert<T extends trabajadoresUpsertArgs>(args: SelectSubset<T, trabajadoresUpsertArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trabajadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresCountArgs} args - Arguments to filter Trabajadores to count.
     * @example
     * // Count the number of Trabajadores
     * const count = await prisma.trabajadores.count({
     *   where: {
     *     // ... the filter for the Trabajadores we want to count
     *   }
     * })
    **/
    count<T extends trabajadoresCountArgs>(
      args?: Subset<T, trabajadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrabajadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trabajadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrabajadoresAggregateArgs>(args: Subset<T, TrabajadoresAggregateArgs>): Prisma.PrismaPromise<GetTrabajadoresAggregateType<T>>

    /**
     * Group by Trabajadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends trabajadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trabajadoresGroupByArgs['orderBy'] }
        : { orderBy?: trabajadoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trabajadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabajadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trabajadores model
   */
  readonly fields: trabajadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trabajadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trabajadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sanciones<T extends trabajadores$sancionesArgs<ExtArgs> = {}>(args?: Subset<T, trabajadores$sancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sancionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seccion<T extends seccionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, seccionesDefaultArgs<ExtArgs>>): Prisma__seccionesClient<$Result.GetResult<Prisma.$seccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trabajadores_cursos<T extends trabajadores$trabajadores_cursosArgs<ExtArgs> = {}>(args?: Subset<T, trabajadores$trabajadores_cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trabajadores model
   */
  interface trabajadoresFieldRefs {
    readonly id_trabajador: FieldRef<"trabajadores", 'Int'>
    readonly nombre: FieldRef<"trabajadores", 'String'>
    readonly apellido_paterno: FieldRef<"trabajadores", 'String'>
    readonly apellido_materno: FieldRef<"trabajadores", 'String'>
    readonly fecha_nacimiento: FieldRef<"trabajadores", 'DateTime'>
    readonly sexo: FieldRef<"trabajadores", 'String'>
    readonly curp: FieldRef<"trabajadores", 'String'>
    readonly rfc: FieldRef<"trabajadores", 'String'>
    readonly email: FieldRef<"trabajadores", 'String'>
    readonly situacion_sentimental: FieldRef<"trabajadores", 'String'>
    readonly numero_hijos: FieldRef<"trabajadores", 'Int'>
    readonly numero_empleado: FieldRef<"trabajadores", 'String'>
    readonly numero_plaza: FieldRef<"trabajadores", 'String'>
    readonly fecha_ingreso: FieldRef<"trabajadores", 'DateTime'>
    readonly fecha_ingreso_gobierno: FieldRef<"trabajadores", 'DateTime'>
    readonly nivel_puesto: FieldRef<"trabajadores", 'String'>
    readonly nombre_puesto: FieldRef<"trabajadores", 'String'>
    readonly puesto_inpi: FieldRef<"trabajadores", 'String'>
    readonly adscripcion: FieldRef<"trabajadores", 'String'>
    readonly id_seccion: FieldRef<"trabajadores", 'Int'>
    readonly nivel_estudios: FieldRef<"trabajadores", 'String'>
    readonly institucion_estudios: FieldRef<"trabajadores", 'String'>
    readonly certificado_estudios: FieldRef<"trabajadores", 'Boolean'>
    readonly plaza_base: FieldRef<"trabajadores", 'String'>
    readonly fecha_actualizacion: FieldRef<"trabajadores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * trabajadores findUnique
   */
  export type trabajadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores to fetch.
     */
    where: trabajadoresWhereUniqueInput
  }

  /**
   * trabajadores findUniqueOrThrow
   */
  export type trabajadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores to fetch.
     */
    where: trabajadoresWhereUniqueInput
  }

  /**
   * trabajadores findFirst
   */
  export type trabajadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores to fetch.
     */
    where?: trabajadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores to fetch.
     */
    orderBy?: trabajadoresOrderByWithRelationInput | trabajadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trabajadores.
     */
    cursor?: trabajadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trabajadores.
     */
    distinct?: TrabajadoresScalarFieldEnum | TrabajadoresScalarFieldEnum[]
  }

  /**
   * trabajadores findFirstOrThrow
   */
  export type trabajadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores to fetch.
     */
    where?: trabajadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores to fetch.
     */
    orderBy?: trabajadoresOrderByWithRelationInput | trabajadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trabajadores.
     */
    cursor?: trabajadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trabajadores.
     */
    distinct?: TrabajadoresScalarFieldEnum | TrabajadoresScalarFieldEnum[]
  }

  /**
   * trabajadores findMany
   */
  export type trabajadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores to fetch.
     */
    where?: trabajadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores to fetch.
     */
    orderBy?: trabajadoresOrderByWithRelationInput | trabajadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trabajadores.
     */
    cursor?: trabajadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores.
     */
    skip?: number
    distinct?: TrabajadoresScalarFieldEnum | TrabajadoresScalarFieldEnum[]
  }

  /**
   * trabajadores create
   */
  export type trabajadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a trabajadores.
     */
    data: XOR<trabajadoresCreateInput, trabajadoresUncheckedCreateInput>
  }

  /**
   * trabajadores createMany
   */
  export type trabajadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trabajadores.
     */
    data: trabajadoresCreateManyInput | trabajadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trabajadores createManyAndReturn
   */
  export type trabajadoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * The data used to create many trabajadores.
     */
    data: trabajadoresCreateManyInput | trabajadoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * trabajadores update
   */
  export type trabajadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a trabajadores.
     */
    data: XOR<trabajadoresUpdateInput, trabajadoresUncheckedUpdateInput>
    /**
     * Choose, which trabajadores to update.
     */
    where: trabajadoresWhereUniqueInput
  }

  /**
   * trabajadores updateMany
   */
  export type trabajadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trabajadores.
     */
    data: XOR<trabajadoresUpdateManyMutationInput, trabajadoresUncheckedUpdateManyInput>
    /**
     * Filter which trabajadores to update
     */
    where?: trabajadoresWhereInput
    /**
     * Limit how many trabajadores to update.
     */
    limit?: number
  }

  /**
   * trabajadores updateManyAndReturn
   */
  export type trabajadoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * The data used to update trabajadores.
     */
    data: XOR<trabajadoresUpdateManyMutationInput, trabajadoresUncheckedUpdateManyInput>
    /**
     * Filter which trabajadores to update
     */
    where?: trabajadoresWhereInput
    /**
     * Limit how many trabajadores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * trabajadores upsert
   */
  export type trabajadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the trabajadores to update in case it exists.
     */
    where: trabajadoresWhereUniqueInput
    /**
     * In case the trabajadores found by the `where` argument doesn't exist, create a new trabajadores with this data.
     */
    create: XOR<trabajadoresCreateInput, trabajadoresUncheckedCreateInput>
    /**
     * In case the trabajadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trabajadoresUpdateInput, trabajadoresUncheckedUpdateInput>
  }

  /**
   * trabajadores delete
   */
  export type trabajadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
    /**
     * Filter which trabajadores to delete.
     */
    where: trabajadoresWhereUniqueInput
  }

  /**
   * trabajadores deleteMany
   */
  export type trabajadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trabajadores to delete
     */
    where?: trabajadoresWhereInput
    /**
     * Limit how many trabajadores to delete.
     */
    limit?: number
  }

  /**
   * trabajadores.sanciones
   */
  export type trabajadores$sancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sanciones
     */
    select?: sancionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sanciones
     */
    omit?: sancionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sancionesInclude<ExtArgs> | null
    where?: sancionesWhereInput
    orderBy?: sancionesOrderByWithRelationInput | sancionesOrderByWithRelationInput[]
    cursor?: sancionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SancionesScalarFieldEnum | SancionesScalarFieldEnum[]
  }

  /**
   * trabajadores.trabajadores_cursos
   */
  export type trabajadores$trabajadores_cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    where?: trabajadores_cursosWhereInput
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    cursor?: trabajadores_cursosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * trabajadores without action
   */
  export type trabajadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores
     */
    select?: trabajadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores
     */
    omit?: trabajadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadoresInclude<ExtArgs> | null
  }


  /**
   * Model trabajadores_cursos
   */

  export type AggregateTrabajadores_cursos = {
    _count: Trabajadores_cursosCountAggregateOutputType | null
    _avg: Trabajadores_cursosAvgAggregateOutputType | null
    _sum: Trabajadores_cursosSumAggregateOutputType | null
    _min: Trabajadores_cursosMinAggregateOutputType | null
    _max: Trabajadores_cursosMaxAggregateOutputType | null
  }

  export type Trabajadores_cursosAvgAggregateOutputType = {
    id_trabajador_curso: number | null
    id_trabajador: number | null
    id_curso: number | null
    calificacion: Decimal | null
    certificado_id: number | null
  }

  export type Trabajadores_cursosSumAggregateOutputType = {
    id_trabajador_curso: number | null
    id_trabajador: number | null
    id_curso: number | null
    calificacion: Decimal | null
    certificado_id: number | null
  }

  export type Trabajadores_cursosMinAggregateOutputType = {
    id_trabajador_curso: number | null
    id_trabajador: number | null
    id_curso: number | null
    fecha_inscripcion: Date | null
    calificacion: Decimal | null
    completado: boolean | null
    fecha_completado: Date | null
    certificado_id: number | null
  }

  export type Trabajadores_cursosMaxAggregateOutputType = {
    id_trabajador_curso: number | null
    id_trabajador: number | null
    id_curso: number | null
    fecha_inscripcion: Date | null
    calificacion: Decimal | null
    completado: boolean | null
    fecha_completado: Date | null
    certificado_id: number | null
  }

  export type Trabajadores_cursosCountAggregateOutputType = {
    id_trabajador_curso: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion: number
    calificacion: number
    completado: number
    fecha_completado: number
    certificado_id: number
    _all: number
  }


  export type Trabajadores_cursosAvgAggregateInputType = {
    id_trabajador_curso?: true
    id_trabajador?: true
    id_curso?: true
    calificacion?: true
    certificado_id?: true
  }

  export type Trabajadores_cursosSumAggregateInputType = {
    id_trabajador_curso?: true
    id_trabajador?: true
    id_curso?: true
    calificacion?: true
    certificado_id?: true
  }

  export type Trabajadores_cursosMinAggregateInputType = {
    id_trabajador_curso?: true
    id_trabajador?: true
    id_curso?: true
    fecha_inscripcion?: true
    calificacion?: true
    completado?: true
    fecha_completado?: true
    certificado_id?: true
  }

  export type Trabajadores_cursosMaxAggregateInputType = {
    id_trabajador_curso?: true
    id_trabajador?: true
    id_curso?: true
    fecha_inscripcion?: true
    calificacion?: true
    completado?: true
    fecha_completado?: true
    certificado_id?: true
  }

  export type Trabajadores_cursosCountAggregateInputType = {
    id_trabajador_curso?: true
    id_trabajador?: true
    id_curso?: true
    fecha_inscripcion?: true
    calificacion?: true
    completado?: true
    fecha_completado?: true
    certificado_id?: true
    _all?: true
  }

  export type Trabajadores_cursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trabajadores_cursos to aggregate.
     */
    where?: trabajadores_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores_cursos to fetch.
     */
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trabajadores_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trabajadores_cursos
    **/
    _count?: true | Trabajadores_cursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Trabajadores_cursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Trabajadores_cursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trabajadores_cursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trabajadores_cursosMaxAggregateInputType
  }

  export type GetTrabajadores_cursosAggregateType<T extends Trabajadores_cursosAggregateArgs> = {
        [P in keyof T & keyof AggregateTrabajadores_cursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrabajadores_cursos[P]>
      : GetScalarType<T[P], AggregateTrabajadores_cursos[P]>
  }




  export type trabajadores_cursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trabajadores_cursosWhereInput
    orderBy?: trabajadores_cursosOrderByWithAggregationInput | trabajadores_cursosOrderByWithAggregationInput[]
    by: Trabajadores_cursosScalarFieldEnum[] | Trabajadores_cursosScalarFieldEnum
    having?: trabajadores_cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trabajadores_cursosCountAggregateInputType | true
    _avg?: Trabajadores_cursosAvgAggregateInputType
    _sum?: Trabajadores_cursosSumAggregateInputType
    _min?: Trabajadores_cursosMinAggregateInputType
    _max?: Trabajadores_cursosMaxAggregateInputType
  }

  export type Trabajadores_cursosGroupByOutputType = {
    id_trabajador_curso: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion: Date
    calificacion: Decimal | null
    completado: boolean | null
    fecha_completado: Date | null
    certificado_id: number | null
    _count: Trabajadores_cursosCountAggregateOutputType | null
    _avg: Trabajadores_cursosAvgAggregateOutputType | null
    _sum: Trabajadores_cursosSumAggregateOutputType | null
    _min: Trabajadores_cursosMinAggregateOutputType | null
    _max: Trabajadores_cursosMaxAggregateOutputType | null
  }

  type GetTrabajadores_cursosGroupByPayload<T extends trabajadores_cursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trabajadores_cursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trabajadores_cursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trabajadores_cursosGroupByOutputType[P]>
            : GetScalarType<T[P], Trabajadores_cursosGroupByOutputType[P]>
        }
      >
    >


  export type trabajadores_cursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador_curso?: boolean
    id_trabajador?: boolean
    id_curso?: boolean
    fecha_inscripcion?: boolean
    calificacion?: boolean
    completado?: boolean
    fecha_completado?: boolean
    certificado_id?: boolean
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores_cursos"]>

  export type trabajadores_cursosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador_curso?: boolean
    id_trabajador?: boolean
    id_curso?: boolean
    fecha_inscripcion?: boolean
    calificacion?: boolean
    completado?: boolean
    fecha_completado?: boolean
    certificado_id?: boolean
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores_cursos"]>

  export type trabajadores_cursosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_trabajador_curso?: boolean
    id_trabajador?: boolean
    id_curso?: boolean
    fecha_inscripcion?: boolean
    calificacion?: boolean
    completado?: boolean
    fecha_completado?: boolean
    certificado_id?: boolean
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trabajadores_cursos"]>

  export type trabajadores_cursosSelectScalar = {
    id_trabajador_curso?: boolean
    id_trabajador?: boolean
    id_curso?: boolean
    fecha_inscripcion?: boolean
    calificacion?: boolean
    completado?: boolean
    fecha_completado?: boolean
    certificado_id?: boolean
  }

  export type trabajadores_cursosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_trabajador_curso" | "id_trabajador" | "id_curso" | "fecha_inscripcion" | "calificacion" | "completado" | "fecha_completado" | "certificado_id", ExtArgs["result"]["trabajadores_cursos"]>
  export type trabajadores_cursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }
  export type trabajadores_cursosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }
  export type trabajadores_cursosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentos?: boolean | trabajadores_cursos$documentosArgs<ExtArgs>
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    trabajadores?: boolean | trabajadoresDefaultArgs<ExtArgs>
  }

  export type $trabajadores_cursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trabajadores_cursos"
    objects: {
      documentos: Prisma.$documentosPayload<ExtArgs> | null
      cursos: Prisma.$cursosPayload<ExtArgs>
      trabajadores: Prisma.$trabajadoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_trabajador_curso: number
      id_trabajador: number
      id_curso: number
      fecha_inscripcion: Date
      calificacion: Prisma.Decimal | null
      completado: boolean | null
      fecha_completado: Date | null
      certificado_id: number | null
    }, ExtArgs["result"]["trabajadores_cursos"]>
    composites: {}
  }

  type trabajadores_cursosGetPayload<S extends boolean | null | undefined | trabajadores_cursosDefaultArgs> = $Result.GetResult<Prisma.$trabajadores_cursosPayload, S>

  type trabajadores_cursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trabajadores_cursosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trabajadores_cursosCountAggregateInputType | true
    }

  export interface trabajadores_cursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trabajadores_cursos'], meta: { name: 'trabajadores_cursos' } }
    /**
     * Find zero or one Trabajadores_cursos that matches the filter.
     * @param {trabajadores_cursosFindUniqueArgs} args - Arguments to find a Trabajadores_cursos
     * @example
     * // Get one Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trabajadores_cursosFindUniqueArgs>(args: SelectSubset<T, trabajadores_cursosFindUniqueArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trabajadores_cursos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trabajadores_cursosFindUniqueOrThrowArgs} args - Arguments to find a Trabajadores_cursos
     * @example
     * // Get one Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trabajadores_cursosFindUniqueOrThrowArgs>(args: SelectSubset<T, trabajadores_cursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajadores_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosFindFirstArgs} args - Arguments to find a Trabajadores_cursos
     * @example
     * // Get one Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trabajadores_cursosFindFirstArgs>(args?: SelectSubset<T, trabajadores_cursosFindFirstArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trabajadores_cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosFindFirstOrThrowArgs} args - Arguments to find a Trabajadores_cursos
     * @example
     * // Get one Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trabajadores_cursosFindFirstOrThrowArgs>(args?: SelectSubset<T, trabajadores_cursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trabajadores_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findMany()
     * 
     * // Get first 10 Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.findMany({ take: 10 })
     * 
     * // Only select the `id_trabajador_curso`
     * const trabajadores_cursosWithId_trabajador_cursoOnly = await prisma.trabajadores_cursos.findMany({ select: { id_trabajador_curso: true } })
     * 
     */
    findMany<T extends trabajadores_cursosFindManyArgs>(args?: SelectSubset<T, trabajadores_cursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trabajadores_cursos.
     * @param {trabajadores_cursosCreateArgs} args - Arguments to create a Trabajadores_cursos.
     * @example
     * // Create one Trabajadores_cursos
     * const Trabajadores_cursos = await prisma.trabajadores_cursos.create({
     *   data: {
     *     // ... data to create a Trabajadores_cursos
     *   }
     * })
     * 
     */
    create<T extends trabajadores_cursosCreateArgs>(args: SelectSubset<T, trabajadores_cursosCreateArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trabajadores_cursos.
     * @param {trabajadores_cursosCreateManyArgs} args - Arguments to create many Trabajadores_cursos.
     * @example
     * // Create many Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trabajadores_cursosCreateManyArgs>(args?: SelectSubset<T, trabajadores_cursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trabajadores_cursos and returns the data saved in the database.
     * @param {trabajadores_cursosCreateManyAndReturnArgs} args - Arguments to create many Trabajadores_cursos.
     * @example
     * // Create many Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trabajadores_cursos and only return the `id_trabajador_curso`
     * const trabajadores_cursosWithId_trabajador_cursoOnly = await prisma.trabajadores_cursos.createManyAndReturn({
     *   select: { id_trabajador_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trabajadores_cursosCreateManyAndReturnArgs>(args?: SelectSubset<T, trabajadores_cursosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trabajadores_cursos.
     * @param {trabajadores_cursosDeleteArgs} args - Arguments to delete one Trabajadores_cursos.
     * @example
     * // Delete one Trabajadores_cursos
     * const Trabajadores_cursos = await prisma.trabajadores_cursos.delete({
     *   where: {
     *     // ... filter to delete one Trabajadores_cursos
     *   }
     * })
     * 
     */
    delete<T extends trabajadores_cursosDeleteArgs>(args: SelectSubset<T, trabajadores_cursosDeleteArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trabajadores_cursos.
     * @param {trabajadores_cursosUpdateArgs} args - Arguments to update one Trabajadores_cursos.
     * @example
     * // Update one Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trabajadores_cursosUpdateArgs>(args: SelectSubset<T, trabajadores_cursosUpdateArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trabajadores_cursos.
     * @param {trabajadores_cursosDeleteManyArgs} args - Arguments to filter Trabajadores_cursos to delete.
     * @example
     * // Delete a few Trabajadores_cursos
     * const { count } = await prisma.trabajadores_cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trabajadores_cursosDeleteManyArgs>(args?: SelectSubset<T, trabajadores_cursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajadores_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trabajadores_cursosUpdateManyArgs>(args: SelectSubset<T, trabajadores_cursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trabajadores_cursos and returns the data updated in the database.
     * @param {trabajadores_cursosUpdateManyAndReturnArgs} args - Arguments to update many Trabajadores_cursos.
     * @example
     * // Update many Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trabajadores_cursos and only return the `id_trabajador_curso`
     * const trabajadores_cursosWithId_trabajador_cursoOnly = await prisma.trabajadores_cursos.updateManyAndReturn({
     *   select: { id_trabajador_curso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends trabajadores_cursosUpdateManyAndReturnArgs>(args: SelectSubset<T, trabajadores_cursosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trabajadores_cursos.
     * @param {trabajadores_cursosUpsertArgs} args - Arguments to update or create a Trabajadores_cursos.
     * @example
     * // Update or create a Trabajadores_cursos
     * const trabajadores_cursos = await prisma.trabajadores_cursos.upsert({
     *   create: {
     *     // ... data to create a Trabajadores_cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trabajadores_cursos we want to update
     *   }
     * })
     */
    upsert<T extends trabajadores_cursosUpsertArgs>(args: SelectSubset<T, trabajadores_cursosUpsertArgs<ExtArgs>>): Prisma__trabajadores_cursosClient<$Result.GetResult<Prisma.$trabajadores_cursosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trabajadores_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosCountArgs} args - Arguments to filter Trabajadores_cursos to count.
     * @example
     * // Count the number of Trabajadores_cursos
     * const count = await prisma.trabajadores_cursos.count({
     *   where: {
     *     // ... the filter for the Trabajadores_cursos we want to count
     *   }
     * })
    **/
    count<T extends trabajadores_cursosCountArgs>(
      args?: Subset<T, trabajadores_cursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trabajadores_cursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trabajadores_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trabajadores_cursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Trabajadores_cursosAggregateArgs>(args: Subset<T, Trabajadores_cursosAggregateArgs>): Prisma.PrismaPromise<GetTrabajadores_cursosAggregateType<T>>

    /**
     * Group by Trabajadores_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trabajadores_cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends trabajadores_cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trabajadores_cursosGroupByArgs['orderBy'] }
        : { orderBy?: trabajadores_cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trabajadores_cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabajadores_cursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trabajadores_cursos model
   */
  readonly fields: trabajadores_cursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trabajadores_cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trabajadores_cursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentos<T extends trabajadores_cursos$documentosArgs<ExtArgs> = {}>(args?: Subset<T, trabajadores_cursos$documentosArgs<ExtArgs>>): Prisma__documentosClient<$Result.GetResult<Prisma.$documentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cursos<T extends cursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursosDefaultArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trabajadores<T extends trabajadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trabajadoresDefaultArgs<ExtArgs>>): Prisma__trabajadoresClient<$Result.GetResult<Prisma.$trabajadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trabajadores_cursos model
   */
  interface trabajadores_cursosFieldRefs {
    readonly id_trabajador_curso: FieldRef<"trabajadores_cursos", 'Int'>
    readonly id_trabajador: FieldRef<"trabajadores_cursos", 'Int'>
    readonly id_curso: FieldRef<"trabajadores_cursos", 'Int'>
    readonly fecha_inscripcion: FieldRef<"trabajadores_cursos", 'DateTime'>
    readonly calificacion: FieldRef<"trabajadores_cursos", 'Decimal'>
    readonly completado: FieldRef<"trabajadores_cursos", 'Boolean'>
    readonly fecha_completado: FieldRef<"trabajadores_cursos", 'DateTime'>
    readonly certificado_id: FieldRef<"trabajadores_cursos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * trabajadores_cursos findUnique
   */
  export type trabajadores_cursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores_cursos to fetch.
     */
    where: trabajadores_cursosWhereUniqueInput
  }

  /**
   * trabajadores_cursos findUniqueOrThrow
   */
  export type trabajadores_cursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores_cursos to fetch.
     */
    where: trabajadores_cursosWhereUniqueInput
  }

  /**
   * trabajadores_cursos findFirst
   */
  export type trabajadores_cursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores_cursos to fetch.
     */
    where?: trabajadores_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores_cursos to fetch.
     */
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trabajadores_cursos.
     */
    cursor?: trabajadores_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trabajadores_cursos.
     */
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * trabajadores_cursos findFirstOrThrow
   */
  export type trabajadores_cursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores_cursos to fetch.
     */
    where?: trabajadores_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores_cursos to fetch.
     */
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trabajadores_cursos.
     */
    cursor?: trabajadores_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trabajadores_cursos.
     */
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * trabajadores_cursos findMany
   */
  export type trabajadores_cursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter, which trabajadores_cursos to fetch.
     */
    where?: trabajadores_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trabajadores_cursos to fetch.
     */
    orderBy?: trabajadores_cursosOrderByWithRelationInput | trabajadores_cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trabajadores_cursos.
     */
    cursor?: trabajadores_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trabajadores_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trabajadores_cursos.
     */
    skip?: number
    distinct?: Trabajadores_cursosScalarFieldEnum | Trabajadores_cursosScalarFieldEnum[]
  }

  /**
   * trabajadores_cursos create
   */
  export type trabajadores_cursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * The data needed to create a trabajadores_cursos.
     */
    data: XOR<trabajadores_cursosCreateInput, trabajadores_cursosUncheckedCreateInput>
  }

  /**
   * trabajadores_cursos createMany
   */
  export type trabajadores_cursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trabajadores_cursos.
     */
    data: trabajadores_cursosCreateManyInput | trabajadores_cursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trabajadores_cursos createManyAndReturn
   */
  export type trabajadores_cursosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * The data used to create many trabajadores_cursos.
     */
    data: trabajadores_cursosCreateManyInput | trabajadores_cursosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * trabajadores_cursos update
   */
  export type trabajadores_cursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * The data needed to update a trabajadores_cursos.
     */
    data: XOR<trabajadores_cursosUpdateInput, trabajadores_cursosUncheckedUpdateInput>
    /**
     * Choose, which trabajadores_cursos to update.
     */
    where: trabajadores_cursosWhereUniqueInput
  }

  /**
   * trabajadores_cursos updateMany
   */
  export type trabajadores_cursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trabajadores_cursos.
     */
    data: XOR<trabajadores_cursosUpdateManyMutationInput, trabajadores_cursosUncheckedUpdateManyInput>
    /**
     * Filter which trabajadores_cursos to update
     */
    where?: trabajadores_cursosWhereInput
    /**
     * Limit how many trabajadores_cursos to update.
     */
    limit?: number
  }

  /**
   * trabajadores_cursos updateManyAndReturn
   */
  export type trabajadores_cursosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * The data used to update trabajadores_cursos.
     */
    data: XOR<trabajadores_cursosUpdateManyMutationInput, trabajadores_cursosUncheckedUpdateManyInput>
    /**
     * Filter which trabajadores_cursos to update
     */
    where?: trabajadores_cursosWhereInput
    /**
     * Limit how many trabajadores_cursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * trabajadores_cursos upsert
   */
  export type trabajadores_cursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * The filter to search for the trabajadores_cursos to update in case it exists.
     */
    where: trabajadores_cursosWhereUniqueInput
    /**
     * In case the trabajadores_cursos found by the `where` argument doesn't exist, create a new trabajadores_cursos with this data.
     */
    create: XOR<trabajadores_cursosCreateInput, trabajadores_cursosUncheckedCreateInput>
    /**
     * In case the trabajadores_cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trabajadores_cursosUpdateInput, trabajadores_cursosUncheckedUpdateInput>
  }

  /**
   * trabajadores_cursos delete
   */
  export type trabajadores_cursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
    /**
     * Filter which trabajadores_cursos to delete.
     */
    where: trabajadores_cursosWhereUniqueInput
  }

  /**
   * trabajadores_cursos deleteMany
   */
  export type trabajadores_cursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trabajadores_cursos to delete
     */
    where?: trabajadores_cursosWhereInput
    /**
     * Limit how many trabajadores_cursos to delete.
     */
    limit?: number
  }

  /**
   * trabajadores_cursos.documentos
   */
  export type trabajadores_cursos$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentos
     */
    select?: documentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentos
     */
    omit?: documentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentosInclude<ExtArgs> | null
    where?: documentosWhereInput
  }

  /**
   * trabajadores_cursos without action
   */
  export type trabajadores_cursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trabajadores_cursos
     */
    select?: trabajadores_cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trabajadores_cursos
     */
    omit?: trabajadores_cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: trabajadores_cursosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    id_trabajador: number | null
    intentos_fallidos: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    id_trabajador: number | null
    intentos_fallidos: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    id_trabajador: number | null
    identificador: string | null
    contraseña_hash: string | null
    intentos_fallidos: number | null
    bloqueado: boolean | null
    fecha_creacion: Date | null
    ultimo_login: Date | null
    ultimo_cambio_password: Date | null
    rol: $Enums.rol_usuario | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    id_trabajador: number | null
    identificador: string | null
    contraseña_hash: string | null
    intentos_fallidos: number | null
    bloqueado: boolean | null
    fecha_creacion: Date | null
    ultimo_login: Date | null
    ultimo_cambio_password: Date | null
    rol: $Enums.rol_usuario | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    id_trabajador: number
    identificador: number
    contraseña_hash: number
    intentos_fallidos: number
    bloqueado: number
    fecha_creacion: number
    ultimo_login: number
    ultimo_cambio_password: number
    rol: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    id_trabajador?: true
    intentos_fallidos?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    id_trabajador?: true
    intentos_fallidos?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    id_trabajador?: true
    identificador?: true
    contraseña_hash?: true
    intentos_fallidos?: true
    bloqueado?: true
    fecha_creacion?: true
    ultimo_login?: true
    ultimo_cambio_password?: true
    rol?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    id_trabajador?: true
    identificador?: true
    contraseña_hash?: true
    intentos_fallidos?: true
    bloqueado?: true
    fecha_creacion?: true
    ultimo_login?: true
    ultimo_cambio_password?: true
    rol?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    id_trabajador?: true
    identificador?: true
    contraseña_hash?: true
    intentos_fallidos?: true
    bloqueado?: true
    fecha_creacion?: true
    ultimo_login?: true
    ultimo_cambio_password?: true
    rol?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    id_trabajador: number | null
    identificador: string
    contraseña_hash: string
    intentos_fallidos: number | null
    bloqueado: boolean | null
    fecha_creacion: Date | null
    ultimo_login: Date | null
    ultimo_cambio_password: Date | null
    rol: $Enums.rol_usuario
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_trabajador?: boolean
    identificador?: boolean
    contraseña_hash?: boolean
    intentos_fallidos?: boolean
    bloqueado?: boolean
    fecha_creacion?: boolean
    ultimo_login?: boolean
    ultimo_cambio_password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_trabajador?: boolean
    identificador?: boolean
    contraseña_hash?: boolean
    intentos_fallidos?: boolean
    bloqueado?: boolean
    fecha_creacion?: boolean
    ultimo_login?: boolean
    ultimo_cambio_password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_trabajador?: boolean
    identificador?: boolean
    contraseña_hash?: boolean
    intentos_fallidos?: boolean
    bloqueado?: boolean
    fecha_creacion?: boolean
    ultimo_login?: boolean
    ultimo_cambio_password?: boolean
    rol?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    id_trabajador?: boolean
    identificador?: boolean
    contraseña_hash?: boolean
    intentos_fallidos?: boolean
    bloqueado?: boolean
    fecha_creacion?: boolean
    ultimo_login?: boolean
    ultimo_cambio_password?: boolean
    rol?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_trabajador" | "identificador" | "contraseña_hash" | "intentos_fallidos" | "bloqueado" | "fecha_creacion" | "ultimo_login" | "ultimo_cambio_password" | "rol", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_trabajador: number | null
      identificador: string
      contraseña_hash: string
      intentos_fallidos: number | null
      bloqueado: boolean | null
      fecha_creacion: Date | null
      ultimo_login: Date | null
      ultimo_cambio_password: Date | null
      rol: $Enums.rol_usuario
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly id_trabajador: FieldRef<"usuarios", 'Int'>
    readonly identificador: FieldRef<"usuarios", 'String'>
    readonly contraseña_hash: FieldRef<"usuarios", 'String'>
    readonly intentos_fallidos: FieldRef<"usuarios", 'Int'>
    readonly bloqueado: FieldRef<"usuarios", 'Boolean'>
    readonly fecha_creacion: FieldRef<"usuarios", 'DateTime'>
    readonly ultimo_login: FieldRef<"usuarios", 'DateTime'>
    readonly ultimo_cambio_password: FieldRef<"usuarios", 'DateTime'>
    readonly rol: FieldRef<"usuarios", 'rol_usuario'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuditoriaScalarFieldEnum: {
    id_auditoria: 'id_auditoria',
    tabla_afectada: 'tabla_afectada',
    id_registro: 'id_registro',
    accion: 'accion',
    datos_anteriores: 'datos_anteriores',
    datos_nuevos: 'datos_nuevos',
    usuario: 'usuario',
    fecha_registro: 'fecha_registro'
  };

  export type AuditoriaScalarFieldEnum = (typeof AuditoriaScalarFieldEnum)[keyof typeof AuditoriaScalarFieldEnum]


  export const CambiosadscripcionScalarFieldEnum: {
    id_cambio: 'id_cambio',
    id_trabajador: 'id_trabajador',
    adscripcion_anterior: 'adscripcion_anterior',
    adscripcion_nueva: 'adscripcion_nueva',
    fecha_cambio: 'fecha_cambio',
    motivo: 'motivo',
    documento_respaldo_id: 'documento_respaldo_id',
    usuario_registro: 'usuario_registro',
    fecha_registro: 'fecha_registro'
  };

  export type CambiosadscripcionScalarFieldEnum = (typeof CambiosadscripcionScalarFieldEnum)[keyof typeof CambiosadscripcionScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id_curso: 'id_curso',
    codigo_curso: 'codigo_curso',
    nombre_curso: 'nombre_curso',
    horas_duracion: 'horas_duracion',
    estatus: 'estatus'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const DocumentosScalarFieldEnum: {
    id_documento: 'id_documento',
    id_trabajador: 'id_trabajador',
    tipo_documento: 'tipo_documento',
    metadata: 'metadata',
    hash_archivo: 'hash_archivo',
    nombre_archivo: 'nombre_archivo',
    descripcion: 'descripcion',
    tipo_archivo: 'tipo_archivo',
    ruta_almacenamiento: 'ruta_almacenamiento',
    fecha_subida: 'fecha_subida',
    tamano_bytes: 'tamano_bytes',
    es_publico: 'es_publico'
  };

  export type DocumentosScalarFieldEnum = (typeof DocumentosScalarFieldEnum)[keyof typeof DocumentosScalarFieldEnum]


  export const HijosScalarFieldEnum: {
    id_hijo: 'id_hijo',
    id_trabajador: 'id_trabajador',
    nombre_completo: 'nombre_completo',
    fecha_nacimiento: 'fecha_nacimiento',
    acta_nacimiento_id: 'acta_nacimiento_id',
    vigente: 'vigente'
  };

  export type HijosScalarFieldEnum = (typeof HijosScalarFieldEnum)[keyof typeof HijosScalarFieldEnum]


  export const PermisosScalarFieldEnum: {
    id_permiso: 'id_permiso',
    id_trabajador: 'id_trabajador',
    tipo_permiso: 'tipo_permiso',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    motivo: 'motivo',
    estatus: 'estatus',
    documento_aprobacion_id: 'documento_aprobacion_id',
    fecha_registro: 'fecha_registro'
  };

  export type PermisosScalarFieldEnum = (typeof PermisosScalarFieldEnum)[keyof typeof PermisosScalarFieldEnum]


  export const SancionesScalarFieldEnum: {
    id_sancion: 'id_sancion',
    id_trabajador: 'id_trabajador',
    tipo_sancion: 'tipo_sancion',
    descripcion: 'descripcion',
    fecha_aplicacion: 'fecha_aplicacion',
    fecha_fin: 'fecha_fin',
    estatus: 'estatus',
    usuario_registro: 'usuario_registro',
    fecha_registro: 'fecha_registro'
  };

  export type SancionesScalarFieldEnum = (typeof SancionesScalarFieldEnum)[keyof typeof SancionesScalarFieldEnum]


  export const SeccionesScalarFieldEnum: {
    id_seccion: 'id_seccion',
    nombre_seccion: 'nombre_seccion',
    descripcion: 'descripcion'
  };

  export type SeccionesScalarFieldEnum = (typeof SeccionesScalarFieldEnum)[keyof typeof SeccionesScalarFieldEnum]


  export const TrabajadoresScalarFieldEnum: {
    id_trabajador: 'id_trabajador',
    nombre: 'nombre',
    apellido_paterno: 'apellido_paterno',
    apellido_materno: 'apellido_materno',
    fecha_nacimiento: 'fecha_nacimiento',
    sexo: 'sexo',
    curp: 'curp',
    rfc: 'rfc',
    email: 'email',
    situacion_sentimental: 'situacion_sentimental',
    numero_hijos: 'numero_hijos',
    numero_empleado: 'numero_empleado',
    numero_plaza: 'numero_plaza',
    fecha_ingreso: 'fecha_ingreso',
    fecha_ingreso_gobierno: 'fecha_ingreso_gobierno',
    nivel_puesto: 'nivel_puesto',
    nombre_puesto: 'nombre_puesto',
    puesto_inpi: 'puesto_inpi',
    adscripcion: 'adscripcion',
    id_seccion: 'id_seccion',
    nivel_estudios: 'nivel_estudios',
    institucion_estudios: 'institucion_estudios',
    certificado_estudios: 'certificado_estudios',
    plaza_base: 'plaza_base',
    fecha_actualizacion: 'fecha_actualizacion'
  };

  export type TrabajadoresScalarFieldEnum = (typeof TrabajadoresScalarFieldEnum)[keyof typeof TrabajadoresScalarFieldEnum]


  export const Trabajadores_cursosScalarFieldEnum: {
    id_trabajador_curso: 'id_trabajador_curso',
    id_trabajador: 'id_trabajador',
    id_curso: 'id_curso',
    fecha_inscripcion: 'fecha_inscripcion',
    calificacion: 'calificacion',
    completado: 'completado',
    fecha_completado: 'fecha_completado',
    certificado_id: 'certificado_id'
  };

  export type Trabajadores_cursosScalarFieldEnum = (typeof Trabajadores_cursosScalarFieldEnum)[keyof typeof Trabajadores_cursosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_trabajador: 'id_trabajador',
    identificador: 'identificador',
    contraseña_hash: 'contraseña_hash',
    intentos_fallidos: 'intentos_fallidos',
    bloqueado: 'bloqueado',
    fecha_creacion: 'fecha_creacion',
    ultimo_login: 'ultimo_login',
    ultimo_cambio_password: 'ultimo_cambio_password',
    rol: 'rol'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'rol_usuario'
   */
  export type Enumrol_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol_usuario'>
    


  /**
   * Reference to a field of type 'rol_usuario[]'
   */
  export type ListEnumrol_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol_usuario[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type auditoriaWhereInput = {
    AND?: auditoriaWhereInput | auditoriaWhereInput[]
    OR?: auditoriaWhereInput[]
    NOT?: auditoriaWhereInput | auditoriaWhereInput[]
    id_auditoria?: IntFilter<"auditoria"> | number
    tabla_afectada?: StringFilter<"auditoria"> | string
    id_registro?: IntFilter<"auditoria"> | number
    accion?: StringFilter<"auditoria"> | string
    datos_anteriores?: JsonNullableFilter<"auditoria">
    datos_nuevos?: JsonNullableFilter<"auditoria">
    usuario?: StringFilter<"auditoria"> | string
    fecha_registro?: DateTimeNullableFilter<"auditoria"> | Date | string | null
  }

  export type auditoriaOrderByWithRelationInput = {
    id_auditoria?: SortOrder
    tabla_afectada?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    datos_anteriores?: SortOrderInput | SortOrder
    datos_nuevos?: SortOrderInput | SortOrder
    usuario?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
  }

  export type auditoriaWhereUniqueInput = Prisma.AtLeast<{
    id_auditoria?: number
    AND?: auditoriaWhereInput | auditoriaWhereInput[]
    OR?: auditoriaWhereInput[]
    NOT?: auditoriaWhereInput | auditoriaWhereInput[]
    tabla_afectada?: StringFilter<"auditoria"> | string
    id_registro?: IntFilter<"auditoria"> | number
    accion?: StringFilter<"auditoria"> | string
    datos_anteriores?: JsonNullableFilter<"auditoria">
    datos_nuevos?: JsonNullableFilter<"auditoria">
    usuario?: StringFilter<"auditoria"> | string
    fecha_registro?: DateTimeNullableFilter<"auditoria"> | Date | string | null
  }, "id_auditoria">

  export type auditoriaOrderByWithAggregationInput = {
    id_auditoria?: SortOrder
    tabla_afectada?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    datos_anteriores?: SortOrderInput | SortOrder
    datos_nuevos?: SortOrderInput | SortOrder
    usuario?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: auditoriaCountOrderByAggregateInput
    _avg?: auditoriaAvgOrderByAggregateInput
    _max?: auditoriaMaxOrderByAggregateInput
    _min?: auditoriaMinOrderByAggregateInput
    _sum?: auditoriaSumOrderByAggregateInput
  }

  export type auditoriaScalarWhereWithAggregatesInput = {
    AND?: auditoriaScalarWhereWithAggregatesInput | auditoriaScalarWhereWithAggregatesInput[]
    OR?: auditoriaScalarWhereWithAggregatesInput[]
    NOT?: auditoriaScalarWhereWithAggregatesInput | auditoriaScalarWhereWithAggregatesInput[]
    id_auditoria?: IntWithAggregatesFilter<"auditoria"> | number
    tabla_afectada?: StringWithAggregatesFilter<"auditoria"> | string
    id_registro?: IntWithAggregatesFilter<"auditoria"> | number
    accion?: StringWithAggregatesFilter<"auditoria"> | string
    datos_anteriores?: JsonNullableWithAggregatesFilter<"auditoria">
    datos_nuevos?: JsonNullableWithAggregatesFilter<"auditoria">
    usuario?: StringWithAggregatesFilter<"auditoria"> | string
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"auditoria"> | Date | string | null
  }

  export type cambiosadscripcionWhereInput = {
    AND?: cambiosadscripcionWhereInput | cambiosadscripcionWhereInput[]
    OR?: cambiosadscripcionWhereInput[]
    NOT?: cambiosadscripcionWhereInput | cambiosadscripcionWhereInput[]
    id_cambio?: IntFilter<"cambiosadscripcion"> | number
    id_trabajador?: IntFilter<"cambiosadscripcion"> | number
    adscripcion_anterior?: StringFilter<"cambiosadscripcion"> | string
    adscripcion_nueva?: StringFilter<"cambiosadscripcion"> | string
    fecha_cambio?: DateTimeFilter<"cambiosadscripcion"> | Date | string
    motivo?: StringFilter<"cambiosadscripcion"> | string
    documento_respaldo_id?: IntNullableFilter<"cambiosadscripcion"> | number | null
    usuario_registro?: StringNullableFilter<"cambiosadscripcion"> | string | null
    fecha_registro?: DateTimeNullableFilter<"cambiosadscripcion"> | Date | string | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }

  export type cambiosadscripcionOrderByWithRelationInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    adscripcion_anterior?: SortOrder
    adscripcion_nueva?: SortOrder
    fecha_cambio?: SortOrder
    motivo?: SortOrder
    documento_respaldo_id?: SortOrderInput | SortOrder
    usuario_registro?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    documentos?: documentosOrderByWithRelationInput
  }

  export type cambiosadscripcionWhereUniqueInput = Prisma.AtLeast<{
    id_cambio?: number
    AND?: cambiosadscripcionWhereInput | cambiosadscripcionWhereInput[]
    OR?: cambiosadscripcionWhereInput[]
    NOT?: cambiosadscripcionWhereInput | cambiosadscripcionWhereInput[]
    id_trabajador?: IntFilter<"cambiosadscripcion"> | number
    adscripcion_anterior?: StringFilter<"cambiosadscripcion"> | string
    adscripcion_nueva?: StringFilter<"cambiosadscripcion"> | string
    fecha_cambio?: DateTimeFilter<"cambiosadscripcion"> | Date | string
    motivo?: StringFilter<"cambiosadscripcion"> | string
    documento_respaldo_id?: IntNullableFilter<"cambiosadscripcion"> | number | null
    usuario_registro?: StringNullableFilter<"cambiosadscripcion"> | string | null
    fecha_registro?: DateTimeNullableFilter<"cambiosadscripcion"> | Date | string | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }, "id_cambio">

  export type cambiosadscripcionOrderByWithAggregationInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    adscripcion_anterior?: SortOrder
    adscripcion_nueva?: SortOrder
    fecha_cambio?: SortOrder
    motivo?: SortOrder
    documento_respaldo_id?: SortOrderInput | SortOrder
    usuario_registro?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: cambiosadscripcionCountOrderByAggregateInput
    _avg?: cambiosadscripcionAvgOrderByAggregateInput
    _max?: cambiosadscripcionMaxOrderByAggregateInput
    _min?: cambiosadscripcionMinOrderByAggregateInput
    _sum?: cambiosadscripcionSumOrderByAggregateInput
  }

  export type cambiosadscripcionScalarWhereWithAggregatesInput = {
    AND?: cambiosadscripcionScalarWhereWithAggregatesInput | cambiosadscripcionScalarWhereWithAggregatesInput[]
    OR?: cambiosadscripcionScalarWhereWithAggregatesInput[]
    NOT?: cambiosadscripcionScalarWhereWithAggregatesInput | cambiosadscripcionScalarWhereWithAggregatesInput[]
    id_cambio?: IntWithAggregatesFilter<"cambiosadscripcion"> | number
    id_trabajador?: IntWithAggregatesFilter<"cambiosadscripcion"> | number
    adscripcion_anterior?: StringWithAggregatesFilter<"cambiosadscripcion"> | string
    adscripcion_nueva?: StringWithAggregatesFilter<"cambiosadscripcion"> | string
    fecha_cambio?: DateTimeWithAggregatesFilter<"cambiosadscripcion"> | Date | string
    motivo?: StringWithAggregatesFilter<"cambiosadscripcion"> | string
    documento_respaldo_id?: IntNullableWithAggregatesFilter<"cambiosadscripcion"> | number | null
    usuario_registro?: StringNullableWithAggregatesFilter<"cambiosadscripcion"> | string | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"cambiosadscripcion"> | Date | string | null
  }

  export type cursosWhereInput = {
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    id_curso?: IntFilter<"cursos"> | number
    codigo_curso?: StringFilter<"cursos"> | string
    nombre_curso?: StringFilter<"cursos"> | string
    horas_duracion?: IntFilter<"cursos"> | number
    estatus?: StringNullableFilter<"cursos"> | string | null
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }

  export type cursosOrderByWithRelationInput = {
    id_curso?: SortOrder
    codigo_curso?: SortOrder
    nombre_curso?: SortOrder
    horas_duracion?: SortOrder
    estatus?: SortOrderInput | SortOrder
    trabajadores_cursos?: trabajadores_cursosOrderByRelationAggregateInput
  }

  export type cursosWhereUniqueInput = Prisma.AtLeast<{
    id_curso?: number
    codigo_curso?: string
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    nombre_curso?: StringFilter<"cursos"> | string
    horas_duracion?: IntFilter<"cursos"> | number
    estatus?: StringNullableFilter<"cursos"> | string | null
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }, "id_curso" | "codigo_curso">

  export type cursosOrderByWithAggregationInput = {
    id_curso?: SortOrder
    codigo_curso?: SortOrder
    nombre_curso?: SortOrder
    horas_duracion?: SortOrder
    estatus?: SortOrderInput | SortOrder
    _count?: cursosCountOrderByAggregateInput
    _avg?: cursosAvgOrderByAggregateInput
    _max?: cursosMaxOrderByAggregateInput
    _min?: cursosMinOrderByAggregateInput
    _sum?: cursosSumOrderByAggregateInput
  }

  export type cursosScalarWhereWithAggregatesInput = {
    AND?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    OR?: cursosScalarWhereWithAggregatesInput[]
    NOT?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    id_curso?: IntWithAggregatesFilter<"cursos"> | number
    codigo_curso?: StringWithAggregatesFilter<"cursos"> | string
    nombre_curso?: StringWithAggregatesFilter<"cursos"> | string
    horas_duracion?: IntWithAggregatesFilter<"cursos"> | number
    estatus?: StringNullableWithAggregatesFilter<"cursos"> | string | null
  }

  export type documentosWhereInput = {
    AND?: documentosWhereInput | documentosWhereInput[]
    OR?: documentosWhereInput[]
    NOT?: documentosWhereInput | documentosWhereInput[]
    id_documento?: IntFilter<"documentos"> | number
    id_trabajador?: IntFilter<"documentos"> | number
    tipo_documento?: StringFilter<"documentos"> | string
    metadata?: JsonNullableFilter<"documentos">
    hash_archivo?: StringFilter<"documentos"> | string
    nombre_archivo?: StringFilter<"documentos"> | string
    descripcion?: StringNullableFilter<"documentos"> | string | null
    tipo_archivo?: StringNullableFilter<"documentos"> | string | null
    ruta_almacenamiento?: StringFilter<"documentos"> | string
    fecha_subida?: DateTimeNullableFilter<"documentos"> | Date | string | null
    tamano_bytes?: BigIntFilter<"documentos"> | bigint | number
    es_publico?: BoolNullableFilter<"documentos"> | boolean | null
    cambiosadscripcion?: CambiosadscripcionListRelationFilter
    hijos?: HijosListRelationFilter
    permisos?: PermisosListRelationFilter
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }

  export type documentosOrderByWithRelationInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tipo_documento?: SortOrder
    metadata?: SortOrderInput | SortOrder
    hash_archivo?: SortOrder
    nombre_archivo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipo_archivo?: SortOrderInput | SortOrder
    ruta_almacenamiento?: SortOrder
    fecha_subida?: SortOrderInput | SortOrder
    tamano_bytes?: SortOrder
    es_publico?: SortOrderInput | SortOrder
    cambiosadscripcion?: cambiosadscripcionOrderByRelationAggregateInput
    hijos?: hijosOrderByRelationAggregateInput
    permisos?: permisosOrderByRelationAggregateInput
    trabajadores_cursos?: trabajadores_cursosOrderByRelationAggregateInput
  }

  export type documentosWhereUniqueInput = Prisma.AtLeast<{
    id_documento?: number
    AND?: documentosWhereInput | documentosWhereInput[]
    OR?: documentosWhereInput[]
    NOT?: documentosWhereInput | documentosWhereInput[]
    id_trabajador?: IntFilter<"documentos"> | number
    tipo_documento?: StringFilter<"documentos"> | string
    metadata?: JsonNullableFilter<"documentos">
    hash_archivo?: StringFilter<"documentos"> | string
    nombre_archivo?: StringFilter<"documentos"> | string
    descripcion?: StringNullableFilter<"documentos"> | string | null
    tipo_archivo?: StringNullableFilter<"documentos"> | string | null
    ruta_almacenamiento?: StringFilter<"documentos"> | string
    fecha_subida?: DateTimeNullableFilter<"documentos"> | Date | string | null
    tamano_bytes?: BigIntFilter<"documentos"> | bigint | number
    es_publico?: BoolNullableFilter<"documentos"> | boolean | null
    cambiosadscripcion?: CambiosadscripcionListRelationFilter
    hijos?: HijosListRelationFilter
    permisos?: PermisosListRelationFilter
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }, "id_documento">

  export type documentosOrderByWithAggregationInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tipo_documento?: SortOrder
    metadata?: SortOrderInput | SortOrder
    hash_archivo?: SortOrder
    nombre_archivo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipo_archivo?: SortOrderInput | SortOrder
    ruta_almacenamiento?: SortOrder
    fecha_subida?: SortOrderInput | SortOrder
    tamano_bytes?: SortOrder
    es_publico?: SortOrderInput | SortOrder
    _count?: documentosCountOrderByAggregateInput
    _avg?: documentosAvgOrderByAggregateInput
    _max?: documentosMaxOrderByAggregateInput
    _min?: documentosMinOrderByAggregateInput
    _sum?: documentosSumOrderByAggregateInput
  }

  export type documentosScalarWhereWithAggregatesInput = {
    AND?: documentosScalarWhereWithAggregatesInput | documentosScalarWhereWithAggregatesInput[]
    OR?: documentosScalarWhereWithAggregatesInput[]
    NOT?: documentosScalarWhereWithAggregatesInput | documentosScalarWhereWithAggregatesInput[]
    id_documento?: IntWithAggregatesFilter<"documentos"> | number
    id_trabajador?: IntWithAggregatesFilter<"documentos"> | number
    tipo_documento?: StringWithAggregatesFilter<"documentos"> | string
    metadata?: JsonNullableWithAggregatesFilter<"documentos">
    hash_archivo?: StringWithAggregatesFilter<"documentos"> | string
    nombre_archivo?: StringWithAggregatesFilter<"documentos"> | string
    descripcion?: StringNullableWithAggregatesFilter<"documentos"> | string | null
    tipo_archivo?: StringNullableWithAggregatesFilter<"documentos"> | string | null
    ruta_almacenamiento?: StringWithAggregatesFilter<"documentos"> | string
    fecha_subida?: DateTimeNullableWithAggregatesFilter<"documentos"> | Date | string | null
    tamano_bytes?: BigIntWithAggregatesFilter<"documentos"> | bigint | number
    es_publico?: BoolNullableWithAggregatesFilter<"documentos"> | boolean | null
  }

  export type hijosWhereInput = {
    AND?: hijosWhereInput | hijosWhereInput[]
    OR?: hijosWhereInput[]
    NOT?: hijosWhereInput | hijosWhereInput[]
    id_hijo?: IntFilter<"hijos"> | number
    id_trabajador?: IntFilter<"hijos"> | number
    nombre_completo?: StringFilter<"hijos"> | string
    fecha_nacimiento?: DateTimeFilter<"hijos"> | Date | string
    acta_nacimiento_id?: IntNullableFilter<"hijos"> | number | null
    vigente?: BoolNullableFilter<"hijos"> | boolean | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }

  export type hijosOrderByWithRelationInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    nombre_completo?: SortOrder
    fecha_nacimiento?: SortOrder
    acta_nacimiento_id?: SortOrderInput | SortOrder
    vigente?: SortOrderInput | SortOrder
    documentos?: documentosOrderByWithRelationInput
  }

  export type hijosWhereUniqueInput = Prisma.AtLeast<{
    id_hijo?: number
    AND?: hijosWhereInput | hijosWhereInput[]
    OR?: hijosWhereInput[]
    NOT?: hijosWhereInput | hijosWhereInput[]
    id_trabajador?: IntFilter<"hijos"> | number
    nombre_completo?: StringFilter<"hijos"> | string
    fecha_nacimiento?: DateTimeFilter<"hijos"> | Date | string
    acta_nacimiento_id?: IntNullableFilter<"hijos"> | number | null
    vigente?: BoolNullableFilter<"hijos"> | boolean | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }, "id_hijo">

  export type hijosOrderByWithAggregationInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    nombre_completo?: SortOrder
    fecha_nacimiento?: SortOrder
    acta_nacimiento_id?: SortOrderInput | SortOrder
    vigente?: SortOrderInput | SortOrder
    _count?: hijosCountOrderByAggregateInput
    _avg?: hijosAvgOrderByAggregateInput
    _max?: hijosMaxOrderByAggregateInput
    _min?: hijosMinOrderByAggregateInput
    _sum?: hijosSumOrderByAggregateInput
  }

  export type hijosScalarWhereWithAggregatesInput = {
    AND?: hijosScalarWhereWithAggregatesInput | hijosScalarWhereWithAggregatesInput[]
    OR?: hijosScalarWhereWithAggregatesInput[]
    NOT?: hijosScalarWhereWithAggregatesInput | hijosScalarWhereWithAggregatesInput[]
    id_hijo?: IntWithAggregatesFilter<"hijos"> | number
    id_trabajador?: IntWithAggregatesFilter<"hijos"> | number
    nombre_completo?: StringWithAggregatesFilter<"hijos"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"hijos"> | Date | string
    acta_nacimiento_id?: IntNullableWithAggregatesFilter<"hijos"> | number | null
    vigente?: BoolNullableWithAggregatesFilter<"hijos"> | boolean | null
  }

  export type permisosWhereInput = {
    AND?: permisosWhereInput | permisosWhereInput[]
    OR?: permisosWhereInput[]
    NOT?: permisosWhereInput | permisosWhereInput[]
    id_permiso?: IntFilter<"permisos"> | number
    id_trabajador?: IntFilter<"permisos"> | number
    tipo_permiso?: StringNullableFilter<"permisos"> | string | null
    fecha_inicio?: DateTimeFilter<"permisos"> | Date | string
    fecha_fin?: DateTimeFilter<"permisos"> | Date | string
    motivo?: StringFilter<"permisos"> | string
    estatus?: StringNullableFilter<"permisos"> | string | null
    documento_aprobacion_id?: IntNullableFilter<"permisos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"permisos"> | Date | string | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }

  export type permisosOrderByWithRelationInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    tipo_permiso?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    motivo?: SortOrder
    estatus?: SortOrderInput | SortOrder
    documento_aprobacion_id?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    documentos?: documentosOrderByWithRelationInput
  }

  export type permisosWhereUniqueInput = Prisma.AtLeast<{
    id_permiso?: number
    AND?: permisosWhereInput | permisosWhereInput[]
    OR?: permisosWhereInput[]
    NOT?: permisosWhereInput | permisosWhereInput[]
    id_trabajador?: IntFilter<"permisos"> | number
    tipo_permiso?: StringNullableFilter<"permisos"> | string | null
    fecha_inicio?: DateTimeFilter<"permisos"> | Date | string
    fecha_fin?: DateTimeFilter<"permisos"> | Date | string
    motivo?: StringFilter<"permisos"> | string
    estatus?: StringNullableFilter<"permisos"> | string | null
    documento_aprobacion_id?: IntNullableFilter<"permisos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"permisos"> | Date | string | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
  }, "id_permiso">

  export type permisosOrderByWithAggregationInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    tipo_permiso?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    motivo?: SortOrder
    estatus?: SortOrderInput | SortOrder
    documento_aprobacion_id?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: permisosCountOrderByAggregateInput
    _avg?: permisosAvgOrderByAggregateInput
    _max?: permisosMaxOrderByAggregateInput
    _min?: permisosMinOrderByAggregateInput
    _sum?: permisosSumOrderByAggregateInput
  }

  export type permisosScalarWhereWithAggregatesInput = {
    AND?: permisosScalarWhereWithAggregatesInput | permisosScalarWhereWithAggregatesInput[]
    OR?: permisosScalarWhereWithAggregatesInput[]
    NOT?: permisosScalarWhereWithAggregatesInput | permisosScalarWhereWithAggregatesInput[]
    id_permiso?: IntWithAggregatesFilter<"permisos"> | number
    id_trabajador?: IntWithAggregatesFilter<"permisos"> | number
    tipo_permiso?: StringNullableWithAggregatesFilter<"permisos"> | string | null
    fecha_inicio?: DateTimeWithAggregatesFilter<"permisos"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"permisos"> | Date | string
    motivo?: StringWithAggregatesFilter<"permisos"> | string
    estatus?: StringNullableWithAggregatesFilter<"permisos"> | string | null
    documento_aprobacion_id?: IntNullableWithAggregatesFilter<"permisos"> | number | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"permisos"> | Date | string | null
  }

  export type sancionesWhereInput = {
    AND?: sancionesWhereInput | sancionesWhereInput[]
    OR?: sancionesWhereInput[]
    NOT?: sancionesWhereInput | sancionesWhereInput[]
    id_sancion?: IntFilter<"sanciones"> | number
    id_trabajador?: IntFilter<"sanciones"> | number
    tipo_sancion?: StringFilter<"sanciones"> | string
    descripcion?: StringFilter<"sanciones"> | string
    fecha_aplicacion?: DateTimeFilter<"sanciones"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"sanciones"> | Date | string | null
    estatus?: StringNullableFilter<"sanciones"> | string | null
    usuario_registro?: StringNullableFilter<"sanciones"> | string | null
    fecha_registro?: DateTimeNullableFilter<"sanciones"> | Date | string | null
    trabajadores?: XOR<TrabajadoresScalarRelationFilter, trabajadoresWhereInput>
  }

  export type sancionesOrderByWithRelationInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
    tipo_sancion?: SortOrder
    descripcion?: SortOrder
    fecha_aplicacion?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    usuario_registro?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    trabajadores?: trabajadoresOrderByWithRelationInput
  }

  export type sancionesWhereUniqueInput = Prisma.AtLeast<{
    id_sancion?: number
    AND?: sancionesWhereInput | sancionesWhereInput[]
    OR?: sancionesWhereInput[]
    NOT?: sancionesWhereInput | sancionesWhereInput[]
    id_trabajador?: IntFilter<"sanciones"> | number
    tipo_sancion?: StringFilter<"sanciones"> | string
    descripcion?: StringFilter<"sanciones"> | string
    fecha_aplicacion?: DateTimeFilter<"sanciones"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"sanciones"> | Date | string | null
    estatus?: StringNullableFilter<"sanciones"> | string | null
    usuario_registro?: StringNullableFilter<"sanciones"> | string | null
    fecha_registro?: DateTimeNullableFilter<"sanciones"> | Date | string | null
    trabajadores?: XOR<TrabajadoresScalarRelationFilter, trabajadoresWhereInput>
  }, "id_sancion">

  export type sancionesOrderByWithAggregationInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
    tipo_sancion?: SortOrder
    descripcion?: SortOrder
    fecha_aplicacion?: SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    usuario_registro?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: sancionesCountOrderByAggregateInput
    _avg?: sancionesAvgOrderByAggregateInput
    _max?: sancionesMaxOrderByAggregateInput
    _min?: sancionesMinOrderByAggregateInput
    _sum?: sancionesSumOrderByAggregateInput
  }

  export type sancionesScalarWhereWithAggregatesInput = {
    AND?: sancionesScalarWhereWithAggregatesInput | sancionesScalarWhereWithAggregatesInput[]
    OR?: sancionesScalarWhereWithAggregatesInput[]
    NOT?: sancionesScalarWhereWithAggregatesInput | sancionesScalarWhereWithAggregatesInput[]
    id_sancion?: IntWithAggregatesFilter<"sanciones"> | number
    id_trabajador?: IntWithAggregatesFilter<"sanciones"> | number
    tipo_sancion?: StringWithAggregatesFilter<"sanciones"> | string
    descripcion?: StringWithAggregatesFilter<"sanciones"> | string
    fecha_aplicacion?: DateTimeWithAggregatesFilter<"sanciones"> | Date | string
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"sanciones"> | Date | string | null
    estatus?: StringNullableWithAggregatesFilter<"sanciones"> | string | null
    usuario_registro?: StringNullableWithAggregatesFilter<"sanciones"> | string | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"sanciones"> | Date | string | null
  }

  export type seccionesWhereInput = {
    AND?: seccionesWhereInput | seccionesWhereInput[]
    OR?: seccionesWhereInput[]
    NOT?: seccionesWhereInput | seccionesWhereInput[]
    id_seccion?: IntFilter<"secciones"> | number
    nombre_seccion?: StringFilter<"secciones"> | string
    descripcion?: StringNullableFilter<"secciones"> | string | null
    trabajadores?: TrabajadoresListRelationFilter
  }

  export type seccionesOrderByWithRelationInput = {
    id_seccion?: SortOrder
    nombre_seccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    trabajadores?: trabajadoresOrderByRelationAggregateInput
  }

  export type seccionesWhereUniqueInput = Prisma.AtLeast<{
    id_seccion?: number
    AND?: seccionesWhereInput | seccionesWhereInput[]
    OR?: seccionesWhereInput[]
    NOT?: seccionesWhereInput | seccionesWhereInput[]
    nombre_seccion?: StringFilter<"secciones"> | string
    descripcion?: StringNullableFilter<"secciones"> | string | null
    trabajadores?: TrabajadoresListRelationFilter
  }, "id_seccion">

  export type seccionesOrderByWithAggregationInput = {
    id_seccion?: SortOrder
    nombre_seccion?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: seccionesCountOrderByAggregateInput
    _avg?: seccionesAvgOrderByAggregateInput
    _max?: seccionesMaxOrderByAggregateInput
    _min?: seccionesMinOrderByAggregateInput
    _sum?: seccionesSumOrderByAggregateInput
  }

  export type seccionesScalarWhereWithAggregatesInput = {
    AND?: seccionesScalarWhereWithAggregatesInput | seccionesScalarWhereWithAggregatesInput[]
    OR?: seccionesScalarWhereWithAggregatesInput[]
    NOT?: seccionesScalarWhereWithAggregatesInput | seccionesScalarWhereWithAggregatesInput[]
    id_seccion?: IntWithAggregatesFilter<"secciones"> | number
    nombre_seccion?: StringWithAggregatesFilter<"secciones"> | string
    descripcion?: StringNullableWithAggregatesFilter<"secciones"> | string | null
  }

  export type trabajadoresWhereInput = {
    AND?: trabajadoresWhereInput | trabajadoresWhereInput[]
    OR?: trabajadoresWhereInput[]
    NOT?: trabajadoresWhereInput | trabajadoresWhereInput[]
    id_trabajador?: IntFilter<"trabajadores"> | number
    nombre?: StringFilter<"trabajadores"> | string
    apellido_paterno?: StringFilter<"trabajadores"> | string
    apellido_materno?: StringNullableFilter<"trabajadores"> | string | null
    fecha_nacimiento?: DateTimeFilter<"trabajadores"> | Date | string
    sexo?: StringFilter<"trabajadores"> | string
    curp?: StringFilter<"trabajadores"> | string
    rfc?: StringFilter<"trabajadores"> | string
    email?: StringFilter<"trabajadores"> | string
    situacion_sentimental?: StringNullableFilter<"trabajadores"> | string | null
    numero_hijos?: IntFilter<"trabajadores"> | number
    numero_empleado?: StringFilter<"trabajadores"> | string
    numero_plaza?: StringFilter<"trabajadores"> | string
    fecha_ingreso?: DateTimeFilter<"trabajadores"> | Date | string
    fecha_ingreso_gobierno?: DateTimeFilter<"trabajadores"> | Date | string
    nivel_puesto?: StringFilter<"trabajadores"> | string
    nombre_puesto?: StringFilter<"trabajadores"> | string
    puesto_inpi?: StringNullableFilter<"trabajadores"> | string | null
    adscripcion?: StringFilter<"trabajadores"> | string
    id_seccion?: IntFilter<"trabajadores"> | number
    nivel_estudios?: StringNullableFilter<"trabajadores"> | string | null
    institucion_estudios?: StringNullableFilter<"trabajadores"> | string | null
    certificado_estudios?: BoolNullableFilter<"trabajadores"> | boolean | null
    plaza_base?: StringNullableFilter<"trabajadores"> | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"trabajadores"> | Date | string | null
    sanciones?: SancionesListRelationFilter
    seccion?: XOR<SeccionesScalarRelationFilter, seccionesWhereInput>
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }

  export type trabajadoresOrderByWithRelationInput = {
    id_trabajador?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    sexo?: SortOrder
    curp?: SortOrder
    rfc?: SortOrder
    email?: SortOrder
    situacion_sentimental?: SortOrderInput | SortOrder
    numero_hijos?: SortOrder
    numero_empleado?: SortOrder
    numero_plaza?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_ingreso_gobierno?: SortOrder
    nivel_puesto?: SortOrder
    nombre_puesto?: SortOrder
    puesto_inpi?: SortOrderInput | SortOrder
    adscripcion?: SortOrder
    id_seccion?: SortOrder
    nivel_estudios?: SortOrderInput | SortOrder
    institucion_estudios?: SortOrderInput | SortOrder
    certificado_estudios?: SortOrderInput | SortOrder
    plaza_base?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    sanciones?: sancionesOrderByRelationAggregateInput
    seccion?: seccionesOrderByWithRelationInput
    trabajadores_cursos?: trabajadores_cursosOrderByRelationAggregateInput
  }

  export type trabajadoresWhereUniqueInput = Prisma.AtLeast<{
    id_trabajador?: number
    curp?: string
    rfc?: string
    email?: string
    numero_empleado?: string
    numero_plaza?: string
    AND?: trabajadoresWhereInput | trabajadoresWhereInput[]
    OR?: trabajadoresWhereInput[]
    NOT?: trabajadoresWhereInput | trabajadoresWhereInput[]
    nombre?: StringFilter<"trabajadores"> | string
    apellido_paterno?: StringFilter<"trabajadores"> | string
    apellido_materno?: StringNullableFilter<"trabajadores"> | string | null
    fecha_nacimiento?: DateTimeFilter<"trabajadores"> | Date | string
    sexo?: StringFilter<"trabajadores"> | string
    situacion_sentimental?: StringNullableFilter<"trabajadores"> | string | null
    numero_hijos?: IntFilter<"trabajadores"> | number
    fecha_ingreso?: DateTimeFilter<"trabajadores"> | Date | string
    fecha_ingreso_gobierno?: DateTimeFilter<"trabajadores"> | Date | string
    nivel_puesto?: StringFilter<"trabajadores"> | string
    nombre_puesto?: StringFilter<"trabajadores"> | string
    puesto_inpi?: StringNullableFilter<"trabajadores"> | string | null
    adscripcion?: StringFilter<"trabajadores"> | string
    id_seccion?: IntFilter<"trabajadores"> | number
    nivel_estudios?: StringNullableFilter<"trabajadores"> | string | null
    institucion_estudios?: StringNullableFilter<"trabajadores"> | string | null
    certificado_estudios?: BoolNullableFilter<"trabajadores"> | boolean | null
    plaza_base?: StringNullableFilter<"trabajadores"> | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"trabajadores"> | Date | string | null
    sanciones?: SancionesListRelationFilter
    seccion?: XOR<SeccionesScalarRelationFilter, seccionesWhereInput>
    trabajadores_cursos?: Trabajadores_cursosListRelationFilter
  }, "id_trabajador" | "curp" | "rfc" | "email" | "numero_empleado" | "numero_plaza">

  export type trabajadoresOrderByWithAggregationInput = {
    id_trabajador?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrderInput | SortOrder
    fecha_nacimiento?: SortOrder
    sexo?: SortOrder
    curp?: SortOrder
    rfc?: SortOrder
    email?: SortOrder
    situacion_sentimental?: SortOrderInput | SortOrder
    numero_hijos?: SortOrder
    numero_empleado?: SortOrder
    numero_plaza?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_ingreso_gobierno?: SortOrder
    nivel_puesto?: SortOrder
    nombre_puesto?: SortOrder
    puesto_inpi?: SortOrderInput | SortOrder
    adscripcion?: SortOrder
    id_seccion?: SortOrder
    nivel_estudios?: SortOrderInput | SortOrder
    institucion_estudios?: SortOrderInput | SortOrder
    certificado_estudios?: SortOrderInput | SortOrder
    plaza_base?: SortOrderInput | SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    _count?: trabajadoresCountOrderByAggregateInput
    _avg?: trabajadoresAvgOrderByAggregateInput
    _max?: trabajadoresMaxOrderByAggregateInput
    _min?: trabajadoresMinOrderByAggregateInput
    _sum?: trabajadoresSumOrderByAggregateInput
  }

  export type trabajadoresScalarWhereWithAggregatesInput = {
    AND?: trabajadoresScalarWhereWithAggregatesInput | trabajadoresScalarWhereWithAggregatesInput[]
    OR?: trabajadoresScalarWhereWithAggregatesInput[]
    NOT?: trabajadoresScalarWhereWithAggregatesInput | trabajadoresScalarWhereWithAggregatesInput[]
    id_trabajador?: IntWithAggregatesFilter<"trabajadores"> | number
    nombre?: StringWithAggregatesFilter<"trabajadores"> | string
    apellido_paterno?: StringWithAggregatesFilter<"trabajadores"> | string
    apellido_materno?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"trabajadores"> | Date | string
    sexo?: StringWithAggregatesFilter<"trabajadores"> | string
    curp?: StringWithAggregatesFilter<"trabajadores"> | string
    rfc?: StringWithAggregatesFilter<"trabajadores"> | string
    email?: StringWithAggregatesFilter<"trabajadores"> | string
    situacion_sentimental?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    numero_hijos?: IntWithAggregatesFilter<"trabajadores"> | number
    numero_empleado?: StringWithAggregatesFilter<"trabajadores"> | string
    numero_plaza?: StringWithAggregatesFilter<"trabajadores"> | string
    fecha_ingreso?: DateTimeWithAggregatesFilter<"trabajadores"> | Date | string
    fecha_ingreso_gobierno?: DateTimeWithAggregatesFilter<"trabajadores"> | Date | string
    nivel_puesto?: StringWithAggregatesFilter<"trabajadores"> | string
    nombre_puesto?: StringWithAggregatesFilter<"trabajadores"> | string
    puesto_inpi?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    adscripcion?: StringWithAggregatesFilter<"trabajadores"> | string
    id_seccion?: IntWithAggregatesFilter<"trabajadores"> | number
    nivel_estudios?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    institucion_estudios?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    certificado_estudios?: BoolNullableWithAggregatesFilter<"trabajadores"> | boolean | null
    plaza_base?: StringNullableWithAggregatesFilter<"trabajadores"> | string | null
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"trabajadores"> | Date | string | null
  }

  export type trabajadores_cursosWhereInput = {
    AND?: trabajadores_cursosWhereInput | trabajadores_cursosWhereInput[]
    OR?: trabajadores_cursosWhereInput[]
    NOT?: trabajadores_cursosWhereInput | trabajadores_cursosWhereInput[]
    id_trabajador_curso?: IntFilter<"trabajadores_cursos"> | number
    id_trabajador?: IntFilter<"trabajadores_cursos"> | number
    id_curso?: IntFilter<"trabajadores_cursos"> | number
    fecha_inscripcion?: DateTimeFilter<"trabajadores_cursos"> | Date | string
    calificacion?: DecimalNullableFilter<"trabajadores_cursos"> | Decimal | DecimalJsLike | number | string | null
    completado?: BoolNullableFilter<"trabajadores_cursos"> | boolean | null
    fecha_completado?: DateTimeNullableFilter<"trabajadores_cursos"> | Date | string | null
    certificado_id?: IntNullableFilter<"trabajadores_cursos"> | number | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    trabajadores?: XOR<TrabajadoresScalarRelationFilter, trabajadoresWhereInput>
  }

  export type trabajadores_cursosOrderByWithRelationInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    fecha_inscripcion?: SortOrder
    calificacion?: SortOrderInput | SortOrder
    completado?: SortOrderInput | SortOrder
    fecha_completado?: SortOrderInput | SortOrder
    certificado_id?: SortOrderInput | SortOrder
    documentos?: documentosOrderByWithRelationInput
    cursos?: cursosOrderByWithRelationInput
    trabajadores?: trabajadoresOrderByWithRelationInput
  }

  export type trabajadores_cursosWhereUniqueInput = Prisma.AtLeast<{
    id_trabajador_curso?: number
    trabajadores_cursos_unique?: trabajadores_cursosTrabajadores_cursos_uniqueCompoundUniqueInput
    AND?: trabajadores_cursosWhereInput | trabajadores_cursosWhereInput[]
    OR?: trabajadores_cursosWhereInput[]
    NOT?: trabajadores_cursosWhereInput | trabajadores_cursosWhereInput[]
    id_trabajador?: IntFilter<"trabajadores_cursos"> | number
    id_curso?: IntFilter<"trabajadores_cursos"> | number
    fecha_inscripcion?: DateTimeFilter<"trabajadores_cursos"> | Date | string
    calificacion?: DecimalNullableFilter<"trabajadores_cursos"> | Decimal | DecimalJsLike | number | string | null
    completado?: BoolNullableFilter<"trabajadores_cursos"> | boolean | null
    fecha_completado?: DateTimeNullableFilter<"trabajadores_cursos"> | Date | string | null
    certificado_id?: IntNullableFilter<"trabajadores_cursos"> | number | null
    documentos?: XOR<DocumentosNullableScalarRelationFilter, documentosWhereInput> | null
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    trabajadores?: XOR<TrabajadoresScalarRelationFilter, trabajadoresWhereInput>
  }, "id_trabajador_curso" | "trabajadores_cursos_unique">

  export type trabajadores_cursosOrderByWithAggregationInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    fecha_inscripcion?: SortOrder
    calificacion?: SortOrderInput | SortOrder
    completado?: SortOrderInput | SortOrder
    fecha_completado?: SortOrderInput | SortOrder
    certificado_id?: SortOrderInput | SortOrder
    _count?: trabajadores_cursosCountOrderByAggregateInput
    _avg?: trabajadores_cursosAvgOrderByAggregateInput
    _max?: trabajadores_cursosMaxOrderByAggregateInput
    _min?: trabajadores_cursosMinOrderByAggregateInput
    _sum?: trabajadores_cursosSumOrderByAggregateInput
  }

  export type trabajadores_cursosScalarWhereWithAggregatesInput = {
    AND?: trabajadores_cursosScalarWhereWithAggregatesInput | trabajadores_cursosScalarWhereWithAggregatesInput[]
    OR?: trabajadores_cursosScalarWhereWithAggregatesInput[]
    NOT?: trabajadores_cursosScalarWhereWithAggregatesInput | trabajadores_cursosScalarWhereWithAggregatesInput[]
    id_trabajador_curso?: IntWithAggregatesFilter<"trabajadores_cursos"> | number
    id_trabajador?: IntWithAggregatesFilter<"trabajadores_cursos"> | number
    id_curso?: IntWithAggregatesFilter<"trabajadores_cursos"> | number
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"trabajadores_cursos"> | Date | string
    calificacion?: DecimalNullableWithAggregatesFilter<"trabajadores_cursos"> | Decimal | DecimalJsLike | number | string | null
    completado?: BoolNullableWithAggregatesFilter<"trabajadores_cursos"> | boolean | null
    fecha_completado?: DateTimeNullableWithAggregatesFilter<"trabajadores_cursos"> | Date | string | null
    certificado_id?: IntNullableWithAggregatesFilter<"trabajadores_cursos"> | number | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    id_trabajador?: IntNullableFilter<"usuarios"> | number | null
    identificador?: StringFilter<"usuarios"> | string
    contraseña_hash?: StringFilter<"usuarios"> | string
    intentos_fallidos?: IntNullableFilter<"usuarios"> | number | null
    bloqueado?: BoolNullableFilter<"usuarios"> | boolean | null
    fecha_creacion?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_login?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_cambio_password?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    rol?: Enumrol_usuarioFilter<"usuarios"> | $Enums.rol_usuario
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrderInput | SortOrder
    identificador?: SortOrder
    contraseña_hash?: SortOrder
    intentos_fallidos?: SortOrderInput | SortOrder
    bloqueado?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    ultimo_cambio_password?: SortOrderInput | SortOrder
    rol?: SortOrder
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    id_trabajador?: number
    identificador?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    contraseña_hash?: StringFilter<"usuarios"> | string
    intentos_fallidos?: IntNullableFilter<"usuarios"> | number | null
    bloqueado?: BoolNullableFilter<"usuarios"> | boolean | null
    fecha_creacion?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_login?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_cambio_password?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    rol?: Enumrol_usuarioFilter<"usuarios"> | $Enums.rol_usuario
  }, "id_usuario" | "id_trabajador" | "identificador">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrderInput | SortOrder
    identificador?: SortOrder
    contraseña_hash?: SortOrder
    intentos_fallidos?: SortOrderInput | SortOrder
    bloqueado?: SortOrderInput | SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    ultimo_cambio_password?: SortOrderInput | SortOrder
    rol?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    id_trabajador?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    identificador?: StringWithAggregatesFilter<"usuarios"> | string
    contraseña_hash?: StringWithAggregatesFilter<"usuarios"> | string
    intentos_fallidos?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    bloqueado?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    ultimo_login?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    ultimo_cambio_password?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    rol?: Enumrol_usuarioWithAggregatesFilter<"usuarios"> | $Enums.rol_usuario
  }

  export type auditoriaCreateInput = {
    tabla_afectada: string
    id_registro: number
    accion: string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario: string
    fecha_registro?: Date | string | null
  }

  export type auditoriaUncheckedCreateInput = {
    id_auditoria?: number
    tabla_afectada: string
    id_registro: number
    accion: string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario: string
    fecha_registro?: Date | string | null
  }

  export type auditoriaUpdateInput = {
    tabla_afectada?: StringFieldUpdateOperationsInput | string
    id_registro?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditoriaUncheckedUpdateInput = {
    id_auditoria?: IntFieldUpdateOperationsInput | number
    tabla_afectada?: StringFieldUpdateOperationsInput | string
    id_registro?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditoriaCreateManyInput = {
    id_auditoria?: number
    tabla_afectada: string
    id_registro: number
    accion: string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario: string
    fecha_registro?: Date | string | null
  }

  export type auditoriaUpdateManyMutationInput = {
    tabla_afectada?: StringFieldUpdateOperationsInput | string
    id_registro?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type auditoriaUncheckedUpdateManyInput = {
    id_auditoria?: IntFieldUpdateOperationsInput | number
    tabla_afectada?: StringFieldUpdateOperationsInput | string
    id_registro?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    datos_anteriores?: NullableJsonNullValueInput | InputJsonValue
    datos_nuevos?: NullableJsonNullValueInput | InputJsonValue
    usuario?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cambiosadscripcionCreateInput = {
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
    documentos?: documentosCreateNestedOneWithoutCambiosadscripcionInput
  }

  export type cambiosadscripcionUncheckedCreateInput = {
    id_cambio?: number
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    documento_respaldo_id?: number | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type cambiosadscripcionUpdateInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: documentosUpdateOneWithoutCambiosadscripcionNestedInput
  }

  export type cambiosadscripcionUncheckedUpdateInput = {
    id_cambio?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    documento_respaldo_id?: NullableIntFieldUpdateOperationsInput | number | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cambiosadscripcionCreateManyInput = {
    id_cambio?: number
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    documento_respaldo_id?: number | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type cambiosadscripcionUpdateManyMutationInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cambiosadscripcionUncheckedUpdateManyInput = {
    id_cambio?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    documento_respaldo_id?: NullableIntFieldUpdateOperationsInput | number | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cursosCreateInput = {
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus?: string | null
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateInput = {
    id_curso?: number
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus?: string | null
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosUpdateInput = {
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type cursosCreateManyInput = {
    id_curso?: number
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus?: string | null
  }

  export type cursosUpdateManyMutationInput = {
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cursosUncheckedUpdateManyInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documentosCreateInput = {
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionCreateNestedManyWithoutDocumentosInput
    hijos?: hijosCreateNestedManyWithoutDocumentosInput
    permisos?: permisosCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUncheckedCreateInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedCreateNestedManyWithoutDocumentosInput
    hijos?: hijosUncheckedCreateNestedManyWithoutDocumentosInput
    permisos?: permisosUncheckedCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUpdateInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosUncheckedUpdateInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUncheckedUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUncheckedUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosCreateManyInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
  }

  export type documentosUpdateManyMutationInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type documentosUncheckedUpdateManyInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hijosCreateInput = {
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    vigente?: boolean | null
    documentos?: documentosCreateNestedOneWithoutHijosInput
  }

  export type hijosUncheckedCreateInput = {
    id_hijo?: number
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    acta_nacimiento_id?: number | null
    vigente?: boolean | null
  }

  export type hijosUpdateInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentos?: documentosUpdateOneWithoutHijosNestedInput
  }

  export type hijosUncheckedUpdateInput = {
    id_hijo?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    acta_nacimiento_id?: NullableIntFieldUpdateOperationsInput | number | null
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hijosCreateManyInput = {
    id_hijo?: number
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    acta_nacimiento_id?: number | null
    vigente?: boolean | null
  }

  export type hijosUpdateManyMutationInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hijosUncheckedUpdateManyInput = {
    id_hijo?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    acta_nacimiento_id?: NullableIntFieldUpdateOperationsInput | number | null
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type permisosCreateInput = {
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    fecha_registro?: Date | string | null
    documentos?: documentosCreateNestedOneWithoutPermisosInput
  }

  export type permisosUncheckedCreateInput = {
    id_permiso?: number
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    documento_aprobacion_id?: number | null
    fecha_registro?: Date | string | null
  }

  export type permisosUpdateInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: documentosUpdateOneWithoutPermisosNestedInput
  }

  export type permisosUncheckedUpdateInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    documento_aprobacion_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permisosCreateManyInput = {
    id_permiso?: number
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    documento_aprobacion_id?: number | null
    fecha_registro?: Date | string | null
  }

  export type permisosUpdateManyMutationInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permisosUncheckedUpdateManyInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    documento_aprobacion_id?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesCreateInput = {
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
    trabajadores: trabajadoresCreateNestedOneWithoutSancionesInput
  }

  export type sancionesUncheckedCreateInput = {
    id_sancion?: number
    id_trabajador: number
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type sancionesUpdateInput = {
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trabajadores?: trabajadoresUpdateOneRequiredWithoutSancionesNestedInput
  }

  export type sancionesUncheckedUpdateInput = {
    id_sancion?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesCreateManyInput = {
    id_sancion?: number
    id_trabajador: number
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type sancionesUpdateManyMutationInput = {
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesUncheckedUpdateManyInput = {
    id_sancion?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seccionesCreateInput = {
    nombre_seccion: string
    descripcion?: string | null
    trabajadores?: trabajadoresCreateNestedManyWithoutSeccionInput
  }

  export type seccionesUncheckedCreateInput = {
    id_seccion?: number
    nombre_seccion: string
    descripcion?: string | null
    trabajadores?: trabajadoresUncheckedCreateNestedManyWithoutSeccionInput
  }

  export type seccionesUpdateInput = {
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    trabajadores?: trabajadoresUpdateManyWithoutSeccionNestedInput
  }

  export type seccionesUncheckedUpdateInput = {
    id_seccion?: IntFieldUpdateOperationsInput | number
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    trabajadores?: trabajadoresUncheckedUpdateManyWithoutSeccionNestedInput
  }

  export type seccionesCreateManyInput = {
    id_seccion?: number
    nombre_seccion: string
    descripcion?: string | null
  }

  export type seccionesUpdateManyMutationInput = {
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seccionesUncheckedUpdateManyInput = {
    id_seccion?: IntFieldUpdateOperationsInput | number
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trabajadoresCreateInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesCreateNestedManyWithoutTrabajadoresInput
    seccion: seccionesCreateNestedOneWithoutTrabajadoresInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresUncheckedCreateInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    id_seccion: number
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesUncheckedCreateNestedManyWithoutTrabajadoresInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUpdateManyWithoutTrabajadoresNestedInput
    seccion?: seccionesUpdateOneRequiredWithoutTrabajadoresNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresUncheckedUpdateInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    id_seccion?: IntFieldUpdateOperationsInput | number
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUncheckedUpdateManyWithoutTrabajadoresNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresCreateManyInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    id_seccion: number
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
  }

  export type trabajadoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadoresUncheckedUpdateManyInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    id_seccion?: IntFieldUpdateOperationsInput | number
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadores_cursosCreateInput = {
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    documentos?: documentosCreateNestedOneWithoutTrabajadores_cursosInput
    cursos: cursosCreateNestedOneWithoutTrabajadores_cursosInput
    trabajadores: trabajadoresCreateNestedOneWithoutTrabajadores_cursosInput
  }

  export type trabajadores_cursosUncheckedCreateInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type trabajadores_cursosUpdateInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: documentosUpdateOneWithoutTrabajadores_cursosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
    trabajadores?: trabajadoresUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
  }

  export type trabajadores_cursosUncheckedUpdateInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trabajadores_cursosCreateManyInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type trabajadores_cursosUpdateManyMutationInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadores_cursosUncheckedUpdateManyInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuariosCreateInput = {
    id_trabajador?: number | null
    identificador: string
    contraseña_hash: string
    intentos_fallidos?: number | null
    bloqueado?: boolean | null
    fecha_creacion?: Date | string | null
    ultimo_login?: Date | string | null
    ultimo_cambio_password?: Date | string | null
    rol?: $Enums.rol_usuario
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    id_trabajador?: number | null
    identificador: string
    contraseña_hash: string
    intentos_fallidos?: number | null
    bloqueado?: boolean | null
    fecha_creacion?: Date | string | null
    ultimo_login?: Date | string | null
    ultimo_cambio_password?: Date | string | null
    rol?: $Enums.rol_usuario
  }

  export type usuariosUpdateInput = {
    id_trabajador?: NullableIntFieldUpdateOperationsInput | number | null
    identificador?: StringFieldUpdateOperationsInput | string
    contraseña_hash?: StringFieldUpdateOperationsInput | string
    intentos_fallidos?: NullableIntFieldUpdateOperationsInput | number | null
    bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_cambio_password?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_trabajador?: NullableIntFieldUpdateOperationsInput | number | null
    identificador?: StringFieldUpdateOperationsInput | string
    contraseña_hash?: StringFieldUpdateOperationsInput | string
    intentos_fallidos?: NullableIntFieldUpdateOperationsInput | number | null
    bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_cambio_password?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    id_trabajador?: number | null
    identificador: string
    contraseña_hash: string
    intentos_fallidos?: number | null
    bloqueado?: boolean | null
    fecha_creacion?: Date | string | null
    ultimo_login?: Date | string | null
    ultimo_cambio_password?: Date | string | null
    rol?: $Enums.rol_usuario
  }

  export type usuariosUpdateManyMutationInput = {
    id_trabajador?: NullableIntFieldUpdateOperationsInput | number | null
    identificador?: StringFieldUpdateOperationsInput | string
    contraseña_hash?: StringFieldUpdateOperationsInput | string
    intentos_fallidos?: NullableIntFieldUpdateOperationsInput | number | null
    bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_cambio_password?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_trabajador?: NullableIntFieldUpdateOperationsInput | number | null
    identificador?: StringFieldUpdateOperationsInput | string
    contraseña_hash?: StringFieldUpdateOperationsInput | string
    intentos_fallidos?: NullableIntFieldUpdateOperationsInput | number | null
    bloqueado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_cambio_password?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rol?: Enumrol_usuarioFieldUpdateOperationsInput | $Enums.rol_usuario
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auditoriaCountOrderByAggregateInput = {
    id_auditoria?: SortOrder
    tabla_afectada?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    datos_anteriores?: SortOrder
    datos_nuevos?: SortOrder
    usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type auditoriaAvgOrderByAggregateInput = {
    id_auditoria?: SortOrder
    id_registro?: SortOrder
  }

  export type auditoriaMaxOrderByAggregateInput = {
    id_auditoria?: SortOrder
    tabla_afectada?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type auditoriaMinOrderByAggregateInput = {
    id_auditoria?: SortOrder
    tabla_afectada?: SortOrder
    id_registro?: SortOrder
    accion?: SortOrder
    usuario?: SortOrder
    fecha_registro?: SortOrder
  }

  export type auditoriaSumOrderByAggregateInput = {
    id_auditoria?: SortOrder
    id_registro?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DocumentosNullableScalarRelationFilter = {
    is?: documentosWhereInput | null
    isNot?: documentosWhereInput | null
  }

  export type cambiosadscripcionCountOrderByAggregateInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    adscripcion_anterior?: SortOrder
    adscripcion_nueva?: SortOrder
    fecha_cambio?: SortOrder
    motivo?: SortOrder
    documento_respaldo_id?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type cambiosadscripcionAvgOrderByAggregateInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    documento_respaldo_id?: SortOrder
  }

  export type cambiosadscripcionMaxOrderByAggregateInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    adscripcion_anterior?: SortOrder
    adscripcion_nueva?: SortOrder
    fecha_cambio?: SortOrder
    motivo?: SortOrder
    documento_respaldo_id?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type cambiosadscripcionMinOrderByAggregateInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    adscripcion_anterior?: SortOrder
    adscripcion_nueva?: SortOrder
    fecha_cambio?: SortOrder
    motivo?: SortOrder
    documento_respaldo_id?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type cambiosadscripcionSumOrderByAggregateInput = {
    id_cambio?: SortOrder
    id_trabajador?: SortOrder
    documento_respaldo_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Trabajadores_cursosListRelationFilter = {
    every?: trabajadores_cursosWhereInput
    some?: trabajadores_cursosWhereInput
    none?: trabajadores_cursosWhereInput
  }

  export type trabajadores_cursosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursosCountOrderByAggregateInput = {
    id_curso?: SortOrder
    codigo_curso?: SortOrder
    nombre_curso?: SortOrder
    horas_duracion?: SortOrder
    estatus?: SortOrder
  }

  export type cursosAvgOrderByAggregateInput = {
    id_curso?: SortOrder
    horas_duracion?: SortOrder
  }

  export type cursosMaxOrderByAggregateInput = {
    id_curso?: SortOrder
    codigo_curso?: SortOrder
    nombre_curso?: SortOrder
    horas_duracion?: SortOrder
    estatus?: SortOrder
  }

  export type cursosMinOrderByAggregateInput = {
    id_curso?: SortOrder
    codigo_curso?: SortOrder
    nombre_curso?: SortOrder
    horas_duracion?: SortOrder
    estatus?: SortOrder
  }

  export type cursosSumOrderByAggregateInput = {
    id_curso?: SortOrder
    horas_duracion?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CambiosadscripcionListRelationFilter = {
    every?: cambiosadscripcionWhereInput
    some?: cambiosadscripcionWhereInput
    none?: cambiosadscripcionWhereInput
  }

  export type HijosListRelationFilter = {
    every?: hijosWhereInput
    some?: hijosWhereInput
    none?: hijosWhereInput
  }

  export type PermisosListRelationFilter = {
    every?: permisosWhereInput
    some?: permisosWhereInput
    none?: permisosWhereInput
  }

  export type cambiosadscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hijosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type permisosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentosCountOrderByAggregateInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tipo_documento?: SortOrder
    metadata?: SortOrder
    hash_archivo?: SortOrder
    nombre_archivo?: SortOrder
    descripcion?: SortOrder
    tipo_archivo?: SortOrder
    ruta_almacenamiento?: SortOrder
    fecha_subida?: SortOrder
    tamano_bytes?: SortOrder
    es_publico?: SortOrder
  }

  export type documentosAvgOrderByAggregateInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tamano_bytes?: SortOrder
  }

  export type documentosMaxOrderByAggregateInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tipo_documento?: SortOrder
    hash_archivo?: SortOrder
    nombre_archivo?: SortOrder
    descripcion?: SortOrder
    tipo_archivo?: SortOrder
    ruta_almacenamiento?: SortOrder
    fecha_subida?: SortOrder
    tamano_bytes?: SortOrder
    es_publico?: SortOrder
  }

  export type documentosMinOrderByAggregateInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tipo_documento?: SortOrder
    hash_archivo?: SortOrder
    nombre_archivo?: SortOrder
    descripcion?: SortOrder
    tipo_archivo?: SortOrder
    ruta_almacenamiento?: SortOrder
    fecha_subida?: SortOrder
    tamano_bytes?: SortOrder
    es_publico?: SortOrder
  }

  export type documentosSumOrderByAggregateInput = {
    id_documento?: SortOrder
    id_trabajador?: SortOrder
    tamano_bytes?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type hijosCountOrderByAggregateInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    nombre_completo?: SortOrder
    fecha_nacimiento?: SortOrder
    acta_nacimiento_id?: SortOrder
    vigente?: SortOrder
  }

  export type hijosAvgOrderByAggregateInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    acta_nacimiento_id?: SortOrder
  }

  export type hijosMaxOrderByAggregateInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    nombre_completo?: SortOrder
    fecha_nacimiento?: SortOrder
    acta_nacimiento_id?: SortOrder
    vigente?: SortOrder
  }

  export type hijosMinOrderByAggregateInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    nombre_completo?: SortOrder
    fecha_nacimiento?: SortOrder
    acta_nacimiento_id?: SortOrder
    vigente?: SortOrder
  }

  export type hijosSumOrderByAggregateInput = {
    id_hijo?: SortOrder
    id_trabajador?: SortOrder
    acta_nacimiento_id?: SortOrder
  }

  export type permisosCountOrderByAggregateInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    tipo_permiso?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    motivo?: SortOrder
    estatus?: SortOrder
    documento_aprobacion_id?: SortOrder
    fecha_registro?: SortOrder
  }

  export type permisosAvgOrderByAggregateInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    documento_aprobacion_id?: SortOrder
  }

  export type permisosMaxOrderByAggregateInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    tipo_permiso?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    motivo?: SortOrder
    estatus?: SortOrder
    documento_aprobacion_id?: SortOrder
    fecha_registro?: SortOrder
  }

  export type permisosMinOrderByAggregateInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    tipo_permiso?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    motivo?: SortOrder
    estatus?: SortOrder
    documento_aprobacion_id?: SortOrder
    fecha_registro?: SortOrder
  }

  export type permisosSumOrderByAggregateInput = {
    id_permiso?: SortOrder
    id_trabajador?: SortOrder
    documento_aprobacion_id?: SortOrder
  }

  export type TrabajadoresScalarRelationFilter = {
    is?: trabajadoresWhereInput
    isNot?: trabajadoresWhereInput
  }

  export type sancionesCountOrderByAggregateInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
    tipo_sancion?: SortOrder
    descripcion?: SortOrder
    fecha_aplicacion?: SortOrder
    fecha_fin?: SortOrder
    estatus?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type sancionesAvgOrderByAggregateInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
  }

  export type sancionesMaxOrderByAggregateInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
    tipo_sancion?: SortOrder
    descripcion?: SortOrder
    fecha_aplicacion?: SortOrder
    fecha_fin?: SortOrder
    estatus?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type sancionesMinOrderByAggregateInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
    tipo_sancion?: SortOrder
    descripcion?: SortOrder
    fecha_aplicacion?: SortOrder
    fecha_fin?: SortOrder
    estatus?: SortOrder
    usuario_registro?: SortOrder
    fecha_registro?: SortOrder
  }

  export type sancionesSumOrderByAggregateInput = {
    id_sancion?: SortOrder
    id_trabajador?: SortOrder
  }

  export type TrabajadoresListRelationFilter = {
    every?: trabajadoresWhereInput
    some?: trabajadoresWhereInput
    none?: trabajadoresWhereInput
  }

  export type trabajadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seccionesCountOrderByAggregateInput = {
    id_seccion?: SortOrder
    nombre_seccion?: SortOrder
    descripcion?: SortOrder
  }

  export type seccionesAvgOrderByAggregateInput = {
    id_seccion?: SortOrder
  }

  export type seccionesMaxOrderByAggregateInput = {
    id_seccion?: SortOrder
    nombre_seccion?: SortOrder
    descripcion?: SortOrder
  }

  export type seccionesMinOrderByAggregateInput = {
    id_seccion?: SortOrder
    nombre_seccion?: SortOrder
    descripcion?: SortOrder
  }

  export type seccionesSumOrderByAggregateInput = {
    id_seccion?: SortOrder
  }

  export type SancionesListRelationFilter = {
    every?: sancionesWhereInput
    some?: sancionesWhereInput
    none?: sancionesWhereInput
  }

  export type SeccionesScalarRelationFilter = {
    is?: seccionesWhereInput
    isNot?: seccionesWhereInput
  }

  export type sancionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trabajadoresCountOrderByAggregateInput = {
    id_trabajador?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    fecha_nacimiento?: SortOrder
    sexo?: SortOrder
    curp?: SortOrder
    rfc?: SortOrder
    email?: SortOrder
    situacion_sentimental?: SortOrder
    numero_hijos?: SortOrder
    numero_empleado?: SortOrder
    numero_plaza?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_ingreso_gobierno?: SortOrder
    nivel_puesto?: SortOrder
    nombre_puesto?: SortOrder
    puesto_inpi?: SortOrder
    adscripcion?: SortOrder
    id_seccion?: SortOrder
    nivel_estudios?: SortOrder
    institucion_estudios?: SortOrder
    certificado_estudios?: SortOrder
    plaza_base?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type trabajadoresAvgOrderByAggregateInput = {
    id_trabajador?: SortOrder
    numero_hijos?: SortOrder
    id_seccion?: SortOrder
  }

  export type trabajadoresMaxOrderByAggregateInput = {
    id_trabajador?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    fecha_nacimiento?: SortOrder
    sexo?: SortOrder
    curp?: SortOrder
    rfc?: SortOrder
    email?: SortOrder
    situacion_sentimental?: SortOrder
    numero_hijos?: SortOrder
    numero_empleado?: SortOrder
    numero_plaza?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_ingreso_gobierno?: SortOrder
    nivel_puesto?: SortOrder
    nombre_puesto?: SortOrder
    puesto_inpi?: SortOrder
    adscripcion?: SortOrder
    id_seccion?: SortOrder
    nivel_estudios?: SortOrder
    institucion_estudios?: SortOrder
    certificado_estudios?: SortOrder
    plaza_base?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type trabajadoresMinOrderByAggregateInput = {
    id_trabajador?: SortOrder
    nombre?: SortOrder
    apellido_paterno?: SortOrder
    apellido_materno?: SortOrder
    fecha_nacimiento?: SortOrder
    sexo?: SortOrder
    curp?: SortOrder
    rfc?: SortOrder
    email?: SortOrder
    situacion_sentimental?: SortOrder
    numero_hijos?: SortOrder
    numero_empleado?: SortOrder
    numero_plaza?: SortOrder
    fecha_ingreso?: SortOrder
    fecha_ingreso_gobierno?: SortOrder
    nivel_puesto?: SortOrder
    nombre_puesto?: SortOrder
    puesto_inpi?: SortOrder
    adscripcion?: SortOrder
    id_seccion?: SortOrder
    nivel_estudios?: SortOrder
    institucion_estudios?: SortOrder
    certificado_estudios?: SortOrder
    plaza_base?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type trabajadoresSumOrderByAggregateInput = {
    id_trabajador?: SortOrder
    numero_hijos?: SortOrder
    id_seccion?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CursosScalarRelationFilter = {
    is?: cursosWhereInput
    isNot?: cursosWhereInput
  }

  export type trabajadores_cursosTrabajadores_cursos_uniqueCompoundUniqueInput = {
    id_trabajador: number
    id_curso: number
  }

  export type trabajadores_cursosCountOrderByAggregateInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    fecha_inscripcion?: SortOrder
    calificacion?: SortOrder
    completado?: SortOrder
    fecha_completado?: SortOrder
    certificado_id?: SortOrder
  }

  export type trabajadores_cursosAvgOrderByAggregateInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    calificacion?: SortOrder
    certificado_id?: SortOrder
  }

  export type trabajadores_cursosMaxOrderByAggregateInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    fecha_inscripcion?: SortOrder
    calificacion?: SortOrder
    completado?: SortOrder
    fecha_completado?: SortOrder
    certificado_id?: SortOrder
  }

  export type trabajadores_cursosMinOrderByAggregateInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    fecha_inscripcion?: SortOrder
    calificacion?: SortOrder
    completado?: SortOrder
    fecha_completado?: SortOrder
    certificado_id?: SortOrder
  }

  export type trabajadores_cursosSumOrderByAggregateInput = {
    id_trabajador_curso?: SortOrder
    id_trabajador?: SortOrder
    id_curso?: SortOrder
    calificacion?: SortOrder
    certificado_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumrol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioFilter<$PrismaModel> | $Enums.rol_usuario
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrder
    identificador?: SortOrder
    contraseña_hash?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_login?: SortOrder
    ultimo_cambio_password?: SortOrder
    rol?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrder
    intentos_fallidos?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrder
    identificador?: SortOrder
    contraseña_hash?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_login?: SortOrder
    ultimo_cambio_password?: SortOrder
    rol?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrder
    identificador?: SortOrder
    contraseña_hash?: SortOrder
    intentos_fallidos?: SortOrder
    bloqueado?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_login?: SortOrder
    ultimo_cambio_password?: SortOrder
    rol?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_trabajador?: SortOrder
    intentos_fallidos?: SortOrder
  }

  export type Enumrol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumrol_usuarioFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type documentosCreateNestedOneWithoutCambiosadscripcionInput = {
    create?: XOR<documentosCreateWithoutCambiosadscripcionInput, documentosUncheckedCreateWithoutCambiosadscripcionInput>
    connectOrCreate?: documentosCreateOrConnectWithoutCambiosadscripcionInput
    connect?: documentosWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type documentosUpdateOneWithoutCambiosadscripcionNestedInput = {
    create?: XOR<documentosCreateWithoutCambiosadscripcionInput, documentosUncheckedCreateWithoutCambiosadscripcionInput>
    connectOrCreate?: documentosCreateOrConnectWithoutCambiosadscripcionInput
    upsert?: documentosUpsertWithoutCambiosadscripcionInput
    disconnect?: documentosWhereInput | boolean
    delete?: documentosWhereInput | boolean
    connect?: documentosWhereUniqueInput
    update?: XOR<XOR<documentosUpdateToOneWithWhereWithoutCambiosadscripcionInput, documentosUpdateWithoutCambiosadscripcionInput>, documentosUncheckedUpdateWithoutCambiosadscripcionInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type trabajadores_cursosCreateNestedManyWithoutCursosInput = {
    create?: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput> | trabajadores_cursosCreateWithoutCursosInput[] | trabajadores_cursosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutCursosInput | trabajadores_cursosCreateOrConnectWithoutCursosInput[]
    createMany?: trabajadores_cursosCreateManyCursosInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type trabajadores_cursosUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput> | trabajadores_cursosCreateWithoutCursosInput[] | trabajadores_cursosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutCursosInput | trabajadores_cursosCreateOrConnectWithoutCursosInput[]
    createMany?: trabajadores_cursosCreateManyCursosInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type trabajadores_cursosUpdateManyWithoutCursosNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput> | trabajadores_cursosCreateWithoutCursosInput[] | trabajadores_cursosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutCursosInput | trabajadores_cursosCreateOrConnectWithoutCursosInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutCursosInput | trabajadores_cursosUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: trabajadores_cursosCreateManyCursosInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutCursosInput | trabajadores_cursosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutCursosInput | trabajadores_cursosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput> | trabajadores_cursosCreateWithoutCursosInput[] | trabajadores_cursosUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutCursosInput | trabajadores_cursosCreateOrConnectWithoutCursosInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutCursosInput | trabajadores_cursosUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: trabajadores_cursosCreateManyCursosInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutCursosInput | trabajadores_cursosUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutCursosInput | trabajadores_cursosUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type cambiosadscripcionCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput> | cambiosadscripcionCreateWithoutDocumentosInput[] | cambiosadscripcionUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: cambiosadscripcionCreateOrConnectWithoutDocumentosInput | cambiosadscripcionCreateOrConnectWithoutDocumentosInput[]
    createMany?: cambiosadscripcionCreateManyDocumentosInputEnvelope
    connect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
  }

  export type hijosCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput> | hijosCreateWithoutDocumentosInput[] | hijosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: hijosCreateOrConnectWithoutDocumentosInput | hijosCreateOrConnectWithoutDocumentosInput[]
    createMany?: hijosCreateManyDocumentosInputEnvelope
    connect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
  }

  export type permisosCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput> | permisosCreateWithoutDocumentosInput[] | permisosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: permisosCreateOrConnectWithoutDocumentosInput | permisosCreateOrConnectWithoutDocumentosInput[]
    createMany?: permisosCreateManyDocumentosInputEnvelope
    connect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
  }

  export type trabajadores_cursosCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput> | trabajadores_cursosCreateWithoutDocumentosInput[] | trabajadores_cursosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutDocumentosInput | trabajadores_cursosCreateOrConnectWithoutDocumentosInput[]
    createMany?: trabajadores_cursosCreateManyDocumentosInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type cambiosadscripcionUncheckedCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput> | cambiosadscripcionCreateWithoutDocumentosInput[] | cambiosadscripcionUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: cambiosadscripcionCreateOrConnectWithoutDocumentosInput | cambiosadscripcionCreateOrConnectWithoutDocumentosInput[]
    createMany?: cambiosadscripcionCreateManyDocumentosInputEnvelope
    connect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
  }

  export type hijosUncheckedCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput> | hijosCreateWithoutDocumentosInput[] | hijosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: hijosCreateOrConnectWithoutDocumentosInput | hijosCreateOrConnectWithoutDocumentosInput[]
    createMany?: hijosCreateManyDocumentosInputEnvelope
    connect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
  }

  export type permisosUncheckedCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput> | permisosCreateWithoutDocumentosInput[] | permisosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: permisosCreateOrConnectWithoutDocumentosInput | permisosCreateOrConnectWithoutDocumentosInput[]
    createMany?: permisosCreateManyDocumentosInputEnvelope
    connect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
  }

  export type trabajadores_cursosUncheckedCreateNestedManyWithoutDocumentosInput = {
    create?: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput> | trabajadores_cursosCreateWithoutDocumentosInput[] | trabajadores_cursosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutDocumentosInput | trabajadores_cursosCreateOrConnectWithoutDocumentosInput[]
    createMany?: trabajadores_cursosCreateManyDocumentosInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type cambiosadscripcionUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput> | cambiosadscripcionCreateWithoutDocumentosInput[] | cambiosadscripcionUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: cambiosadscripcionCreateOrConnectWithoutDocumentosInput | cambiosadscripcionCreateOrConnectWithoutDocumentosInput[]
    upsert?: cambiosadscripcionUpsertWithWhereUniqueWithoutDocumentosInput | cambiosadscripcionUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: cambiosadscripcionCreateManyDocumentosInputEnvelope
    set?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    disconnect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    delete?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    connect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    update?: cambiosadscripcionUpdateWithWhereUniqueWithoutDocumentosInput | cambiosadscripcionUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: cambiosadscripcionUpdateManyWithWhereWithoutDocumentosInput | cambiosadscripcionUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: cambiosadscripcionScalarWhereInput | cambiosadscripcionScalarWhereInput[]
  }

  export type hijosUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput> | hijosCreateWithoutDocumentosInput[] | hijosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: hijosCreateOrConnectWithoutDocumentosInput | hijosCreateOrConnectWithoutDocumentosInput[]
    upsert?: hijosUpsertWithWhereUniqueWithoutDocumentosInput | hijosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: hijosCreateManyDocumentosInputEnvelope
    set?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    disconnect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    delete?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    connect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    update?: hijosUpdateWithWhereUniqueWithoutDocumentosInput | hijosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: hijosUpdateManyWithWhereWithoutDocumentosInput | hijosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: hijosScalarWhereInput | hijosScalarWhereInput[]
  }

  export type permisosUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput> | permisosCreateWithoutDocumentosInput[] | permisosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: permisosCreateOrConnectWithoutDocumentosInput | permisosCreateOrConnectWithoutDocumentosInput[]
    upsert?: permisosUpsertWithWhereUniqueWithoutDocumentosInput | permisosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: permisosCreateManyDocumentosInputEnvelope
    set?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    disconnect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    delete?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    connect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    update?: permisosUpdateWithWhereUniqueWithoutDocumentosInput | permisosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: permisosUpdateManyWithWhereWithoutDocumentosInput | permisosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: permisosScalarWhereInput | permisosScalarWhereInput[]
  }

  export type trabajadores_cursosUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput> | trabajadores_cursosCreateWithoutDocumentosInput[] | trabajadores_cursosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutDocumentosInput | trabajadores_cursosCreateOrConnectWithoutDocumentosInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutDocumentosInput | trabajadores_cursosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: trabajadores_cursosCreateManyDocumentosInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutDocumentosInput | trabajadores_cursosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutDocumentosInput | trabajadores_cursosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type cambiosadscripcionUncheckedUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput> | cambiosadscripcionCreateWithoutDocumentosInput[] | cambiosadscripcionUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: cambiosadscripcionCreateOrConnectWithoutDocumentosInput | cambiosadscripcionCreateOrConnectWithoutDocumentosInput[]
    upsert?: cambiosadscripcionUpsertWithWhereUniqueWithoutDocumentosInput | cambiosadscripcionUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: cambiosadscripcionCreateManyDocumentosInputEnvelope
    set?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    disconnect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    delete?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    connect?: cambiosadscripcionWhereUniqueInput | cambiosadscripcionWhereUniqueInput[]
    update?: cambiosadscripcionUpdateWithWhereUniqueWithoutDocumentosInput | cambiosadscripcionUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: cambiosadscripcionUpdateManyWithWhereWithoutDocumentosInput | cambiosadscripcionUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: cambiosadscripcionScalarWhereInput | cambiosadscripcionScalarWhereInput[]
  }

  export type hijosUncheckedUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput> | hijosCreateWithoutDocumentosInput[] | hijosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: hijosCreateOrConnectWithoutDocumentosInput | hijosCreateOrConnectWithoutDocumentosInput[]
    upsert?: hijosUpsertWithWhereUniqueWithoutDocumentosInput | hijosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: hijosCreateManyDocumentosInputEnvelope
    set?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    disconnect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    delete?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    connect?: hijosWhereUniqueInput | hijosWhereUniqueInput[]
    update?: hijosUpdateWithWhereUniqueWithoutDocumentosInput | hijosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: hijosUpdateManyWithWhereWithoutDocumentosInput | hijosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: hijosScalarWhereInput | hijosScalarWhereInput[]
  }

  export type permisosUncheckedUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput> | permisosCreateWithoutDocumentosInput[] | permisosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: permisosCreateOrConnectWithoutDocumentosInput | permisosCreateOrConnectWithoutDocumentosInput[]
    upsert?: permisosUpsertWithWhereUniqueWithoutDocumentosInput | permisosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: permisosCreateManyDocumentosInputEnvelope
    set?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    disconnect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    delete?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    connect?: permisosWhereUniqueInput | permisosWhereUniqueInput[]
    update?: permisosUpdateWithWhereUniqueWithoutDocumentosInput | permisosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: permisosUpdateManyWithWhereWithoutDocumentosInput | permisosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: permisosScalarWhereInput | permisosScalarWhereInput[]
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutDocumentosNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput> | trabajadores_cursosCreateWithoutDocumentosInput[] | trabajadores_cursosUncheckedCreateWithoutDocumentosInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutDocumentosInput | trabajadores_cursosCreateOrConnectWithoutDocumentosInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutDocumentosInput | trabajadores_cursosUpsertWithWhereUniqueWithoutDocumentosInput[]
    createMany?: trabajadores_cursosCreateManyDocumentosInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutDocumentosInput | trabajadores_cursosUpdateWithWhereUniqueWithoutDocumentosInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutDocumentosInput | trabajadores_cursosUpdateManyWithWhereWithoutDocumentosInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type documentosCreateNestedOneWithoutHijosInput = {
    create?: XOR<documentosCreateWithoutHijosInput, documentosUncheckedCreateWithoutHijosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutHijosInput
    connect?: documentosWhereUniqueInput
  }

  export type documentosUpdateOneWithoutHijosNestedInput = {
    create?: XOR<documentosCreateWithoutHijosInput, documentosUncheckedCreateWithoutHijosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutHijosInput
    upsert?: documentosUpsertWithoutHijosInput
    disconnect?: documentosWhereInput | boolean
    delete?: documentosWhereInput | boolean
    connect?: documentosWhereUniqueInput
    update?: XOR<XOR<documentosUpdateToOneWithWhereWithoutHijosInput, documentosUpdateWithoutHijosInput>, documentosUncheckedUpdateWithoutHijosInput>
  }

  export type documentosCreateNestedOneWithoutPermisosInput = {
    create?: XOR<documentosCreateWithoutPermisosInput, documentosUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutPermisosInput
    connect?: documentosWhereUniqueInput
  }

  export type documentosUpdateOneWithoutPermisosNestedInput = {
    create?: XOR<documentosCreateWithoutPermisosInput, documentosUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutPermisosInput
    upsert?: documentosUpsertWithoutPermisosInput
    disconnect?: documentosWhereInput | boolean
    delete?: documentosWhereInput | boolean
    connect?: documentosWhereUniqueInput
    update?: XOR<XOR<documentosUpdateToOneWithWhereWithoutPermisosInput, documentosUpdateWithoutPermisosInput>, documentosUncheckedUpdateWithoutPermisosInput>
  }

  export type trabajadoresCreateNestedOneWithoutSancionesInput = {
    create?: XOR<trabajadoresCreateWithoutSancionesInput, trabajadoresUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSancionesInput
    connect?: trabajadoresWhereUniqueInput
  }

  export type trabajadoresUpdateOneRequiredWithoutSancionesNestedInput = {
    create?: XOR<trabajadoresCreateWithoutSancionesInput, trabajadoresUncheckedCreateWithoutSancionesInput>
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSancionesInput
    upsert?: trabajadoresUpsertWithoutSancionesInput
    connect?: trabajadoresWhereUniqueInput
    update?: XOR<XOR<trabajadoresUpdateToOneWithWhereWithoutSancionesInput, trabajadoresUpdateWithoutSancionesInput>, trabajadoresUncheckedUpdateWithoutSancionesInput>
  }

  export type trabajadoresCreateNestedManyWithoutSeccionInput = {
    create?: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput> | trabajadoresCreateWithoutSeccionInput[] | trabajadoresUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSeccionInput | trabajadoresCreateOrConnectWithoutSeccionInput[]
    createMany?: trabajadoresCreateManySeccionInputEnvelope
    connect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
  }

  export type trabajadoresUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput> | trabajadoresCreateWithoutSeccionInput[] | trabajadoresUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSeccionInput | trabajadoresCreateOrConnectWithoutSeccionInput[]
    createMany?: trabajadoresCreateManySeccionInputEnvelope
    connect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
  }

  export type trabajadoresUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput> | trabajadoresCreateWithoutSeccionInput[] | trabajadoresUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSeccionInput | trabajadoresCreateOrConnectWithoutSeccionInput[]
    upsert?: trabajadoresUpsertWithWhereUniqueWithoutSeccionInput | trabajadoresUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: trabajadoresCreateManySeccionInputEnvelope
    set?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    disconnect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    delete?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    connect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    update?: trabajadoresUpdateWithWhereUniqueWithoutSeccionInput | trabajadoresUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: trabajadoresUpdateManyWithWhereWithoutSeccionInput | trabajadoresUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: trabajadoresScalarWhereInput | trabajadoresScalarWhereInput[]
  }

  export type trabajadoresUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput> | trabajadoresCreateWithoutSeccionInput[] | trabajadoresUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: trabajadoresCreateOrConnectWithoutSeccionInput | trabajadoresCreateOrConnectWithoutSeccionInput[]
    upsert?: trabajadoresUpsertWithWhereUniqueWithoutSeccionInput | trabajadoresUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: trabajadoresCreateManySeccionInputEnvelope
    set?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    disconnect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    delete?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    connect?: trabajadoresWhereUniqueInput | trabajadoresWhereUniqueInput[]
    update?: trabajadoresUpdateWithWhereUniqueWithoutSeccionInput | trabajadoresUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: trabajadoresUpdateManyWithWhereWithoutSeccionInput | trabajadoresUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: trabajadoresScalarWhereInput | trabajadoresScalarWhereInput[]
  }

  export type sancionesCreateNestedManyWithoutTrabajadoresInput = {
    create?: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput> | sancionesCreateWithoutTrabajadoresInput[] | sancionesUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutTrabajadoresInput | sancionesCreateOrConnectWithoutTrabajadoresInput[]
    createMany?: sancionesCreateManyTrabajadoresInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type seccionesCreateNestedOneWithoutTrabajadoresInput = {
    create?: XOR<seccionesCreateWithoutTrabajadoresInput, seccionesUncheckedCreateWithoutTrabajadoresInput>
    connectOrCreate?: seccionesCreateOrConnectWithoutTrabajadoresInput
    connect?: seccionesWhereUniqueInput
  }

  export type trabajadores_cursosCreateNestedManyWithoutTrabajadoresInput = {
    create?: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput> | trabajadores_cursosCreateWithoutTrabajadoresInput[] | trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput | trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput[]
    createMany?: trabajadores_cursosCreateManyTrabajadoresInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type sancionesUncheckedCreateNestedManyWithoutTrabajadoresInput = {
    create?: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput> | sancionesCreateWithoutTrabajadoresInput[] | sancionesUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutTrabajadoresInput | sancionesCreateOrConnectWithoutTrabajadoresInput[]
    createMany?: sancionesCreateManyTrabajadoresInputEnvelope
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
  }

  export type trabajadores_cursosUncheckedCreateNestedManyWithoutTrabajadoresInput = {
    create?: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput> | trabajadores_cursosCreateWithoutTrabajadoresInput[] | trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput | trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput[]
    createMany?: trabajadores_cursosCreateManyTrabajadoresInputEnvelope
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
  }

  export type sancionesUpdateManyWithoutTrabajadoresNestedInput = {
    create?: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput> | sancionesCreateWithoutTrabajadoresInput[] | sancionesUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutTrabajadoresInput | sancionesCreateOrConnectWithoutTrabajadoresInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutTrabajadoresInput | sancionesUpsertWithWhereUniqueWithoutTrabajadoresInput[]
    createMany?: sancionesCreateManyTrabajadoresInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutTrabajadoresInput | sancionesUpdateWithWhereUniqueWithoutTrabajadoresInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutTrabajadoresInput | sancionesUpdateManyWithWhereWithoutTrabajadoresInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type seccionesUpdateOneRequiredWithoutTrabajadoresNestedInput = {
    create?: XOR<seccionesCreateWithoutTrabajadoresInput, seccionesUncheckedCreateWithoutTrabajadoresInput>
    connectOrCreate?: seccionesCreateOrConnectWithoutTrabajadoresInput
    upsert?: seccionesUpsertWithoutTrabajadoresInput
    connect?: seccionesWhereUniqueInput
    update?: XOR<XOR<seccionesUpdateToOneWithWhereWithoutTrabajadoresInput, seccionesUpdateWithoutTrabajadoresInput>, seccionesUncheckedUpdateWithoutTrabajadoresInput>
  }

  export type trabajadores_cursosUpdateManyWithoutTrabajadoresNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput> | trabajadores_cursosCreateWithoutTrabajadoresInput[] | trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput | trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutTrabajadoresInput | trabajadores_cursosUpsertWithWhereUniqueWithoutTrabajadoresInput[]
    createMany?: trabajadores_cursosCreateManyTrabajadoresInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutTrabajadoresInput | trabajadores_cursosUpdateWithWhereUniqueWithoutTrabajadoresInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutTrabajadoresInput | trabajadores_cursosUpdateManyWithWhereWithoutTrabajadoresInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type sancionesUncheckedUpdateManyWithoutTrabajadoresNestedInput = {
    create?: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput> | sancionesCreateWithoutTrabajadoresInput[] | sancionesUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: sancionesCreateOrConnectWithoutTrabajadoresInput | sancionesCreateOrConnectWithoutTrabajadoresInput[]
    upsert?: sancionesUpsertWithWhereUniqueWithoutTrabajadoresInput | sancionesUpsertWithWhereUniqueWithoutTrabajadoresInput[]
    createMany?: sancionesCreateManyTrabajadoresInputEnvelope
    set?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    disconnect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    delete?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    connect?: sancionesWhereUniqueInput | sancionesWhereUniqueInput[]
    update?: sancionesUpdateWithWhereUniqueWithoutTrabajadoresInput | sancionesUpdateWithWhereUniqueWithoutTrabajadoresInput[]
    updateMany?: sancionesUpdateManyWithWhereWithoutTrabajadoresInput | sancionesUpdateManyWithWhereWithoutTrabajadoresInput[]
    deleteMany?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresNestedInput = {
    create?: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput> | trabajadores_cursosCreateWithoutTrabajadoresInput[] | trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput[]
    connectOrCreate?: trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput | trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput[]
    upsert?: trabajadores_cursosUpsertWithWhereUniqueWithoutTrabajadoresInput | trabajadores_cursosUpsertWithWhereUniqueWithoutTrabajadoresInput[]
    createMany?: trabajadores_cursosCreateManyTrabajadoresInputEnvelope
    set?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    disconnect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    delete?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    connect?: trabajadores_cursosWhereUniqueInput | trabajadores_cursosWhereUniqueInput[]
    update?: trabajadores_cursosUpdateWithWhereUniqueWithoutTrabajadoresInput | trabajadores_cursosUpdateWithWhereUniqueWithoutTrabajadoresInput[]
    updateMany?: trabajadores_cursosUpdateManyWithWhereWithoutTrabajadoresInput | trabajadores_cursosUpdateManyWithWhereWithoutTrabajadoresInput[]
    deleteMany?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
  }

  export type documentosCreateNestedOneWithoutTrabajadores_cursosInput = {
    create?: XOR<documentosCreateWithoutTrabajadores_cursosInput, documentosUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutTrabajadores_cursosInput
    connect?: documentosWhereUniqueInput
  }

  export type cursosCreateNestedOneWithoutTrabajadores_cursosInput = {
    create?: XOR<cursosCreateWithoutTrabajadores_cursosInput, cursosUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutTrabajadores_cursosInput
    connect?: cursosWhereUniqueInput
  }

  export type trabajadoresCreateNestedOneWithoutTrabajadores_cursosInput = {
    create?: XOR<trabajadoresCreateWithoutTrabajadores_cursosInput, trabajadoresUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: trabajadoresCreateOrConnectWithoutTrabajadores_cursosInput
    connect?: trabajadoresWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type documentosUpdateOneWithoutTrabajadores_cursosNestedInput = {
    create?: XOR<documentosCreateWithoutTrabajadores_cursosInput, documentosUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: documentosCreateOrConnectWithoutTrabajadores_cursosInput
    upsert?: documentosUpsertWithoutTrabajadores_cursosInput
    disconnect?: documentosWhereInput | boolean
    delete?: documentosWhereInput | boolean
    connect?: documentosWhereUniqueInput
    update?: XOR<XOR<documentosUpdateToOneWithWhereWithoutTrabajadores_cursosInput, documentosUpdateWithoutTrabajadores_cursosInput>, documentosUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type cursosUpdateOneRequiredWithoutTrabajadores_cursosNestedInput = {
    create?: XOR<cursosCreateWithoutTrabajadores_cursosInput, cursosUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutTrabajadores_cursosInput
    upsert?: cursosUpsertWithoutTrabajadores_cursosInput
    connect?: cursosWhereUniqueInput
    update?: XOR<XOR<cursosUpdateToOneWithWhereWithoutTrabajadores_cursosInput, cursosUpdateWithoutTrabajadores_cursosInput>, cursosUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type trabajadoresUpdateOneRequiredWithoutTrabajadores_cursosNestedInput = {
    create?: XOR<trabajadoresCreateWithoutTrabajadores_cursosInput, trabajadoresUncheckedCreateWithoutTrabajadores_cursosInput>
    connectOrCreate?: trabajadoresCreateOrConnectWithoutTrabajadores_cursosInput
    upsert?: trabajadoresUpsertWithoutTrabajadores_cursosInput
    connect?: trabajadoresWhereUniqueInput
    update?: XOR<XOR<trabajadoresUpdateToOneWithWhereWithoutTrabajadores_cursosInput, trabajadoresUpdateWithoutTrabajadores_cursosInput>, trabajadoresUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type Enumrol_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.rol_usuario
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumrol_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioFilter<$PrismaModel> | $Enums.rol_usuario
  }

  export type NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol_usuario | Enumrol_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol_usuario[] | ListEnumrol_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumrol_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.rol_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrol_usuarioFilter<$PrismaModel>
    _max?: NestedEnumrol_usuarioFilter<$PrismaModel>
  }

  export type documentosCreateWithoutCambiosadscripcionInput = {
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    hijos?: hijosCreateNestedManyWithoutDocumentosInput
    permisos?: permisosCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUncheckedCreateWithoutCambiosadscripcionInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    hijos?: hijosUncheckedCreateNestedManyWithoutDocumentosInput
    permisos?: permisosUncheckedCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutDocumentosInput
  }

  export type documentosCreateOrConnectWithoutCambiosadscripcionInput = {
    where: documentosWhereUniqueInput
    create: XOR<documentosCreateWithoutCambiosadscripcionInput, documentosUncheckedCreateWithoutCambiosadscripcionInput>
  }

  export type documentosUpsertWithoutCambiosadscripcionInput = {
    update: XOR<documentosUpdateWithoutCambiosadscripcionInput, documentosUncheckedUpdateWithoutCambiosadscripcionInput>
    create: XOR<documentosCreateWithoutCambiosadscripcionInput, documentosUncheckedCreateWithoutCambiosadscripcionInput>
    where?: documentosWhereInput
  }

  export type documentosUpdateToOneWithWhereWithoutCambiosadscripcionInput = {
    where?: documentosWhereInput
    data: XOR<documentosUpdateWithoutCambiosadscripcionInput, documentosUncheckedUpdateWithoutCambiosadscripcionInput>
  }

  export type documentosUpdateWithoutCambiosadscripcionInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hijos?: hijosUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosUncheckedUpdateWithoutCambiosadscripcionInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hijos?: hijosUncheckedUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUncheckedUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutDocumentosNestedInput
  }

  export type trabajadores_cursosCreateWithoutCursosInput = {
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    documentos?: documentosCreateNestedOneWithoutTrabajadores_cursosInput
    trabajadores: trabajadoresCreateNestedOneWithoutTrabajadores_cursosInput
  }

  export type trabajadores_cursosUncheckedCreateWithoutCursosInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type trabajadores_cursosCreateOrConnectWithoutCursosInput = {
    where: trabajadores_cursosWhereUniqueInput
    create: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput>
  }

  export type trabajadores_cursosCreateManyCursosInputEnvelope = {
    data: trabajadores_cursosCreateManyCursosInput | trabajadores_cursosCreateManyCursosInput[]
    skipDuplicates?: boolean
  }

  export type trabajadores_cursosUpsertWithWhereUniqueWithoutCursosInput = {
    where: trabajadores_cursosWhereUniqueInput
    update: XOR<trabajadores_cursosUpdateWithoutCursosInput, trabajadores_cursosUncheckedUpdateWithoutCursosInput>
    create: XOR<trabajadores_cursosCreateWithoutCursosInput, trabajadores_cursosUncheckedCreateWithoutCursosInput>
  }

  export type trabajadores_cursosUpdateWithWhereUniqueWithoutCursosInput = {
    where: trabajadores_cursosWhereUniqueInput
    data: XOR<trabajadores_cursosUpdateWithoutCursosInput, trabajadores_cursosUncheckedUpdateWithoutCursosInput>
  }

  export type trabajadores_cursosUpdateManyWithWhereWithoutCursosInput = {
    where: trabajadores_cursosScalarWhereInput
    data: XOR<trabajadores_cursosUpdateManyMutationInput, trabajadores_cursosUncheckedUpdateManyWithoutCursosInput>
  }

  export type trabajadores_cursosScalarWhereInput = {
    AND?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
    OR?: trabajadores_cursosScalarWhereInput[]
    NOT?: trabajadores_cursosScalarWhereInput | trabajadores_cursosScalarWhereInput[]
    id_trabajador_curso?: IntFilter<"trabajadores_cursos"> | number
    id_trabajador?: IntFilter<"trabajadores_cursos"> | number
    id_curso?: IntFilter<"trabajadores_cursos"> | number
    fecha_inscripcion?: DateTimeFilter<"trabajadores_cursos"> | Date | string
    calificacion?: DecimalNullableFilter<"trabajadores_cursos"> | Decimal | DecimalJsLike | number | string | null
    completado?: BoolNullableFilter<"trabajadores_cursos"> | boolean | null
    fecha_completado?: DateTimeNullableFilter<"trabajadores_cursos"> | Date | string | null
    certificado_id?: IntNullableFilter<"trabajadores_cursos"> | number | null
  }

  export type cambiosadscripcionCreateWithoutDocumentosInput = {
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type cambiosadscripcionUncheckedCreateWithoutDocumentosInput = {
    id_cambio?: number
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type cambiosadscripcionCreateOrConnectWithoutDocumentosInput = {
    where: cambiosadscripcionWhereUniqueInput
    create: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput>
  }

  export type cambiosadscripcionCreateManyDocumentosInputEnvelope = {
    data: cambiosadscripcionCreateManyDocumentosInput | cambiosadscripcionCreateManyDocumentosInput[]
    skipDuplicates?: boolean
  }

  export type hijosCreateWithoutDocumentosInput = {
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    vigente?: boolean | null
  }

  export type hijosUncheckedCreateWithoutDocumentosInput = {
    id_hijo?: number
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    vigente?: boolean | null
  }

  export type hijosCreateOrConnectWithoutDocumentosInput = {
    where: hijosWhereUniqueInput
    create: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput>
  }

  export type hijosCreateManyDocumentosInputEnvelope = {
    data: hijosCreateManyDocumentosInput | hijosCreateManyDocumentosInput[]
    skipDuplicates?: boolean
  }

  export type permisosCreateWithoutDocumentosInput = {
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    fecha_registro?: Date | string | null
  }

  export type permisosUncheckedCreateWithoutDocumentosInput = {
    id_permiso?: number
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    fecha_registro?: Date | string | null
  }

  export type permisosCreateOrConnectWithoutDocumentosInput = {
    where: permisosWhereUniqueInput
    create: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput>
  }

  export type permisosCreateManyDocumentosInputEnvelope = {
    data: permisosCreateManyDocumentosInput | permisosCreateManyDocumentosInput[]
    skipDuplicates?: boolean
  }

  export type trabajadores_cursosCreateWithoutDocumentosInput = {
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    cursos: cursosCreateNestedOneWithoutTrabajadores_cursosInput
    trabajadores: trabajadoresCreateNestedOneWithoutTrabajadores_cursosInput
  }

  export type trabajadores_cursosUncheckedCreateWithoutDocumentosInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
  }

  export type trabajadores_cursosCreateOrConnectWithoutDocumentosInput = {
    where: trabajadores_cursosWhereUniqueInput
    create: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput>
  }

  export type trabajadores_cursosCreateManyDocumentosInputEnvelope = {
    data: trabajadores_cursosCreateManyDocumentosInput | trabajadores_cursosCreateManyDocumentosInput[]
    skipDuplicates?: boolean
  }

  export type cambiosadscripcionUpsertWithWhereUniqueWithoutDocumentosInput = {
    where: cambiosadscripcionWhereUniqueInput
    update: XOR<cambiosadscripcionUpdateWithoutDocumentosInput, cambiosadscripcionUncheckedUpdateWithoutDocumentosInput>
    create: XOR<cambiosadscripcionCreateWithoutDocumentosInput, cambiosadscripcionUncheckedCreateWithoutDocumentosInput>
  }

  export type cambiosadscripcionUpdateWithWhereUniqueWithoutDocumentosInput = {
    where: cambiosadscripcionWhereUniqueInput
    data: XOR<cambiosadscripcionUpdateWithoutDocumentosInput, cambiosadscripcionUncheckedUpdateWithoutDocumentosInput>
  }

  export type cambiosadscripcionUpdateManyWithWhereWithoutDocumentosInput = {
    where: cambiosadscripcionScalarWhereInput
    data: XOR<cambiosadscripcionUpdateManyMutationInput, cambiosadscripcionUncheckedUpdateManyWithoutDocumentosInput>
  }

  export type cambiosadscripcionScalarWhereInput = {
    AND?: cambiosadscripcionScalarWhereInput | cambiosadscripcionScalarWhereInput[]
    OR?: cambiosadscripcionScalarWhereInput[]
    NOT?: cambiosadscripcionScalarWhereInput | cambiosadscripcionScalarWhereInput[]
    id_cambio?: IntFilter<"cambiosadscripcion"> | number
    id_trabajador?: IntFilter<"cambiosadscripcion"> | number
    adscripcion_anterior?: StringFilter<"cambiosadscripcion"> | string
    adscripcion_nueva?: StringFilter<"cambiosadscripcion"> | string
    fecha_cambio?: DateTimeFilter<"cambiosadscripcion"> | Date | string
    motivo?: StringFilter<"cambiosadscripcion"> | string
    documento_respaldo_id?: IntNullableFilter<"cambiosadscripcion"> | number | null
    usuario_registro?: StringNullableFilter<"cambiosadscripcion"> | string | null
    fecha_registro?: DateTimeNullableFilter<"cambiosadscripcion"> | Date | string | null
  }

  export type hijosUpsertWithWhereUniqueWithoutDocumentosInput = {
    where: hijosWhereUniqueInput
    update: XOR<hijosUpdateWithoutDocumentosInput, hijosUncheckedUpdateWithoutDocumentosInput>
    create: XOR<hijosCreateWithoutDocumentosInput, hijosUncheckedCreateWithoutDocumentosInput>
  }

  export type hijosUpdateWithWhereUniqueWithoutDocumentosInput = {
    where: hijosWhereUniqueInput
    data: XOR<hijosUpdateWithoutDocumentosInput, hijosUncheckedUpdateWithoutDocumentosInput>
  }

  export type hijosUpdateManyWithWhereWithoutDocumentosInput = {
    where: hijosScalarWhereInput
    data: XOR<hijosUpdateManyMutationInput, hijosUncheckedUpdateManyWithoutDocumentosInput>
  }

  export type hijosScalarWhereInput = {
    AND?: hijosScalarWhereInput | hijosScalarWhereInput[]
    OR?: hijosScalarWhereInput[]
    NOT?: hijosScalarWhereInput | hijosScalarWhereInput[]
    id_hijo?: IntFilter<"hijos"> | number
    id_trabajador?: IntFilter<"hijos"> | number
    nombre_completo?: StringFilter<"hijos"> | string
    fecha_nacimiento?: DateTimeFilter<"hijos"> | Date | string
    acta_nacimiento_id?: IntNullableFilter<"hijos"> | number | null
    vigente?: BoolNullableFilter<"hijos"> | boolean | null
  }

  export type permisosUpsertWithWhereUniqueWithoutDocumentosInput = {
    where: permisosWhereUniqueInput
    update: XOR<permisosUpdateWithoutDocumentosInput, permisosUncheckedUpdateWithoutDocumentosInput>
    create: XOR<permisosCreateWithoutDocumentosInput, permisosUncheckedCreateWithoutDocumentosInput>
  }

  export type permisosUpdateWithWhereUniqueWithoutDocumentosInput = {
    where: permisosWhereUniqueInput
    data: XOR<permisosUpdateWithoutDocumentosInput, permisosUncheckedUpdateWithoutDocumentosInput>
  }

  export type permisosUpdateManyWithWhereWithoutDocumentosInput = {
    where: permisosScalarWhereInput
    data: XOR<permisosUpdateManyMutationInput, permisosUncheckedUpdateManyWithoutDocumentosInput>
  }

  export type permisosScalarWhereInput = {
    AND?: permisosScalarWhereInput | permisosScalarWhereInput[]
    OR?: permisosScalarWhereInput[]
    NOT?: permisosScalarWhereInput | permisosScalarWhereInput[]
    id_permiso?: IntFilter<"permisos"> | number
    id_trabajador?: IntFilter<"permisos"> | number
    tipo_permiso?: StringNullableFilter<"permisos"> | string | null
    fecha_inicio?: DateTimeFilter<"permisos"> | Date | string
    fecha_fin?: DateTimeFilter<"permisos"> | Date | string
    motivo?: StringFilter<"permisos"> | string
    estatus?: StringNullableFilter<"permisos"> | string | null
    documento_aprobacion_id?: IntNullableFilter<"permisos"> | number | null
    fecha_registro?: DateTimeNullableFilter<"permisos"> | Date | string | null
  }

  export type trabajadores_cursosUpsertWithWhereUniqueWithoutDocumentosInput = {
    where: trabajadores_cursosWhereUniqueInput
    update: XOR<trabajadores_cursosUpdateWithoutDocumentosInput, trabajadores_cursosUncheckedUpdateWithoutDocumentosInput>
    create: XOR<trabajadores_cursosCreateWithoutDocumentosInput, trabajadores_cursosUncheckedCreateWithoutDocumentosInput>
  }

  export type trabajadores_cursosUpdateWithWhereUniqueWithoutDocumentosInput = {
    where: trabajadores_cursosWhereUniqueInput
    data: XOR<trabajadores_cursosUpdateWithoutDocumentosInput, trabajadores_cursosUncheckedUpdateWithoutDocumentosInput>
  }

  export type trabajadores_cursosUpdateManyWithWhereWithoutDocumentosInput = {
    where: trabajadores_cursosScalarWhereInput
    data: XOR<trabajadores_cursosUpdateManyMutationInput, trabajadores_cursosUncheckedUpdateManyWithoutDocumentosInput>
  }

  export type documentosCreateWithoutHijosInput = {
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionCreateNestedManyWithoutDocumentosInput
    permisos?: permisosCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUncheckedCreateWithoutHijosInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedCreateNestedManyWithoutDocumentosInput
    permisos?: permisosUncheckedCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutDocumentosInput
  }

  export type documentosCreateOrConnectWithoutHijosInput = {
    where: documentosWhereUniqueInput
    create: XOR<documentosCreateWithoutHijosInput, documentosUncheckedCreateWithoutHijosInput>
  }

  export type documentosUpsertWithoutHijosInput = {
    update: XOR<documentosUpdateWithoutHijosInput, documentosUncheckedUpdateWithoutHijosInput>
    create: XOR<documentosCreateWithoutHijosInput, documentosUncheckedCreateWithoutHijosInput>
    where?: documentosWhereInput
  }

  export type documentosUpdateToOneWithWhereWithoutHijosInput = {
    where?: documentosWhereInput
    data: XOR<documentosUpdateWithoutHijosInput, documentosUncheckedUpdateWithoutHijosInput>
  }

  export type documentosUpdateWithoutHijosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosUncheckedUpdateWithoutHijosInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUncheckedUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosCreateWithoutPermisosInput = {
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionCreateNestedManyWithoutDocumentosInput
    hijos?: hijosCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUncheckedCreateWithoutPermisosInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedCreateNestedManyWithoutDocumentosInput
    hijos?: hijosUncheckedCreateNestedManyWithoutDocumentosInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutDocumentosInput
  }

  export type documentosCreateOrConnectWithoutPermisosInput = {
    where: documentosWhereUniqueInput
    create: XOR<documentosCreateWithoutPermisosInput, documentosUncheckedCreateWithoutPermisosInput>
  }

  export type documentosUpsertWithoutPermisosInput = {
    update: XOR<documentosUpdateWithoutPermisosInput, documentosUncheckedUpdateWithoutPermisosInput>
    create: XOR<documentosCreateWithoutPermisosInput, documentosUncheckedCreateWithoutPermisosInput>
    where?: documentosWhereInput
  }

  export type documentosUpdateToOneWithWhereWithoutPermisosInput = {
    where?: documentosWhereInput
    data: XOR<documentosUpdateWithoutPermisosInput, documentosUncheckedUpdateWithoutPermisosInput>
  }

  export type documentosUpdateWithoutPermisosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosUncheckedUpdateWithoutPermisosInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUncheckedUpdateManyWithoutDocumentosNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutDocumentosNestedInput
  }

  export type trabajadoresCreateWithoutSancionesInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    seccion: seccionesCreateNestedOneWithoutTrabajadoresInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresUncheckedCreateWithoutSancionesInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    id_seccion: number
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresCreateOrConnectWithoutSancionesInput = {
    where: trabajadoresWhereUniqueInput
    create: XOR<trabajadoresCreateWithoutSancionesInput, trabajadoresUncheckedCreateWithoutSancionesInput>
  }

  export type trabajadoresUpsertWithoutSancionesInput = {
    update: XOR<trabajadoresUpdateWithoutSancionesInput, trabajadoresUncheckedUpdateWithoutSancionesInput>
    create: XOR<trabajadoresCreateWithoutSancionesInput, trabajadoresUncheckedCreateWithoutSancionesInput>
    where?: trabajadoresWhereInput
  }

  export type trabajadoresUpdateToOneWithWhereWithoutSancionesInput = {
    where?: trabajadoresWhereInput
    data: XOR<trabajadoresUpdateWithoutSancionesInput, trabajadoresUncheckedUpdateWithoutSancionesInput>
  }

  export type trabajadoresUpdateWithoutSancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seccion?: seccionesUpdateOneRequiredWithoutTrabajadoresNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresUncheckedUpdateWithoutSancionesInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    id_seccion?: IntFieldUpdateOperationsInput | number
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresCreateWithoutSeccionInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesCreateNestedManyWithoutTrabajadoresInput
    trabajadores_cursos?: trabajadores_cursosCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresUncheckedCreateWithoutSeccionInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesUncheckedCreateNestedManyWithoutTrabajadoresInput
    trabajadores_cursos?: trabajadores_cursosUncheckedCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresCreateOrConnectWithoutSeccionInput = {
    where: trabajadoresWhereUniqueInput
    create: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput>
  }

  export type trabajadoresCreateManySeccionInputEnvelope = {
    data: trabajadoresCreateManySeccionInput | trabajadoresCreateManySeccionInput[]
    skipDuplicates?: boolean
  }

  export type trabajadoresUpsertWithWhereUniqueWithoutSeccionInput = {
    where: trabajadoresWhereUniqueInput
    update: XOR<trabajadoresUpdateWithoutSeccionInput, trabajadoresUncheckedUpdateWithoutSeccionInput>
    create: XOR<trabajadoresCreateWithoutSeccionInput, trabajadoresUncheckedCreateWithoutSeccionInput>
  }

  export type trabajadoresUpdateWithWhereUniqueWithoutSeccionInput = {
    where: trabajadoresWhereUniqueInput
    data: XOR<trabajadoresUpdateWithoutSeccionInput, trabajadoresUncheckedUpdateWithoutSeccionInput>
  }

  export type trabajadoresUpdateManyWithWhereWithoutSeccionInput = {
    where: trabajadoresScalarWhereInput
    data: XOR<trabajadoresUpdateManyMutationInput, trabajadoresUncheckedUpdateManyWithoutSeccionInput>
  }

  export type trabajadoresScalarWhereInput = {
    AND?: trabajadoresScalarWhereInput | trabajadoresScalarWhereInput[]
    OR?: trabajadoresScalarWhereInput[]
    NOT?: trabajadoresScalarWhereInput | trabajadoresScalarWhereInput[]
    id_trabajador?: IntFilter<"trabajadores"> | number
    nombre?: StringFilter<"trabajadores"> | string
    apellido_paterno?: StringFilter<"trabajadores"> | string
    apellido_materno?: StringNullableFilter<"trabajadores"> | string | null
    fecha_nacimiento?: DateTimeFilter<"trabajadores"> | Date | string
    sexo?: StringFilter<"trabajadores"> | string
    curp?: StringFilter<"trabajadores"> | string
    rfc?: StringFilter<"trabajadores"> | string
    email?: StringFilter<"trabajadores"> | string
    situacion_sentimental?: StringNullableFilter<"trabajadores"> | string | null
    numero_hijos?: IntFilter<"trabajadores"> | number
    numero_empleado?: StringFilter<"trabajadores"> | string
    numero_plaza?: StringFilter<"trabajadores"> | string
    fecha_ingreso?: DateTimeFilter<"trabajadores"> | Date | string
    fecha_ingreso_gobierno?: DateTimeFilter<"trabajadores"> | Date | string
    nivel_puesto?: StringFilter<"trabajadores"> | string
    nombre_puesto?: StringFilter<"trabajadores"> | string
    puesto_inpi?: StringNullableFilter<"trabajadores"> | string | null
    adscripcion?: StringFilter<"trabajadores"> | string
    id_seccion?: IntFilter<"trabajadores"> | number
    nivel_estudios?: StringNullableFilter<"trabajadores"> | string | null
    institucion_estudios?: StringNullableFilter<"trabajadores"> | string | null
    certificado_estudios?: BoolNullableFilter<"trabajadores"> | boolean | null
    plaza_base?: StringNullableFilter<"trabajadores"> | string | null
    fecha_actualizacion?: DateTimeNullableFilter<"trabajadores"> | Date | string | null
  }

  export type sancionesCreateWithoutTrabajadoresInput = {
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type sancionesUncheckedCreateWithoutTrabajadoresInput = {
    id_sancion?: number
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type sancionesCreateOrConnectWithoutTrabajadoresInput = {
    where: sancionesWhereUniqueInput
    create: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput>
  }

  export type sancionesCreateManyTrabajadoresInputEnvelope = {
    data: sancionesCreateManyTrabajadoresInput | sancionesCreateManyTrabajadoresInput[]
    skipDuplicates?: boolean
  }

  export type seccionesCreateWithoutTrabajadoresInput = {
    nombre_seccion: string
    descripcion?: string | null
  }

  export type seccionesUncheckedCreateWithoutTrabajadoresInput = {
    id_seccion?: number
    nombre_seccion: string
    descripcion?: string | null
  }

  export type seccionesCreateOrConnectWithoutTrabajadoresInput = {
    where: seccionesWhereUniqueInput
    create: XOR<seccionesCreateWithoutTrabajadoresInput, seccionesUncheckedCreateWithoutTrabajadoresInput>
  }

  export type trabajadores_cursosCreateWithoutTrabajadoresInput = {
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    documentos?: documentosCreateNestedOneWithoutTrabajadores_cursosInput
    cursos: cursosCreateNestedOneWithoutTrabajadores_cursosInput
  }

  export type trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput = {
    id_trabajador_curso?: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type trabajadores_cursosCreateOrConnectWithoutTrabajadoresInput = {
    where: trabajadores_cursosWhereUniqueInput
    create: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput>
  }

  export type trabajadores_cursosCreateManyTrabajadoresInputEnvelope = {
    data: trabajadores_cursosCreateManyTrabajadoresInput | trabajadores_cursosCreateManyTrabajadoresInput[]
    skipDuplicates?: boolean
  }

  export type sancionesUpsertWithWhereUniqueWithoutTrabajadoresInput = {
    where: sancionesWhereUniqueInput
    update: XOR<sancionesUpdateWithoutTrabajadoresInput, sancionesUncheckedUpdateWithoutTrabajadoresInput>
    create: XOR<sancionesCreateWithoutTrabajadoresInput, sancionesUncheckedCreateWithoutTrabajadoresInput>
  }

  export type sancionesUpdateWithWhereUniqueWithoutTrabajadoresInput = {
    where: sancionesWhereUniqueInput
    data: XOR<sancionesUpdateWithoutTrabajadoresInput, sancionesUncheckedUpdateWithoutTrabajadoresInput>
  }

  export type sancionesUpdateManyWithWhereWithoutTrabajadoresInput = {
    where: sancionesScalarWhereInput
    data: XOR<sancionesUpdateManyMutationInput, sancionesUncheckedUpdateManyWithoutTrabajadoresInput>
  }

  export type sancionesScalarWhereInput = {
    AND?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
    OR?: sancionesScalarWhereInput[]
    NOT?: sancionesScalarWhereInput | sancionesScalarWhereInput[]
    id_sancion?: IntFilter<"sanciones"> | number
    id_trabajador?: IntFilter<"sanciones"> | number
    tipo_sancion?: StringFilter<"sanciones"> | string
    descripcion?: StringFilter<"sanciones"> | string
    fecha_aplicacion?: DateTimeFilter<"sanciones"> | Date | string
    fecha_fin?: DateTimeNullableFilter<"sanciones"> | Date | string | null
    estatus?: StringNullableFilter<"sanciones"> | string | null
    usuario_registro?: StringNullableFilter<"sanciones"> | string | null
    fecha_registro?: DateTimeNullableFilter<"sanciones"> | Date | string | null
  }

  export type seccionesUpsertWithoutTrabajadoresInput = {
    update: XOR<seccionesUpdateWithoutTrabajadoresInput, seccionesUncheckedUpdateWithoutTrabajadoresInput>
    create: XOR<seccionesCreateWithoutTrabajadoresInput, seccionesUncheckedCreateWithoutTrabajadoresInput>
    where?: seccionesWhereInput
  }

  export type seccionesUpdateToOneWithWhereWithoutTrabajadoresInput = {
    where?: seccionesWhereInput
    data: XOR<seccionesUpdateWithoutTrabajadoresInput, seccionesUncheckedUpdateWithoutTrabajadoresInput>
  }

  export type seccionesUpdateWithoutTrabajadoresInput = {
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type seccionesUncheckedUpdateWithoutTrabajadoresInput = {
    id_seccion?: IntFieldUpdateOperationsInput | number
    nombre_seccion?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trabajadores_cursosUpsertWithWhereUniqueWithoutTrabajadoresInput = {
    where: trabajadores_cursosWhereUniqueInput
    update: XOR<trabajadores_cursosUpdateWithoutTrabajadoresInput, trabajadores_cursosUncheckedUpdateWithoutTrabajadoresInput>
    create: XOR<trabajadores_cursosCreateWithoutTrabajadoresInput, trabajadores_cursosUncheckedCreateWithoutTrabajadoresInput>
  }

  export type trabajadores_cursosUpdateWithWhereUniqueWithoutTrabajadoresInput = {
    where: trabajadores_cursosWhereUniqueInput
    data: XOR<trabajadores_cursosUpdateWithoutTrabajadoresInput, trabajadores_cursosUncheckedUpdateWithoutTrabajadoresInput>
  }

  export type trabajadores_cursosUpdateManyWithWhereWithoutTrabajadoresInput = {
    where: trabajadores_cursosScalarWhereInput
    data: XOR<trabajadores_cursosUpdateManyMutationInput, trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresInput>
  }

  export type documentosCreateWithoutTrabajadores_cursosInput = {
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionCreateNestedManyWithoutDocumentosInput
    hijos?: hijosCreateNestedManyWithoutDocumentosInput
    permisos?: permisosCreateNestedManyWithoutDocumentosInput
  }

  export type documentosUncheckedCreateWithoutTrabajadores_cursosInput = {
    id_documento?: number
    id_trabajador: number
    tipo_documento: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo: string
    nombre_archivo: string
    descripcion?: string | null
    tipo_archivo?: string | null
    ruta_almacenamiento: string
    fecha_subida?: Date | string | null
    tamano_bytes: bigint | number
    es_publico?: boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedCreateNestedManyWithoutDocumentosInput
    hijos?: hijosUncheckedCreateNestedManyWithoutDocumentosInput
    permisos?: permisosUncheckedCreateNestedManyWithoutDocumentosInput
  }

  export type documentosCreateOrConnectWithoutTrabajadores_cursosInput = {
    where: documentosWhereUniqueInput
    create: XOR<documentosCreateWithoutTrabajadores_cursosInput, documentosUncheckedCreateWithoutTrabajadores_cursosInput>
  }

  export type cursosCreateWithoutTrabajadores_cursosInput = {
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus?: string | null
  }

  export type cursosUncheckedCreateWithoutTrabajadores_cursosInput = {
    id_curso?: number
    codigo_curso: string
    nombre_curso: string
    horas_duracion: number
    estatus?: string | null
  }

  export type cursosCreateOrConnectWithoutTrabajadores_cursosInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutTrabajadores_cursosInput, cursosUncheckedCreateWithoutTrabajadores_cursosInput>
  }

  export type trabajadoresCreateWithoutTrabajadores_cursosInput = {
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesCreateNestedManyWithoutTrabajadoresInput
    seccion: seccionesCreateNestedOneWithoutTrabajadoresInput
  }

  export type trabajadoresUncheckedCreateWithoutTrabajadores_cursosInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    id_seccion: number
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
    sanciones?: sancionesUncheckedCreateNestedManyWithoutTrabajadoresInput
  }

  export type trabajadoresCreateOrConnectWithoutTrabajadores_cursosInput = {
    where: trabajadoresWhereUniqueInput
    create: XOR<trabajadoresCreateWithoutTrabajadores_cursosInput, trabajadoresUncheckedCreateWithoutTrabajadores_cursosInput>
  }

  export type documentosUpsertWithoutTrabajadores_cursosInput = {
    update: XOR<documentosUpdateWithoutTrabajadores_cursosInput, documentosUncheckedUpdateWithoutTrabajadores_cursosInput>
    create: XOR<documentosCreateWithoutTrabajadores_cursosInput, documentosUncheckedCreateWithoutTrabajadores_cursosInput>
    where?: documentosWhereInput
  }

  export type documentosUpdateToOneWithWhereWithoutTrabajadores_cursosInput = {
    where?: documentosWhereInput
    data: XOR<documentosUpdateWithoutTrabajadores_cursosInput, documentosUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type documentosUpdateWithoutTrabajadores_cursosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUpdateManyWithoutDocumentosNestedInput
  }

  export type documentosUncheckedUpdateWithoutTrabajadores_cursosInput = {
    id_documento?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_documento?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    hash_archivo?: StringFieldUpdateOperationsInput | string
    nombre_archivo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_archivo?: NullableStringFieldUpdateOperationsInput | string | null
    ruta_almacenamiento?: StringFieldUpdateOperationsInput | string
    fecha_subida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tamano_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    es_publico?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cambiosadscripcion?: cambiosadscripcionUncheckedUpdateManyWithoutDocumentosNestedInput
    hijos?: hijosUncheckedUpdateManyWithoutDocumentosNestedInput
    permisos?: permisosUncheckedUpdateManyWithoutDocumentosNestedInput
  }

  export type cursosUpsertWithoutTrabajadores_cursosInput = {
    update: XOR<cursosUpdateWithoutTrabajadores_cursosInput, cursosUncheckedUpdateWithoutTrabajadores_cursosInput>
    create: XOR<cursosCreateWithoutTrabajadores_cursosInput, cursosUncheckedCreateWithoutTrabajadores_cursosInput>
    where?: cursosWhereInput
  }

  export type cursosUpdateToOneWithWhereWithoutTrabajadores_cursosInput = {
    where?: cursosWhereInput
    data: XOR<cursosUpdateWithoutTrabajadores_cursosInput, cursosUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type cursosUpdateWithoutTrabajadores_cursosInput = {
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cursosUncheckedUpdateWithoutTrabajadores_cursosInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    codigo_curso?: StringFieldUpdateOperationsInput | string
    nombre_curso?: StringFieldUpdateOperationsInput | string
    horas_duracion?: IntFieldUpdateOperationsInput | number
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trabajadoresUpsertWithoutTrabajadores_cursosInput = {
    update: XOR<trabajadoresUpdateWithoutTrabajadores_cursosInput, trabajadoresUncheckedUpdateWithoutTrabajadores_cursosInput>
    create: XOR<trabajadoresCreateWithoutTrabajadores_cursosInput, trabajadoresUncheckedCreateWithoutTrabajadores_cursosInput>
    where?: trabajadoresWhereInput
  }

  export type trabajadoresUpdateToOneWithWhereWithoutTrabajadores_cursosInput = {
    where?: trabajadoresWhereInput
    data: XOR<trabajadoresUpdateWithoutTrabajadores_cursosInput, trabajadoresUncheckedUpdateWithoutTrabajadores_cursosInput>
  }

  export type trabajadoresUpdateWithoutTrabajadores_cursosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUpdateManyWithoutTrabajadoresNestedInput
    seccion?: seccionesUpdateOneRequiredWithoutTrabajadoresNestedInput
  }

  export type trabajadoresUncheckedUpdateWithoutTrabajadores_cursosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    id_seccion?: IntFieldUpdateOperationsInput | number
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUncheckedUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadores_cursosCreateManyCursosInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type trabajadores_cursosUpdateWithoutCursosInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: documentosUpdateOneWithoutTrabajadores_cursosNestedInput
    trabajadores?: trabajadoresUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
  }

  export type trabajadores_cursosUncheckedUpdateWithoutCursosInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutCursosInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cambiosadscripcionCreateManyDocumentosInput = {
    id_cambio?: number
    id_trabajador: number
    adscripcion_anterior: string
    adscripcion_nueva: string
    fecha_cambio: Date | string
    motivo: string
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type hijosCreateManyDocumentosInput = {
    id_hijo?: number
    id_trabajador: number
    nombre_completo: string
    fecha_nacimiento: Date | string
    vigente?: boolean | null
  }

  export type permisosCreateManyDocumentosInput = {
    id_permiso?: number
    id_trabajador: number
    tipo_permiso?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    motivo: string
    estatus?: string | null
    fecha_registro?: Date | string | null
  }

  export type trabajadores_cursosCreateManyDocumentosInput = {
    id_trabajador_curso?: number
    id_trabajador: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
  }

  export type cambiosadscripcionUpdateWithoutDocumentosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cambiosadscripcionUncheckedUpdateWithoutDocumentosInput = {
    id_cambio?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cambiosadscripcionUncheckedUpdateManyWithoutDocumentosInput = {
    id_cambio?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    adscripcion_anterior?: StringFieldUpdateOperationsInput | string
    adscripcion_nueva?: StringFieldUpdateOperationsInput | string
    fecha_cambio?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hijosUpdateWithoutDocumentosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hijosUncheckedUpdateWithoutDocumentosInput = {
    id_hijo?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type hijosUncheckedUpdateManyWithoutDocumentosInput = {
    id_hijo?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    vigente?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type permisosUpdateWithoutDocumentosInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permisosUncheckedUpdateWithoutDocumentosInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type permisosUncheckedUpdateManyWithoutDocumentosInput = {
    id_permiso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    tipo_permiso?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadores_cursosUpdateWithoutDocumentosInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cursos?: cursosUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
    trabajadores?: trabajadoresUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
  }

  export type trabajadores_cursosUncheckedUpdateWithoutDocumentosInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutDocumentosInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_trabajador?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadoresCreateManySeccionInput = {
    id_trabajador?: number
    nombre: string
    apellido_paterno: string
    apellido_materno?: string | null
    fecha_nacimiento: Date | string
    sexo: string
    curp: string
    rfc: string
    email: string
    situacion_sentimental?: string | null
    numero_hijos?: number
    numero_empleado: string
    numero_plaza: string
    fecha_ingreso: Date | string
    fecha_ingreso_gobierno: Date | string
    nivel_puesto: string
    nombre_puesto: string
    puesto_inpi?: string | null
    adscripcion: string
    nivel_estudios?: string | null
    institucion_estudios?: string | null
    certificado_estudios?: boolean | null
    plaza_base?: string | null
    fecha_actualizacion?: Date | string | null
  }

  export type trabajadoresUpdateWithoutSeccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUpdateManyWithoutTrabajadoresNestedInput
    trabajadores_cursos?: trabajadores_cursosUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresUncheckedUpdateWithoutSeccionInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanciones?: sancionesUncheckedUpdateManyWithoutTrabajadoresNestedInput
    trabajadores_cursos?: trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresNestedInput
  }

  export type trabajadoresUncheckedUpdateManyWithoutSeccionInput = {
    id_trabajador?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_paterno?: StringFieldUpdateOperationsInput | string
    apellido_materno?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    curp?: StringFieldUpdateOperationsInput | string
    rfc?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    situacion_sentimental?: NullableStringFieldUpdateOperationsInput | string | null
    numero_hijos?: IntFieldUpdateOperationsInput | number
    numero_empleado?: StringFieldUpdateOperationsInput | string
    numero_plaza?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_ingreso_gobierno?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_puesto?: StringFieldUpdateOperationsInput | string
    nombre_puesto?: StringFieldUpdateOperationsInput | string
    puesto_inpi?: NullableStringFieldUpdateOperationsInput | string | null
    adscripcion?: StringFieldUpdateOperationsInput | string
    nivel_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    institucion_estudios?: NullableStringFieldUpdateOperationsInput | string | null
    certificado_estudios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plaza_base?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesCreateManyTrabajadoresInput = {
    id_sancion?: number
    tipo_sancion: string
    descripcion: string
    fecha_aplicacion: Date | string
    fecha_fin?: Date | string | null
    estatus?: string | null
    usuario_registro?: string | null
    fecha_registro?: Date | string | null
  }

  export type trabajadores_cursosCreateManyTrabajadoresInput = {
    id_trabajador_curso?: number
    id_curso: number
    fecha_inscripcion?: Date | string
    calificacion?: Decimal | DecimalJsLike | number | string | null
    completado?: boolean | null
    fecha_completado?: Date | string | null
    certificado_id?: number | null
  }

  export type sancionesUpdateWithoutTrabajadoresInput = {
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesUncheckedUpdateWithoutTrabajadoresInput = {
    id_sancion?: IntFieldUpdateOperationsInput | number
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sancionesUncheckedUpdateManyWithoutTrabajadoresInput = {
    id_sancion?: IntFieldUpdateOperationsInput | number
    tipo_sancion?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_aplicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_registro?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trabajadores_cursosUpdateWithoutTrabajadoresInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documentos?: documentosUpdateOneWithoutTrabajadores_cursosNestedInput
    cursos?: cursosUpdateOneRequiredWithoutTrabajadores_cursosNestedInput
  }

  export type trabajadores_cursosUncheckedUpdateWithoutTrabajadoresInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trabajadores_cursosUncheckedUpdateManyWithoutTrabajadoresInput = {
    id_trabajador_curso?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    calificacion?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_completado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificado_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}