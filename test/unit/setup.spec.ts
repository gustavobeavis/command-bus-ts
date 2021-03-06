import 'reflect-metadata';
import 'mocha';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.use(chaiAsPromised);
(global as any).expect = chai.expect;
