import yup, { object, string, number, date } from 'yup';

const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
  test: string().test({
    name: 'is-test',
    test: (value, ctx) => {
      if (value === '1') return ctx.createError({ message: '에러 발생임' });
      return true;
    },
  }),
});

type InputFields = yup.InferType<typeof userSchema>;

const parsedUser = userSchema.cast({
  name: 'jimmy',
  age: '24',
  createdOn: '2014-09-23T19:25:25Z',
});

console.log(parsedUser);

userSchema.validate({ name: 's', age: 1, test: '12' });
console.log(userSchema.isValidSync({ name: 's', age: 1, test: '1' }));
