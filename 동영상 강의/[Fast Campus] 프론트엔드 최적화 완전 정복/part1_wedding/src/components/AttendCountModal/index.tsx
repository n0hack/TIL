import { useEffect, useRef } from 'react';
import { useModalContext } from '../../contexts/ModalContext';
import { Wedding } from '../../models/wedding';

type AttendCountModalProps = {
  wedding: Wedding;
};

const AttendCountModal = ({ wedding }: AttendCountModalProps) => {
  const { open, close } = useModalContext();
  const $input = useRef<HTMLInputElement>(null);

  const haveSeenModal = localStorage.getItem('@have-seen-modal');

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return;
    }

    open({
      title: `현재 참석자: ${wedding.attendCount} 명`,
      body: (
        <div>
          {/* 이 컴포넌트 안에서 상태를 추가하면, 의존성 문제가 발생할 수 있기에 ref로 관리해 볼 수 있음 */}
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요"
            style={{ width: '100%' }}
            type="number"
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
      onRightButtonClick: async () => {
        if (!$input.current) {
          return;
        }

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
    });
  }, []);

  return null;
};

export { AttendCountModal };
