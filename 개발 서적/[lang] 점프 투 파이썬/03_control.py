pocket = ["paper", "cellphone", "money"]

if "money" in pocket:
    print("택시를 타고 가라")
else:
    # 아무 일도 하지 않음
    pass

marks = [90, 25, 67, 45, 80]

number = 0
for mark in marks:
    number += 1
    if mark >= 60:
        print(f"{number}번 학생은 합격입니다.".format(number))
    else:
        print(f"{number}번 학생은 불합격입니다.".format(number))

# 구구단
for i in range(2, 10):
    for j in range(1, 10):
        print(i * j, end=" ")
    print("")

# 리스트 컴프리헨션
a = [1, 2, 3, 4]
result = [num * 3 for num in a]
print(result)

result = [num for num in a if num % 2 == 0]
print(result)
