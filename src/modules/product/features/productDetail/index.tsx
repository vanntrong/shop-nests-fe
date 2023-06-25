/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import dayjs from "dayjs";
import { isNil } from "lodash";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import Breadcrumb from "@/components/breadrcumb";
import Button from "@/components/button";
import CountDownBanner from "@/components/countDownBanner";
import QuantityInput from "@/components/quantityInput";
import { PATH } from "@/configs/path.config";
import useUpdateCart, { TUpdateCartFN } from "@/modules/cart/services/useUpdateCart";
import ProductCompanyIntro from "@/modules/product/components/productCompanyIntro";
import ProductDetailDescription from "@/modules/product/components/productDetailDescription";
import ProductDetailSlider from "@/modules/product/components/productDetailSlider";
import { TProduct } from "@/modules/product/types/product.type";
import { useAppContext } from "@/providers/appProvider";
import { useAuthContext } from "@/providers/authProvider";
import { calculateSale, numberToVND } from "@/utils/number";

interface IProductDetailProps {
  product: TProduct;
}

const ProductDetail: FC<IProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { cart } = useAppContext();
  const { user } = useAuthContext();
  const [isAnimationStart, setIsAnimationStart] = useState<boolean>(false);
  const { mutate: updateCart, isLoading, isSuccess } = useUpdateCart();
  const { mutate: buyNow, isLoading: isBuyNowLoading } = useUpdateCart();
  const navigate = useRouter();
  const cartRef = useRef<HTMLDivElement>(null);

  const isSaleAvailable =
    !isNil(product.salePrice) && !isNil(product.saleEndAt) && dayjs().isBefore(product.saleEndAt);

  const breadcrumbData = [
    {
      name: "Trang chủ",
      href: "/",
    },
    {
      name: "Sản phẩm",
      href: PATH.SAN_PHAM,
    },
    {
      name: product.name,
      href: `${PATH.SAN_PHAM}/${product.slug}`,
    },
  ];

  const handleQuantityChange = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  const onAddProductToCart = useCallback(
    (callback: TUpdateCartFN) => {
      const cartAvailable = cart?.products.find(item => item.id === product.id);
      let _quantity: number = quantity;

      if (cartAvailable) {
        _quantity += cartAvailable.quantity;
      }

      callback({
        cartProducts: [
          {
            id: product.id,
            quantity: _quantity,
          },
        ],
      });
    },
    [cart, product, quantity]
  );

  const onBuyNow = useCallback(() => {
    onAddProductToCart(buyNow);
    navigate.push(PATH.GIO_HANG);
  }, [onAddProductToCart, navigate, buyNow]);

  useEffect(() => {
    if (isSuccess) {
      setIsAnimationStart(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!isAnimationStart) return;

    const cart = document.getElementById("cart");
    const cartRect = cart?.getBoundingClientRect();

    if (cartRect && cartRef.current) {
      const translateX = cartRect.x - cartRef.current.getBoundingClientRect().x;
      const translateY = cartRect.y - cartRef.current.getBoundingClientRect().y;

      cartRef.current?.setAttribute(
        "style",
        `transform: translate(${translateX}px, ${translateY}px);`
      );

      setTimeout(() => {
        cartRef.current?.removeAttribute("style");
        setIsAnimationStart(false);
      }, 1000);
    }
  }, [isAnimationStart]);

  return (
    <div className="xl:mx-auto xl:max-w-[1080px]">
      <div className="px-4 pt-4">
        <Breadcrumb data={breadcrumbData} />
      </div>

      <div className="px-4">
        <div className="mt-2 h-[1px] w-full bg-gray-200"></div>
      </div>

      <div className="sm:grid-cols-3 sm:px-3 md:grid">
        <div className="mt-4">
          <ProductDetailSlider images={product.images} alt={product.name} />
        </div>
        <div className="mt-4 px-4">
          {product.saleEndAt && isSaleAvailable && <CountDownBanner end={product.saleEndAt} />}

          <div className="mt-2 flex items-center justify-between sm:justify-start sm:gap-3 md:flex-wrap md:gap-1">
            <h2 className="mt-4 text-2xl font-medium">{product.name}</h2>
            <p
              className={clsx(
                "before:center-by-position relative w-fit text-[28px] font-normal text-black-900",
                {
                  "opacity-60 before:h-[1px] before:w-full before:bg-black-900 before:content-['']":
                    isSaleAvailable,
                }
              )}
            >
              {numberToVND(product.price)}
            </p>
            {isSaleAvailable && (
              <p className="text-[28px] font-bold leading-[16px] text-primary-300">
                {numberToVND(product.salePrice ?? 0)}
              </p>
            )}
          </div>
          {isSaleAvailable && (
            <div className="w-fit rounded-2xl bg-red-500 py-1 pl-2 pr-3 text-sm font-bold text-white md:mt-2">
              <p>Giảm {calculateSale(product.price, product.salePrice ?? 0)}%</p>
            </div>
          )}

          {product.inventory < quantity && <p className="text-sm text-primary-300">Hết hàng</p>}

          <div
            className={clsx("mt-3 flex items-stretch gap-2 md:flex-wrap", {
              "md:flex-nowrap": isLoading,
            })}
          >
            {user ? (
              <>
                <QuantityInput value={quantity} onChange={handleQuantityChange} />
                <Button
                  className="relative flex min-h-[40px] items-center whitespace-nowrap rounded-[7px] bg-green-300 px-2 uppercase text-white hover:opacity-75 disabled:cursor-not-allowed"
                  disabled={product.inventory < quantity}
                  onClick={() => onAddProductToCart(updateCart)}
                  isLoading={isLoading}
                >
                  Thêm vào giỏ
                  {isAnimationStart && (
                    <div
                      className="add-to-cart absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-[10px] font-bold text-white"
                      ref={cartRef}
                    >
                      {1}
                    </div>
                  )}
                </Button>
                <Button
                  className="min-h-[40px] whitespace-nowrap rounded-[7px] bg-red-300 px-2 uppercase text-white hover:opacity-75"
                  onClick={onBuyNow}
                  isLoading={isBuyNowLoading}
                  disabled={product.inventory < quantity}
                >
                  Mua ngay
                </Button>
              </>
            ) : (
              <Link
                className="flex min-h-[40px] items-center whitespace-nowrap rounded-[7px] bg-red-300 px-2 uppercase text-white hover:opacity-75"
                href={PATH.DANG_NHAP}
              >
                Đăng nhập để mua hàng
              </Link>
            )}
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold text-[#222]">Vận Chuyển</h4>
            <div className="ml-auto mt-3 w-fit">
              <div className="flex items-start">
                <img
                  src="/free-1.png"
                  alt=""
                  className="mt-1 h-5 shrink-0 object-cover object-center"
                />
                <div className="flex-1">
                  <p className="w-fit text-sm">Miễn phí vận chuyển toàn quốc</p>
                  <p className="mt-1 w-fit text-[13px] text-[#808080]">
                    Áp dụng cho đơn hàng trên 2.000.000₫
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="/free-2.png"
                  alt=""
                  className="mt-1 h-5 shrink-0 object-cover object-center"
                />
                <div className="flex-1">
                  <p className="text-sm">Miễn phí giao hàng hỏa tốc</p>
                  <p className="mt-1 text-[13px] text-[#808080]">
                    Áp dụng tại TP.HCM cho đơn hàng trên 2.000.000₫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-2">
          <div className="md:hidden">
            <ProductCompanyIntro />
          </div>
          <div className="mt-6 md:mt-0">
            {/* <ProductDetailTable /> */}
            <p className="mt-8">{product.description}</p>
          </div>
        </div>

        <div className="hidden md:col-span-3 md:mx-auto md:mt-6 md:block">
          <ProductCompanyIntro />
        </div>

        <div className="col-span-3 mt-6">
          <ProductDetailDescription content={product.detailDescription} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
