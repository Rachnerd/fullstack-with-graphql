
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Page",
        "possibleTypes": [
          {
            "name": "ReviewPage"
          },
          {
            "name": "ItemPage"
          }
        ]
      }
    ]
  }
};

      export default result;
    