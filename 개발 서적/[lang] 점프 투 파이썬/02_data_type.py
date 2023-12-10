# 실수형
a = 1.0
b = 0.1
c = 1e9

print(a, b, c)

# 문자열
a = "Life is too short, You need Python"
print(len(a))

# 인덱싱
print(a[0])
print(a[-1])

# 슬라이싱
print(a[0:])
print(a[::2])

a = "20010331Rainy"
date = a[:8]
weather = a[8:]
print(date, weather)

# 파이썬은 불변이므로, 값을 변경하고자 한다면 새로 만들어야 함
a = "Pithon"
b = a[:1] + "y" + a[2:]
print(b)

# 포매팅
error_rate = 98
a = "Error is %d%%" % error_rate
print(a)
print("%0.4f" % 3.141592)
print("I eat {0} apples".format(3))
print("Hello {your_name}! My name is {my_name}".format(my_name="루시드", your_name="도날드"))
# 가운데 정렬 후 공백 #으로 채우기
print("{0:#^10}".format("Lucid"))
# 파이썬 3.6부터는 f-string이라는 방법으로 포매팅 사용 가능
print(f"Error is {error_rate}%")

# 문자열 관련 함수
print("-".join(["a", "b", "c"]))

# 리스트와 튜플은 비슷하지만, 튜플은 불변이기에 용도에 맞게 사용하기
a = [1, 2, 3]
print(a * 3)
print(a + [4, 5])

# 딕셔너리
a = {"name": "Lucid", "age": 25}
print(a.keys())  # dict_keys 객체는 굳이 반환하지 않아도, 기본적인 반복문 등에서 사용 가능
