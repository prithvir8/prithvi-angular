import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

/*   transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(p:any,message:string,content:string) {
      

    if(p.gender==='f'){
      return `Hello Miss ${p.name} ${message}`
    }
    else {
      return `Hello Mr. ${p.name2} ${message} ${content}`
    }

  }

}
