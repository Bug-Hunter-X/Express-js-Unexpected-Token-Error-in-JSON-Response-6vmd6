# Express.js Unexpected Token Error in JSON Response

This repository demonstrates a common yet often overlooked error in Express.js applications: receiving an "Unexpected token" error when the client expects a JSON response. This typically happens when the server sends a response that's not valid JSON, such as a plain string without the correct `Content-Type` header.

## Problem

The `bug.js` file contains an Express.js server that incorrectly handles a request, sending a plain string instead of a JSON object.  When a client expects JSON, parsing this string leads to the "Unexpected token" error.

## Solution

The `bugSolution.js` file shows the corrected implementation. It ensures that the server sends a JSON response with the correct `Content-Type` header.