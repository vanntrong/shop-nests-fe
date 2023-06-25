"use client";

import useGetMyOrder from "@/modules/order/services/useGetMyOrder";

import PaymentHistoryTable from "../../components/paymentHistoryTable";

const PaymentHistory = () => {
  const { data } = useGetMyOrder();

  console.log(data);

  return (
    <div className="xl:mx-auto xl:max-w-[1080px]">
      <div className="px-4 pt-4">
        <h2 className="font-medium">Lịch sử mua hàng</h2>
      </div>

      <div className="mt-3">{data && <PaymentHistoryTable data={data} />}</div>
    </div>
  );
};

export default PaymentHistory;
