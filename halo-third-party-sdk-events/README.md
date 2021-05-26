Halo Third Party SDK Events package is an extension package that will let developers verify the authenticity of events.

## What is Halo Third Party SDK for Node.js

The Halo Third Party SDK for Node.js makes it easier for you to verify events and allows you to spend more time on implementing features and less on writing boiler-plate code.

## Installing
From within your NPM project, run the following commands in the terminal to install them:

```
npm install --save halo-third-party-sdk-events
```

## Usage with TypeScript
The Halo Third Party SDK Events package for Node.js bundles TypeScript definition files for use in TypeScript projects and to support tools that can read .d.ts files. Our goal is to keep these TypeScript definition files updated with each release for any public api.

### Pre-requisites
Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:
- Use TypeScript v3.x
- Include the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:

```
npm install --save-dev @types/node
```

### In Node.js
To use the TypeScript definition files within a Node.js project, simply import halo-third-party-sdk-events as below:

In a TypeScript file:

```typescript
// Import the necessary modules.
import * as Verifier from 'halo-third-party-sdk-events';

// Call verify request method with headers and event body.
await Verifier.asyncVerifyRequestAndDispatch(headers, eventBody);
```

In a JavaScript file:

```javascript
// Import the necessary modules.
const Verifier = require('halo-third-party-sdk-events');

// Call verify request method with headers and event body.
await Verifier.asyncVerifyRequestAndDispatch(headers, eventBody);
```

## Opening Issues
For bug reports, feature requests and questions, we would like to hear about it. Search the [existing issues](https://github.com/amzn/halo-third-party-sdk-for-node-js/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the SDK, Node.js or browser environment and OS you’re using. Please include a stack trace and reduced repro case when appropriate, too.

## License
This SDK is distributed under the Apache License, Version 2.0, see LICENSE for more information.