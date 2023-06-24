"use client";

import clsx from "clsx";
import { FC, useMemo } from "react";

import "./index.css";

import Button from "@/components/button";
import useCountPoint from "@/modules/order/services/useCountPoint";
import { TProductWithQuantity } from "@/modules/product/types/product.type";
import { TPaymentInfo } from "@/providers/paymentProvider";
import { numberToCurrency } from "@/utils/currency";
import { numberToVND } from "@/utils/number";

interface IPaymentInfoProps {
  paymentInfo: TPaymentInfo;
  products: TProductWithQuantity[];
}

const PaymentInfo: FC<IPaymentInfoProps> = ({ paymentInfo, products }) => {
  const totalValue = useMemo(() => {
    const value =
      products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0;

    return value;
  }, [products]);

  const { data: { data: { pointEarned = 0 } = {} } = {} } = useCountPoint(
    { total: totalValue },
    { enabled: !!totalValue }
  );

  const total = useMemo(() => {
    if (paymentInfo.totalValueAfterPromotion) return paymentInfo.totalValueAfterPromotion;

    return totalValue;
  }, [paymentInfo.totalValueAfterPromotion, totalValue]);

  return (
    <div className="pb-7">
      <div className="payment-info bg-[rgba(0,0,0,.02)] p-7">
        <div className="overflow-y-auto">
          <h3 className="pt-3 text-base font-bold uppercase sm:text-lg">Đơn hàng của bạn</h3>
          <div className="mt-3">
            <table className="text-sm sm:w-full">
              <thead>
                <tr>
                  <th className="payment-product-name p-2 pl-0">Sản phẩm</th>
                  <th className="payment-product-total p-2 pr-0">Tạm tính</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="payment-product-name product-name py-[15px]">
                      {product.name}
                      <strong className="product-quantity"> ×&nbsp;{product.quantity}</strong>{" "}
                    </td>
                    <td className="payment-product-total ">
                      <span>
                        <bdi>{numberToVND(product.price * product.quantity)}</bdi>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="p-2 pl-0">Tạm tính</th>
                  <td className="p-2 pr-0">
                    <span
                      className={clsx({
                        "before:center-by-position relative opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']":
                          paymentInfo.totalValueAfterPromotion,
                      })}
                    >
                      <bdi>{numberToVND(totalValue)}</bdi>
                    </span>
                  </td>
                </tr>

                {paymentInfo.totalValueAfterPromotion && (
                  <tr>
                    <th className="p-2 pl-0">Giá giảm</th>
                    <td className="p-2 pr-0">
                      <span>
                        <bdi>{numberToVND(paymentInfo.totalValueAfterPromotion)}</bdi>
                      </span>
                    </td>
                  </tr>
                )}

                {paymentInfo.promotionCode && (
                  <tr>
                    <th className="p-2 pl-0">Mã đã sử dụng</th>
                    <td className="p-2 pr-0">
                      <span>
                        <bdi className="font-bold">{paymentInfo.promotionCode}</bdi>
                      </span>
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="py-2" colSpan={2}>
                    <table className="table-no-border w-full">
                      <tbody>
                        <tr>
                          <th>Giao hàng</th>
                          <td data-title="Giao hàng">
                            <span>
                              {(paymentInfo.isFreeShip ||
                                totalValue > numberToCurrency(2, "million")) &&
                                "MIỄN PHÍ"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {pointEarned > 0 && (
                  <tr>
                    <td className="py-2" colSpan={2}>
                      <table className="table-no-border w-full">
                        <tbody>
                          <tr>
                            <th>Điểm thưởng sẽ nhận</th>
                            <td data-title="Giao hàng">
                              <span>{pointEarned}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
                <tr>
                  <th className="py-2">Tổng</th>
                  <td>
                    <strong>
                      <span>
                        <bdi>{numberToVND(total)}</bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div id="payment" className="mt-6">
              <ul>
                <li>
                  <input
                    id="payment_method_cod"
                    type="radio"
                    className="mr-3 text-base"
                    name="payment_method"
                    defaultValue="cod"
                    defaultChecked={true}
                  />
                  <label htmlFor="payment_method_cod" className="text-[#222]">
                    Thanh toán khi nhận hàng (COD){" "}
                  </label>
                  <div className="payment_box payment_method_cod">
                    <p>Khách thanh toán bằng tiền mặt hoặc chuyển khoản khi nhận hàng.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Button
                  className="rounded-md bg-green-300 px-1 py-2 text-sm text-white"
                  id="place_order"
                  value="Đặt hàng"
                  data-value="Đặt hàng"
                  type="submit"
                  form="myform"
                >
                  Đặt hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
