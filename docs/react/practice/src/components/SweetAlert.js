import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = () => {
  useEffect(() => {}, []);

  const saveAlert = (flag, position, e) => {
    Swal.fire({
      title: '1. SweetAlert',
      position,
      icon: 'success',
      timer: 1500,
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      alert('2. result.value: ' + result.value);
    });
  };

  const deleteAlert = (flag) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4b088a',
      cancelButtonColor: '#01df01',
      confirmButtonText: '예',
      cancelButtonText: '아뇽',
    }).then((result) => {
      if (result.value) {
        document.querySelector('.t').remove();
        Swal.fire('Deleted', '삭제 완료!', 'success');
      }
    });
  };

  return (
    <div>
      <h1 className="t">sweetalert2</h1>
      <button onClick={(e) => saveAlert('저장', 'center')}>저장</button>
      <button onClick={(e) => saveAlert('수정', 'bottom-end')}>수정</button>
      <button onClick={(e) => deleteAlert('삭제')}>삭제</button>
    </div>
  );
};

export default SweetAlert;
