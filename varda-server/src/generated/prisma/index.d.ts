
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
 * Model VardaSession
 * 
 */
export type VardaSession = $Result.DefaultSelection<Prisma.$VardaSessionPayload>
/**
 * Model VardaMessage
 * 
 */
export type VardaMessage = $Result.DefaultSelection<Prisma.$VardaMessagePayload>
/**
 * Model VardaAuditLog
 * 
 */
export type VardaAuditLog = $Result.DefaultSelection<Prisma.$VardaAuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VardaSessions
 * const vardaSessions = await prisma.vardaSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more VardaSessions
   * const vardaSessions = await prisma.vardaSession.findMany()
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
   * `prisma.vardaSession`: Exposes CRUD operations for the **VardaSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VardaSessions
    * const vardaSessions = await prisma.vardaSession.findMany()
    * ```
    */
  get vardaSession(): Prisma.VardaSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vardaMessage`: Exposes CRUD operations for the **VardaMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VardaMessages
    * const vardaMessages = await prisma.vardaMessage.findMany()
    * ```
    */
  get vardaMessage(): Prisma.VardaMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vardaAuditLog`: Exposes CRUD operations for the **VardaAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VardaAuditLogs
    * const vardaAuditLogs = await prisma.vardaAuditLog.findMany()
    * ```
    */
  get vardaAuditLog(): Prisma.VardaAuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    VardaSession: 'VardaSession',
    VardaMessage: 'VardaMessage',
    VardaAuditLog: 'VardaAuditLog'
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
      modelProps: "vardaSession" | "vardaMessage" | "vardaAuditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VardaSession: {
        payload: Prisma.$VardaSessionPayload<ExtArgs>
        fields: Prisma.VardaSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VardaSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VardaSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          findFirst: {
            args: Prisma.VardaSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VardaSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          findMany: {
            args: Prisma.VardaSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>[]
          }
          create: {
            args: Prisma.VardaSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          createMany: {
            args: Prisma.VardaSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VardaSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>[]
          }
          delete: {
            args: Prisma.VardaSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          update: {
            args: Prisma.VardaSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          deleteMany: {
            args: Prisma.VardaSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VardaSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VardaSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>[]
          }
          upsert: {
            args: Prisma.VardaSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaSessionPayload>
          }
          aggregate: {
            args: Prisma.VardaSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVardaSession>
          }
          groupBy: {
            args: Prisma.VardaSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<VardaSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VardaSessionCountArgs<ExtArgs>
            result: $Utils.Optional<VardaSessionCountAggregateOutputType> | number
          }
        }
      }
      VardaMessage: {
        payload: Prisma.$VardaMessagePayload<ExtArgs>
        fields: Prisma.VardaMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VardaMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VardaMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          findFirst: {
            args: Prisma.VardaMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VardaMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          findMany: {
            args: Prisma.VardaMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>[]
          }
          create: {
            args: Prisma.VardaMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          createMany: {
            args: Prisma.VardaMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VardaMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>[]
          }
          delete: {
            args: Prisma.VardaMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          update: {
            args: Prisma.VardaMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          deleteMany: {
            args: Prisma.VardaMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VardaMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VardaMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>[]
          }
          upsert: {
            args: Prisma.VardaMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaMessagePayload>
          }
          aggregate: {
            args: Prisma.VardaMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVardaMessage>
          }
          groupBy: {
            args: Prisma.VardaMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VardaMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VardaMessageCountArgs<ExtArgs>
            result: $Utils.Optional<VardaMessageCountAggregateOutputType> | number
          }
        }
      }
      VardaAuditLog: {
        payload: Prisma.$VardaAuditLogPayload<ExtArgs>
        fields: Prisma.VardaAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VardaAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VardaAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          findFirst: {
            args: Prisma.VardaAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VardaAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          findMany: {
            args: Prisma.VardaAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>[]
          }
          create: {
            args: Prisma.VardaAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          createMany: {
            args: Prisma.VardaAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VardaAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>[]
          }
          delete: {
            args: Prisma.VardaAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          update: {
            args: Prisma.VardaAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.VardaAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VardaAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VardaAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.VardaAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VardaAuditLogPayload>
          }
          aggregate: {
            args: Prisma.VardaAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVardaAuditLog>
          }
          groupBy: {
            args: Prisma.VardaAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VardaAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VardaAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<VardaAuditLogCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    vardaSession?: VardaSessionOmit
    vardaMessage?: VardaMessageOmit
    vardaAuditLog?: VardaAuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type VardaSessionCountOutputType
   */

  export type VardaSessionCountOutputType = {
    messages: number
  }

  export type VardaSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | VardaSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * VardaSessionCountOutputType without action
   */
  export type VardaSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSessionCountOutputType
     */
    select?: VardaSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VardaSessionCountOutputType without action
   */
  export type VardaSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VardaMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model VardaSession
   */

  export type AggregateVardaSession = {
    _count: VardaSessionCountAggregateOutputType | null
    _min: VardaSessionMinAggregateOutputType | null
    _max: VardaSessionMaxAggregateOutputType | null
  }

  export type VardaSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    surface: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VardaSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    surface: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VardaSessionCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    surface: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VardaSessionMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VardaSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VardaSessionCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VardaSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaSession to aggregate.
     */
    where?: VardaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaSessions to fetch.
     */
    orderBy?: VardaSessionOrderByWithRelationInput | VardaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VardaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VardaSessions
    **/
    _count?: true | VardaSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VardaSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VardaSessionMaxAggregateInputType
  }

  export type GetVardaSessionAggregateType<T extends VardaSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateVardaSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVardaSession[P]>
      : GetScalarType<T[P], AggregateVardaSession[P]>
  }




  export type VardaSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VardaSessionWhereInput
    orderBy?: VardaSessionOrderByWithAggregationInput | VardaSessionOrderByWithAggregationInput[]
    by: VardaSessionScalarFieldEnum[] | VardaSessionScalarFieldEnum
    having?: VardaSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VardaSessionCountAggregateInputType | true
    _min?: VardaSessionMinAggregateInputType
    _max?: VardaSessionMaxAggregateInputType
  }

  export type VardaSessionGroupByOutputType = {
    id: string
    userId: string
    tenantId: string | null
    surface: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    _count: VardaSessionCountAggregateOutputType | null
    _min: VardaSessionMinAggregateOutputType | null
    _max: VardaSessionMaxAggregateOutputType | null
  }

  type GetVardaSessionGroupByPayload<T extends VardaSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VardaSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VardaSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VardaSessionGroupByOutputType[P]>
            : GetScalarType<T[P], VardaSessionGroupByOutputType[P]>
        }
      >
    >


  export type VardaSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | VardaSession$messagesArgs<ExtArgs>
    _count?: boolean | VardaSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vardaSession"]>

  export type VardaSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vardaSession"]>

  export type VardaSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vardaSession"]>

  export type VardaSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VardaSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tenantId" | "surface" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["vardaSession"]>
  export type VardaSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | VardaSession$messagesArgs<ExtArgs>
    _count?: boolean | VardaSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VardaSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VardaSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VardaSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VardaSession"
    objects: {
      messages: Prisma.$VardaMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string | null
      surface: string
      title: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vardaSession"]>
    composites: {}
  }

  type VardaSessionGetPayload<S extends boolean | null | undefined | VardaSessionDefaultArgs> = $Result.GetResult<Prisma.$VardaSessionPayload, S>

  type VardaSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VardaSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VardaSessionCountAggregateInputType | true
    }

  export interface VardaSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VardaSession'], meta: { name: 'VardaSession' } }
    /**
     * Find zero or one VardaSession that matches the filter.
     * @param {VardaSessionFindUniqueArgs} args - Arguments to find a VardaSession
     * @example
     * // Get one VardaSession
     * const vardaSession = await prisma.vardaSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VardaSessionFindUniqueArgs>(args: SelectSubset<T, VardaSessionFindUniqueArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VardaSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VardaSessionFindUniqueOrThrowArgs} args - Arguments to find a VardaSession
     * @example
     * // Get one VardaSession
     * const vardaSession = await prisma.vardaSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VardaSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, VardaSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionFindFirstArgs} args - Arguments to find a VardaSession
     * @example
     * // Get one VardaSession
     * const vardaSession = await prisma.vardaSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VardaSessionFindFirstArgs>(args?: SelectSubset<T, VardaSessionFindFirstArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionFindFirstOrThrowArgs} args - Arguments to find a VardaSession
     * @example
     * // Get one VardaSession
     * const vardaSession = await prisma.vardaSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VardaSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, VardaSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VardaSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VardaSessions
     * const vardaSessions = await prisma.vardaSession.findMany()
     * 
     * // Get first 10 VardaSessions
     * const vardaSessions = await prisma.vardaSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vardaSessionWithIdOnly = await prisma.vardaSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VardaSessionFindManyArgs>(args?: SelectSubset<T, VardaSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VardaSession.
     * @param {VardaSessionCreateArgs} args - Arguments to create a VardaSession.
     * @example
     * // Create one VardaSession
     * const VardaSession = await prisma.vardaSession.create({
     *   data: {
     *     // ... data to create a VardaSession
     *   }
     * })
     * 
     */
    create<T extends VardaSessionCreateArgs>(args: SelectSubset<T, VardaSessionCreateArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VardaSessions.
     * @param {VardaSessionCreateManyArgs} args - Arguments to create many VardaSessions.
     * @example
     * // Create many VardaSessions
     * const vardaSession = await prisma.vardaSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VardaSessionCreateManyArgs>(args?: SelectSubset<T, VardaSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VardaSessions and returns the data saved in the database.
     * @param {VardaSessionCreateManyAndReturnArgs} args - Arguments to create many VardaSessions.
     * @example
     * // Create many VardaSessions
     * const vardaSession = await prisma.vardaSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VardaSessions and only return the `id`
     * const vardaSessionWithIdOnly = await prisma.vardaSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VardaSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, VardaSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VardaSession.
     * @param {VardaSessionDeleteArgs} args - Arguments to delete one VardaSession.
     * @example
     * // Delete one VardaSession
     * const VardaSession = await prisma.vardaSession.delete({
     *   where: {
     *     // ... filter to delete one VardaSession
     *   }
     * })
     * 
     */
    delete<T extends VardaSessionDeleteArgs>(args: SelectSubset<T, VardaSessionDeleteArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VardaSession.
     * @param {VardaSessionUpdateArgs} args - Arguments to update one VardaSession.
     * @example
     * // Update one VardaSession
     * const vardaSession = await prisma.vardaSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VardaSessionUpdateArgs>(args: SelectSubset<T, VardaSessionUpdateArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VardaSessions.
     * @param {VardaSessionDeleteManyArgs} args - Arguments to filter VardaSessions to delete.
     * @example
     * // Delete a few VardaSessions
     * const { count } = await prisma.vardaSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VardaSessionDeleteManyArgs>(args?: SelectSubset<T, VardaSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VardaSessions
     * const vardaSession = await prisma.vardaSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VardaSessionUpdateManyArgs>(args: SelectSubset<T, VardaSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaSessions and returns the data updated in the database.
     * @param {VardaSessionUpdateManyAndReturnArgs} args - Arguments to update many VardaSessions.
     * @example
     * // Update many VardaSessions
     * const vardaSession = await prisma.vardaSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VardaSessions and only return the `id`
     * const vardaSessionWithIdOnly = await prisma.vardaSession.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VardaSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, VardaSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VardaSession.
     * @param {VardaSessionUpsertArgs} args - Arguments to update or create a VardaSession.
     * @example
     * // Update or create a VardaSession
     * const vardaSession = await prisma.vardaSession.upsert({
     *   create: {
     *     // ... data to create a VardaSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VardaSession we want to update
     *   }
     * })
     */
    upsert<T extends VardaSessionUpsertArgs>(args: SelectSubset<T, VardaSessionUpsertArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VardaSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionCountArgs} args - Arguments to filter VardaSessions to count.
     * @example
     * // Count the number of VardaSessions
     * const count = await prisma.vardaSession.count({
     *   where: {
     *     // ... the filter for the VardaSessions we want to count
     *   }
     * })
    **/
    count<T extends VardaSessionCountArgs>(
      args?: Subset<T, VardaSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VardaSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VardaSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VardaSessionAggregateArgs>(args: Subset<T, VardaSessionAggregateArgs>): Prisma.PrismaPromise<GetVardaSessionAggregateType<T>>

    /**
     * Group by VardaSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaSessionGroupByArgs} args - Group by arguments.
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
      T extends VardaSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VardaSessionGroupByArgs['orderBy'] }
        : { orderBy?: VardaSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VardaSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVardaSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VardaSession model
   */
  readonly fields: VardaSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VardaSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VardaSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends VardaSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, VardaSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VardaSession model
   */
  interface VardaSessionFieldRefs {
    readonly id: FieldRef<"VardaSession", 'String'>
    readonly userId: FieldRef<"VardaSession", 'String'>
    readonly tenantId: FieldRef<"VardaSession", 'String'>
    readonly surface: FieldRef<"VardaSession", 'String'>
    readonly title: FieldRef<"VardaSession", 'String'>
    readonly createdAt: FieldRef<"VardaSession", 'DateTime'>
    readonly updatedAt: FieldRef<"VardaSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VardaSession findUnique
   */
  export type VardaSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter, which VardaSession to fetch.
     */
    where: VardaSessionWhereUniqueInput
  }

  /**
   * VardaSession findUniqueOrThrow
   */
  export type VardaSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter, which VardaSession to fetch.
     */
    where: VardaSessionWhereUniqueInput
  }

  /**
   * VardaSession findFirst
   */
  export type VardaSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter, which VardaSession to fetch.
     */
    where?: VardaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaSessions to fetch.
     */
    orderBy?: VardaSessionOrderByWithRelationInput | VardaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaSessions.
     */
    cursor?: VardaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaSessions.
     */
    distinct?: VardaSessionScalarFieldEnum | VardaSessionScalarFieldEnum[]
  }

  /**
   * VardaSession findFirstOrThrow
   */
  export type VardaSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter, which VardaSession to fetch.
     */
    where?: VardaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaSessions to fetch.
     */
    orderBy?: VardaSessionOrderByWithRelationInput | VardaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaSessions.
     */
    cursor?: VardaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaSessions.
     */
    distinct?: VardaSessionScalarFieldEnum | VardaSessionScalarFieldEnum[]
  }

  /**
   * VardaSession findMany
   */
  export type VardaSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter, which VardaSessions to fetch.
     */
    where?: VardaSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaSessions to fetch.
     */
    orderBy?: VardaSessionOrderByWithRelationInput | VardaSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VardaSessions.
     */
    cursor?: VardaSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaSessions.
     */
    skip?: number
    distinct?: VardaSessionScalarFieldEnum | VardaSessionScalarFieldEnum[]
  }

  /**
   * VardaSession create
   */
  export type VardaSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a VardaSession.
     */
    data: XOR<VardaSessionCreateInput, VardaSessionUncheckedCreateInput>
  }

  /**
   * VardaSession createMany
   */
  export type VardaSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VardaSessions.
     */
    data: VardaSessionCreateManyInput | VardaSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VardaSession createManyAndReturn
   */
  export type VardaSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * The data used to create many VardaSessions.
     */
    data: VardaSessionCreateManyInput | VardaSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VardaSession update
   */
  export type VardaSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a VardaSession.
     */
    data: XOR<VardaSessionUpdateInput, VardaSessionUncheckedUpdateInput>
    /**
     * Choose, which VardaSession to update.
     */
    where: VardaSessionWhereUniqueInput
  }

  /**
   * VardaSession updateMany
   */
  export type VardaSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VardaSessions.
     */
    data: XOR<VardaSessionUpdateManyMutationInput, VardaSessionUncheckedUpdateManyInput>
    /**
     * Filter which VardaSessions to update
     */
    where?: VardaSessionWhereInput
    /**
     * Limit how many VardaSessions to update.
     */
    limit?: number
  }

  /**
   * VardaSession updateManyAndReturn
   */
  export type VardaSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * The data used to update VardaSessions.
     */
    data: XOR<VardaSessionUpdateManyMutationInput, VardaSessionUncheckedUpdateManyInput>
    /**
     * Filter which VardaSessions to update
     */
    where?: VardaSessionWhereInput
    /**
     * Limit how many VardaSessions to update.
     */
    limit?: number
  }

  /**
   * VardaSession upsert
   */
  export type VardaSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the VardaSession to update in case it exists.
     */
    where: VardaSessionWhereUniqueInput
    /**
     * In case the VardaSession found by the `where` argument doesn't exist, create a new VardaSession with this data.
     */
    create: XOR<VardaSessionCreateInput, VardaSessionUncheckedCreateInput>
    /**
     * In case the VardaSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VardaSessionUpdateInput, VardaSessionUncheckedUpdateInput>
  }

  /**
   * VardaSession delete
   */
  export type VardaSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
    /**
     * Filter which VardaSession to delete.
     */
    where: VardaSessionWhereUniqueInput
  }

  /**
   * VardaSession deleteMany
   */
  export type VardaSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaSessions to delete
     */
    where?: VardaSessionWhereInput
    /**
     * Limit how many VardaSessions to delete.
     */
    limit?: number
  }

  /**
   * VardaSession.messages
   */
  export type VardaSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    where?: VardaMessageWhereInput
    orderBy?: VardaMessageOrderByWithRelationInput | VardaMessageOrderByWithRelationInput[]
    cursor?: VardaMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VardaMessageScalarFieldEnum | VardaMessageScalarFieldEnum[]
  }

  /**
   * VardaSession without action
   */
  export type VardaSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaSession
     */
    select?: VardaSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaSession
     */
    omit?: VardaSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaSessionInclude<ExtArgs> | null
  }


  /**
   * Model VardaMessage
   */

  export type AggregateVardaMessage = {
    _count: VardaMessageCountAggregateOutputType | null
    _min: VardaMessageMinAggregateOutputType | null
    _max: VardaMessageMaxAggregateOutputType | null
  }

  export type VardaMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    toolId: string | null
    toolCallId: string | null
    displayHint: string | null
    createdAt: Date | null
  }

  export type VardaMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    toolId: string | null
    toolCallId: string | null
    displayHint: string | null
    createdAt: Date | null
  }

  export type VardaMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    toolId: number
    toolCallId: number
    toolInput: number
    toolResult: number
    displayHint: number
    createdAt: number
    _all: number
  }


  export type VardaMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    toolId?: true
    toolCallId?: true
    displayHint?: true
    createdAt?: true
  }

  export type VardaMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    toolId?: true
    toolCallId?: true
    displayHint?: true
    createdAt?: true
  }

  export type VardaMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    toolId?: true
    toolCallId?: true
    toolInput?: true
    toolResult?: true
    displayHint?: true
    createdAt?: true
    _all?: true
  }

  export type VardaMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaMessage to aggregate.
     */
    where?: VardaMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaMessages to fetch.
     */
    orderBy?: VardaMessageOrderByWithRelationInput | VardaMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VardaMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VardaMessages
    **/
    _count?: true | VardaMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VardaMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VardaMessageMaxAggregateInputType
  }

  export type GetVardaMessageAggregateType<T extends VardaMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateVardaMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVardaMessage[P]>
      : GetScalarType<T[P], AggregateVardaMessage[P]>
  }




  export type VardaMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VardaMessageWhereInput
    orderBy?: VardaMessageOrderByWithAggregationInput | VardaMessageOrderByWithAggregationInput[]
    by: VardaMessageScalarFieldEnum[] | VardaMessageScalarFieldEnum
    having?: VardaMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VardaMessageCountAggregateInputType | true
    _min?: VardaMessageMinAggregateInputType
    _max?: VardaMessageMaxAggregateInputType
  }

  export type VardaMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    toolId: string | null
    toolCallId: string | null
    toolInput: JsonValue | null
    toolResult: JsonValue | null
    displayHint: string | null
    createdAt: Date
    _count: VardaMessageCountAggregateOutputType | null
    _min: VardaMessageMinAggregateOutputType | null
    _max: VardaMessageMaxAggregateOutputType | null
  }

  type GetVardaMessageGroupByPayload<T extends VardaMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VardaMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VardaMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VardaMessageGroupByOutputType[P]>
            : GetScalarType<T[P], VardaMessageGroupByOutputType[P]>
        }
      >
    >


  export type VardaMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    toolId?: boolean
    toolCallId?: boolean
    toolInput?: boolean
    toolResult?: boolean
    displayHint?: boolean
    createdAt?: boolean
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vardaMessage"]>

  export type VardaMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    toolId?: boolean
    toolCallId?: boolean
    toolInput?: boolean
    toolResult?: boolean
    displayHint?: boolean
    createdAt?: boolean
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vardaMessage"]>

  export type VardaMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    toolId?: boolean
    toolCallId?: boolean
    toolInput?: boolean
    toolResult?: boolean
    displayHint?: boolean
    createdAt?: boolean
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vardaMessage"]>

  export type VardaMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    toolId?: boolean
    toolCallId?: boolean
    toolInput?: boolean
    toolResult?: boolean
    displayHint?: boolean
    createdAt?: boolean
  }

  export type VardaMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "role" | "content" | "toolId" | "toolCallId" | "toolInput" | "toolResult" | "displayHint" | "createdAt", ExtArgs["result"]["vardaMessage"]>
  export type VardaMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }
  export type VardaMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }
  export type VardaMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | VardaSessionDefaultArgs<ExtArgs>
  }

  export type $VardaMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VardaMessage"
    objects: {
      session: Prisma.$VardaSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      toolId: string | null
      toolCallId: string | null
      toolInput: Prisma.JsonValue | null
      toolResult: Prisma.JsonValue | null
      displayHint: string | null
      createdAt: Date
    }, ExtArgs["result"]["vardaMessage"]>
    composites: {}
  }

  type VardaMessageGetPayload<S extends boolean | null | undefined | VardaMessageDefaultArgs> = $Result.GetResult<Prisma.$VardaMessagePayload, S>

  type VardaMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VardaMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VardaMessageCountAggregateInputType | true
    }

  export interface VardaMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VardaMessage'], meta: { name: 'VardaMessage' } }
    /**
     * Find zero or one VardaMessage that matches the filter.
     * @param {VardaMessageFindUniqueArgs} args - Arguments to find a VardaMessage
     * @example
     * // Get one VardaMessage
     * const vardaMessage = await prisma.vardaMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VardaMessageFindUniqueArgs>(args: SelectSubset<T, VardaMessageFindUniqueArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VardaMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VardaMessageFindUniqueOrThrowArgs} args - Arguments to find a VardaMessage
     * @example
     * // Get one VardaMessage
     * const vardaMessage = await prisma.vardaMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VardaMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, VardaMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageFindFirstArgs} args - Arguments to find a VardaMessage
     * @example
     * // Get one VardaMessage
     * const vardaMessage = await prisma.vardaMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VardaMessageFindFirstArgs>(args?: SelectSubset<T, VardaMessageFindFirstArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageFindFirstOrThrowArgs} args - Arguments to find a VardaMessage
     * @example
     * // Get one VardaMessage
     * const vardaMessage = await prisma.vardaMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VardaMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, VardaMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VardaMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VardaMessages
     * const vardaMessages = await prisma.vardaMessage.findMany()
     * 
     * // Get first 10 VardaMessages
     * const vardaMessages = await prisma.vardaMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vardaMessageWithIdOnly = await prisma.vardaMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VardaMessageFindManyArgs>(args?: SelectSubset<T, VardaMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VardaMessage.
     * @param {VardaMessageCreateArgs} args - Arguments to create a VardaMessage.
     * @example
     * // Create one VardaMessage
     * const VardaMessage = await prisma.vardaMessage.create({
     *   data: {
     *     // ... data to create a VardaMessage
     *   }
     * })
     * 
     */
    create<T extends VardaMessageCreateArgs>(args: SelectSubset<T, VardaMessageCreateArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VardaMessages.
     * @param {VardaMessageCreateManyArgs} args - Arguments to create many VardaMessages.
     * @example
     * // Create many VardaMessages
     * const vardaMessage = await prisma.vardaMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VardaMessageCreateManyArgs>(args?: SelectSubset<T, VardaMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VardaMessages and returns the data saved in the database.
     * @param {VardaMessageCreateManyAndReturnArgs} args - Arguments to create many VardaMessages.
     * @example
     * // Create many VardaMessages
     * const vardaMessage = await prisma.vardaMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VardaMessages and only return the `id`
     * const vardaMessageWithIdOnly = await prisma.vardaMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VardaMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, VardaMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VardaMessage.
     * @param {VardaMessageDeleteArgs} args - Arguments to delete one VardaMessage.
     * @example
     * // Delete one VardaMessage
     * const VardaMessage = await prisma.vardaMessage.delete({
     *   where: {
     *     // ... filter to delete one VardaMessage
     *   }
     * })
     * 
     */
    delete<T extends VardaMessageDeleteArgs>(args: SelectSubset<T, VardaMessageDeleteArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VardaMessage.
     * @param {VardaMessageUpdateArgs} args - Arguments to update one VardaMessage.
     * @example
     * // Update one VardaMessage
     * const vardaMessage = await prisma.vardaMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VardaMessageUpdateArgs>(args: SelectSubset<T, VardaMessageUpdateArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VardaMessages.
     * @param {VardaMessageDeleteManyArgs} args - Arguments to filter VardaMessages to delete.
     * @example
     * // Delete a few VardaMessages
     * const { count } = await prisma.vardaMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VardaMessageDeleteManyArgs>(args?: SelectSubset<T, VardaMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VardaMessages
     * const vardaMessage = await prisma.vardaMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VardaMessageUpdateManyArgs>(args: SelectSubset<T, VardaMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaMessages and returns the data updated in the database.
     * @param {VardaMessageUpdateManyAndReturnArgs} args - Arguments to update many VardaMessages.
     * @example
     * // Update many VardaMessages
     * const vardaMessage = await prisma.vardaMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VardaMessages and only return the `id`
     * const vardaMessageWithIdOnly = await prisma.vardaMessage.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VardaMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, VardaMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VardaMessage.
     * @param {VardaMessageUpsertArgs} args - Arguments to update or create a VardaMessage.
     * @example
     * // Update or create a VardaMessage
     * const vardaMessage = await prisma.vardaMessage.upsert({
     *   create: {
     *     // ... data to create a VardaMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VardaMessage we want to update
     *   }
     * })
     */
    upsert<T extends VardaMessageUpsertArgs>(args: SelectSubset<T, VardaMessageUpsertArgs<ExtArgs>>): Prisma__VardaMessageClient<$Result.GetResult<Prisma.$VardaMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VardaMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageCountArgs} args - Arguments to filter VardaMessages to count.
     * @example
     * // Count the number of VardaMessages
     * const count = await prisma.vardaMessage.count({
     *   where: {
     *     // ... the filter for the VardaMessages we want to count
     *   }
     * })
    **/
    count<T extends VardaMessageCountArgs>(
      args?: Subset<T, VardaMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VardaMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VardaMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VardaMessageAggregateArgs>(args: Subset<T, VardaMessageAggregateArgs>): Prisma.PrismaPromise<GetVardaMessageAggregateType<T>>

    /**
     * Group by VardaMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaMessageGroupByArgs} args - Group by arguments.
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
      T extends VardaMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VardaMessageGroupByArgs['orderBy'] }
        : { orderBy?: VardaMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VardaMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVardaMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VardaMessage model
   */
  readonly fields: VardaMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VardaMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VardaMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends VardaSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VardaSessionDefaultArgs<ExtArgs>>): Prisma__VardaSessionClient<$Result.GetResult<Prisma.$VardaSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VardaMessage model
   */
  interface VardaMessageFieldRefs {
    readonly id: FieldRef<"VardaMessage", 'String'>
    readonly sessionId: FieldRef<"VardaMessage", 'String'>
    readonly role: FieldRef<"VardaMessage", 'String'>
    readonly content: FieldRef<"VardaMessage", 'String'>
    readonly toolId: FieldRef<"VardaMessage", 'String'>
    readonly toolCallId: FieldRef<"VardaMessage", 'String'>
    readonly toolInput: FieldRef<"VardaMessage", 'Json'>
    readonly toolResult: FieldRef<"VardaMessage", 'Json'>
    readonly displayHint: FieldRef<"VardaMessage", 'String'>
    readonly createdAt: FieldRef<"VardaMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VardaMessage findUnique
   */
  export type VardaMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter, which VardaMessage to fetch.
     */
    where: VardaMessageWhereUniqueInput
  }

  /**
   * VardaMessage findUniqueOrThrow
   */
  export type VardaMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter, which VardaMessage to fetch.
     */
    where: VardaMessageWhereUniqueInput
  }

  /**
   * VardaMessage findFirst
   */
  export type VardaMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter, which VardaMessage to fetch.
     */
    where?: VardaMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaMessages to fetch.
     */
    orderBy?: VardaMessageOrderByWithRelationInput | VardaMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaMessages.
     */
    cursor?: VardaMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaMessages.
     */
    distinct?: VardaMessageScalarFieldEnum | VardaMessageScalarFieldEnum[]
  }

  /**
   * VardaMessage findFirstOrThrow
   */
  export type VardaMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter, which VardaMessage to fetch.
     */
    where?: VardaMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaMessages to fetch.
     */
    orderBy?: VardaMessageOrderByWithRelationInput | VardaMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaMessages.
     */
    cursor?: VardaMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaMessages.
     */
    distinct?: VardaMessageScalarFieldEnum | VardaMessageScalarFieldEnum[]
  }

  /**
   * VardaMessage findMany
   */
  export type VardaMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter, which VardaMessages to fetch.
     */
    where?: VardaMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaMessages to fetch.
     */
    orderBy?: VardaMessageOrderByWithRelationInput | VardaMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VardaMessages.
     */
    cursor?: VardaMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaMessages.
     */
    skip?: number
    distinct?: VardaMessageScalarFieldEnum | VardaMessageScalarFieldEnum[]
  }

  /**
   * VardaMessage create
   */
  export type VardaMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a VardaMessage.
     */
    data: XOR<VardaMessageCreateInput, VardaMessageUncheckedCreateInput>
  }

  /**
   * VardaMessage createMany
   */
  export type VardaMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VardaMessages.
     */
    data: VardaMessageCreateManyInput | VardaMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VardaMessage createManyAndReturn
   */
  export type VardaMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * The data used to create many VardaMessages.
     */
    data: VardaMessageCreateManyInput | VardaMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VardaMessage update
   */
  export type VardaMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a VardaMessage.
     */
    data: XOR<VardaMessageUpdateInput, VardaMessageUncheckedUpdateInput>
    /**
     * Choose, which VardaMessage to update.
     */
    where: VardaMessageWhereUniqueInput
  }

  /**
   * VardaMessage updateMany
   */
  export type VardaMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VardaMessages.
     */
    data: XOR<VardaMessageUpdateManyMutationInput, VardaMessageUncheckedUpdateManyInput>
    /**
     * Filter which VardaMessages to update
     */
    where?: VardaMessageWhereInput
    /**
     * Limit how many VardaMessages to update.
     */
    limit?: number
  }

  /**
   * VardaMessage updateManyAndReturn
   */
  export type VardaMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * The data used to update VardaMessages.
     */
    data: XOR<VardaMessageUpdateManyMutationInput, VardaMessageUncheckedUpdateManyInput>
    /**
     * Filter which VardaMessages to update
     */
    where?: VardaMessageWhereInput
    /**
     * Limit how many VardaMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VardaMessage upsert
   */
  export type VardaMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the VardaMessage to update in case it exists.
     */
    where: VardaMessageWhereUniqueInput
    /**
     * In case the VardaMessage found by the `where` argument doesn't exist, create a new VardaMessage with this data.
     */
    create: XOR<VardaMessageCreateInput, VardaMessageUncheckedCreateInput>
    /**
     * In case the VardaMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VardaMessageUpdateInput, VardaMessageUncheckedUpdateInput>
  }

  /**
   * VardaMessage delete
   */
  export type VardaMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
    /**
     * Filter which VardaMessage to delete.
     */
    where: VardaMessageWhereUniqueInput
  }

  /**
   * VardaMessage deleteMany
   */
  export type VardaMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaMessages to delete
     */
    where?: VardaMessageWhereInput
    /**
     * Limit how many VardaMessages to delete.
     */
    limit?: number
  }

  /**
   * VardaMessage without action
   */
  export type VardaMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaMessage
     */
    select?: VardaMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaMessage
     */
    omit?: VardaMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VardaMessageInclude<ExtArgs> | null
  }


  /**
   * Model VardaAuditLog
   */

  export type AggregateVardaAuditLog = {
    _count: VardaAuditLogCountAggregateOutputType | null
    _min: VardaAuditLogMinAggregateOutputType | null
    _max: VardaAuditLogMaxAggregateOutputType | null
  }

  export type VardaAuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    surface: string | null
    toolId: string | null
    confirmed: boolean | null
    cancelledAt: Date | null
    executedAt: Date | null
  }

  export type VardaAuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tenantId: string | null
    surface: string | null
    toolId: string | null
    confirmed: boolean | null
    cancelledAt: Date | null
    executedAt: Date | null
  }

  export type VardaAuditLogCountAggregateOutputType = {
    id: number
    userId: number
    tenantId: number
    surface: number
    toolId: number
    input: number
    result: number
    confirmed: number
    cancelledAt: number
    executedAt: number
    _all: number
  }


  export type VardaAuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    toolId?: true
    confirmed?: true
    cancelledAt?: true
    executedAt?: true
  }

  export type VardaAuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    toolId?: true
    confirmed?: true
    cancelledAt?: true
    executedAt?: true
  }

  export type VardaAuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    tenantId?: true
    surface?: true
    toolId?: true
    input?: true
    result?: true
    confirmed?: true
    cancelledAt?: true
    executedAt?: true
    _all?: true
  }

  export type VardaAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaAuditLog to aggregate.
     */
    where?: VardaAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaAuditLogs to fetch.
     */
    orderBy?: VardaAuditLogOrderByWithRelationInput | VardaAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VardaAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VardaAuditLogs
    **/
    _count?: true | VardaAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VardaAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VardaAuditLogMaxAggregateInputType
  }

  export type GetVardaAuditLogAggregateType<T extends VardaAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVardaAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVardaAuditLog[P]>
      : GetScalarType<T[P], AggregateVardaAuditLog[P]>
  }




  export type VardaAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VardaAuditLogWhereInput
    orderBy?: VardaAuditLogOrderByWithAggregationInput | VardaAuditLogOrderByWithAggregationInput[]
    by: VardaAuditLogScalarFieldEnum[] | VardaAuditLogScalarFieldEnum
    having?: VardaAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VardaAuditLogCountAggregateInputType | true
    _min?: VardaAuditLogMinAggregateInputType
    _max?: VardaAuditLogMaxAggregateInputType
  }

  export type VardaAuditLogGroupByOutputType = {
    id: string
    userId: string
    tenantId: string | null
    surface: string
    toolId: string
    input: JsonValue
    result: JsonValue
    confirmed: boolean
    cancelledAt: Date | null
    executedAt: Date
    _count: VardaAuditLogCountAggregateOutputType | null
    _min: VardaAuditLogMinAggregateOutputType | null
    _max: VardaAuditLogMaxAggregateOutputType | null
  }

  type GetVardaAuditLogGroupByPayload<T extends VardaAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VardaAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VardaAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VardaAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], VardaAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type VardaAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    toolId?: boolean
    input?: boolean
    result?: boolean
    confirmed?: boolean
    cancelledAt?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["vardaAuditLog"]>

  export type VardaAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    toolId?: boolean
    input?: boolean
    result?: boolean
    confirmed?: boolean
    cancelledAt?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["vardaAuditLog"]>

  export type VardaAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    toolId?: boolean
    input?: boolean
    result?: boolean
    confirmed?: boolean
    cancelledAt?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["vardaAuditLog"]>

  export type VardaAuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    tenantId?: boolean
    surface?: boolean
    toolId?: boolean
    input?: boolean
    result?: boolean
    confirmed?: boolean
    cancelledAt?: boolean
    executedAt?: boolean
  }

  export type VardaAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tenantId" | "surface" | "toolId" | "input" | "result" | "confirmed" | "cancelledAt" | "executedAt", ExtArgs["result"]["vardaAuditLog"]>

  export type $VardaAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VardaAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tenantId: string | null
      surface: string
      toolId: string
      input: Prisma.JsonValue
      result: Prisma.JsonValue
      confirmed: boolean
      cancelledAt: Date | null
      executedAt: Date
    }, ExtArgs["result"]["vardaAuditLog"]>
    composites: {}
  }

  type VardaAuditLogGetPayload<S extends boolean | null | undefined | VardaAuditLogDefaultArgs> = $Result.GetResult<Prisma.$VardaAuditLogPayload, S>

  type VardaAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VardaAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VardaAuditLogCountAggregateInputType | true
    }

  export interface VardaAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VardaAuditLog'], meta: { name: 'VardaAuditLog' } }
    /**
     * Find zero or one VardaAuditLog that matches the filter.
     * @param {VardaAuditLogFindUniqueArgs} args - Arguments to find a VardaAuditLog
     * @example
     * // Get one VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VardaAuditLogFindUniqueArgs>(args: SelectSubset<T, VardaAuditLogFindUniqueArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VardaAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VardaAuditLogFindUniqueOrThrowArgs} args - Arguments to find a VardaAuditLog
     * @example
     * // Get one VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VardaAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VardaAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogFindFirstArgs} args - Arguments to find a VardaAuditLog
     * @example
     * // Get one VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VardaAuditLogFindFirstArgs>(args?: SelectSubset<T, VardaAuditLogFindFirstArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VardaAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogFindFirstOrThrowArgs} args - Arguments to find a VardaAuditLog
     * @example
     * // Get one VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VardaAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VardaAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VardaAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VardaAuditLogs
     * const vardaAuditLogs = await prisma.vardaAuditLog.findMany()
     * 
     * // Get first 10 VardaAuditLogs
     * const vardaAuditLogs = await prisma.vardaAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vardaAuditLogWithIdOnly = await prisma.vardaAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VardaAuditLogFindManyArgs>(args?: SelectSubset<T, VardaAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VardaAuditLog.
     * @param {VardaAuditLogCreateArgs} args - Arguments to create a VardaAuditLog.
     * @example
     * // Create one VardaAuditLog
     * const VardaAuditLog = await prisma.vardaAuditLog.create({
     *   data: {
     *     // ... data to create a VardaAuditLog
     *   }
     * })
     * 
     */
    create<T extends VardaAuditLogCreateArgs>(args: SelectSubset<T, VardaAuditLogCreateArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VardaAuditLogs.
     * @param {VardaAuditLogCreateManyArgs} args - Arguments to create many VardaAuditLogs.
     * @example
     * // Create many VardaAuditLogs
     * const vardaAuditLog = await prisma.vardaAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VardaAuditLogCreateManyArgs>(args?: SelectSubset<T, VardaAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VardaAuditLogs and returns the data saved in the database.
     * @param {VardaAuditLogCreateManyAndReturnArgs} args - Arguments to create many VardaAuditLogs.
     * @example
     * // Create many VardaAuditLogs
     * const vardaAuditLog = await prisma.vardaAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VardaAuditLogs and only return the `id`
     * const vardaAuditLogWithIdOnly = await prisma.vardaAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VardaAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, VardaAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VardaAuditLog.
     * @param {VardaAuditLogDeleteArgs} args - Arguments to delete one VardaAuditLog.
     * @example
     * // Delete one VardaAuditLog
     * const VardaAuditLog = await prisma.vardaAuditLog.delete({
     *   where: {
     *     // ... filter to delete one VardaAuditLog
     *   }
     * })
     * 
     */
    delete<T extends VardaAuditLogDeleteArgs>(args: SelectSubset<T, VardaAuditLogDeleteArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VardaAuditLog.
     * @param {VardaAuditLogUpdateArgs} args - Arguments to update one VardaAuditLog.
     * @example
     * // Update one VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VardaAuditLogUpdateArgs>(args: SelectSubset<T, VardaAuditLogUpdateArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VardaAuditLogs.
     * @param {VardaAuditLogDeleteManyArgs} args - Arguments to filter VardaAuditLogs to delete.
     * @example
     * // Delete a few VardaAuditLogs
     * const { count } = await prisma.vardaAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VardaAuditLogDeleteManyArgs>(args?: SelectSubset<T, VardaAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VardaAuditLogs
     * const vardaAuditLog = await prisma.vardaAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VardaAuditLogUpdateManyArgs>(args: SelectSubset<T, VardaAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VardaAuditLogs and returns the data updated in the database.
     * @param {VardaAuditLogUpdateManyAndReturnArgs} args - Arguments to update many VardaAuditLogs.
     * @example
     * // Update many VardaAuditLogs
     * const vardaAuditLog = await prisma.vardaAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VardaAuditLogs and only return the `id`
     * const vardaAuditLogWithIdOnly = await prisma.vardaAuditLog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends VardaAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, VardaAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VardaAuditLog.
     * @param {VardaAuditLogUpsertArgs} args - Arguments to update or create a VardaAuditLog.
     * @example
     * // Update or create a VardaAuditLog
     * const vardaAuditLog = await prisma.vardaAuditLog.upsert({
     *   create: {
     *     // ... data to create a VardaAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VardaAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends VardaAuditLogUpsertArgs>(args: SelectSubset<T, VardaAuditLogUpsertArgs<ExtArgs>>): Prisma__VardaAuditLogClient<$Result.GetResult<Prisma.$VardaAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VardaAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogCountArgs} args - Arguments to filter VardaAuditLogs to count.
     * @example
     * // Count the number of VardaAuditLogs
     * const count = await prisma.vardaAuditLog.count({
     *   where: {
     *     // ... the filter for the VardaAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends VardaAuditLogCountArgs>(
      args?: Subset<T, VardaAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VardaAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VardaAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VardaAuditLogAggregateArgs>(args: Subset<T, VardaAuditLogAggregateArgs>): Prisma.PrismaPromise<GetVardaAuditLogAggregateType<T>>

    /**
     * Group by VardaAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VardaAuditLogGroupByArgs} args - Group by arguments.
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
      T extends VardaAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VardaAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: VardaAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VardaAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVardaAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VardaAuditLog model
   */
  readonly fields: VardaAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VardaAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VardaAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VardaAuditLog model
   */
  interface VardaAuditLogFieldRefs {
    readonly id: FieldRef<"VardaAuditLog", 'String'>
    readonly userId: FieldRef<"VardaAuditLog", 'String'>
    readonly tenantId: FieldRef<"VardaAuditLog", 'String'>
    readonly surface: FieldRef<"VardaAuditLog", 'String'>
    readonly toolId: FieldRef<"VardaAuditLog", 'String'>
    readonly input: FieldRef<"VardaAuditLog", 'Json'>
    readonly result: FieldRef<"VardaAuditLog", 'Json'>
    readonly confirmed: FieldRef<"VardaAuditLog", 'Boolean'>
    readonly cancelledAt: FieldRef<"VardaAuditLog", 'DateTime'>
    readonly executedAt: FieldRef<"VardaAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VardaAuditLog findUnique
   */
  export type VardaAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which VardaAuditLog to fetch.
     */
    where: VardaAuditLogWhereUniqueInput
  }

  /**
   * VardaAuditLog findUniqueOrThrow
   */
  export type VardaAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which VardaAuditLog to fetch.
     */
    where: VardaAuditLogWhereUniqueInput
  }

  /**
   * VardaAuditLog findFirst
   */
  export type VardaAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which VardaAuditLog to fetch.
     */
    where?: VardaAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaAuditLogs to fetch.
     */
    orderBy?: VardaAuditLogOrderByWithRelationInput | VardaAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaAuditLogs.
     */
    cursor?: VardaAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaAuditLogs.
     */
    distinct?: VardaAuditLogScalarFieldEnum | VardaAuditLogScalarFieldEnum[]
  }

  /**
   * VardaAuditLog findFirstOrThrow
   */
  export type VardaAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which VardaAuditLog to fetch.
     */
    where?: VardaAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaAuditLogs to fetch.
     */
    orderBy?: VardaAuditLogOrderByWithRelationInput | VardaAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VardaAuditLogs.
     */
    cursor?: VardaAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VardaAuditLogs.
     */
    distinct?: VardaAuditLogScalarFieldEnum | VardaAuditLogScalarFieldEnum[]
  }

  /**
   * VardaAuditLog findMany
   */
  export type VardaAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which VardaAuditLogs to fetch.
     */
    where?: VardaAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VardaAuditLogs to fetch.
     */
    orderBy?: VardaAuditLogOrderByWithRelationInput | VardaAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VardaAuditLogs.
     */
    cursor?: VardaAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VardaAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VardaAuditLogs.
     */
    skip?: number
    distinct?: VardaAuditLogScalarFieldEnum | VardaAuditLogScalarFieldEnum[]
  }

  /**
   * VardaAuditLog create
   */
  export type VardaAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a VardaAuditLog.
     */
    data: XOR<VardaAuditLogCreateInput, VardaAuditLogUncheckedCreateInput>
  }

  /**
   * VardaAuditLog createMany
   */
  export type VardaAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VardaAuditLogs.
     */
    data: VardaAuditLogCreateManyInput | VardaAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VardaAuditLog createManyAndReturn
   */
  export type VardaAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many VardaAuditLogs.
     */
    data: VardaAuditLogCreateManyInput | VardaAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VardaAuditLog update
   */
  export type VardaAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a VardaAuditLog.
     */
    data: XOR<VardaAuditLogUpdateInput, VardaAuditLogUncheckedUpdateInput>
    /**
     * Choose, which VardaAuditLog to update.
     */
    where: VardaAuditLogWhereUniqueInput
  }

  /**
   * VardaAuditLog updateMany
   */
  export type VardaAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VardaAuditLogs.
     */
    data: XOR<VardaAuditLogUpdateManyMutationInput, VardaAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which VardaAuditLogs to update
     */
    where?: VardaAuditLogWhereInput
    /**
     * Limit how many VardaAuditLogs to update.
     */
    limit?: number
  }

  /**
   * VardaAuditLog updateManyAndReturn
   */
  export type VardaAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update VardaAuditLogs.
     */
    data: XOR<VardaAuditLogUpdateManyMutationInput, VardaAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which VardaAuditLogs to update
     */
    where?: VardaAuditLogWhereInput
    /**
     * Limit how many VardaAuditLogs to update.
     */
    limit?: number
  }

  /**
   * VardaAuditLog upsert
   */
  export type VardaAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the VardaAuditLog to update in case it exists.
     */
    where: VardaAuditLogWhereUniqueInput
    /**
     * In case the VardaAuditLog found by the `where` argument doesn't exist, create a new VardaAuditLog with this data.
     */
    create: XOR<VardaAuditLogCreateInput, VardaAuditLogUncheckedCreateInput>
    /**
     * In case the VardaAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VardaAuditLogUpdateInput, VardaAuditLogUncheckedUpdateInput>
  }

  /**
   * VardaAuditLog delete
   */
  export type VardaAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
    /**
     * Filter which VardaAuditLog to delete.
     */
    where: VardaAuditLogWhereUniqueInput
  }

  /**
   * VardaAuditLog deleteMany
   */
  export type VardaAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VardaAuditLogs to delete
     */
    where?: VardaAuditLogWhereInput
    /**
     * Limit how many VardaAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * VardaAuditLog without action
   */
  export type VardaAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VardaAuditLog
     */
    select?: VardaAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VardaAuditLog
     */
    omit?: VardaAuditLogOmit<ExtArgs> | null
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


  export const VardaSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    surface: 'surface',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VardaSessionScalarFieldEnum = (typeof VardaSessionScalarFieldEnum)[keyof typeof VardaSessionScalarFieldEnum]


  export const VardaMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    toolId: 'toolId',
    toolCallId: 'toolCallId',
    toolInput: 'toolInput',
    toolResult: 'toolResult',
    displayHint: 'displayHint',
    createdAt: 'createdAt'
  };

  export type VardaMessageScalarFieldEnum = (typeof VardaMessageScalarFieldEnum)[keyof typeof VardaMessageScalarFieldEnum]


  export const VardaAuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tenantId: 'tenantId',
    surface: 'surface',
    toolId: 'toolId',
    input: 'input',
    result: 'result',
    confirmed: 'confirmed',
    cancelledAt: 'cancelledAt',
    executedAt: 'executedAt'
  };

  export type VardaAuditLogScalarFieldEnum = (typeof VardaAuditLogScalarFieldEnum)[keyof typeof VardaAuditLogScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VardaSessionWhereInput = {
    AND?: VardaSessionWhereInput | VardaSessionWhereInput[]
    OR?: VardaSessionWhereInput[]
    NOT?: VardaSessionWhereInput | VardaSessionWhereInput[]
    id?: StringFilter<"VardaSession"> | string
    userId?: StringFilter<"VardaSession"> | string
    tenantId?: StringNullableFilter<"VardaSession"> | string | null
    surface?: StringFilter<"VardaSession"> | string
    title?: StringNullableFilter<"VardaSession"> | string | null
    createdAt?: DateTimeFilter<"VardaSession"> | Date | string
    updatedAt?: DateTimeFilter<"VardaSession"> | Date | string
    messages?: VardaMessageListRelationFilter
  }

  export type VardaSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    surface?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: VardaMessageOrderByRelationAggregateInput
  }

  export type VardaSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VardaSessionWhereInput | VardaSessionWhereInput[]
    OR?: VardaSessionWhereInput[]
    NOT?: VardaSessionWhereInput | VardaSessionWhereInput[]
    userId?: StringFilter<"VardaSession"> | string
    tenantId?: StringNullableFilter<"VardaSession"> | string | null
    surface?: StringFilter<"VardaSession"> | string
    title?: StringNullableFilter<"VardaSession"> | string | null
    createdAt?: DateTimeFilter<"VardaSession"> | Date | string
    updatedAt?: DateTimeFilter<"VardaSession"> | Date | string
    messages?: VardaMessageListRelationFilter
  }, "id">

  export type VardaSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    surface?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VardaSessionCountOrderByAggregateInput
    _max?: VardaSessionMaxOrderByAggregateInput
    _min?: VardaSessionMinOrderByAggregateInput
  }

  export type VardaSessionScalarWhereWithAggregatesInput = {
    AND?: VardaSessionScalarWhereWithAggregatesInput | VardaSessionScalarWhereWithAggregatesInput[]
    OR?: VardaSessionScalarWhereWithAggregatesInput[]
    NOT?: VardaSessionScalarWhereWithAggregatesInput | VardaSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VardaSession"> | string
    userId?: StringWithAggregatesFilter<"VardaSession"> | string
    tenantId?: StringNullableWithAggregatesFilter<"VardaSession"> | string | null
    surface?: StringWithAggregatesFilter<"VardaSession"> | string
    title?: StringNullableWithAggregatesFilter<"VardaSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VardaSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VardaSession"> | Date | string
  }

  export type VardaMessageWhereInput = {
    AND?: VardaMessageWhereInput | VardaMessageWhereInput[]
    OR?: VardaMessageWhereInput[]
    NOT?: VardaMessageWhereInput | VardaMessageWhereInput[]
    id?: StringFilter<"VardaMessage"> | string
    sessionId?: StringFilter<"VardaMessage"> | string
    role?: StringFilter<"VardaMessage"> | string
    content?: StringFilter<"VardaMessage"> | string
    toolId?: StringNullableFilter<"VardaMessage"> | string | null
    toolCallId?: StringNullableFilter<"VardaMessage"> | string | null
    toolInput?: JsonNullableFilter<"VardaMessage">
    toolResult?: JsonNullableFilter<"VardaMessage">
    displayHint?: StringNullableFilter<"VardaMessage"> | string | null
    createdAt?: DateTimeFilter<"VardaMessage"> | Date | string
    session?: XOR<VardaSessionScalarRelationFilter, VardaSessionWhereInput>
  }

  export type VardaMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolId?: SortOrderInput | SortOrder
    toolCallId?: SortOrderInput | SortOrder
    toolInput?: SortOrderInput | SortOrder
    toolResult?: SortOrderInput | SortOrder
    displayHint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: VardaSessionOrderByWithRelationInput
  }

  export type VardaMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VardaMessageWhereInput | VardaMessageWhereInput[]
    OR?: VardaMessageWhereInput[]
    NOT?: VardaMessageWhereInput | VardaMessageWhereInput[]
    sessionId?: StringFilter<"VardaMessage"> | string
    role?: StringFilter<"VardaMessage"> | string
    content?: StringFilter<"VardaMessage"> | string
    toolId?: StringNullableFilter<"VardaMessage"> | string | null
    toolCallId?: StringNullableFilter<"VardaMessage"> | string | null
    toolInput?: JsonNullableFilter<"VardaMessage">
    toolResult?: JsonNullableFilter<"VardaMessage">
    displayHint?: StringNullableFilter<"VardaMessage"> | string | null
    createdAt?: DateTimeFilter<"VardaMessage"> | Date | string
    session?: XOR<VardaSessionScalarRelationFilter, VardaSessionWhereInput>
  }, "id">

  export type VardaMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolId?: SortOrderInput | SortOrder
    toolCallId?: SortOrderInput | SortOrder
    toolInput?: SortOrderInput | SortOrder
    toolResult?: SortOrderInput | SortOrder
    displayHint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VardaMessageCountOrderByAggregateInput
    _max?: VardaMessageMaxOrderByAggregateInput
    _min?: VardaMessageMinOrderByAggregateInput
  }

  export type VardaMessageScalarWhereWithAggregatesInput = {
    AND?: VardaMessageScalarWhereWithAggregatesInput | VardaMessageScalarWhereWithAggregatesInput[]
    OR?: VardaMessageScalarWhereWithAggregatesInput[]
    NOT?: VardaMessageScalarWhereWithAggregatesInput | VardaMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VardaMessage"> | string
    sessionId?: StringWithAggregatesFilter<"VardaMessage"> | string
    role?: StringWithAggregatesFilter<"VardaMessage"> | string
    content?: StringWithAggregatesFilter<"VardaMessage"> | string
    toolId?: StringNullableWithAggregatesFilter<"VardaMessage"> | string | null
    toolCallId?: StringNullableWithAggregatesFilter<"VardaMessage"> | string | null
    toolInput?: JsonNullableWithAggregatesFilter<"VardaMessage">
    toolResult?: JsonNullableWithAggregatesFilter<"VardaMessage">
    displayHint?: StringNullableWithAggregatesFilter<"VardaMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VardaMessage"> | Date | string
  }

  export type VardaAuditLogWhereInput = {
    AND?: VardaAuditLogWhereInput | VardaAuditLogWhereInput[]
    OR?: VardaAuditLogWhereInput[]
    NOT?: VardaAuditLogWhereInput | VardaAuditLogWhereInput[]
    id?: StringFilter<"VardaAuditLog"> | string
    userId?: StringFilter<"VardaAuditLog"> | string
    tenantId?: StringNullableFilter<"VardaAuditLog"> | string | null
    surface?: StringFilter<"VardaAuditLog"> | string
    toolId?: StringFilter<"VardaAuditLog"> | string
    input?: JsonFilter<"VardaAuditLog">
    result?: JsonFilter<"VardaAuditLog">
    confirmed?: BoolFilter<"VardaAuditLog"> | boolean
    cancelledAt?: DateTimeNullableFilter<"VardaAuditLog"> | Date | string | null
    executedAt?: DateTimeFilter<"VardaAuditLog"> | Date | string
  }

  export type VardaAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    surface?: SortOrder
    toolId?: SortOrder
    input?: SortOrder
    result?: SortOrder
    confirmed?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    executedAt?: SortOrder
  }

  export type VardaAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VardaAuditLogWhereInput | VardaAuditLogWhereInput[]
    OR?: VardaAuditLogWhereInput[]
    NOT?: VardaAuditLogWhereInput | VardaAuditLogWhereInput[]
    userId?: StringFilter<"VardaAuditLog"> | string
    tenantId?: StringNullableFilter<"VardaAuditLog"> | string | null
    surface?: StringFilter<"VardaAuditLog"> | string
    toolId?: StringFilter<"VardaAuditLog"> | string
    input?: JsonFilter<"VardaAuditLog">
    result?: JsonFilter<"VardaAuditLog">
    confirmed?: BoolFilter<"VardaAuditLog"> | boolean
    cancelledAt?: DateTimeNullableFilter<"VardaAuditLog"> | Date | string | null
    executedAt?: DateTimeFilter<"VardaAuditLog"> | Date | string
  }, "id">

  export type VardaAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    surface?: SortOrder
    toolId?: SortOrder
    input?: SortOrder
    result?: SortOrder
    confirmed?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    executedAt?: SortOrder
    _count?: VardaAuditLogCountOrderByAggregateInput
    _max?: VardaAuditLogMaxOrderByAggregateInput
    _min?: VardaAuditLogMinOrderByAggregateInput
  }

  export type VardaAuditLogScalarWhereWithAggregatesInput = {
    AND?: VardaAuditLogScalarWhereWithAggregatesInput | VardaAuditLogScalarWhereWithAggregatesInput[]
    OR?: VardaAuditLogScalarWhereWithAggregatesInput[]
    NOT?: VardaAuditLogScalarWhereWithAggregatesInput | VardaAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VardaAuditLog"> | string
    userId?: StringWithAggregatesFilter<"VardaAuditLog"> | string
    tenantId?: StringNullableWithAggregatesFilter<"VardaAuditLog"> | string | null
    surface?: StringWithAggregatesFilter<"VardaAuditLog"> | string
    toolId?: StringWithAggregatesFilter<"VardaAuditLog"> | string
    input?: JsonWithAggregatesFilter<"VardaAuditLog">
    result?: JsonWithAggregatesFilter<"VardaAuditLog">
    confirmed?: BoolWithAggregatesFilter<"VardaAuditLog"> | boolean
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"VardaAuditLog"> | Date | string | null
    executedAt?: DateTimeWithAggregatesFilter<"VardaAuditLog"> | Date | string
  }

  export type VardaSessionCreateInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: VardaMessageCreateNestedManyWithoutSessionInput
  }

  export type VardaSessionUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: VardaMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type VardaSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: VardaMessageUpdateManyWithoutSessionNestedInput
  }

  export type VardaSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: VardaMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type VardaSessionCreateManyInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VardaSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageCreateInput = {
    id?: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
    session: VardaSessionCreateNestedOneWithoutMessagesInput
  }

  export type VardaMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
  }

  export type VardaMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: VardaSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type VardaMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
  }

  export type VardaMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaAuditLogCreateInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    toolId: string
    input: JsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    confirmed?: boolean
    cancelledAt?: Date | string | null
    executedAt?: Date | string
  }

  export type VardaAuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    toolId: string
    input: JsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    confirmed?: boolean
    cancelledAt?: Date | string | null
    executedAt?: Date | string
  }

  export type VardaAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaAuditLogCreateManyInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    toolId: string
    input: JsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    confirmed?: boolean
    cancelledAt?: Date | string | null
    executedAt?: Date | string
  }

  export type VardaAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type VardaMessageListRelationFilter = {
    every?: VardaMessageWhereInput
    some?: VardaMessageWhereInput
    none?: VardaMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VardaMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VardaSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VardaSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VardaSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type VardaSessionScalarRelationFilter = {
    is?: VardaSessionWhereInput
    isNot?: VardaSessionWhereInput
  }

  export type VardaMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolId?: SortOrder
    toolCallId?: SortOrder
    toolInput?: SortOrder
    toolResult?: SortOrder
    displayHint?: SortOrder
    createdAt?: SortOrder
  }

  export type VardaMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolId?: SortOrder
    toolCallId?: SortOrder
    displayHint?: SortOrder
    createdAt?: SortOrder
  }

  export type VardaMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    toolId?: SortOrder
    toolCallId?: SortOrder
    displayHint?: SortOrder
    createdAt?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VardaAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    toolId?: SortOrder
    input?: SortOrder
    result?: SortOrder
    confirmed?: SortOrder
    cancelledAt?: SortOrder
    executedAt?: SortOrder
  }

  export type VardaAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    toolId?: SortOrder
    confirmed?: SortOrder
    cancelledAt?: SortOrder
    executedAt?: SortOrder
  }

  export type VardaAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tenantId?: SortOrder
    surface?: SortOrder
    toolId?: SortOrder
    confirmed?: SortOrder
    cancelledAt?: SortOrder
    executedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VardaMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput> | VardaMessageCreateWithoutSessionInput[] | VardaMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VardaMessageCreateOrConnectWithoutSessionInput | VardaMessageCreateOrConnectWithoutSessionInput[]
    createMany?: VardaMessageCreateManySessionInputEnvelope
    connect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
  }

  export type VardaMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput> | VardaMessageCreateWithoutSessionInput[] | VardaMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VardaMessageCreateOrConnectWithoutSessionInput | VardaMessageCreateOrConnectWithoutSessionInput[]
    createMany?: VardaMessageCreateManySessionInputEnvelope
    connect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VardaMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput> | VardaMessageCreateWithoutSessionInput[] | VardaMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VardaMessageCreateOrConnectWithoutSessionInput | VardaMessageCreateOrConnectWithoutSessionInput[]
    upsert?: VardaMessageUpsertWithWhereUniqueWithoutSessionInput | VardaMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: VardaMessageCreateManySessionInputEnvelope
    set?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    disconnect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    delete?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    connect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    update?: VardaMessageUpdateWithWhereUniqueWithoutSessionInput | VardaMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: VardaMessageUpdateManyWithWhereWithoutSessionInput | VardaMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: VardaMessageScalarWhereInput | VardaMessageScalarWhereInput[]
  }

  export type VardaMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput> | VardaMessageCreateWithoutSessionInput[] | VardaMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: VardaMessageCreateOrConnectWithoutSessionInput | VardaMessageCreateOrConnectWithoutSessionInput[]
    upsert?: VardaMessageUpsertWithWhereUniqueWithoutSessionInput | VardaMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: VardaMessageCreateManySessionInputEnvelope
    set?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    disconnect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    delete?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    connect?: VardaMessageWhereUniqueInput | VardaMessageWhereUniqueInput[]
    update?: VardaMessageUpdateWithWhereUniqueWithoutSessionInput | VardaMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: VardaMessageUpdateManyWithWhereWithoutSessionInput | VardaMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: VardaMessageScalarWhereInput | VardaMessageScalarWhereInput[]
  }

  export type VardaSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<VardaSessionCreateWithoutMessagesInput, VardaSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: VardaSessionCreateOrConnectWithoutMessagesInput
    connect?: VardaSessionWhereUniqueInput
  }

  export type VardaSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<VardaSessionCreateWithoutMessagesInput, VardaSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: VardaSessionCreateOrConnectWithoutMessagesInput
    upsert?: VardaSessionUpsertWithoutMessagesInput
    connect?: VardaSessionWhereUniqueInput
    update?: XOR<XOR<VardaSessionUpdateToOneWithWhereWithoutMessagesInput, VardaSessionUpdateWithoutMessagesInput>, VardaSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VardaMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
  }

  export type VardaMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
  }

  export type VardaMessageCreateOrConnectWithoutSessionInput = {
    where: VardaMessageWhereUniqueInput
    create: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput>
  }

  export type VardaMessageCreateManySessionInputEnvelope = {
    data: VardaMessageCreateManySessionInput | VardaMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type VardaMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: VardaMessageWhereUniqueInput
    update: XOR<VardaMessageUpdateWithoutSessionInput, VardaMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<VardaMessageCreateWithoutSessionInput, VardaMessageUncheckedCreateWithoutSessionInput>
  }

  export type VardaMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: VardaMessageWhereUniqueInput
    data: XOR<VardaMessageUpdateWithoutSessionInput, VardaMessageUncheckedUpdateWithoutSessionInput>
  }

  export type VardaMessageUpdateManyWithWhereWithoutSessionInput = {
    where: VardaMessageScalarWhereInput
    data: XOR<VardaMessageUpdateManyMutationInput, VardaMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type VardaMessageScalarWhereInput = {
    AND?: VardaMessageScalarWhereInput | VardaMessageScalarWhereInput[]
    OR?: VardaMessageScalarWhereInput[]
    NOT?: VardaMessageScalarWhereInput | VardaMessageScalarWhereInput[]
    id?: StringFilter<"VardaMessage"> | string
    sessionId?: StringFilter<"VardaMessage"> | string
    role?: StringFilter<"VardaMessage"> | string
    content?: StringFilter<"VardaMessage"> | string
    toolId?: StringNullableFilter<"VardaMessage"> | string | null
    toolCallId?: StringNullableFilter<"VardaMessage"> | string | null
    toolInput?: JsonNullableFilter<"VardaMessage">
    toolResult?: JsonNullableFilter<"VardaMessage">
    displayHint?: StringNullableFilter<"VardaMessage"> | string | null
    createdAt?: DateTimeFilter<"VardaMessage"> | Date | string
  }

  export type VardaSessionCreateWithoutMessagesInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VardaSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    tenantId?: string | null
    surface: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VardaSessionCreateOrConnectWithoutMessagesInput = {
    where: VardaSessionWhereUniqueInput
    create: XOR<VardaSessionCreateWithoutMessagesInput, VardaSessionUncheckedCreateWithoutMessagesInput>
  }

  export type VardaSessionUpsertWithoutMessagesInput = {
    update: XOR<VardaSessionUpdateWithoutMessagesInput, VardaSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<VardaSessionCreateWithoutMessagesInput, VardaSessionUncheckedCreateWithoutMessagesInput>
    where?: VardaSessionWhereInput
  }

  export type VardaSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: VardaSessionWhereInput
    data: XOR<VardaSessionUpdateWithoutMessagesInput, VardaSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type VardaSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    toolId?: string | null
    toolCallId?: string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: string | null
    createdAt?: Date | string
  }

  export type VardaMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VardaMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    toolId?: NullableStringFieldUpdateOperationsInput | string | null
    toolCallId?: NullableStringFieldUpdateOperationsInput | string | null
    toolInput?: NullableJsonNullValueInput | InputJsonValue
    toolResult?: NullableJsonNullValueInput | InputJsonValue
    displayHint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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