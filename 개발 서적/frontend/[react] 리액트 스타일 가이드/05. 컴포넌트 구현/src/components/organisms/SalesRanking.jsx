import SectionTitle from '../atoms/SectionTitle';
import ProductList from '../molecules/ProductList';

const SalesRanking = ({ items }) => {
  return (
    <div>
      <SectionTitle label="매출 순위" />
      <ProductList items={items} />
    </div>
  );
};

export default SalesRanking;
