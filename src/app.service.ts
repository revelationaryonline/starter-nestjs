import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
import { Injectable } from '@nestjs/common';
import { connection } from './db.config';

@Injectable()
export class AppService {
  async getHealth(book: string): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from ${book}`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });

          res({ health: 'ok' });
        },
      );
    });
  }

  async getChaptersCount(book: string): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT COUNT(DISTINCT chapter) from ${book}`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res([{ count: Number(Object.values(results[0])) }]);
        },
      );
    });
  }

  async getChapter(book?: string, chapter?: number): Promise<any> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${book} WHERE CHAPTER=${chapter}`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async getVerse(
    book?: string,
    chapter?: number,
    verse?: number,
  ): Promise<any> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * FROM ${book} WHERE CHAPTER=${chapter} AND VERSE=${verse}`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async searchVerse(text: string): Promise<any> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT text, book, chapter, verse FROM genesis
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM exodus
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM leviticus
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM numbers
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM deuteronomy
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM joshua
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM judges
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM ruth
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstSamuel
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondSamuel
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstKings
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondKings
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstChronicles
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondChronicles
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM ezra
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM nehemiah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM esther
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM job
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM psalms
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM proverbs
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM ecclesiastes
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM solomon
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM isaiah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM jeremiah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM lamentations
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM ezekiel
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM daniel
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM hosea
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM joel
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM amos
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM obadiah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM jonah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM micah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM nahum
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM habakkuk
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM zephaniah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM haggai
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM zechariah
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM malachi
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM matthew
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM mark
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM luke
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM john
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM acts
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM romans
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstCorinthians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondCorinthians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM galatians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM ephesians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM philippians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM colossians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstThessalonians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondThessalonians
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstTimothy
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondTimothy
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM titus
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM philemon
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM hebrews
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM james
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstPeter
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondPeter
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM firstJohn
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM secondJohn
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM thirdJohn
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM jude
      WHERE text LIKE '%${text}%'
      UNION
      SELECT text, book, chapter, verse FROM revelation
      WHERE text LIKE '%${text}%'`,
        function (error, results, fields) {
          if (error) throw error;
          // results = results.map((result) => {
          //   return Object.assign({}, result);
          // });
          res(results.rows);
        },
      );
    });
  }
}
