import { Controller, Get, Post, Body, Req, 
  HttpCode, Header, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto'

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
    return `this action returns a #${params.id} cat`
  }

  // with body
  @Post()
  @Header('Cache-Control', 'no-store')
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
