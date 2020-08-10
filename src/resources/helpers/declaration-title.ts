import { DeclarationReflection } from 'typedoc';

import { memberSymbol } from './member-symbol';
import { type } from './type';

export function declarationTitle(this: DeclarationReflection, showSymbol: boolean) {
  const isOptional = this.flags.map((flag) => flag).includes('Optional');

  const md = [];

  // md.push(heading(3));

  if (showSymbol) {
    md.push(memberSymbol.call(this));
  }

  md.push(`**${this.name}**${isOptional ? '? ' : ''}:`);

  if (this.type) {
    md.push(`*${type.call(this.type)}*`);
  }
  if (this.defaultValue) {
    md.push(`= ${this.defaultValue}`);
  }
  return md.join(' ');
}
