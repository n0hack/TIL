import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';

export function NotEqualTo(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      name: 'NotEqualTo',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      // 유효성 검사 규칙
      validator: {
        /**
         * @param value 실제 들어온 값
         * @param args
         */
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = args.object[relatedPropertyName];

          return value !== relatedValue;
        },
      },
    });
  };
}
