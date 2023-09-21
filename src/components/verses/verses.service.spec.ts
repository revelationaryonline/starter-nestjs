import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Verse } from './entities/verse.entity';
import { VersesController } from './verses.controller';
import { VersesService } from './verses.service';
import { getRepository } from 'typeorm';

jest.useFakeTimers();

describe('VersesService', () => {
  let controller: VersesController;
  let service: VersesService;

  const mockVerseRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    delete: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VersesService,
        {
          provide: getRepositoryToken(Verse),
          useValue: mockVerseRepository,
        },
      ],
      // controllers: [VersesController],
    }).compile();

    service = module.get<VersesService>(VersesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('create', () => {});

  it('findAll', () => {});
  it('findOne', () => {});
  it('update', () => {});
  it('remove', () => {});
});
