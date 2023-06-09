import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users' , (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Luann'}];
    res.sendStatus(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.sendStatus(StatusCodes.OK).send({ uuid })
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body;
  res.sendStatus(StatusCodes.CREATED).send(newUser)
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid ;

  res.sendStatus(StatusCodes.OK).send({uuid})
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
 res.status(StatusCodes.OK)
})

export default usersRoute;



