import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CatName = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request[data];
  },
);