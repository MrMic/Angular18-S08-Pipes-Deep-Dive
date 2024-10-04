import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(
    value: string[] | number[],
    direction: 'asc' | 'desc' = 'asc',
  ) {
    const sorted = [...value].sort((a, b) => {
      if (a > b) {
        return direction === 'asc' ? 1 : -1;
      }
      if (a < b) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    });
    return sorted;
  }

}
