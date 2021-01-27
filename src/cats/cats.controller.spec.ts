import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
    let catsController: CatsController;
    let catsService: CatsService;
  
    beforeEach(() => {
      catsService = new CatsService();
      catsController = new CatsController(catsService);
    });
  
    describe('findAll', () => {
      it('should return an array of cats', async () => {
        const result = [{name: 'something', breed: 'something', age: 5}];
        jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
  
        expect(await catsController.findAll()).toBe(result);
      });
    });
  });