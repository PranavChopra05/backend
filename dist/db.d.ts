import mongoose, { Types } from "mongoose";
export declare const VALID_CONTENT_TYPES: string[];
export declare const userModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    password: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    username: string;
    password: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Tag: mongoose.Model<{
    title: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    title: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const contentModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    title?: unknown;
    link?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null | undefined;
    createdAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
    updatedAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    title?: unknown;
    link?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null | undefined;
    createdAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
    updatedAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    tags: Types.DocumentArray<{
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }> & {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    }>;
    type?: unknown;
    title?: unknown;
    link?: unknown;
    userId?: {
        prototype?: unknown;
        cacheHexString?: unknown;
        generate?: any;
        createFromTime?: any;
        createFromHexString?: any;
        createFromBase64?: any;
        isValid?: any;
    } | null | undefined;
    createdAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
    updatedAt?: {
        toJSON?: {} | null | undefined;
        [Symbol.toPrimitive]?: {} | null | undefined;
        toString?: {} | null | undefined;
        toLocaleString?: {} | null | undefined;
        toDateString?: {} | null | undefined;
        toTimeString?: {} | null | undefined;
        toLocaleDateString?: {} | null | undefined;
        toLocaleTimeString?: {} | null | undefined;
        getTime?: {} | null | undefined;
        getFullYear?: {} | null | undefined;
        getUTCFullYear?: {} | null | undefined;
        getMonth?: {} | null | undefined;
        getUTCMonth?: {} | null | undefined;
        getDate?: {} | null | undefined;
        getUTCDate?: {} | null | undefined;
        getDay?: {} | null | undefined;
        getUTCDay?: {} | null | undefined;
        getHours?: {} | null | undefined;
        getUTCHours?: {} | null | undefined;
        getMinutes?: {} | null | undefined;
        getUTCMinutes?: {} | null | undefined;
        getSeconds?: {} | null | undefined;
        getUTCSeconds?: {} | null | undefined;
        getMilliseconds?: {} | null | undefined;
        getUTCMilliseconds?: {} | null | undefined;
        getTimezoneOffset?: {} | null | undefined;
        setTime?: {} | null | undefined;
        setMilliseconds?: {} | null | undefined;
        setUTCMilliseconds?: {} | null | undefined;
        setSeconds?: {} | null | undefined;
        setUTCSeconds?: {} | null | undefined;
        setMinutes?: {} | null | undefined;
        setUTCMinutes?: {} | null | undefined;
        setHours?: {} | null | undefined;
        setUTCHours?: {} | null | undefined;
        setDate?: {} | null | undefined;
        setUTCDate?: {} | null | undefined;
        setMonth?: {} | null | undefined;
        setUTCMonth?: {} | null | undefined;
        setFullYear?: {} | null | undefined;
        setUTCFullYear?: {} | null | undefined;
        toUTCString?: {} | null | undefined;
        toISOString?: {} | null | undefined;
        toTemporalInstant?: {} | null | undefined;
        valueOf?: {} | null | undefined;
    } | null | undefined;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    link: string;
    tags: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    }[];
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    link: string;
    tags: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    }[];
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    link: string;
    tags: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    }[];
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const linkModel: mongoose.Model<{
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
    hash: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map