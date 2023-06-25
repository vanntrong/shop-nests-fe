import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { FC } from "react";

import { TGetMyOrderResponse } from "@/apis/order/getMyOrder";
import { STATUS_ORDER } from "@/modules/order/configs/order.config";
import { numberToVND } from "@/utils/number";

interface IPaymentHistoryTableProps {
  data: TGetMyOrderResponse;
}

const PaymentHistoryTable: FC<IPaymentHistoryTableProps> = ({ data }) => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-neutral-200 font-medium">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    STT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    SẢN PHẨM
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    GIÁ
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    SỐ LƯỢNG
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    THÀNH TIỀN
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    NGÀY ĐẶT
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-1 text-sm font-medium">
                    TRẠNG THÁI
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((order, index) => (
                  <tr className="border-b border-neutral-200" key={order.id}>
                    <td>
                      <span className="text-sm text-gray-600">{index + 1}</span>
                    </td>
                    <td>
                      <div className="flex w-[60vw] flex-col items-center gap-2 px-3 py-2 md:w-[unset]">
                        {order.orderProducts.map(orderProduct => (
                          <div
                            className="flex w-full flex-1 items-center gap-2"
                            key={orderProduct.id}
                          >
                            <Image
                              src={orderProduct.product.thumbnailUrl}
                              width={80}
                              height={60}
                              alt={orderProduct.product.name}
                            />
                            <span className="text-sm text-gray-600">
                              {orderProduct.product.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="h-[1px]">
                      <div className="flex h-full flex-col justify-around whitespace-nowrap px-3 py-2 text-sm font-medium">
                        {order.orderProducts.map(orderProduct => (
                          <span key={orderProduct.id + "price"}>
                            {numberToVND(orderProduct.price)}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="h-[1px]">
                      <div className="flex h-full flex-col items-center justify-around whitespace-nowrap px-3 py-2 text-sm font-medium">
                        {order.orderProducts.map(orderProduct => (
                          <span key={orderProduct.id + "quantity"}>{orderProduct.quantity}</span>
                        ))}
                      </div>
                    </td>
                    <td className="h-[1px]">
                      <div className="flex h-full flex-col items-center justify-around whitespace-nowrap px-3 py-2 text-sm font-medium">
                        {order.orderProducts.map(orderProduct => (
                          <span key={orderProduct.id + "total"}>
                            {numberToVND(orderProduct.price * orderProduct.quantity)}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="h-[1px]">
                      <div className="flex h-full flex-col items-center justify-around whitespace-nowrap px-3 py-2 text-sm font-medium">
                        {order.orderProducts.map(orderProduct => (
                          <span key={orderProduct.id + "day"}>
                            <span>{dayjs(order.createdAt).format("DD/MM/YYYY")}</span>
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="h-[1px]">
                      <div className="flex h-full flex-col items-center justify-around whitespace-nowrap px-3 py-2">
                        {order.orderProducts.map(orderProduct => (
                          <span key={orderProduct.id + "status"}>
                            <span className={clsx("rounded-md px-2 py-1 text-sm font-medium")}>
                              {STATUS_ORDER[order.statusId]}
                            </span>
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
