import Dialog from "./components/Dialog";
import Tabs from "./components/Tabs";

// 리액트는 컴포넌트 상속보다 조합하기
function App() {
  return (
    <>
      <Tabs>
        <Tabs.Item />
        <Tabs.Item />
        <Tabs.Item />
      </Tabs>
      <Dialog>
        <Dialog.Content title="안내" description="이것은 멋진 내용을 담고 있는 안내입니다." />
        <Dialog.ButtonContainer align="vertical">
          <Dialog.Button
            type="secondary"
            onClick={() => {
              console.log("취소!");
            }}
          >
            취소
          </Dialog.Button>
          <Dialog.Button
            type="primary"
            onClick={() => {
              console.log("확인!");
            }}
          >
            확인
          </Dialog.Button>
        </Dialog.ButtonContainer>
      </Dialog>
    </>
  );
}

export default App;
