/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { IncomingHttpHeaders } from 'http';
import { EventSignatureVerifier, TimestampVerifier, Verifier } from '../verifier';

/**
 * Verify request and dispatch
 *
 * This method first validate request with all provided verifiers
 * @param {IncomingHttpHeaders} httpRequestHeader Http request header
 * @param {string} httpRequestBody Http request body in string format
 * @param {Verifier[]} verifiers Array of user customized Verifier instances
 */
export async function asyncVerifyRequestAndDispatch(httpRequestHeader: IncomingHttpHeaders, httpRequestBody: string, verifiers: Verifier[] = [new EventSignatureVerifier(), new TimestampVerifier()]): Promise<void> {
    try {
        await Promise.all(verifiers.map(async (verifier) => {
            await verifier.verify(httpRequestBody, httpRequestHeader);
        }));
    } catch (err) {
        throw new VerificationError(err.message);
    }
}

export class VerificationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
