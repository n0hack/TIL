import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  // 파라미터는 문자열이므로 변환해야 함
  let invoice = getInvoice(parseInt(params.invoiceId));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>{invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
