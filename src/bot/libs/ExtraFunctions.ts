// TODO OPTIMIZE THIS Class
class SysFunctions {
  async zeroTest(myArray: any) {
    let flag = false;
    for (let i = 0; i < myArray.length; ++i) {
      if (myArray[i] !== 0) {
        flag = true;
        break;
      }
    }
    return flag;
  }

  random(A: any) {
    return A[Math.floor(Math.random() * A.length)];
  }

  UserFilter(arr1: any, toFind: any) {
    return arr1.find((val: any) => (Array.isArray(val) ? this.UserFilter(val, toFind) : val.uID === toFind)) !== undefined;
  }

  hasKey(key: any, A: any) {
    if (A[key] != undefined && A[key] != null && A[key].length > 0) {
      return true;
    }
    return false;
  }

  len(A: any) {
    return A.length;
  }

  ContainsStringInArray(A: any, value: any) {
    return A.indexOf(value) > -1;
  }

  sort(A: any) {
    var uniqueNames = A.filter( (item: any, pos: any) => {
      return A.indexOf(item) == pos;
    });
    return uniqueNames;
  }

  NotcontainsinPattern_words(A: any, B: any) {
    let otp = false;
    for (let i = 0; i < A.length; i++) {
      for (let ii = 0; ii < B.length; ii++) {
        if (A[i] == B[ii]) {
          otp = true;
        }
      }
    }
    return otp;
  }

  ignore_wordsFilter(wd: any, igwords: any) {
    return wd.filter((word: any, index: any, array: any) => igwords.indexOf(word) < 0);
  }

  multiDimensionalUnique(arr: any) {
    const uniques = [];
    const itemsFound: any = {};
    for (let i = 0, l = arr.length; i < l; i++) {
      const stringified = JSON.stringify(arr[i]);
      if (itemsFound[stringified]) {
        continue;
      }
      uniques.push(arr[i]);
      itemsFound[stringified] = true;
    }
    return uniques;
  }

  toOneArray(arrToConvert: any) {
    let newArr: any = [];
    for (let i = 0; i < arrToConvert.length; i++) {
      newArr = newArr.concat(arrToConvert[i]);
    }
    return newArr;
  }

  findRecursive(arr1: any, toFind: any) {
    return arr1.find((val: any) => (Array.isArray(val) ? this.findRecursive(val, toFind) : val === toFind)) !== undefined;
  }

  pick(matrix: any, col: any) {
    const column = [];
    for (let i = 0; i < matrix.length; i++) {
      column.push(matrix[i][col]);
    }
    return column;
  }

  ContainsinArray(arr: any, check: any) {
    let found = false;
    for (let i = 0; i < check.length; i++) {
      if (arr.indexOf(check[i]) > -1) {
        found = true;
        break;
      }
    }
    return found;
  }

  findOne(haystack: any, arr: any) {
    return arr.some((v: any) => {
      return haystack.indexOf(v) >= 0;
    });
  }

  unique(data: any) {
    let process = (names: any) => names.filter((v: any, i: number) => names.indexOf(v) === i);
    return process(data);
  }

  containsInArray(arr: any, check: any) {
    let found = false;
    for (let i = 0; i < check.length; i++) {
      if (arr.indexOf(check[i]) > -1) {
        found = true;
        break;
      }
    }
    return found;
  }
}

const instance = new SysFunctions();

export default instance;
