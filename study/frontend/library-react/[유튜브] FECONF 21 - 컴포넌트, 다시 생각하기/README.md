## 세션 정보

- 제목: 컴포넌트, 다시 생각하기
- 발표: 원지혁님 (당근마켓)

## 노트

### React 컴포넌트의 네 가지 의존성

1. 스타일
2. 로직
3. 전역 상태
4. 리모트 데이터 스키마: API 서버에서 내려주는 데이터의 모양 (내가 작성한 코드의 외부)

### 리팩토링 원칙 1: 비슷한 관심사라면 가까운 곳에 두기 (co-locate or co-location)

- 전역 상태는 여러 컴포넌트가 공유하기 때문에 함께 두기가 어려움
- 스타일과 로직은 함께 두기 가능 (대표적으로 css-in-js가 co-location)
  - 여러 파일을 오가지 않아도 되지만, 파일이 너무 커지면 같은 폴더 내에 다른 파일로 분리하는 것을 권장

```jsx
const Something: React.FC = () => {
  const {...} = useHooksForSomething();
  return <Container>Hello, World</Container>;
}

// 로직
function useHooksForSomething() {
  // ...
}

// 스타일
const Container = styled.div`
  background-color: red;
`
```

### 리팩토링 원칙 2: 데이터를 ID 기반으로 정리하기

API를 통해 리모트 데이터 스키마를 받는 경우, 부모로부터 Prop을 통해 계속해서 스키마를 받게 된다. (Prop Drilling) `article: IArticle`을 예로 들어, 이렇게 내려주지 말고 `articleId`만 내려주고 컴포넌트 내부에서 `useArticle`과 같은 Hook으로 컴포넌트 내부에서 관리한다면 상위 컴포넌트와의 의존성이 많이 약해지는 것을 확인할 수 있다.

> 리모트 데이터 스키마 - 전역 컴포넌트 - 부모 컴포넌트 - 하위 컴포넌트 순으로 타고 내려오기 때문

```bash
# 데이터를 ID 기반으로 정규화해주는 라이브러리
yarn add normalizr
```

다음 코드는 useArticle을 통해 우리가 사용할 데이터의 모델 정보를 받고 있지만, 여전히 외부에 의존하고 있다.

```jsx
import { useArticle } from '~/store';

interface Props {
  articleId: string;
}

const Something: React.ExoticComponent<Props> = (props) => {
  const article = useArticle(props.articleId);

  return (
    <div>
      <h1>{article.title}</h1>
    </div>
  );
};
```

이를 다음과 같이 GlobalID(전역 ID) 개념으로 활용한다면, 모델 정보마저 컴포넌트 내부에서 관리해 의존성을 줄일 수 있다. (co-locate)

```jsx
import { useNode } from '~/store';

interface Props {
  articleId: string;
}

const Something: React.ExoticComponent<Props> = (props) => {
  const article = useNode({ on: 'Article' }, props.articleId);

  return (
    <div>
      <h1>{article.title}</h1>
    </div>
  );
};
```

![GOI](https://user-images.githubusercontent.com/42988225/221581637-c406f813-8cc4-4a92-a8a4-eb0462d8ced6.png)

### 리팩토링 원칙 3: 의존한다면 그대로 드러내기 (Make explict)

한 컴포넌트에서 User와 Image라는 두 가지 모델에 의존하고 있다면, 다음과 같이 의존하는 모델을 그대로 드러내기

```typescript
// before
interface Props {
  userImageThumbnailUrl: string;
  userName: string;
  userNickname: string;
  userTotalFollowerCount: number;
  userLastActivityAt: Date;
}

// refactor: 모델 간의 연결정보(Graph) 그대로 드러내기
interface Props {
  user: {
    name: string;
    nickname: string;
    totalFollowerCount: number;
    lastActivityAt: Date;
    image: {
      thumbnailUrl: string;
    };
  };
}

// refactor: 한 컴포넌트에서 여러 모델의 정보를 표현하는 것은 어쩌면 관심사의 분리가 제대로 되지 않음을 의미
// 따라서 유저 모델과 이미지 모델로 컴포넌트를 분리
interface Props {
  image: {
    thumbnalUrl: string;
  };
}
```

하지만 위와 같이 모델별로 컴포넌트를 분리했어도, 상위 컴포넌트에서 Props를 신경써야 하므로 의존성이 여전히 강하다. 그래서 앞서 언급한 Global ID를 통해 컴포넌트 간 의존성을 느슨하게 만들 수 있다.

```typescript
interface UserCardProps {
  userId: string;
}

const user = useNode(
  {
    on: 'User',
    fields: {
      name: true,
      nickname: true,
      totalFollowerCount: true,
      lastActivityAt: true,
      image: true,
    },
  },
  props.userId
);

// Image 컴포넌트도 동일
interface AvatarProps {
  imageId: string;
}
```

### 리팩토링 원칙 4: 모델 기준으로 컴포넌트 분리하기

- 컴포넌트를 재사용하는 이유는 변경할 때 편리하기 때문이다.
- 제품의 성격마다 다르겠지만, 대부분 리모트 데이터 스키마의 변화에 따라 코드가 변화한다.

![재사용](https://user-images.githubusercontent.com/42988225/221584074-fd2841f9-2c7c-4388-8e21-593c9f945c85.png)

위 사진에서 둘은 각각 User와 Page 모델을 의존하고 있다. 이 경우 공통된 부분을 컴포넌트로 만들어야 할까?

- 같은 모델을 의존하는 컴포넌트: 재사용
- 다른 모델을 의존하는 컴포넌트: 분리

![모델에 따라 결정](https://user-images.githubusercontent.com/42988225/221586032-aa3193aa-6097-432e-8960-18060b1cf3fe.png)

## 요약

- 비슷한 관심사라면 가까운 곳에
- 데이터를 ID 기반으로 정리하기
- 의존한다면 그대로 드러내기
- 모델 기준으로 컴포넌트 분리하기
