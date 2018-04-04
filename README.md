# jest-source-map-problem

Running `yarn test` will cause the test to fail, but source maps don't work correctly

```
> yarn test
yarn run v1.3.2
warning ../package.json: No license field
$ jest --config jest.config.js --runInBand
 FAIL  src/alert.test.jsx
  ● Test suite failed to run

    bad sourcemap

      39 |             </div>
      40 |         );
    > 41 |     }
      42 | }
      43 |
      44 | Alert.propTypes = {

      at Object.<anonymous> (src/alert.jsx:41:7)
      at Object.<anonymous> (src/alert.test.jsx:9:14)

 FAIL  src/alert.test.js
  ● Test suite failed to run

    bad sourcemap

      39 |             </div>
      40 |         );
    > 41 |     }
      42 | }
      43 |
      44 | Alert.propTypes = {

      at Object.<anonymous> (src/alert.jsx:41:7)
      at Object.<anonymous> (src/alert.test.js:9:14)

Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        1.223s
Ran all test suites.
error Command failed with exit code 1.
```
