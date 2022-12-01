import { server, app } from '../src/server';
import * as jsonist from 'jsonist';

const urlBase = `http://localhost:${app.get('port')}`;

describe('server', () => {
  it('responds hello', done => {
    jsonist.get(urlBase, (_, body) => {
      expect(body.msg).toEqual('Hello, world');
      done();
    });
  });

  it('responds uppercase', done => {
    jsonist.get(urlBase + '/uppercase?msg=hello', (_, body) => {
      expect(body.msg).toEqual('HELLO');
    });
  });

  it('reverses', done => {
    jsonist.get(urlBase + '/reverse/hello', (_, body) => {
      expect(body.msg).toEqual('olleh');
      done();
    });
  });

  afterAll(async () => {
    server.close();
  });
});
