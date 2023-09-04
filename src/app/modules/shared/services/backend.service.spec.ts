// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';

describe('BackendService', () => {
  let service: BackendService;
  const mockUrls = {
    createChatGroup: 'mock/api/chat-group/create',
    getStudies: 'mock/api/studies',
    deleteStudy: 'mock/api/study/delete',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BackendService);
    service.urlPaths = {
      createChatGroup: mockUrls.createChatGroup,
      getStudies: mockUrls.getStudies,
      deleteStudy: mockUrls.deleteStudy,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test http get', () => {
    spyOn(service.http, 'get');
    service.get('getStudies');
    expect(service.http.get).toHaveBeenCalledWith('mock/api/studies', {
      params: {},
    });
  });

  it('test http put', () => {
    spyOn(service.http, 'put');
    service.put('createChatGroup', { data: 'test' }, {});
    expect(service.http.put).toHaveBeenCalledWith(
      'mock/api/chat-group/create',
      {
        data: 'test',
      },
      {}
    );
  });

  it('test http patch', () => {
    spyOn(service.http, 'patch');
    service.patch('createChatGroup', { data: 'test' }, {}, {});
    expect(service.http.patch).toHaveBeenCalled();
  });

  it('test http post with substitution', () => {
    spyOn(service.http, 'post');
    service.post('createChatGroup', { data: 'test' }, {}, { tenantId: '123', platformUserId: '11' });
    expect(service.http.post).toHaveBeenCalledWith('mock/api/chat-group/create', { data: 'test' }, {});
  });

  it('test http delete with substitution', () => {
    spyOn(service.http, 'delete');
    service.delete('deleteStudy', {}, {}, { tenantId: '123', studyInstanceUid: '123' });
    expect(service.http.delete).toHaveBeenCalledWith('mock/api/study/delete', {
      params: {},
    });
  });
});
