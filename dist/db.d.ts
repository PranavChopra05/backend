import mongoose, { Types } from "mongoose";
export declare const VALID_CONTENT_TYPES: string[];
export declare const userModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    password: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    password: string;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    password: string;
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
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    password: string;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    username: string;
    password: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const contentModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
    userId: {
        prototype?: Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    };
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
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
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
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
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
    link: string;
    title: string;
    notes: string;
    tags: string[];
    collectionName: string;
    favorite: boolean;
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