import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  keys: any[] = [];
  constructor() { }

  // get the count of each letter present in array of string's
  // @arr indicates array string
  // caseSensitive is weather to get the count with or without case.
  getCountOfEachLetterInArray(arr, isCaseSensitive = true) {
    const resultObj = {};
    let str = arr.join();
    str = isCaseSensitive ? str : str.toLowerCase();

    const repeatedArr = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < str.length; i++) {
      const index = repeatedArr.indexOf(str[i]);
      if (index === -1) {
        resultObj[str[i]] = (str.match(new RegExp(str[i], 'g')) || []).length;
      }
    }
    if (resultObj.hasOwnProperty(',')) {
      if ((resultObj[',']) - (arr.length - 1) === 0) {
        delete resultObj[','];
      } else {
        resultObj[','] = resultObj[','] - (arr.length - 1);
      }
    }
    return resultObj;
  }


  // get the array without duplicates
  // @arr indicates array of string.
  // isCaseSensitive decides weather to return new array with or without case check
  getArrayWithoutDuplication(arr: any[], isCaseSensitive = true) {
    const resultArr = arr.filter((value, index, array) => {
      value = isCaseSensitive ? value : value.toLowerCase();
      return (array.indexOf(value) === index);
    });
    return resultArr;
  }


  // get json keys
  getJsonKeys(jsonObject) {
    console.log(jsonObject);
    this.getAllKeys(jsonObject);
    console.log(this.keys);
    return this.keys;
  }
  private getAllKeys(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        this.keys.push(key);
        this.getAllKeys(obj[key]);
      } else {
        this.keys.push(key);
      }
    }
  }

  // parsing string
  parseStringObject(str) {
    return JSON.parse(str);
  }

  // get reversed words of string
  getReverseWordsOfString(str) {
    let reverseWord = '';
    let finalString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      if (i === 0) {
        finalString = reverseWord + str[i] + finalString ;
        reverseWord = '';
      }
      if (str[i] === ' ') {
        finalString = ' ' + reverseWord + finalString;
        reverseWord = '';
      } else {
        reverseWord = reverseWord + str[i];
      }
    }
    console.log(finalString);
    return finalString;
  }

  // get reverse words of a string using built in methods
  // @req: indicates a string value
  getReverseWordsOfStringBuiltIn(str) {
    const arr = str.split(' ');
    let reversedString = [];
    reversedString = arr.map((value, index, array) => {
      const valueArr = (value.split('').reverse());
      return valueArr.join('');
    });
    return reversedString.join(' ');
  }
}
