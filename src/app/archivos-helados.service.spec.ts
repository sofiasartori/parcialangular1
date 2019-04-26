import { TestBed } from '@angular/core/testing';

import { ArchivosHeladosService } from './archivos-helados.service';

describe('ArchivosHeladosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosHeladosService = TestBed.get(ArchivosHeladosService);
    expect(service).toBeTruthy();
  });
});
