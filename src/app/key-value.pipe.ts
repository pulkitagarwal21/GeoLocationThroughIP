import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValusdse'
})
export class KeyValuePipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      // if( typeof value[key]=="object")
      // {
      //   let subobjectkeys = [];
      //   for (let subkey in value[key]) {
      //     subobjectkeys.push({key: subkey, value: value[subkey]});    
      //     }
      //     keys.push({key: key, value: subobjectkeys});
      //   }
      // else{
      keys.push({key: key, value: value[key]});
     // }
    }
    return keys;
  }

}
