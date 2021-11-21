import Table from '../components/Table.js';

const OrdersScreen = () => {
  return (
    <div className="products__screen my-[40px]">
      <div className="products__screen__container max-w-[95%] mx-auto">
        <h1 className="heading uppercase text-[40px] font-semibold tracking-wide text-[#03045E] flex items-center">
          Orders
        </h1>
        <div>
          <Table id user date total paid delivered details />
        </div>
      </div>
    </div>
  );
};

export default OrdersScreen;
