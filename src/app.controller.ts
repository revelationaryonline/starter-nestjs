import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:book/check')
  getHealth(@Param('book') book: string): {} {
    return this.appService.getHealth(book);
  }
  @Get('/:book/chapters')
  getChapterCount(@Param('book') book: string): {} {
    return this.appService.getChaptersCount(book);
  }

  // @Get('/:book/:chapter')
  // async getChapter(
  //   @Param('book') book: string,
  //   @Param('chapter') chapter: number,
  // ): Promise<any> {
  //   return this.appService.getChapter(book, chapter);
  // }

  // @Get('/:book/:chapter/:verse')
  // async getVerse(
  //   @Param('book') book: string,
  //   @Param('chapter') chapter: number,
  //   @Param('verse') verse: number,
  // ): Promise<any> {
  //   return this.appService.getVerse(book, chapter, verse);
  // }

  @Get('search')
  async serachVerse(@Query() params: any): Promise<any> {
    return this.appService.searchVerseAcrossBooks(params.text);
  }
}
