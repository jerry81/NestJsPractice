import { Controller, Get, Post, Body, Req, 
  HttpCode, Header, Param, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto'
import { ForbiddenException } from '../exceptions/forbidden.exception'
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';

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
  findOne(@Param() params): string {
    console.log('params.id')
    throw new ForbiddenException()
    return `this action returns a #${params.id} cat`
  }

  // with body
  @Post()
  // @UseFilters(HttpExceptionFilter) endpoint scoped
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException()
    this.catsService.create(createCatDto);
  }
}
