import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.get('/', controller.home.index);

  // ====== API ======
  const apiV1 = app.router.namespace('/api/v1');
  
  apiV1.resources('users', '/users', middleware.auth(), controller.api.v1.user);
  apiV1.post('/user/login', controller.api.v1.user.login);
};
