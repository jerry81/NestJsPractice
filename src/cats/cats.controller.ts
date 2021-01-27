import { Controller, Get, Post, Body,
  HttpCode, Header, Param, UseFilters, 
  ParseIntPipe, UseGuards 
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from '../guard/roles.guard'
import { CreateCatDto } from './dto/create-cat.dto'
import { HttpExceptionFilter } from '../exceptions/http-exception.filter';
import { ValidationPipe } from '../pipes/validation.pipe';

@UseFilters(HttpExceptionFilter) // controller scoped
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  // route param
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    // throw new ForbiddenException()
    return `this action returns a #${id} cat`
  }

  // with body
  @Post()
  @Roles('admin')
  // @UseFilters(HttpExceptionFilter) endpoint scoped
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // throw new ForbiddenException()
    this.catsService.create(createCatDto);
  }
}
