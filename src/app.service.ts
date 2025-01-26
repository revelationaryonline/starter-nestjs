import { Injectable, Logger } from '@nestjs/common';
import { connection } from './db.config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  async getHealth(book: string): Promise<{}> {
    if (!book) {
      throw new Error('Book parameter is required');
    }

    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from ${book}`,
        function (error, results, fields) {
          if (error) {
            this.logger.error(`Error in getHealth: ${error.message}`);
            return rej(new Error('Failed to retrieve health status'));
          }

          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });

          res({ health: 'ok' });
        },
      );
    });
  }

  async getChaptersCount(book: string): Promise<{}> {
    if (!book) {
      throw new Error('Book parameter is required');
    }

    return new Promise((res, rej) => {
      connection.query(
        `SELECT COUNT(DISTINCT chapter) from ${book}`,
        function (error, results, fields) {
          if (error) {
            this.logger.error(`Error in getChaptersCount: ${error.message}`);
            return rej(new Error('Failed to retrieve chapters count'));
          }

          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });

          res([{ count: Number(Object.values(results[0])) }]);
        },
      );
    });
  }

  async getChapter(book?: string, chapter?: number): Promise<any> {
    if (!book || !chapter) {
      throw new Error('Book and chapter parameters are required');
    }

    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${book} WHERE CHAPTER=${chapter}`,
        function (error, results, fields) {
          if (error) {
            this.logger.error(`Error in getChapter: ${error.message}`);
            return rej(new Error('Failed to retrieve chapter'));
          }

          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });

          res(results);
        },
      );
    });
  }

  async getVerse(book?: string, chapter?: number, verse?: number): Promise<any> {
    if (!book || !chapter || !verse) {
      throw new Error('Book, chapter, and verse parameters are required');
    }

    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${book} WHERE CHAPTER=${chapter} AND VERSE=${verse}`,
        function (error, results, fields) {
          if (error) {
            this.logger.error(`Error in getVerse: ${error.message}`);
            return rej(new Error('Failed to retrieve verse'));
          }

          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });

          res(results);
        },
      );
    });
  }

  async searchVerse(text: string): Promise<any> {
    if (!text) {
      throw new Error('Text parameter is required');
    }

    const books = [
      'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
      'joshua', 'judges', 'ruth', 'firstSamuel', 'secondSamuel',
      'firstKings', 'secondKings', 'firstChronicles', 'secondChronicles',
      'ezra', 'nehemiah', 'esther', 'job', 'psalms', 'proverbs',
      'ecclesiastes', 'solomon', 'isaiah', 'jeremiah', 'lamentations',
      'ezekiel', 'daniel', 'hosea', 'joel', 'amos', 'obadiah',
      'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah', 'haggai',
      'zechariah', 'malachi', 'matthew', 'mark', 'luke', 'john',
      'acts', 'romans', 'firstCorinthians', 'secondCorinthians',
      'galatians', 'ephesians', 'philippians', 'colossians',
      'firstThessalonians', 'secondThessalonians', 'firstTimothy',
      'secondTimothy', 'titus', 'philemon', 'hebrews', 'james',
      'firstPeter', 'secondPeter', 'firstJohn', 'secondJohn',
      'thirdJohn', 'jude', 'revelation'
    ];

    const queries = books.map(book => 
      `SELECT text, book, chapter, verse FROM ${book} WHERE text LIKE '%${text}%'`
    ).join(' UNION ');

    return new Promise((res, rej) => {
      connection.query(queries, function (error, results, fields) {
        if (error) {
          this.logger.error(`Error in searchVerse: ${error.message}`);
          return rej(new Error('Failed to search verses'));
        }

        res(results.rows);
      });
    });
  }
}