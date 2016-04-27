import expect from 'expect.js';
import { join } from 'path';
import { readFileSync } from 'fs';
import rimraf from 'rimraf';
import compile from './utils/compile';
import XxxPlugin from '../src';

const fixDir = join(__dirname, 'fixtures');
const expDir = join(__dirname, 'expect');
const tmpDir = join(__dirname, 'tmp');

describe('HtmlRepathPlugin', () => {
  before(() => {
    process.chdir(fixDir);
  });

  afterEach(done => {
    rimraf.sync(tmpDir);
    done();
  });

  it('without param', done => {
    compile(
      new XxxPlugin(), () => {
        const now = 1;
        const exp = 2;
        //your code
        expect(now).to.equal(exp);
        done();
      }
    );
  });
});  