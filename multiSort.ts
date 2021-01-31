function multiSort(ary: Object[], sortBy: string[], sortDesc: boolean[]): void {
   if (sortBy.length == 0 || sortBy.length != sortDesc.length) {
      return;
   }

   const typeOf = (v: unknown): string => {
      if (v === void 0) return 'undefined';
      if (v === null) return 'null';

      var type = typeof v;
      if (type === 'boolean') return 'boolean';
      if (type === 'string') return 'string';
      if (type === 'number') return 'number';
      if (type === 'symbol') return 'symbol';
      if (type === 'function') return 'function';
      return 'unknown';
   };

   const compItem = (a: unknown, b: unknown, desc: boolean): number => {
      let typeA: string = typeOf(a);
      let typeB: string = typeOf(b);

      if (typeA === 'null') {
         return typeB === 'null' ? 0 : (typeB === 'undefined' ? (desc ? 1:-1) : (desc ? -1:1));
      } else if (typeA === 'undefined') {
         return typeB === 'null' ? (desc ? -1:1) : (typeB === 'undefined' ? 0 : (desc ? -1:1));
      } else if (typeB === 'null' || typeB === 'undefined') {
         return (desc ? (desc ? -1:1) : (desc ? 1:-1));
      } else {
         return a < b ? (desc ? 1:-1) : (a > b ? (desc ? -1:1) : 0);
      }
   };

   const comp = (a: Object, b: Object): number => {
      for (let i = 0; i < sortBy.length; ++i) {
         const key: string = sortBy[i];
         const desc: boolean = sortDesc[i];
         const result = compItem(a[key], b[key], desc);
         if (result) {
            return result;
         }
      }
      return 0;
   };

   ary.sort(comp);
}

function Obj(id, online, mes){
   this.id = id;
   this.online = online;
   this.mes = mes
}

