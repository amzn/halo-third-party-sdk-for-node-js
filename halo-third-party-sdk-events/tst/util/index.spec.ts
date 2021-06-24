import { RequestEnvelope } from 'halo-third-party-sdk-model';
import { expect } from 'chai';
import { IncomingHttpHeaders } from 'http';
import * as sinon from 'sinon';
import { asyncVerifyRequestAndDispatch, VerificationError } from '../../lib/util';
import { EventSignatureVerifier, TimestampVerifier, Verifier } from '../../lib/verifier';
import { DataProvider } from '../mocks/DataProvider';

describe('util test', () => {
    describe('async function asyncVerifyRequestAndDispatch', () => {
        const httpHeaders: IncomingHttpHeaders = DataProvider.requestHeader();
        const requestBody: RequestEnvelope = DataProvider.requestEnvelope();

        afterEach(() => {
            sinon.restore();
        });

        it('should throw verification failed error when any verifier throw error', async () => {
            sinon.stub(EventSignatureVerifier.prototype, 'verify');
            sinon.stub(TimestampVerifier.prototype, 'verify').throws(new Error('unknownError'));
            try {
                await asyncVerifyRequestAndDispatch(httpHeaders, JSON.stringify(requestBody));
            } catch (err) {
                expect(err).to.be.an.instanceOf(VerificationError);
                expect(err.message).equal('unknownError');

                return;
            }
            throw new Error('should have thrown an error!');
        });

        it('should return responseEnvelope when verify and invoke execute correctly', async () => {
            sinon.stub(EventSignatureVerifier.prototype, 'verify');
            sinon.stub(TimestampVerifier.prototype, 'verify');
            try {
                await asyncVerifyRequestAndDispatch(httpHeaders, JSON.stringify(requestBody));
            } catch (err) {
                expect.fail('should not throw error');
            }
        });
    });
});
