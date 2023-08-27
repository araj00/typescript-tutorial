export {};

function pickObjectKeys<T extends object, K extends keyof T>(obj: T , keys: K[]) {
    let result = {} as Pick<T, K>;
    for (const key of keys) {
      if (key in obj) {
        result[key] = obj[key]
      }
    }
    return result
  }
  
  const language = {
    name: "TypeScript",
    age: 8,
    extensions: ['ts', 'tsx',12,true]
  }
  
  const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])
  console.log(ageAndExtensions)

  function identity<T>(value: T): T {
    return value;
  }
  
  const result = identity(123);
  console.log(result)

  type User = {
    name: string;
  }
  
  async function fetchApi<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
  }
  
async function fetchData() {
  const data = await fetchApi<User[]>('/users');
  // Use the fetched data here
}


function stringifyObjectKeyValues<T extends Record<string, any>>(obj: T) {
    return Object.keys(obj).reduce((acc, key) =>  ({
      ...acc,
      [key]: JSON.stringify(obj[key])
    }), {} as { [K in keyof T]: string })
  }
  
  const stringifiedValues = stringifyObjectKeyValues({ a: "1", b: 2, c: true, d: [1, 2, 3]})
  console.log(stringifiedValues)

  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  const optional : Partial<typeof language> = {

  }
