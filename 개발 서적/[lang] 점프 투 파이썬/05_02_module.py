# 현재 디렉터리 또는 파이썬 ㅍ라이브러리가 설치된 디렉터리에 있는 모듈만 불러올 수 있음
from calc import add

if __name__ == "__main__":
    print(add(1, 2))
