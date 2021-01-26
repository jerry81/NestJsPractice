import { Controller, Get, Post, Body,
  HttpCode, Header, Param, UseFilters, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto'
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@UseFilters(HttpExceptionFilter) // controller scoped
@Controller('cats')
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
  // @UseFilters(HttpExceptionFilter) endpoint scoped
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    // throw new ForbiddenException()
    this.catsService.create(createCatDto);
  }
}
