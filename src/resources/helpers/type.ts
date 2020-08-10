import { DeclarationReflection, SignatureReflection } from 'typedoc';
import {
  ArrayType,
  IntersectionType,
  IntrinsicType,
  ReferenceType,
  ReflectionType,
  StringLiteralType,
  TupleType,
  TypeOperatorType,
  UnionType,
} from 'typedoc/dist/lib/models/types';

import MarkdownTheme from '../../theme';

export function type(
  this:
    | ArrayType
    | IntersectionType
    | IntrinsicType
    | ReferenceType
    | StringLiteralType
    | TupleType
    | UnionType
    | TypeOperatorType,
) {
  if (this instanceof ReferenceType && (this.reflection || (this.name && this.typeArguments))) {
    return getReferenceType(this);
  }

  if (this instanceof ArrayType && this.elementType) {
    return getArrayType(this);
  }

  if (this instanceof UnionType && this.types) {
    return getUnionType(this);
  }

  if (this instanceof IntersectionType && this.types) {
    return getIntersectionType(this);
  }

  if (this instanceof TupleType && this.elements) {
    return getTupleType(this);
  }

  if (this instanceof IntrinsicType && this.name) {
    return getIntrinsicType(this);
  }

  if (this instanceof StringLiteralType && this.value) {
    return getStringLiteralType(this);
  }

  if (this instanceof ReflectionType && this.declaration.children) {
    return getLiteralType(this.declaration.children);
  }

  if (this instanceof DeclarationReflection && this.children) {
    return getLiteralType(this.children);
  }

  if (this instanceof ReflectionType && this.declaration.signatures) {
    return getFunctionType(this.declaration.signatures);
  }

  if (this instanceof DeclarationReflection && this.signatures) {
    return getFunctionType(this.signatures);
  }

  return this ? this.toString().replace(/</g, '‹').replace(/>/g, '›') : '';
}

function getReferenceType(model: ReferenceType) {
  const reflection =
    model.reflection && model.reflection.url
      ? [`[${model.reflection.name}](${MarkdownTheme.handlebars.helpers.relativeURL(model.reflection.url)})`]
      : [model.name];
  if (model.typeArguments) {
    reflection.push(`‹${model.typeArguments.map((typeArgument) => `${type.call(typeArgument)}`).join(', ')}›`);
  }
  return reflection.join('');
}

function getArrayType(model: ArrayType) {
  const arrayType = type.call(model.elementType);
  return model.elementType.type === 'union' ? `(${arrayType})[]` : `${arrayType}[]`;
}

function getUnionType(model: UnionType) {
  return model.types.map((unionType) => type.call(unionType)).join(' | ');
}

function getIntersectionType(model: IntersectionType) {
  return model.types.map((intersectionType) => type.call(intersectionType)).join(' & ');
}

function getTupleType(model: TupleType) {
  return `[${model.elements.map((element) => type.call(element)).join(', ')}]`;
}

function getIntrinsicType(model: IntrinsicType) {
  return model.name;
}

function getStringLiteralType(model: StringLiteralType) {
  return `\"${model.value}\"`;
}

function getLiteralType(children: DeclarationReflection[]) {
  const types = children.map((obj) => {
    return `${obj.name}: ${type.call(obj.signatures || obj.children ? obj : obj.type)}`;
  });
  return `{ ${types.join('; ')} }`;
}

function getFunctionType(signatures: SignatureReflection[]) {
  const functions = signatures.map((fn) => {
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.name}: ${type.call(param.type ? param.type : param)}`;
        })
      : [];
    const returns = type.call(fn.type);
    return `(${params.join(',')}) => ${returns}`;
  });
  return functions;
}
