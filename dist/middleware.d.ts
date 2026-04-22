import { Request, Response, NextFunction } from "express";
export interface CustomRequest extends Request {
    userId?: string;
}
export declare const userMiddleware: (req: CustomRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=middleware.d.ts.map