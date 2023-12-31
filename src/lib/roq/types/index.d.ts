/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model clinic
 *
 */
export type clinic = $Result.DefaultSelection<Prisma.$clinicPayload>;
/**
 * Model medical_record
 *
 */
export type medical_record = $Result.DefaultSelection<Prisma.$medical_recordPayload>;
/**
 * Model prescription
 *
 */
export type prescription = $Result.DefaultSelection<Prisma.$prescriptionPayload>;
/**
 * Model schedule
 *
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **clinic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   */
  get clinic(): Prisma.clinicDelegate<ExtArgs>;

  /**
   * `prisma.medical_record`: Exposes CRUD operations for the **medical_record** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Medical_records
   * const medical_records = await prisma.medical_record.findMany()
   * ```
   */
  get medical_record(): Prisma.medical_recordDelegate<ExtArgs>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **prescription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Prescriptions
   * const prescriptions = await prisma.prescription.findMany()
   * ```
   */
  get prescription(): Prisma.prescriptionDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    clinic: 'clinic';
    medical_record: 'medical_record';
    prescription: 'prescription';
    schedule: 'schedule';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'clinic' | 'medical_record' | 'prescription' | 'schedule' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      clinic: {
        payload: Prisma.$clinicPayload<ExtArgs>;
        fields: Prisma.clinicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clinicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clinicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findFirst: {
            args: Prisma.clinicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clinicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findMany: {
            args: Prisma.clinicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>[];
          };
          create: {
            args: Prisma.clinicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          createMany: {
            args: Prisma.clinicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clinicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          update: {
            args: Prisma.clinicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          deleteMany: {
            args: Prisma.clinicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clinicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clinicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClinic>;
          };
          groupBy: {
            args: Prisma.clinicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClinicGroupByOutputType>[];
          };
          count: {
            args: Prisma.clinicCountArgs<ExtArgs>;
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number;
          };
        };
      };
      medical_record: {
        payload: Prisma.$medical_recordPayload<ExtArgs>;
        fields: Prisma.medical_recordFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.medical_recordFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.medical_recordFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findFirst: {
            args: Prisma.medical_recordFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.medical_recordFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findMany: {
            args: Prisma.medical_recordFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>[];
          };
          create: {
            args: Prisma.medical_recordCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          createMany: {
            args: Prisma.medical_recordCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.medical_recordDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          update: {
            args: Prisma.medical_recordUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          deleteMany: {
            args: Prisma.medical_recordDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.medical_recordUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.medical_recordUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          aggregate: {
            args: Prisma.Medical_recordAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedical_record>;
          };
          groupBy: {
            args: Prisma.medical_recordGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordGroupByOutputType>[];
          };
          count: {
            args: Prisma.medical_recordCountArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordCountAggregateOutputType> | number;
          };
        };
      };
      prescription: {
        payload: Prisma.$prescriptionPayload<ExtArgs>;
        fields: Prisma.prescriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.prescriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.prescriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          findFirst: {
            args: Prisma.prescriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.prescriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          findMany: {
            args: Prisma.prescriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>[];
          };
          create: {
            args: Prisma.prescriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          createMany: {
            args: Prisma.prescriptionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.prescriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          update: {
            args: Prisma.prescriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          deleteMany: {
            args: Prisma.prescriptionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.prescriptionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.prescriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>;
          };
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePrescription>;
          };
          groupBy: {
            args: Prisma.prescriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PrescriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.prescriptionCountArgs<ExtArgs>;
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number;
          };
        };
      };
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>;
        fields: Prisma.scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[];
          };
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule>;
          };
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    appointment: number;
    schedule: number;
  };

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | ClinicCountOutputTypeCountAppointmentArgs;
    schedule?: boolean | ClinicCountOutputTypeCountScheduleArgs;
  };

  // Custom InputTypes

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountScheduleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: scheduleWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointment_appointment_doctor_idTouser: number;
    appointment_appointment_patient_idTouser: number;
    medical_record_medical_record_doctor_idTouser: number;
    medical_record_medical_record_patient_idTouser: number;
    prescription_prescription_doctor_idTouser: number;
    prescription_prescription_patient_idTouser: number;
    schedule: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment_appointment_doctor_idTouser?:
      | boolean
      | UserCountOutputTypeCountAppointment_appointment_doctor_idTouserArgs;
    appointment_appointment_patient_idTouser?:
      | boolean
      | UserCountOutputTypeCountAppointment_appointment_patient_idTouserArgs;
    medical_record_medical_record_doctor_idTouser?:
      | boolean
      | UserCountOutputTypeCountMedical_record_medical_record_doctor_idTouserArgs;
    medical_record_medical_record_patient_idTouser?:
      | boolean
      | UserCountOutputTypeCountMedical_record_medical_record_patient_idTouserArgs;
    prescription_prescription_doctor_idTouser?:
      | boolean
      | UserCountOutputTypeCountPrescription_prescription_doctor_idTouserArgs;
    prescription_prescription_patient_idTouser?:
      | boolean
      | UserCountOutputTypeCountPrescription_prescription_patient_idTouserArgs;
    schedule?: boolean | UserCountOutputTypeCountScheduleArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointment_appointment_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointment_appointment_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_record_medical_record_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_record_medical_record_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescription_prescription_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: prescriptionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescription_prescription_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: prescriptionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: scheduleWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    time: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    time: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    date: number;
    time: number;
    patient_id: number;
    doctor_id: number;
    clinic_id: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    date?: true;
    time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    date?: true;
    time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    date?: true;
    time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    date: Date;
    time: Date;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        date?: boolean;
        time?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        clinic_id?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        user_appointment_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_appointment_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    date?: boolean;
    time?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    clinic_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    user_appointment_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_appointment_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>;
      user_appointment_doctor_idTouser: Prisma.$userPayload<ExtArgs>;
      user_appointment_patient_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        date: Date;
        time: Date;
        patient_id: string;
        doctor_id: string;
        clinic_id: string;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
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
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_appointment_doctor_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_appointment_patient_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly date: FieldRef<'appointment', 'DateTime'>;
    readonly time: FieldRef<'appointment', 'DateTime'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly doctor_id: FieldRef<'appointment', 'String'>;
    readonly clinic_id: FieldRef<'appointment', 'String'>;
    readonly status: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  export type ClinicMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type ClinicMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type ClinicCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    opening_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type ClinicMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type ClinicMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type ClinicCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic to aggregate.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clinics
     **/
    _count?: true | ClinicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClinicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClinicMaxAggregateInputType;
  };

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
    [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>;
  };

  export type clinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithAggregationInput | clinicOrderByWithAggregationInput[];
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum;
    having?: clinicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicCountAggregateInputType | true;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
  };

  export type ClinicGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  type GetClinicGroupByPayload<T extends clinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClinicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
          : GetScalarType<T[P], ClinicGroupByOutputType[P]>;
      }
    >
  >;

  export type clinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      opening_hours?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
      schedule?: boolean | clinic$scheduleArgs<ExtArgs>;
      _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['clinic']
  >;

  export type clinicSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    opening_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type clinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
    schedule?: boolean | clinic$scheduleArgs<ExtArgs>;
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'clinic';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      schedule: Prisma.$schedulePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        opening_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['clinic']
    >;
    composites: {};
  };

  type clinicGetPayload<S extends boolean | null | undefined | clinicDefaultArgs> = $Result.GetResult<
    Prisma.$clinicPayload,
    S
  >;

  type clinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clinicFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ClinicCountAggregateInputType | true;
  };

  export interface clinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic']; meta: { name: 'clinic' } };
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {clinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clinicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clinicFindUniqueArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Clinic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clinicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clinicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clinicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     *
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clinicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Clinic.
     * @param {clinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     *
     **/
    create<T extends clinicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicCreateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clinics.
     *     @param {clinicCreateManyArgs} args - Arguments to create many Clinics.
     *     @example
     *     // Create many Clinics
     *     const clinic = await prisma.clinic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clinicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Clinic.
     * @param {clinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     *
     **/
    delete<T extends clinicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clinicDeleteArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Clinic.
     * @param {clinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clinicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clinics.
     * @param {clinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clinicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clinicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Clinic.
     * @param {clinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     **/
    upsert<T extends clinicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpsertArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
     **/
    count<T extends clinicCountArgs>(
      args?: Subset<T, clinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(
      args: Subset<T, ClinicAggregateArgs>,
    ): Prisma.PrismaPromise<GetClinicAggregateType<T>>;

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicGroupByArgs} args - Group by arguments.
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
      T extends clinicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicGroupByArgs['orderBy'] }
        : { orderBy?: clinicGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clinicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the clinic model
     */
    readonly fields: clinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends clinic$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    schedule<T extends clinic$scheduleArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$scheduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the clinic model
   */
  interface clinicFieldRefs {
    readonly id: FieldRef<'clinic', 'String'>;
    readonly description: FieldRef<'clinic', 'String'>;
    readonly address: FieldRef<'clinic', 'String'>;
    readonly phone_number: FieldRef<'clinic', 'String'>;
    readonly opening_hours: FieldRef<'clinic', 'String'>;
    readonly name: FieldRef<'clinic', 'String'>;
    readonly created_at: FieldRef<'clinic', 'DateTime'>;
    readonly updated_at: FieldRef<'clinic', 'DateTime'>;
    readonly tenant_id: FieldRef<'clinic', 'String'>;
  }

  // Custom InputTypes

  /**
   * clinic findUnique
   */
  export type clinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findUniqueOrThrow
   */
  export type clinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findFirst
   */
  export type clinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findFirstOrThrow
   */
  export type clinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findMany
   */
  export type clinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinics to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic create
   */
  export type clinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to create a clinic.
     */
    data: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
  };

  /**
   * clinic createMany
   */
  export type clinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinics.
     */
    data: clinicCreateManyInput | clinicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * clinic update
   */
  export type clinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to update a clinic.
     */
    data: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
    /**
     * Choose, which clinic to update.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic updateMany
   */
  export type clinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinics.
     */
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyInput>;
    /**
     * Filter which clinics to update
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic upsert
   */
  export type clinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The filter to search for the clinic to update in case it exists.
     */
    where: clinicWhereUniqueInput;
    /**
     * In case the clinic found by the `where` argument doesn't exist, create a new clinic with this data.
     */
    create: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
    /**
     * In case the clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
  };

  /**
   * clinic delete
   */
  export type clinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter which clinic to delete.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic deleteMany
   */
  export type clinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinics to delete
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic.appointment
   */
  export type clinic$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * clinic.schedule
   */
  export type clinic$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    cursor?: scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * clinic without action
   */
  export type clinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
  };

  /**
   * Model medical_record
   */

  export type AggregateMedical_record = {
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  export type Medical_recordMinAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    doctor_id: string | null;
    diagnosis: string | null;
    treatment: string | null;
    notes: string | null;
    date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordMaxAggregateOutputType = {
    id: string | null;
    patient_id: string | null;
    doctor_id: string | null;
    diagnosis: string | null;
    treatment: string | null;
    notes: string | null;
    date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordCountAggregateOutputType = {
    id: number;
    patient_id: number;
    doctor_id: number;
    diagnosis: number;
    treatment: number;
    notes: number;
    date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Medical_recordMinAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    treatment?: true;
    notes?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordMaxAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    treatment?: true;
    notes?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordCountAggregateInputType = {
    id?: true;
    patient_id?: true;
    doctor_id?: true;
    diagnosis?: true;
    treatment?: true;
    notes?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Medical_recordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_record to aggregate.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned medical_records
     **/
    _count?: true | Medical_recordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Medical_recordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type GetMedical_recordAggregateType<T extends Medical_recordAggregateArgs> = {
    [P in keyof T & keyof AggregateMedical_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_record[P]>
      : GetScalarType<T[P], AggregateMedical_record[P]>;
  };

  export type medical_recordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithAggregationInput | medical_recordOrderByWithAggregationInput[];
    by: Medical_recordScalarFieldEnum[] | Medical_recordScalarFieldEnum;
    having?: medical_recordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Medical_recordCountAggregateInputType | true;
    _min?: Medical_recordMinAggregateInputType;
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type Medical_recordGroupByOutputType = {
    id: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    treatment: string;
    notes: string | null;
    date: Date;
    created_at: Date;
    updated_at: Date;
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  type GetMedical_recordGroupByPayload<T extends medical_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_recordGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Medical_recordGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>
          : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>;
      }
    >
  >;

  export type medical_recordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        diagnosis?: boolean;
        treatment?: boolean;
        notes?: boolean;
        date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_medical_record_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_medical_record_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['medical_record']
    >;

  export type medical_recordSelectScalar = {
    id?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    diagnosis?: boolean;
    treatment?: boolean;
    notes?: boolean;
    date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type medical_recordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_medical_record_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_medical_record_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $medical_recordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'medical_record';
    objects: {
      user_medical_record_doctor_idTouser: Prisma.$userPayload<ExtArgs>;
      user_medical_record_patient_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        patient_id: string;
        doctor_id: string;
        diagnosis: string;
        treatment: string;
        notes: string | null;
        date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['medical_record']
    >;
    composites: {};
  };

  type medical_recordGetPayload<S extends boolean | null | undefined | medical_recordDefaultArgs> = $Result.GetResult<
    Prisma.$medical_recordPayload,
    S
  >;

  type medical_recordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    medical_recordFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Medical_recordCountAggregateInputType | true;
  };

  export interface medical_recordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_record']; meta: { name: 'medical_record' } };
    /**
     * Find zero or one Medical_record that matches the filter.
     * @param {medical_recordFindUniqueArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends medical_recordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordFindUniqueArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Medical_record that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {medical_recordFindUniqueOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends medical_recordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends medical_recordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends medical_recordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Medical_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_records
     * const medical_records = await prisma.medical_record.findMany()
     *
     * // Get first 10 Medical_records
     * const medical_records = await prisma.medical_record.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medical_recordWithIdOnly = await prisma.medical_record.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends medical_recordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Medical_record.
     * @param {medical_recordCreateArgs} args - Arguments to create a Medical_record.
     * @example
     * // Create one Medical_record
     * const Medical_record = await prisma.medical_record.create({
     *   data: {
     *     // ... data to create a Medical_record
     *   }
     * })
     *
     **/
    create<T extends medical_recordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordCreateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Medical_records.
     *     @param {medical_recordCreateManyArgs} args - Arguments to create many Medical_records.
     *     @example
     *     // Create many Medical_records
     *     const medical_record = await prisma.medical_record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends medical_recordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Medical_record.
     * @param {medical_recordDeleteArgs} args - Arguments to delete one Medical_record.
     * @example
     * // Delete one Medical_record
     * const Medical_record = await prisma.medical_record.delete({
     *   where: {
     *     // ... filter to delete one Medical_record
     *   }
     * })
     *
     **/
    delete<T extends medical_recordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordDeleteArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Medical_record.
     * @param {medical_recordUpdateArgs} args - Arguments to update one Medical_record.
     * @example
     * // Update one Medical_record
     * const medical_record = await prisma.medical_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends medical_recordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Medical_records.
     * @param {medical_recordDeleteManyArgs} args - Arguments to filter Medical_records to delete.
     * @example
     * // Delete a few Medical_records
     * const { count } = await prisma.medical_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends medical_recordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_records
     * const medical_record = await prisma.medical_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends medical_recordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Medical_record.
     * @param {medical_recordUpsertArgs} args - Arguments to update or create a Medical_record.
     * @example
     * // Update or create a Medical_record
     * const medical_record = await prisma.medical_record.upsert({
     *   create: {
     *     // ... data to create a Medical_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_record we want to update
     *   }
     * })
     **/
    upsert<T extends medical_recordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpsertArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordCountArgs} args - Arguments to filter Medical_records to count.
     * @example
     * // Count the number of Medical_records
     * const count = await prisma.medical_record.count({
     *   where: {
     *     // ... the filter for the Medical_records we want to count
     *   }
     * })
     **/
    count<T extends medical_recordCountArgs>(
      args?: Subset<T, medical_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_recordCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Medical_recordAggregateArgs>(
      args: Subset<T, Medical_recordAggregateArgs>,
    ): Prisma.PrismaPromise<GetMedical_recordAggregateType<T>>;

    /**
     * Group by Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordGroupByArgs} args - Group by arguments.
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
      T extends medical_recordGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_recordGroupByArgs['orderBy'] }
        : { orderBy?: medical_recordGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, medical_recordGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMedical_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the medical_record model
     */
    readonly fields: medical_recordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_recordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_medical_record_doctor_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_medical_record_patient_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the medical_record model
   */
  interface medical_recordFieldRefs {
    readonly id: FieldRef<'medical_record', 'String'>;
    readonly patient_id: FieldRef<'medical_record', 'String'>;
    readonly doctor_id: FieldRef<'medical_record', 'String'>;
    readonly diagnosis: FieldRef<'medical_record', 'String'>;
    readonly treatment: FieldRef<'medical_record', 'String'>;
    readonly notes: FieldRef<'medical_record', 'String'>;
    readonly date: FieldRef<'medical_record', 'DateTime'>;
    readonly created_at: FieldRef<'medical_record', 'DateTime'>;
    readonly updated_at: FieldRef<'medical_record', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * medical_record findUnique
   */
  export type medical_recordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record findUniqueOrThrow
   */
  export type medical_recordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the medical_record
       */
      select?: medical_recordSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: medical_recordInclude<ExtArgs> | null;
      /**
       * Filter, which medical_record to fetch.
       */
      where: medical_recordWhereUniqueInput;
    };

  /**
   * medical_record findFirst
   */
  export type medical_recordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findFirstOrThrow
   */
  export type medical_recordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findMany
   */
  export type medical_recordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_records to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record create
   */
  export type medical_recordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to create a medical_record.
     */
    data: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
  };

  /**
   * medical_record createMany
   */
  export type medical_recordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_records.
     */
    data: medical_recordCreateManyInput | medical_recordCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * medical_record update
   */
  export type medical_recordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to update a medical_record.
     */
    data: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
    /**
     * Choose, which medical_record to update.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record updateMany
   */
  export type medical_recordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_records.
     */
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyInput>;
    /**
     * Filter which medical_records to update
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record upsert
   */
  export type medical_recordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The filter to search for the medical_record to update in case it exists.
     */
    where: medical_recordWhereUniqueInput;
    /**
     * In case the medical_record found by the `where` argument doesn't exist, create a new medical_record with this data.
     */
    create: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
    /**
     * In case the medical_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
  };

  /**
   * medical_record delete
   */
  export type medical_recordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter which medical_record to delete.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record deleteMany
   */
  export type medical_recordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_records to delete
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record without action
   */
  export type medical_recordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
  };

  /**
   * Model prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
  };

  export type PrescriptionMinAggregateOutputType = {
    id: string | null;
    medicine_name: string | null;
    dosage: string | null;
    frequency: string | null;
    duration: string | null;
    doctor_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null;
    medicine_name: string | null;
    dosage: string | null;
    frequency: string | null;
    duration: string | null;
    doctor_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PrescriptionCountAggregateOutputType = {
    id: number;
    medicine_name: number;
    dosage: number;
    frequency: number;
    duration: number;
    doctor_id: number;
    patient_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PrescriptionMinAggregateInputType = {
    id?: true;
    medicine_name?: true;
    dosage?: true;
    frequency?: true;
    duration?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PrescriptionMaxAggregateInputType = {
    id?: true;
    medicine_name?: true;
    dosage?: true;
    frequency?: true;
    duration?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PrescriptionCountAggregateInputType = {
    id?: true;
    medicine_name?: true;
    dosage?: true;
    frequency?: true;
    duration?: true;
    doctor_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescription to aggregate.
     */
    where?: prescriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: prescriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prescriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned prescriptions
     **/
    _count?: true | PrescriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PrescriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PrescriptionMaxAggregateInputType;
  };

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
    [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>;
  };

  export type prescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionWhereInput;
    orderBy?: prescriptionOrderByWithAggregationInput | prescriptionOrderByWithAggregationInput[];
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum;
    having?: prescriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrescriptionCountAggregateInputType | true;
    _min?: PrescriptionMinAggregateInputType;
    _max?: PrescriptionMaxAggregateInputType;
  };

  export type PrescriptionGroupByOutputType = {
    id: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    doctor_id: string;
    patient_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
  };

  type GetPrescriptionGroupByPayload<T extends prescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PrescriptionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
          : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>;
      }
    >
  >;

  export type prescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        medicine_name?: boolean;
        dosage?: boolean;
        frequency?: boolean;
        duration?: boolean;
        doctor_id?: boolean;
        patient_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_prescription_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_prescription_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['prescription']
    >;

  export type prescriptionSelectScalar = {
    id?: boolean;
    medicine_name?: boolean;
    dosage?: boolean;
    frequency?: boolean;
    duration?: boolean;
    doctor_id?: boolean;
    patient_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type prescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_prescription_doctor_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_prescription_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $prescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'prescription';
    objects: {
      user_prescription_doctor_idTouser: Prisma.$userPayload<ExtArgs>;
      user_prescription_patient_idTouser: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        medicine_name: string;
        dosage: string;
        frequency: string;
        duration: string;
        doctor_id: string;
        patient_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['prescription']
    >;
    composites: {};
  };

  type prescriptionGetPayload<S extends boolean | null | undefined | prescriptionDefaultArgs> = $Result.GetResult<
    Prisma.$prescriptionPayload,
    S
  >;

  type prescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    prescriptionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PrescriptionCountAggregateInputType | true;
  };

  export interface prescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prescription']; meta: { name: 'prescription' } };
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {prescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends prescriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<
      $Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Prescription that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {prescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends prescriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<
      $Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends prescriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<
      $Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends prescriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<
      $Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     *
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends prescriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Prescription.
     * @param {prescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     *
     **/
    create<T extends prescriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionCreateArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Prescriptions.
     *     @param {prescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     *     @example
     *     // Create many Prescriptions
     *     const prescription = await prisma.prescription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends prescriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Prescription.
     * @param {prescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     *
     **/
    delete<T extends prescriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionDeleteArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Prescription.
     * @param {prescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends prescriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionUpdateArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Prescriptions.
     * @param {prescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends prescriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, prescriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends prescriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Prescription.
     * @param {prescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     **/
    upsert<T extends prescriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, prescriptionUpsertArgs<ExtArgs>>,
    ): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
     **/
    count<T extends prescriptionCountArgs>(
      args?: Subset<T, prescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(
      args: Subset<T, PrescriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>;

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionGroupByArgs} args - Group by arguments.
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
      T extends prescriptionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prescriptionGroupByArgs['orderBy'] }
        : { orderBy?: prescriptionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, prescriptionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the prescription model
     */
    readonly fields: prescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prescriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_prescription_doctor_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_prescription_patient_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the prescription model
   */
  interface prescriptionFieldRefs {
    readonly id: FieldRef<'prescription', 'String'>;
    readonly medicine_name: FieldRef<'prescription', 'String'>;
    readonly dosage: FieldRef<'prescription', 'String'>;
    readonly frequency: FieldRef<'prescription', 'String'>;
    readonly duration: FieldRef<'prescription', 'String'>;
    readonly doctor_id: FieldRef<'prescription', 'String'>;
    readonly patient_id: FieldRef<'prescription', 'String'>;
    readonly created_at: FieldRef<'prescription', 'DateTime'>;
    readonly updated_at: FieldRef<'prescription', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * prescription findUnique
   */
  export type prescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter, which prescription to fetch.
     */
    where: prescriptionWhereUniqueInput;
  };

  /**
   * prescription findUniqueOrThrow
   */
  export type prescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter, which prescription to fetch.
     */
    where: prescriptionWhereUniqueInput;
  };

  /**
   * prescription findFirst
   */
  export type prescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter, which prescription to fetch.
     */
    where?: prescriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prescriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[];
  };

  /**
   * prescription findFirstOrThrow
   */
  export type prescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter, which prescription to fetch.
     */
    where?: prescriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prescriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[];
  };

  /**
   * prescription findMany
   */
  export type prescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter, which prescriptions to fetch.
     */
    where?: prescriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` prescriptions.
     */
    skip?: number;
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[];
  };

  /**
   * prescription create
   */
  export type prescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a prescription.
     */
    data: XOR<prescriptionCreateInput, prescriptionUncheckedCreateInput>;
  };

  /**
   * prescription createMany
   */
  export type prescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prescriptions.
     */
    data: prescriptionCreateManyInput | prescriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * prescription update
   */
  export type prescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a prescription.
     */
    data: XOR<prescriptionUpdateInput, prescriptionUncheckedUpdateInput>;
    /**
     * Choose, which prescription to update.
     */
    where: prescriptionWhereUniqueInput;
  };

  /**
   * prescription updateMany
   */
  export type prescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prescriptions.
     */
    data: XOR<prescriptionUpdateManyMutationInput, prescriptionUncheckedUpdateManyInput>;
    /**
     * Filter which prescriptions to update
     */
    where?: prescriptionWhereInput;
  };

  /**
   * prescription upsert
   */
  export type prescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the prescription to update in case it exists.
     */
    where: prescriptionWhereUniqueInput;
    /**
     * In case the prescription found by the `where` argument doesn't exist, create a new prescription with this data.
     */
    create: XOR<prescriptionCreateInput, prescriptionUncheckedCreateInput>;
    /**
     * In case the prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prescriptionUpdateInput, prescriptionUncheckedUpdateInput>;
  };

  /**
   * prescription delete
   */
  export type prescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    /**
     * Filter which prescription to delete.
     */
    where: prescriptionWhereUniqueInput;
  };

  /**
   * prescription deleteMany
   */
  export type prescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescriptions to delete
     */
    where?: prescriptionWhereInput;
  };

  /**
   * prescription without action
   */
  export type prescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
  };

  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  export type ScheduleMinAggregateOutputType = {
    id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    day: string | null;
    start_time: Date | null;
    end_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    day: string | null;
    start_time: Date | null;
    end_time: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleCountAggregateOutputType = {
    id: number;
    doctor_id: number;
    clinic_id: number;
    day: number;
    start_time: number;
    end_time: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ScheduleMinAggregateInputType = {
    id?: true;
    doctor_id?: true;
    clinic_id?: true;
    day?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleMaxAggregateInputType = {
    id?: true;
    doctor_id?: true;
    clinic_id?: true;
    day?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleCountAggregateInputType = {
    id?: true;
    doctor_id?: true;
    clinic_id?: true;
    day?: true;
    start_time?: true;
    end_time?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schedules
     **/
    _count?: true | ScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScheduleMaxAggregateInputType;
  };

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>;
  };

  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[];
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum;
    having?: scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
  };

  export type ScheduleGroupByOutputType = {
    id: string;
    doctor_id: string;
    clinic_id: string;
    day: string;
    start_time: Date;
    end_time: Date;
    created_at: Date;
    updated_at: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
          : GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        doctor_id?: boolean;
        clinic_id?: boolean;
        day?: boolean;
        start_time?: boolean;
        end_time?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['schedule']
    >;

  export type scheduleSelectScalar = {
    id?: boolean;
    doctor_id?: boolean;
    clinic_id?: boolean;
    day?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'schedule';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        doctor_id: string;
        clinic_id: string;
        day: string;
        start_time: Date;
        end_time: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['schedule']
    >;
    composites: {};
  };

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<
    Prisma.$schedulePayload,
    S
  >;

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    scheduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ScheduleCountAggregateInputType | true;
  };

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule']; meta: { name: 'schedule' } };
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     *
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     *
     **/
    create<T extends scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     *
     **/
    delete<T extends scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     **/
    upsert<T extends scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
     **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(
      args: Subset<T, ScheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
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
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the schedule model
     */
    readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id: FieldRef<'schedule', 'String'>;
    readonly doctor_id: FieldRef<'schedule', 'String'>;
    readonly clinic_id: FieldRef<'schedule', 'String'>;
    readonly day: FieldRef<'schedule', 'String'>;
    readonly start_time: FieldRef<'schedule', 'DateTime'>;
    readonly end_time: FieldRef<'schedule', 'DateTime'>;
    readonly created_at: FieldRef<'schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a schedule.
     */
    data: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
  };

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput;
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
  };

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment_appointment_doctor_idTouser?: boolean | user$appointment_appointment_doctor_idTouserArgs<ExtArgs>;
      appointment_appointment_patient_idTouser?: boolean | user$appointment_appointment_patient_idTouserArgs<ExtArgs>;
      medical_record_medical_record_doctor_idTouser?:
        | boolean
        | user$medical_record_medical_record_doctor_idTouserArgs<ExtArgs>;
      medical_record_medical_record_patient_idTouser?:
        | boolean
        | user$medical_record_medical_record_patient_idTouserArgs<ExtArgs>;
      prescription_prescription_doctor_idTouser?: boolean | user$prescription_prescription_doctor_idTouserArgs<ExtArgs>;
      prescription_prescription_patient_idTouser?:
        | boolean
        | user$prescription_prescription_patient_idTouserArgs<ExtArgs>;
      schedule?: boolean | user$scheduleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment_appointment_doctor_idTouser?: boolean | user$appointment_appointment_doctor_idTouserArgs<ExtArgs>;
    appointment_appointment_patient_idTouser?: boolean | user$appointment_appointment_patient_idTouserArgs<ExtArgs>;
    medical_record_medical_record_doctor_idTouser?:
      | boolean
      | user$medical_record_medical_record_doctor_idTouserArgs<ExtArgs>;
    medical_record_medical_record_patient_idTouser?:
      | boolean
      | user$medical_record_medical_record_patient_idTouserArgs<ExtArgs>;
    prescription_prescription_doctor_idTouser?: boolean | user$prescription_prescription_doctor_idTouserArgs<ExtArgs>;
    prescription_prescription_patient_idTouser?: boolean | user$prescription_prescription_patient_idTouserArgs<ExtArgs>;
    schedule?: boolean | user$scheduleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      appointment_appointment_doctor_idTouser: Prisma.$appointmentPayload<ExtArgs>[];
      appointment_appointment_patient_idTouser: Prisma.$appointmentPayload<ExtArgs>[];
      medical_record_medical_record_doctor_idTouser: Prisma.$medical_recordPayload<ExtArgs>[];
      medical_record_medical_record_patient_idTouser: Prisma.$medical_recordPayload<ExtArgs>[];
      prescription_prescription_doctor_idTouser: Prisma.$prescriptionPayload<ExtArgs>[];
      prescription_prescription_patient_idTouser: Prisma.$prescriptionPayload<ExtArgs>[];
      schedule: Prisma.$schedulePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment_appointment_doctor_idTouser<T extends user$appointment_appointment_doctor_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appointment_appointment_doctor_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    appointment_appointment_patient_idTouser<T extends user$appointment_appointment_patient_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appointment_appointment_patient_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record_medical_record_doctor_idTouser<
      T extends user$medical_record_medical_record_doctor_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$medical_record_medical_record_doctor_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record_medical_record_patient_idTouser<
      T extends user$medical_record_medical_record_patient_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$medical_record_medical_record_patient_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    prescription_prescription_doctor_idTouser<
      T extends user$prescription_prescription_doctor_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$prescription_prescription_doctor_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    prescription_prescription_patient_idTouser<
      T extends user$prescription_prescription_patient_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$prescription_prescription_patient_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    schedule<T extends user$scheduleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$scheduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.appointment_appointment_doctor_idTouser
   */
  export type user$appointment_appointment_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.appointment_appointment_patient_idTouser
   */
  export type user$appointment_appointment_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.medical_record_medical_record_doctor_idTouser
   */
  export type user$medical_record_medical_record_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * user.medical_record_medical_record_patient_idTouser
   */
  export type user$medical_record_medical_record_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * user.prescription_prescription_doctor_idTouser
   */
  export type user$prescription_prescription_doctor_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    where?: prescriptionWhereInput;
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    cursor?: prescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[];
  };

  /**
   * user.prescription_prescription_patient_idTouser
   */
  export type user$prescription_prescription_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: prescriptionInclude<ExtArgs> | null;
    where?: prescriptionWhereInput;
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[];
    cursor?: prescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[];
  };

  /**
   * user.schedule
   */
  export type user$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: scheduleInclude<ExtArgs> | null;
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    cursor?: scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    date: 'date';
    time: 'time';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    clinic_id: 'clinic_id';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const ClinicScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    opening_hours: 'opening_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum];

  export const Medical_recordScalarFieldEnum: {
    id: 'id';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    diagnosis: 'diagnosis';
    treatment: 'treatment';
    notes: 'notes';
    date: 'date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Medical_recordScalarFieldEnum =
    (typeof Medical_recordScalarFieldEnum)[keyof typeof Medical_recordScalarFieldEnum];

  export const PrescriptionScalarFieldEnum: {
    id: 'id';
    medicine_name: 'medicine_name';
    dosage: 'dosage';
    frequency: 'frequency';
    duration: 'duration';
    doctor_id: 'doctor_id';
    patient_id: 'patient_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PrescriptionScalarFieldEnum =
    (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum];

  export const ScheduleScalarFieldEnum: {
    id: 'id';
    doctor_id: 'doctor_id';
    clinic_id: 'clinic_id';
    day: 'day';
    start_time: 'start_time';
    end_time: 'end_time';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date?: DateTimeFilter<'appointment'> | Date | string;
    time?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    user_appointment_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_appointment_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByWithRelationInput;
    user_appointment_doctor_idTouser?: userOrderByWithRelationInput;
    user_appointment_patient_idTouser?: userOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      date?: DateTimeFilter<'appointment'> | Date | string;
      time?: DateTimeFilter<'appointment'> | Date | string;
      patient_id?: UuidFilter<'appointment'> | string;
      doctor_id?: UuidFilter<'appointment'> | string;
      clinic_id?: UuidFilter<'appointment'> | string;
      status?: StringFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      user_appointment_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_appointment_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    date?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    time?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    doctor_id?: UuidWithAggregatesFilter<'appointment'> | string;
    clinic_id?: UuidWithAggregatesFilter<'appointment'> | string;
    status?: StringWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type clinicWhereInput = {
    AND?: clinicWhereInput | clinicWhereInput[];
    OR?: clinicWhereInput[];
    NOT?: clinicWhereInput | clinicWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    address?: StringNullableFilter<'clinic'> | string | null;
    phone_number?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    tenant_id?: StringFilter<'clinic'> | string;
    appointment?: AppointmentListRelationFilter;
    schedule?: ScheduleListRelationFilter;
  };

  export type clinicOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    schedule?: scheduleOrderByRelationAggregateInput;
  };

  export type clinicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: clinicWhereInput | clinicWhereInput[];
      OR?: clinicWhereInput[];
      NOT?: clinicWhereInput | clinicWhereInput[];
      description?: StringNullableFilter<'clinic'> | string | null;
      address?: StringNullableFilter<'clinic'> | string | null;
      phone_number?: StringNullableFilter<'clinic'> | string | null;
      opening_hours?: StringNullableFilter<'clinic'> | string | null;
      name?: StringFilter<'clinic'> | string;
      created_at?: DateTimeFilter<'clinic'> | Date | string;
      updated_at?: DateTimeFilter<'clinic'> | Date | string;
      tenant_id?: StringFilter<'clinic'> | string;
      appointment?: AppointmentListRelationFilter;
      schedule?: ScheduleListRelationFilter;
    },
    'id'
  >;

  export type clinicOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clinicCountOrderByAggregateInput;
    _max?: clinicMaxOrderByAggregateInput;
    _min?: clinicMinOrderByAggregateInput;
  };

  export type clinicScalarWhereWithAggregatesInput = {
    AND?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    OR?: clinicScalarWhereWithAggregatesInput[];
    NOT?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'clinic'> | string;
    description?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    address?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    name?: StringWithAggregatesFilter<'clinic'> | string;
    created_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'clinic'> | string;
  };

  export type medical_recordWhereInput = {
    AND?: medical_recordWhereInput | medical_recordWhereInput[];
    OR?: medical_recordWhereInput[];
    NOT?: medical_recordWhereInput | medical_recordWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    doctor_id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    treatment?: StringFilter<'medical_record'> | string;
    notes?: StringNullableFilter<'medical_record'> | string | null;
    date?: DateTimeFilter<'medical_record'> | Date | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
    user_medical_record_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_medical_record_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type medical_recordOrderByWithRelationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    treatment?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_medical_record_doctor_idTouser?: userOrderByWithRelationInput;
    user_medical_record_patient_idTouser?: userOrderByWithRelationInput;
  };

  export type medical_recordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: medical_recordWhereInput | medical_recordWhereInput[];
      OR?: medical_recordWhereInput[];
      NOT?: medical_recordWhereInput | medical_recordWhereInput[];
      patient_id?: UuidFilter<'medical_record'> | string;
      doctor_id?: UuidFilter<'medical_record'> | string;
      diagnosis?: StringFilter<'medical_record'> | string;
      treatment?: StringFilter<'medical_record'> | string;
      notes?: StringNullableFilter<'medical_record'> | string | null;
      date?: DateTimeFilter<'medical_record'> | Date | string;
      created_at?: DateTimeFilter<'medical_record'> | Date | string;
      updated_at?: DateTimeFilter<'medical_record'> | Date | string;
      user_medical_record_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_medical_record_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type medical_recordOrderByWithAggregationInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    treatment?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: medical_recordCountOrderByAggregateInput;
    _max?: medical_recordMaxOrderByAggregateInput;
    _min?: medical_recordMinOrderByAggregateInput;
  };

  export type medical_recordScalarWhereWithAggregatesInput = {
    AND?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    OR?: medical_recordScalarWhereWithAggregatesInput[];
    NOT?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'medical_record'> | string;
    patient_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    doctor_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    diagnosis?: StringWithAggregatesFilter<'medical_record'> | string;
    treatment?: StringWithAggregatesFilter<'medical_record'> | string;
    notes?: StringNullableWithAggregatesFilter<'medical_record'> | string | null;
    date?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
  };

  export type prescriptionWhereInput = {
    AND?: prescriptionWhereInput | prescriptionWhereInput[];
    OR?: prescriptionWhereInput[];
    NOT?: prescriptionWhereInput | prescriptionWhereInput[];
    id?: UuidFilter<'prescription'> | string;
    medicine_name?: StringFilter<'prescription'> | string;
    dosage?: StringFilter<'prescription'> | string;
    frequency?: StringFilter<'prescription'> | string;
    duration?: StringFilter<'prescription'> | string;
    doctor_id?: UuidFilter<'prescription'> | string;
    patient_id?: UuidFilter<'prescription'> | string;
    created_at?: DateTimeFilter<'prescription'> | Date | string;
    updated_at?: DateTimeFilter<'prescription'> | Date | string;
    user_prescription_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_prescription_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type prescriptionOrderByWithRelationInput = {
    id?: SortOrder;
    medicine_name?: SortOrder;
    dosage?: SortOrder;
    frequency?: SortOrder;
    duration?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_prescription_doctor_idTouser?: userOrderByWithRelationInput;
    user_prescription_patient_idTouser?: userOrderByWithRelationInput;
  };

  export type prescriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: prescriptionWhereInput | prescriptionWhereInput[];
      OR?: prescriptionWhereInput[];
      NOT?: prescriptionWhereInput | prescriptionWhereInput[];
      medicine_name?: StringFilter<'prescription'> | string;
      dosage?: StringFilter<'prescription'> | string;
      frequency?: StringFilter<'prescription'> | string;
      duration?: StringFilter<'prescription'> | string;
      doctor_id?: UuidFilter<'prescription'> | string;
      patient_id?: UuidFilter<'prescription'> | string;
      created_at?: DateTimeFilter<'prescription'> | Date | string;
      updated_at?: DateTimeFilter<'prescription'> | Date | string;
      user_prescription_doctor_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_prescription_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type prescriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    medicine_name?: SortOrder;
    dosage?: SortOrder;
    frequency?: SortOrder;
    duration?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: prescriptionCountOrderByAggregateInput;
    _max?: prescriptionMaxOrderByAggregateInput;
    _min?: prescriptionMinOrderByAggregateInput;
  };

  export type prescriptionScalarWhereWithAggregatesInput = {
    AND?: prescriptionScalarWhereWithAggregatesInput | prescriptionScalarWhereWithAggregatesInput[];
    OR?: prescriptionScalarWhereWithAggregatesInput[];
    NOT?: prescriptionScalarWhereWithAggregatesInput | prescriptionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'prescription'> | string;
    medicine_name?: StringWithAggregatesFilter<'prescription'> | string;
    dosage?: StringWithAggregatesFilter<'prescription'> | string;
    frequency?: StringWithAggregatesFilter<'prescription'> | string;
    duration?: StringWithAggregatesFilter<'prescription'> | string;
    doctor_id?: UuidWithAggregatesFilter<'prescription'> | string;
    patient_id?: UuidWithAggregatesFilter<'prescription'> | string;
    created_at?: DateTimeWithAggregatesFilter<'prescription'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'prescription'> | Date | string;
  };

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[];
    OR?: scheduleWhereInput[];
    NOT?: scheduleWhereInput | scheduleWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    doctor_id?: UuidFilter<'schedule'> | string;
    clinic_id?: UuidFilter<'schedule'> | string;
    day?: StringFilter<'schedule'> | string;
    start_time?: DateTimeFilter<'schedule'> | Date | string;
    end_time?: DateTimeFilter<'schedule'> | Date | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    day?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: scheduleWhereInput | scheduleWhereInput[];
      OR?: scheduleWhereInput[];
      NOT?: scheduleWhereInput | scheduleWhereInput[];
      doctor_id?: UuidFilter<'schedule'> | string;
      clinic_id?: UuidFilter<'schedule'> | string;
      day?: StringFilter<'schedule'> | string;
      start_time?: DateTimeFilter<'schedule'> | Date | string;
      end_time?: DateTimeFilter<'schedule'> | Date | string;
      created_at?: DateTimeFilter<'schedule'> | Date | string;
      updated_at?: DateTimeFilter<'schedule'> | Date | string;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    day?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: scheduleCountOrderByAggregateInput;
    _max?: scheduleMaxOrderByAggregateInput;
    _min?: scheduleMinOrderByAggregateInput;
  };

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    OR?: scheduleScalarWhereWithAggregatesInput[];
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'schedule'> | string;
    doctor_id?: UuidWithAggregatesFilter<'schedule'> | string;
    clinic_id?: UuidWithAggregatesFilter<'schedule'> | string;
    day?: StringWithAggregatesFilter<'schedule'> | string;
    start_time?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    end_time?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    appointment_appointment_doctor_idTouser?: AppointmentListRelationFilter;
    appointment_appointment_patient_idTouser?: AppointmentListRelationFilter;
    medical_record_medical_record_doctor_idTouser?: Medical_recordListRelationFilter;
    medical_record_medical_record_patient_idTouser?: Medical_recordListRelationFilter;
    prescription_prescription_doctor_idTouser?: PrescriptionListRelationFilter;
    prescription_prescription_patient_idTouser?: PrescriptionListRelationFilter;
    schedule?: ScheduleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment_appointment_doctor_idTouser?: appointmentOrderByRelationAggregateInput;
    appointment_appointment_patient_idTouser?: appointmentOrderByRelationAggregateInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordOrderByRelationAggregateInput;
    medical_record_medical_record_patient_idTouser?: medical_recordOrderByRelationAggregateInput;
    prescription_prescription_doctor_idTouser?: prescriptionOrderByRelationAggregateInput;
    prescription_prescription_patient_idTouser?: prescriptionOrderByRelationAggregateInput;
    schedule?: scheduleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      appointment_appointment_doctor_idTouser?: AppointmentListRelationFilter;
      appointment_appointment_patient_idTouser?: AppointmentListRelationFilter;
      medical_record_medical_record_doctor_idTouser?: Medical_recordListRelationFilter;
      medical_record_medical_record_patient_idTouser?: Medical_recordListRelationFilter;
      prescription_prescription_doctor_idTouser?: PrescriptionListRelationFilter;
      prescription_prescription_patient_idTouser?: PrescriptionListRelationFilter;
      schedule?: ScheduleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_doctor_idTouser: userCreateNestedOneWithoutAppointment_appointment_doctor_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_doctor_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_doctor_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
    schedule?: scheduleCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
    schedule?: scheduleUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type clinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type medical_recordCreateInput = {
    id?: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_medical_record_doctor_idTouser: userCreateNestedOneWithoutMedical_record_medical_record_doctor_idTouserInput;
    user_medical_record_patient_idTouser: userCreateNestedOneWithoutMedical_record_medical_record_patient_idTouserInput;
  };

  export type medical_recordUncheckedCreateInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_medical_record_doctor_idTouser?: userUpdateOneRequiredWithoutMedical_record_medical_record_doctor_idTouserNestedInput;
    user_medical_record_patient_idTouser?: userUpdateOneRequiredWithoutMedical_record_medical_record_patient_idTouserNestedInput;
  };

  export type medical_recordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordCreateManyInput = {
    id?: string;
    patient_id: string;
    doctor_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionCreateInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_prescription_doctor_idTouser: userCreateNestedOneWithoutPrescription_prescription_doctor_idTouserInput;
    user_prescription_patient_idTouser: userCreateNestedOneWithoutPrescription_prescription_patient_idTouserInput;
  };

  export type prescriptionUncheckedCreateInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    doctor_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_prescription_doctor_idTouser?: userUpdateOneRequiredWithoutPrescription_prescription_doctor_idTouserNestedInput;
    user_prescription_patient_idTouser?: userUpdateOneRequiredWithoutPrescription_prescription_patient_idTouserNestedInput;
  };

  export type prescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionCreateManyInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    doctor_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateInput = {
    id?: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutScheduleInput;
    user: userCreateNestedOneWithoutScheduleInput;
  };

  export type scheduleUncheckedCreateInput = {
    id?: string;
    doctor_id: string;
    clinic_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutScheduleNestedInput;
    user?: userUpdateOneRequiredWithoutScheduleNestedInput;
  };

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateManyInput = {
    id?: string;
    doctor_id: string;
    clinic_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ClinicRelationFilter = {
    is?: clinicWhereInput;
    isNot?: clinicWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type ScheduleListRelationFilter = {
    every?: scheduleWhereInput;
    some?: scheduleWhereInput;
    none?: scheduleWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clinicCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type medical_recordCountOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    treatment?: SortOrder;
    notes?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMaxOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    treatment?: SortOrder;
    notes?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMinOrderByAggregateInput = {
    id?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    diagnosis?: SortOrder;
    treatment?: SortOrder;
    notes?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type prescriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    medicine_name?: SortOrder;
    dosage?: SortOrder;
    frequency?: SortOrder;
    duration?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type prescriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    medicine_name?: SortOrder;
    dosage?: SortOrder;
    frequency?: SortOrder;
    duration?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type prescriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    medicine_name?: SortOrder;
    dosage?: SortOrder;
    frequency?: SortOrder;
    duration?: SortOrder;
    doctor_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    day?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    day?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    day?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Medical_recordListRelationFilter = {
    every?: medical_recordWhereInput;
    some?: medical_recordWhereInput;
    none?: medical_recordWhereInput;
  };

  export type PrescriptionListRelationFilter = {
    every?: prescriptionWhereInput;
    some?: prescriptionWhereInput;
    none?: prescriptionWhereInput;
  };

  export type medical_recordOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type prescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type clinicCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointment_appointment_doctor_idTouserInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type clinicUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    upsert?: clinicUpsertWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutAppointmentInput, clinicUpdateWithoutAppointmentInput>,
      clinicUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointment_appointment_doctor_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_doctor_idTouserInput;
    upsert?: userUpsertWithoutAppointment_appointment_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutAppointment_appointment_doctor_idTouserInput,
        userUpdateWithoutAppointment_appointment_doctor_idTouserInput
      >,
      userUncheckedUpdateWithoutAppointment_appointment_doctor_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput;
    upsert?: userUpsertWithoutAppointment_appointment_patient_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutAppointment_appointment_patient_idTouserInput,
        userUpdateWithoutAppointment_appointment_patient_idTouserInput
      >,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type appointmentCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type scheduleCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>
      | scheduleCreateWithoutClinicInput[]
      | scheduleUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutClinicInput | scheduleCreateOrConnectWithoutClinicInput[];
    createMany?: scheduleCreateManyClinicInputEnvelope;
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type scheduleUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>
      | scheduleCreateWithoutClinicInput[]
      | scheduleUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutClinicInput | scheduleCreateOrConnectWithoutClinicInput[];
    createMany?: scheduleCreateManyClinicInputEnvelope;
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type appointmentUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type scheduleUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>
      | scheduleCreateWithoutClinicInput[]
      | scheduleUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutClinicInput | scheduleCreateOrConnectWithoutClinicInput[];
    upsert?: scheduleUpsertWithWhereUniqueWithoutClinicInput | scheduleUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: scheduleCreateManyClinicInputEnvelope;
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    update?: scheduleUpdateWithWhereUniqueWithoutClinicInput | scheduleUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: scheduleUpdateManyWithWhereWithoutClinicInput | scheduleUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type scheduleUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>
      | scheduleCreateWithoutClinicInput[]
      | scheduleUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutClinicInput | scheduleCreateOrConnectWithoutClinicInput[];
    upsert?: scheduleUpsertWithWhereUniqueWithoutClinicInput | scheduleUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: scheduleCreateManyClinicInputEnvelope;
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    update?: scheduleUpdateWithWhereUniqueWithoutClinicInput | scheduleUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: scheduleUpdateManyWithWhereWithoutClinicInput | scheduleUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutMedical_record_medical_record_doctor_idTouserInput = {
    create?: XOR<
      userCreateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutMedical_record_medical_record_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMedical_record_medical_record_patient_idTouserInput = {
    create?: XOR<
      userCreateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutMedical_record_medical_record_patient_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutMedical_record_medical_record_doctor_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutMedical_record_medical_record_doctor_idTouserInput;
    upsert?: userUpsertWithoutMedical_record_medical_record_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutMedical_record_medical_record_doctor_idTouserInput,
        userUpdateWithoutMedical_record_medical_record_doctor_idTouserInput
      >,
      userUncheckedUpdateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutMedical_record_medical_record_patient_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutMedical_record_medical_record_patient_idTouserInput;
    upsert?: userUpsertWithoutMedical_record_medical_record_patient_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutMedical_record_medical_record_patient_idTouserInput,
        userUpdateWithoutMedical_record_medical_record_patient_idTouserInput
      >,
      userUncheckedUpdateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
  };

  export type userCreateNestedOneWithoutPrescription_prescription_doctor_idTouserInput = {
    create?: XOR<
      userCreateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPrescription_prescription_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPrescription_prescription_patient_idTouserInput = {
    create?: XOR<
      userCreateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPrescription_prescription_patient_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutPrescription_prescription_doctor_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_doctor_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPrescription_prescription_doctor_idTouserInput;
    upsert?: userUpsertWithoutPrescription_prescription_doctor_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPrescription_prescription_doctor_idTouserInput,
        userUpdateWithoutPrescription_prescription_doctor_idTouserInput
      >,
      userUncheckedUpdateWithoutPrescription_prescription_doctor_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutPrescription_prescription_patient_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutPrescription_prescription_patient_idTouserInput;
    upsert?: userUpsertWithoutPrescription_prescription_patient_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutPrescription_prescription_patient_idTouserInput,
        userUpdateWithoutPrescription_prescription_patient_idTouserInput
      >,
      userUncheckedUpdateWithoutPrescription_prescription_patient_idTouserInput
    >;
  };

  export type clinicCreateNestedOneWithoutScheduleInput = {
    create?: XOR<clinicCreateWithoutScheduleInput, clinicUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutScheduleInput;
    connect?: clinicWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutScheduleInput = {
    create?: XOR<userCreateWithoutScheduleInput, userUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutScheduleInput;
    connect?: userWhereUniqueInput;
  };

  export type clinicUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<clinicCreateWithoutScheduleInput, clinicUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutScheduleInput;
    upsert?: clinicUpsertWithoutScheduleInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutScheduleInput, clinicUpdateWithoutScheduleInput>,
      clinicUncheckedUpdateWithoutScheduleInput
    >;
  };

  export type userUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<userCreateWithoutScheduleInput, userUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: userCreateOrConnectWithoutScheduleInput;
    upsert?: userUpsertWithoutScheduleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutScheduleInput, userUpdateWithoutScheduleInput>,
      userUncheckedUpdateWithoutScheduleInput
    >;
  };

  export type appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_doctor_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_doctor_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_doctor_idTouserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_patient_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_patient_idTouserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_doctor_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_doctor_idTouserInputEnvelope;
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
  };

  export type prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_patient_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_patient_idTouserInputEnvelope;
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
  };

  export type scheduleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
      | scheduleCreateWithoutUserInput[]
      | scheduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[];
    createMany?: scheduleCreateManyUserInputEnvelope;
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_doctor_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_doctor_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_doctor_idTouserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_patient_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_patient_idTouserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_doctor_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_doctor_idTouserInputEnvelope;
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
  };

  export type prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_patient_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_patient_idTouserInputEnvelope;
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
  };

  export type scheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
      | scheduleCreateWithoutUserInput[]
      | scheduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[];
    createMany?: scheduleCreateManyUserInputEnvelope;
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_doctor_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_doctor_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_doctor_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_doctor_idTouserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_doctor_idTouserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_patient_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_patient_idTouserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_patient_idTouserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_doctor_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput[];
    upsert?:
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_doctor_idTouserInputEnvelope;
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    update?:
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput[];
    updateMany?:
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_doctor_idTouserInput[];
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
  };

  export type prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_patient_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput[];
    upsert?:
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_patient_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_patient_idTouserInputEnvelope;
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    update?:
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_patient_idTouserInput[];
    updateMany?:
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_patient_idTouserInput[];
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
  };

  export type scheduleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
      | scheduleCreateWithoutUserInput[]
      | scheduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[];
    upsert?: scheduleUpsertWithWhereUniqueWithoutUserInput | scheduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: scheduleCreateManyUserInputEnvelope;
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    update?: scheduleUpdateWithWhereUniqueWithoutUserInput | scheduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: scheduleUpdateManyWithWhereWithoutUserInput | scheduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_doctor_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_doctor_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_doctor_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_doctor_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_doctor_idTouserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_doctor_idTouserInput
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_doctor_idTouserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput = {
    create?:
      | XOR<
          medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
          medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
        >
      | medical_recordCreateWithoutUser_medical_record_patient_idTouserInput[]
      | medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput
      | medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput[];
    createMany?: medical_recordCreateManyUser_medical_record_patient_idTouserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_patient_idTouserInput
      | medical_recordUpdateManyWithWhereWithoutUser_medical_record_patient_idTouserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_doctor_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput[];
    upsert?:
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_doctor_idTouserInputEnvelope;
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    update?:
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput[];
    updateMany?:
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_doctor_idTouserInput
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_doctor_idTouserInput[];
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
  };

  export type prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput = {
    create?:
      | XOR<
          prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
          prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
        >
      | prescriptionCreateWithoutUser_prescription_patient_idTouserInput[]
      | prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput[];
    connectOrCreate?:
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput
      | prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput[];
    upsert?:
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpsertWithWhereUniqueWithoutUser_prescription_patient_idTouserInput[];
    createMany?: prescriptionCreateManyUser_prescription_patient_idTouserInputEnvelope;
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[];
    update?:
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpdateWithWhereUniqueWithoutUser_prescription_patient_idTouserInput[];
    updateMany?:
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_patient_idTouserInput
      | prescriptionUpdateManyWithWhereWithoutUser_prescription_patient_idTouserInput[];
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
  };

  export type scheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>
      | scheduleCreateWithoutUserInput[]
      | scheduleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: scheduleCreateOrConnectWithoutUserInput | scheduleCreateOrConnectWithoutUserInput[];
    upsert?: scheduleUpsertWithWhereUniqueWithoutUserInput | scheduleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: scheduleCreateManyUserInputEnvelope;
    set?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    disconnect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    delete?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    connect?: scheduleWhereUniqueInput | scheduleWhereUniqueInput[];
    update?: scheduleUpdateWithWhereUniqueWithoutUserInput | scheduleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: scheduleUpdateManyWithWhereWithoutUserInput | scheduleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type clinicCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    schedule?: scheduleCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    schedule?: scheduleUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutAppointmentInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
  };

  export type userCreateWithoutAppointment_appointment_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointment_appointment_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointment_appointment_doctor_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_doctor_idTouserInput
    >;
  };

  export type userCreateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type clinicUpsertWithoutAppointmentInput = {
    update: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
  };

  export type clinicUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    schedule?: scheduleUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    schedule?: scheduleUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type userUpsertWithoutAppointment_appointment_doctor_idTouserInput = {
    update: XOR<
      userUpdateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_doctor_idTouserInput
    >;
    create: XOR<
      userCreateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_doctor_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointment_appointment_doctor_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutAppointment_appointment_doctor_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_doctor_idTouserInput
    >;
  };

  export type userUpdateWithoutAppointment_appointment_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointment_appointment_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutAppointment_appointment_patient_idTouserInput = {
    update: XOR<
      userUpdateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
    create: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointment_appointment_patient_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type userUpdateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutClinicInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_appointment_doctor_idTouser: userCreateNestedOneWithoutAppointment_appointment_doctor_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
  };

  export type appointmentUncheckedCreateWithoutClinicInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    doctor_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentCreateManyClinicInputEnvelope = {
    data: appointmentCreateManyClinicInput | appointmentCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type scheduleCreateWithoutClinicInput = {
    id?: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutScheduleInput;
  };

  export type scheduleUncheckedCreateWithoutClinicInput = {
    id?: string;
    doctor_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleCreateOrConnectWithoutClinicInput = {
    where: scheduleWhereUniqueInput;
    create: XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>;
  };

  export type scheduleCreateManyClinicInputEnvelope = {
    data: scheduleCreateManyClinicInput | scheduleCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutClinicInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutClinicInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date?: DateTimeFilter<'appointment'> | Date | string;
    time?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type scheduleUpsertWithWhereUniqueWithoutClinicInput = {
    where: scheduleWhereUniqueInput;
    update: XOR<scheduleUpdateWithoutClinicInput, scheduleUncheckedUpdateWithoutClinicInput>;
    create: XOR<scheduleCreateWithoutClinicInput, scheduleUncheckedCreateWithoutClinicInput>;
  };

  export type scheduleUpdateWithWhereUniqueWithoutClinicInput = {
    where: scheduleWhereUniqueInput;
    data: XOR<scheduleUpdateWithoutClinicInput, scheduleUncheckedUpdateWithoutClinicInput>;
  };

  export type scheduleUpdateManyWithWhereWithoutClinicInput = {
    where: scheduleScalarWhereInput;
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutClinicInput>;
  };

  export type scheduleScalarWhereInput = {
    AND?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
    OR?: scheduleScalarWhereInput[];
    NOT?: scheduleScalarWhereInput | scheduleScalarWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    doctor_id?: UuidFilter<'schedule'> | string;
    clinic_id?: UuidFilter<'schedule'> | string;
    day?: StringFilter<'schedule'> | string;
    start_time?: DateTimeFilter<'schedule'> | Date | string;
    end_time?: DateTimeFilter<'schedule'> | Date | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
  };

  export type userCreateWithoutMedical_record_medical_record_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_record_medical_record_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_record_medical_record_doctor_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
  };

  export type userCreateWithoutMedical_record_medical_record_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_record_medical_record_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_record_medical_record_patient_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
  };

  export type userUpsertWithoutMedical_record_medical_record_doctor_idTouserInput = {
    update: XOR<
      userUpdateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedUpdateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
    create: XOR<
      userCreateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_record_medical_record_doctor_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutMedical_record_medical_record_doctor_idTouserInput,
      userUncheckedUpdateWithoutMedical_record_medical_record_doctor_idTouserInput
    >;
  };

  export type userUpdateWithoutMedical_record_medical_record_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_record_medical_record_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutMedical_record_medical_record_patient_idTouserInput = {
    update: XOR<
      userUpdateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedUpdateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
    create: XOR<
      userCreateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedCreateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_record_medical_record_patient_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutMedical_record_medical_record_patient_idTouserInput,
      userUncheckedUpdateWithoutMedical_record_medical_record_patient_idTouserInput
    >;
  };

  export type userUpdateWithoutMedical_record_medical_record_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_record_medical_record_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutPrescription_prescription_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPrescription_prescription_doctor_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPrescription_prescription_doctor_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_doctor_idTouserInput
    >;
  };

  export type userCreateWithoutPrescription_prescription_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    schedule?: scheduleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPrescription_prescription_patient_idTouserInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    schedule?: scheduleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPrescription_prescription_patient_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_patient_idTouserInput
    >;
  };

  export type userUpsertWithoutPrescription_prescription_doctor_idTouserInput = {
    update: XOR<
      userUpdateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedUpdateWithoutPrescription_prescription_doctor_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_doctor_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPrescription_prescription_doctor_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPrescription_prescription_doctor_idTouserInput,
      userUncheckedUpdateWithoutPrescription_prescription_doctor_idTouserInput
    >;
  };

  export type userUpdateWithoutPrescription_prescription_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPrescription_prescription_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutPrescription_prescription_patient_idTouserInput = {
    update: XOR<
      userUpdateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedUpdateWithoutPrescription_prescription_patient_idTouserInput
    >;
    create: XOR<
      userCreateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedCreateWithoutPrescription_prescription_patient_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPrescription_prescription_patient_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutPrescription_prescription_patient_idTouserInput,
      userUncheckedUpdateWithoutPrescription_prescription_patient_idTouserInput
    >;
  };

  export type userUpdateWithoutPrescription_prescription_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    schedule?: scheduleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPrescription_prescription_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    schedule?: scheduleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type clinicCreateWithoutScheduleInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutScheduleInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutScheduleInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutScheduleInput, clinicUncheckedCreateWithoutScheduleInput>;
  };

  export type userCreateWithoutScheduleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
  };

  export type userUncheckedCreateWithoutScheduleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_doctor_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_doctor_idTouserInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedCreateNestedManyWithoutUser_medical_record_patient_idTouserInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_doctor_idTouserInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedCreateNestedManyWithoutUser_prescription_patient_idTouserInput;
  };

  export type userCreateOrConnectWithoutScheduleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutScheduleInput, userUncheckedCreateWithoutScheduleInput>;
  };

  export type clinicUpsertWithoutScheduleInput = {
    update: XOR<clinicUpdateWithoutScheduleInput, clinicUncheckedUpdateWithoutScheduleInput>;
    create: XOR<clinicCreateWithoutScheduleInput, clinicUncheckedCreateWithoutScheduleInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutScheduleInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutScheduleInput, clinicUncheckedUpdateWithoutScheduleInput>;
  };

  export type clinicUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type userUpsertWithoutScheduleInput = {
    update: XOR<userUpdateWithoutScheduleInput, userUncheckedUpdateWithoutScheduleInput>;
    create: XOR<userCreateWithoutScheduleInput, userUncheckedCreateWithoutScheduleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutScheduleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutScheduleInput, userUncheckedUpdateWithoutScheduleInput>;
  };

  export type userUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
  };

  export type userUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_doctor_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    medical_record_medical_record_doctor_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserNestedInput;
    medical_record_medical_record_patient_idTouser?: medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserNestedInput;
    prescription_prescription_doctor_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserNestedInput;
    prescription_prescription_patient_idTouser?: prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserNestedInput;
  };

  export type appointmentCreateWithoutUser_appointment_doctor_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
  };

  export type appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutUser_appointment_doctor_idTouserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
    >;
  };

  export type appointmentCreateManyUser_appointment_doctor_idTouserInputEnvelope = {
    data:
      | appointmentCreateManyUser_appointment_doctor_idTouserInput
      | appointmentCreateManyUser_appointment_doctor_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentCreateWithoutUser_appointment_patient_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_doctor_idTouser: userCreateNestedOneWithoutAppointment_appointment_doctor_idTouserInput;
  };

  export type appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope = {
    data:
      | appointmentCreateManyUser_appointment_patient_idTouserInput
      | appointmentCreateManyUser_appointment_patient_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput = {
    id?: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_medical_record_patient_idTouser: userCreateNestedOneWithoutMedical_record_medical_record_patient_idTouserInput;
  };

  export type medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput = {
    id?: string;
    patient_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutUser_medical_record_doctor_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<
      medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
      medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
    >;
  };

  export type medical_recordCreateManyUser_medical_record_doctor_idTouserInputEnvelope = {
    data:
      | medical_recordCreateManyUser_medical_record_doctor_idTouserInput
      | medical_recordCreateManyUser_medical_record_doctor_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutUser_medical_record_patient_idTouserInput = {
    id?: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_medical_record_doctor_idTouser: userCreateNestedOneWithoutMedical_record_medical_record_doctor_idTouserInput;
  };

  export type medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput = {
    id?: string;
    doctor_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutUser_medical_record_patient_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<
      medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
      medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
    >;
  };

  export type medical_recordCreateManyUser_medical_record_patient_idTouserInputEnvelope = {
    data:
      | medical_recordCreateManyUser_medical_record_patient_idTouserInput
      | medical_recordCreateManyUser_medical_record_patient_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type prescriptionCreateWithoutUser_prescription_doctor_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_prescription_patient_idTouser: userCreateNestedOneWithoutPrescription_prescription_patient_idTouserInput;
  };

  export type prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionCreateOrConnectWithoutUser_prescription_doctor_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    create: XOR<
      prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
      prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
    >;
  };

  export type prescriptionCreateManyUser_prescription_doctor_idTouserInputEnvelope = {
    data:
      | prescriptionCreateManyUser_prescription_doctor_idTouserInput
      | prescriptionCreateManyUser_prescription_doctor_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type prescriptionCreateWithoutUser_prescription_patient_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_prescription_doctor_idTouser: userCreateNestedOneWithoutPrescription_prescription_doctor_idTouserInput;
  };

  export type prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionCreateOrConnectWithoutUser_prescription_patient_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    create: XOR<
      prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
      prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
    >;
  };

  export type prescriptionCreateManyUser_prescription_patient_idTouserInputEnvelope = {
    data:
      | prescriptionCreateManyUser_prescription_patient_idTouserInput
      | prescriptionCreateManyUser_prescription_patient_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type scheduleCreateWithoutUserInput = {
    id?: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutScheduleInput;
  };

  export type scheduleUncheckedCreateWithoutUserInput = {
    id?: string;
    clinic_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleCreateOrConnectWithoutUserInput = {
    where: scheduleWhereUniqueInput;
    create: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>;
  };

  export type scheduleCreateManyUserInputEnvelope = {
    data: scheduleCreateManyUserInput | scheduleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutUser_appointment_doctor_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_doctor_idTouserInput
    >;
    create: XOR<
      appointmentCreateWithoutUser_appointment_doctor_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_doctor_idTouserInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUser_appointment_doctor_idTouserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutUser_appointment_doctor_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_doctor_idTouserInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutUser_appointment_doctor_idTouserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<
      appointmentUpdateManyMutationInput,
      appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserInput
    >;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput
    >;
    create: XOR<
      appointmentCreateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<
      appointmentUpdateManyMutationInput,
      appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<
      medical_recordUpdateWithoutUser_medical_record_doctor_idTouserInput,
      medical_recordUncheckedUpdateWithoutUser_medical_record_doctor_idTouserInput
    >;
    create: XOR<
      medical_recordCreateWithoutUser_medical_record_doctor_idTouserInput,
      medical_recordUncheckedCreateWithoutUser_medical_record_doctor_idTouserInput
    >;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_doctor_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<
      medical_recordUpdateWithoutUser_medical_record_doctor_idTouserInput,
      medical_recordUncheckedUpdateWithoutUser_medical_record_doctor_idTouserInput
    >;
  };

  export type medical_recordUpdateManyWithWhereWithoutUser_medical_record_doctor_idTouserInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<
      medical_recordUpdateManyMutationInput,
      medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserInput
    >;
  };

  export type medical_recordScalarWhereInput = {
    AND?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    OR?: medical_recordScalarWhereInput[];
    NOT?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    doctor_id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    treatment?: StringFilter<'medical_record'> | string;
    notes?: StringNullableFilter<'medical_record'> | string | null;
    date?: DateTimeFilter<'medical_record'> | Date | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<
      medical_recordUpdateWithoutUser_medical_record_patient_idTouserInput,
      medical_recordUncheckedUpdateWithoutUser_medical_record_patient_idTouserInput
    >;
    create: XOR<
      medical_recordCreateWithoutUser_medical_record_patient_idTouserInput,
      medical_recordUncheckedCreateWithoutUser_medical_record_patient_idTouserInput
    >;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutUser_medical_record_patient_idTouserInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<
      medical_recordUpdateWithoutUser_medical_record_patient_idTouserInput,
      medical_recordUncheckedUpdateWithoutUser_medical_record_patient_idTouserInput
    >;
  };

  export type medical_recordUpdateManyWithWhereWithoutUser_medical_record_patient_idTouserInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<
      medical_recordUpdateManyMutationInput,
      medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserInput
    >;
  };

  export type prescriptionUpsertWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    update: XOR<
      prescriptionUpdateWithoutUser_prescription_doctor_idTouserInput,
      prescriptionUncheckedUpdateWithoutUser_prescription_doctor_idTouserInput
    >;
    create: XOR<
      prescriptionCreateWithoutUser_prescription_doctor_idTouserInput,
      prescriptionUncheckedCreateWithoutUser_prescription_doctor_idTouserInput
    >;
  };

  export type prescriptionUpdateWithWhereUniqueWithoutUser_prescription_doctor_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    data: XOR<
      prescriptionUpdateWithoutUser_prescription_doctor_idTouserInput,
      prescriptionUncheckedUpdateWithoutUser_prescription_doctor_idTouserInput
    >;
  };

  export type prescriptionUpdateManyWithWhereWithoutUser_prescription_doctor_idTouserInput = {
    where: prescriptionScalarWhereInput;
    data: XOR<
      prescriptionUpdateManyMutationInput,
      prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserInput
    >;
  };

  export type prescriptionScalarWhereInput = {
    AND?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
    OR?: prescriptionScalarWhereInput[];
    NOT?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[];
    id?: UuidFilter<'prescription'> | string;
    medicine_name?: StringFilter<'prescription'> | string;
    dosage?: StringFilter<'prescription'> | string;
    frequency?: StringFilter<'prescription'> | string;
    duration?: StringFilter<'prescription'> | string;
    doctor_id?: UuidFilter<'prescription'> | string;
    patient_id?: UuidFilter<'prescription'> | string;
    created_at?: DateTimeFilter<'prescription'> | Date | string;
    updated_at?: DateTimeFilter<'prescription'> | Date | string;
  };

  export type prescriptionUpsertWithWhereUniqueWithoutUser_prescription_patient_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    update: XOR<
      prescriptionUpdateWithoutUser_prescription_patient_idTouserInput,
      prescriptionUncheckedUpdateWithoutUser_prescription_patient_idTouserInput
    >;
    create: XOR<
      prescriptionCreateWithoutUser_prescription_patient_idTouserInput,
      prescriptionUncheckedCreateWithoutUser_prescription_patient_idTouserInput
    >;
  };

  export type prescriptionUpdateWithWhereUniqueWithoutUser_prescription_patient_idTouserInput = {
    where: prescriptionWhereUniqueInput;
    data: XOR<
      prescriptionUpdateWithoutUser_prescription_patient_idTouserInput,
      prescriptionUncheckedUpdateWithoutUser_prescription_patient_idTouserInput
    >;
  };

  export type prescriptionUpdateManyWithWhereWithoutUser_prescription_patient_idTouserInput = {
    where: prescriptionScalarWhereInput;
    data: XOR<
      prescriptionUpdateManyMutationInput,
      prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserInput
    >;
  };

  export type scheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: scheduleWhereUniqueInput;
    update: XOR<scheduleUpdateWithoutUserInput, scheduleUncheckedUpdateWithoutUserInput>;
    create: XOR<scheduleCreateWithoutUserInput, scheduleUncheckedCreateWithoutUserInput>;
  };

  export type scheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: scheduleWhereUniqueInput;
    data: XOR<scheduleUpdateWithoutUserInput, scheduleUncheckedUpdateWithoutUserInput>;
  };

  export type scheduleUpdateManyWithWhereWithoutUserInput = {
    where: scheduleScalarWhereInput;
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyWithoutUserInput>;
  };

  export type appointmentCreateManyClinicInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    doctor_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleCreateManyClinicInput = {
    id?: string;
    doctor_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_appointment_doctor_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_doctor_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutScheduleNestedInput;
  };

  export type scheduleUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyUser_appointment_doctor_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    patient_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateManyUser_appointment_patient_idTouserInput = {
    id?: string;
    date: Date | string;
    time: Date | string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyUser_medical_record_doctor_idTouserInput = {
    id?: string;
    patient_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyUser_medical_record_patient_idTouserInput = {
    id?: string;
    doctor_id: string;
    diagnosis: string;
    treatment: string;
    notes?: string | null;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionCreateManyUser_prescription_doctor_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type prescriptionCreateManyUser_prescription_patient_idTouserInput = {
    id?: string;
    medicine_name: string;
    dosage: string;
    frequency: string;
    duration: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleCreateManyUserInput = {
    id?: string;
    clinic_id: string;
    day: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutUser_appointment_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUser_appointment_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUpdateWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_doctor_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_doctor_idTouserNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    time?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutUser_medical_record_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_medical_record_patient_idTouser?: userUpdateOneRequiredWithoutMedical_record_medical_record_patient_idTouserNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutUser_medical_record_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutUser_medical_record_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutUser_medical_record_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_medical_record_doctor_idTouser?: userUpdateOneRequiredWithoutMedical_record_medical_record_doctor_idTouserNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutUser_medical_record_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutUser_medical_record_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    treatment?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionUpdateWithoutUser_prescription_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_prescription_patient_idTouser?: userUpdateOneRequiredWithoutPrescription_prescription_patient_idTouserNestedInput;
  };

  export type prescriptionUncheckedUpdateWithoutUser_prescription_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionUncheckedUpdateManyWithoutUser_prescription_doctor_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionUpdateWithoutUser_prescription_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_prescription_doctor_idTouser?: userUpdateOneRequiredWithoutPrescription_prescription_doctor_idTouserNestedInput;
  };

  export type prescriptionUncheckedUpdateWithoutUser_prescription_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type prescriptionUncheckedUpdateManyWithoutUser_prescription_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    medicine_name?: StringFieldUpdateOperationsInput | string;
    dosage?: StringFieldUpdateOperationsInput | string;
    frequency?: StringFieldUpdateOperationsInput | string;
    duration?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutScheduleNestedInput;
  };

  export type scheduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    day?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ClinicCountOutputTypeDefaultArgs instead
   */
  export type ClinicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clinicDefaultArgs instead
   */
  export type clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clinicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use medical_recordDefaultArgs instead
   */
  export type medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    medical_recordDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use prescriptionDefaultArgs instead
   */
  export type prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    prescriptionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use scheduleDefaultArgs instead
   */
  export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
