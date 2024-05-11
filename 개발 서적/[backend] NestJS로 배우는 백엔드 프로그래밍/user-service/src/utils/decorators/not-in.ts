import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';

export function NotIn(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'NotIn',
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
          const [relatedPropertyName] = args.constraints; // password
          const relatedValue = (args.object as any)[relatedPropertyName]; // password로 들어온 값
          return typeof value === 'string' && typeof relatedValue === 'string' && !relatedValue.includes(value);
        },
      },
    });
  };
}
