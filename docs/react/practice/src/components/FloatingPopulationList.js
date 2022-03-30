import React from 'react';

const FloatingPopulationList = () => {
  return (
    <section class="sub_wrap">
      <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
        <div class="li_top">
          <h2 class="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
        </div>
        <div class="list_cont list_cont_admin">
          <table class="table_ty1 fp_tlist">
            <tr>
              <th>Row</th>
              <th>일자</th>
              <th>시간</th>
              <th>연령대</th>
              <th>성별</th>
              <th>시</th>
              <th>군구</th>
              <th>유동인구수</th>
            </tr>
          </table>
          <table class="table_ty2 fp_tlist">
            <tr class="hidden_type">
              <td>1</td>
              <td>20191101</td>
              <td>00</td>
              <td>40</td>
              <td>여성</td>
              <td>서울</td>
              <td>영등포구</td>
              <td>32670</td>
            </tr>
            <tr class="hidden_type">
              <td>1</td>
              <td>20191101</td>
              <td>00</td>
              <td>50</td>
              <td>남성</td>
              <td>서울</td>
              <td>구로구</td>
              <td>27888</td>
            </tr>
          </table>
        </div>
      </article>
    </section>
  );
};

export default FloatingPopulationList;
