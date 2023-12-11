def positive(iter):
    result = []
    for i in iter:
        if i > 0:
            result.append(i)
    return result


print(positive([1, -3, 2, 0, -5, 6]))

print(list(filter(lambda x: x > 0, [1, -3, 2, 0, -5, 6])))
print(list(map(lambda x: x**2, [1, 2, 3, 4])))

# zip
# 동일한 개수로 이루어진 데이터를 묶어주는 함수
print(list(zip([1, 2, 3], [4, 5, 6])))
print(list(zip((1, 2, 3), [1, 2, 3], {1, 2, 3, 4})))

print(list("abcd"))
