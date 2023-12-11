def 가변(*args):
    print(args)


가변(1, 2, 3)


def add(*args):
    result = 0
    for num in args:
        result += num
    return result


print(add(1, 2, 3, 4, 5))


# 키워드 매개변수
# 매개변수들이 딕셔너리가 됨
def f(**kwargs):
    print(kwargs)


f(a=1, b=2)
