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
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
    updatedAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
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
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
    updatedAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
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
    } | null;
    createdAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
    updatedAt?: {
        toJSON?: {} | null;
        [Symbol.toPrimitive]?: {} | null;
        toString?: {} | null;
        toLocaleString?: {} | null;
        toDateString?: {} | null;
        toTimeString?: {} | null;
        toLocaleDateString?: {} | null;
        toLocaleTimeString?: {} | null;
        getTime?: {} | null;
        getFullYear?: {} | null;
        getUTCFullYear?: {} | null;
        getMonth?: {} | null;
        getUTCMonth?: {} | null;
        getDate?: {} | null;
        getUTCDate?: {} | null;
        getDay?: {} | null;
        getUTCDay?: {} | null;
        getHours?: {} | null;
        getUTCHours?: {} | null;
        getMinutes?: {} | null;
        getUTCMinutes?: {} | null;
        getSeconds?: {} | null;
        getUTCSeconds?: {} | null;
        getMilliseconds?: {} | null;
        getUTCMilliseconds?: {} | null;
        getTimezoneOffset?: {} | null;
        setTime?: {} | null;
        setMilliseconds?: {} | null;
        setUTCMilliseconds?: {} | null;
        setSeconds?: {} | null;
        setUTCSeconds?: {} | null;
        setMinutes?: {} | null;
        setUTCMinutes?: {} | null;
        setHours?: {} | null;
        setUTCHours?: {} | null;
        setDate?: {} | null;
        setUTCDate?: {} | null;
        setMonth?: {} | null;
        setUTCMonth?: {} | null;
        setFullYear?: {} | null;
        setUTCFullYear?: {} | null;
        toUTCString?: {} | null;
        toISOString?: {} | null;
        valueOf?: {} | null;
    } | null;
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
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    title: string;
    link: string;
    tags: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
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
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    }[];
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const linkModel: mongoose.Model<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map