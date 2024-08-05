import { HttpInterceptorFn } from '@angular/common/http';

export const inInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
